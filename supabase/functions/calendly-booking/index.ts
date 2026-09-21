const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
}

type BookingRequest = {
    action?: 'availability' | 'book'
    date?: string
    time?: string
    timezone?: string
    name?: string
    email?: string
    notes?: string
    service?: string
}

function jsonResponse(body: Record<string, unknown>, status = 200) {
    return new Response(JSON.stringify(body), { status, headers: corsHeaders })
}

function getConfig() {
    const accessToken = (Deno.env.get('CALENDLY_PAT') || Deno.env.get('CALENDLY_API_KEY') || Deno.env.get('CALENDLY_ACCESS_TOKEN'))?.trim()
    const eventTypeValue = (Deno.env.get('CALENDLY_EVENT_TYPE_UUID') || Deno.env.get('CALENDLY_EVENT_TYPE_URI'))
        ?.trim()
        .replace(/^['"]|['"]$/g, '')
    if (!accessToken || !eventTypeValue) {
        throw new Error('Calendly booking is not configured. Set CALENDLY_PAT and CALENDLY_EVENT_TYPE_UUID.')
    }
    const eventTypeUri = eventTypeValue.startsWith('https://')
        ? eventTypeValue
        : `https://api.calendly.com/event_types/${eventTypeValue}`
    return { accessToken, eventTypeUri }
}

function isValidDate(value: unknown): value is string {
    return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00.000Z`))
}

function isValidTime(value: unknown): value is string {
    return typeof value === 'string' && !Number.isNaN(Date.parse(value))
}

function sleep(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

function getRetryDelayMs(retryAfter: string | null, attempt: number) {
    const retryAfterSeconds = Number(retryAfter)
    if (Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0) {
        return retryAfterSeconds * 1000
    }

    const retryAfterDate = retryAfter ? Date.parse(retryAfter) : Number.NaN
    if (!Number.isNaN(retryAfterDate)) {
        return Math.max(1000, retryAfterDate - Date.now())
    }

    return 1000 * (attempt + 1)
}

async function calendlyRequest(path: string, accessToken: string, init: RequestInit = {}) {
    const maxRetries = 2

    for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
        let response: Response
        try {
            response = await fetch(`https://api.calendly.com${path}`, {
                ...init,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    ...(init.headers || {}),
                },
            })
        } catch (error) {
            console.error('Calendly API network failure', {
                path,
                message: error instanceof Error ? error.message : error,
            })
            throw new Error('Unable to reach Calendly. Please try again shortly.')
        }

        const body = await response.json().catch(() => ({}))
        if (response.status === 429) {
            if (attempt < maxRetries) {
                const delayMs = getRetryDelayMs(response.headers.get('Retry-After'), attempt)
                console.warn('Calendly API rate limited; retrying request', { path, attempt: attempt + 1, delayMs })
                await sleep(delayMs)
                continue
            }

            console.error('Calendly API rate limit persisted after retries', { path, response: body })
            throw new Error('Too many booking attempts. Please wait a minute and try again.')
        }

        if (!response.ok) {
            console.error('Calendly API request failed', {
                path,
                status: response.status,
                response: body,
            })
            const detail = body?.message || body?.title || body?.detail
            throw new Error(detail ? `Calendly rejected the request: ${detail}` : `Calendly rejected the request (${response.status}).`)
        }
        return body
    }

    throw new Error('Too many booking attempts. Please wait a minute and try again.')
}

async function getAvailability(request: BookingRequest, accessToken: string, eventTypeUri: string) {
    if (!isValidDate(request.date)) throw new Error('A valid booking date is required')
    const timezone = request.timezone || 'UTC'
    const start = new Date(`${request.date}T00:00:00.000Z`)
    const end = new Date(`${request.date}T23:59:59.999Z`)
    const params = new URLSearchParams({
        event_type: eventTypeUri,
        start_time: start.toISOString(),
        end_time: end.toISOString(),
        timezone,
    })
    const path = `/event_type_available_times?${params}`
    console.info('Requesting Calendly availability', {
        event_type: eventTypeUri,
        start_time: start.toISOString(),
        end_time: end.toISOString(),
        timezone,
    })
    const data = await calendlyRequest(path, accessToken)
    const times = (data.collection || []).map((slot: { start_time?: string }) => {
        if (!slot.start_time) return null
        return {
            time: slot.start_time,
            label: new Intl.DateTimeFormat('en', { hour: '2-digit', minute: '2-digit', timeZone: timezone }).format(new Date(slot.start_time)),
        }
    }).filter(Boolean)
    return jsonResponse({ success: true, times })
}

async function createBooking(request: BookingRequest, accessToken: string, eventTypeUri: string) {
    if (!isValidDate(request.date) || !isValidTime(request.time)) throw new Error('A valid date and time are required')
    if (typeof request.name !== 'string' || request.name.trim().length < 2) throw new Error('Your name is required')
    if (typeof request.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.email)) throw new Error('A valid email is required')
    const timezone = request.timezone || 'UTC'
    const startTime = new Date(request.time).toISOString()
    const meetingDetails = [
        request.service && `Service: ${request.service}`,
        request.notes,
    ].filter(Boolean).join('\n')
    const calendlyPayload = {
        event_type: eventTypeUri,
        start_time: startTime,
        location: {
            kind: 'google_conference',
        },
        invitee: {
            name: request.name.trim(),
            email: request.email.trim().toLowerCase(),
            timezone,
            questions_and_answers: [
                {
                    position: 1,
                    question: 'Please share anything that will help prepare for our meeting.',
                    answer: meetingDetails,
                },
            ],
        },
    }
    console.info('Creating Calendly booking', {
        ...calendlyPayload,
        invitee: { ...calendlyPayload.invitee, email: request.email.trim().toLowerCase() },
    })
    const data = await calendlyRequest('/invitees', accessToken, {
        method: 'POST',
        body: JSON.stringify(calendlyPayload),
    })
    return jsonResponse({
        success: true,
        bookingId: data.resource?.uri || data.resource?.event?.uri,
        message: 'Meeting booked successfully.',
    })
}

Deno.serve(async (request) => {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders })
    if (request.method !== 'POST') return jsonResponse({ success: false, message: 'Method not allowed' }, 405)

    try {
        const body = await request.json() as BookingRequest
        const { accessToken, eventTypeUri } = getConfig()
        if (body.action === 'availability') return await getAvailability(body, accessToken, eventTypeUri)
        if (body.action === 'book') return await createBooking(body, accessToken, eventTypeUri)
        return jsonResponse({ success: false, message: 'Unknown booking action' }, 400)
    } catch (error) {
        console.error('Calendly booking failed', {
            message: error instanceof Error ? error.message : 'Unknown error',
            error,
        })
        return jsonResponse({
            success: false,
            message: error instanceof Error ? error.message : 'Unable to create the meeting',
        })
    }
})
