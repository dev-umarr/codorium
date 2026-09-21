import { createClient } from 'npm:@supabase/supabase-js@2'

const jsonHeaders = {
    'Content-Type': 'application/json',
}

function jsonResponse(body: Record<string, unknown>, status: number) {
    return new Response(JSON.stringify(body), {
        status,
        headers: jsonHeaders,
    })
}

const SIGNATURE_TOLERANCE_SECONDS = 180

function parseSignatureHeader(header: string) {
    const values = new Map<string, string[]>()
    for (const part of header.split(',')) {
        const separator = part.indexOf('=')
        if (separator === -1) continue

        const key = part.slice(0, separator).trim()

        const value = part.slice(separator + 1).trim()
        if (!key || !value) continue
        values.set(key, [...(values.get(key) || []), value])
    }

    const timestamp = values.get('t')?.[0]
    const signatures = values.get('v1') || []
    if (!timestamp || signatures.length === 0 || !/^\d+$/.test(timestamp)) return null

    return { timestamp, signatures }
}

function hexToBytes(value: string) {
    if (!/^[0-9a-f]{64}$/i.test(value)) return null

    const bytes = new Uint8Array(32)
    for (let index = 0; index < bytes.length; index += 1) {
        bytes[index] = Number.parseInt(value.slice(index * 2, index * 2 + 2), 16)
    }
    return bytes
}

function hasEqualBytes(left: Uint8Array, right: Uint8Array) {
    if (left.length !== right.length) return false

    let difference = 0
    for (let index = 0; index < left.length; index += 1) {
        difference |= left[index] ^ right[index]
    }
    return difference === 0
}

async function verifyCalendlySignature(rawBody: string, header: string, secret: string) {
    const parsed = parseSignatureHeader(header)
    if (!parsed) return false

    const timestampSeconds = Number(parsed.timestamp)
    const ageSeconds = Math.abs(Math.floor(Date.now() / 1000) - timestampSeconds)
    if (!Number.isSafeInteger(timestampSeconds) || ageSeconds > SIGNATURE_TOLERANCE_SECONDS) return false

    const key = await crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign'],
    )
    const signedPayload = `${parsed.timestamp}.${rawBody}`
    const digest = new Uint8Array(await crypto.subtle.sign(
        'HMAC',
        key,
        new TextEncoder().encode(signedPayload),
    ))

    return parsed.signatures.some((signature) => {
        const providedDigest = hexToBytes(signature)
        return providedDigest ? hasEqualBytes(digest, providedDigest) : false
    })
}

type CalendlyInvitee = {
    uri?: string
    name?: string
    email?: string
    timezone?: string | null
    event?: string
    status?: 'active' | 'canceled'
    created_at?: string
    cancel_url?: string
    reschedule_url?: string
    old_invitee?: string | null
    new_invitee?: string | null
    cancellation?: { reason?: string | null; created_at?: string } | null
}

type CalendlyEvent = {
    uri?: string
    name?: string | null
    status?: 'active' | 'canceled'
    start_time?: string
    end_time?: string
    event_type?: string
}

function getUuidFromUri(uri: string | undefined, resourceName: string) {
    if (!uri) throw new Error(`Calendly ${resourceName} URI is missing`)
    const uuid = uri.split('/').filter(Boolean).pop()
    if (!uuid || uuid.includes('?') || uuid.includes('#')) {
        throw new Error(`Calendly ${resourceName} URI is invalid`)
    }
    return uuid
}

async function calendlyGet(path: string, accessToken: string) {
    const response = await fetch(`https://api.calendly.com${path}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    })

    if (!response.ok) {
        console.error('Calendly API lookup failed', { path, status: response.status })
        throw new Error(`Calendly API lookup failed with status ${response.status}`)
    }

    const data = await response.json()
    return data.resource
}

async function getCalendlyDetails(invitee: CalendlyInvitee, accessToken: string) {
    const inviteeUri = invitee.uri
    const eventUri = invitee.event
    const inviteeUuid = getUuidFromUri(inviteeUri, 'invitee')
    const eventUuid = getUuidFromUri(eventUri, 'event')
    const [apiInvitee, event] = await Promise.all([
        calendlyGet(`/scheduled_events/${eventUuid}/invitees/${inviteeUuid}`, accessToken),
        calendlyGet(`/scheduled_events/${eventUuid}`, accessToken),
    ])
    return { invitee: apiInvitee as CalendlyInvitee, event: event as CalendlyEvent }
}

function getWebhookPayload(payload: Record<string, unknown>) {
    const eventPayload = payload.payload
    if (!eventPayload || typeof eventPayload !== 'object' || Array.isArray(eventPayload)) {
        throw new Error('Webhook payload data is missing')
    }
    return eventPayload as CalendlyInvitee
}

function getSupabaseAdmin() {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    if (!supabaseUrl || !serviceRoleKey) throw new Error('Supabase server credentials are not configured')
    return createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } })
}

async function upsertCreatedBooking(
    supabaseAdmin: ReturnType<typeof getSupabaseAdmin>,
    invitee: CalendlyInvitee,
    event: CalendlyEvent,
    rawPayload: Record<string, unknown>,
) {
    if (!invitee.uri || !invitee.email || !invitee.name || !invitee.event) {
        throw new Error('Created invitee is missing required booking fields')
    }

    if (invitee.old_invitee) {
        const { error: rescheduleError } = await supabaseAdmin.from('calendly_bookings')
            .update({
                status: 'canceled',
                rescheduled_from_invitee_uri: invitee.old_invitee,
                updated_at: new Date().toISOString(),
            })
            .eq('calendly_invitee_uri', invitee.old_invitee)

        if (rescheduleError) throw rescheduleError
    }

    const { error } = await supabaseAdmin.from('calendly_bookings').upsert({
        calendly_invitee_uri: invitee.uri,
        calendly_event_uri: event.uri || invitee.event,
        calendly_event_type_uri: event.event_type,
        name: invitee.name,
        email: invitee.email,
        timezone: invitee.timezone,
        event_name: event.name,
        event_start: event.start_time,
        event_end: event.end_time,
        status: invitee.status === 'canceled' ? 'canceled' : 'active',
        rescheduled_from_invitee_uri: invitee.old_invitee,
        cancel_url: invitee.cancel_url,
        reschedule_url: invitee.reschedule_url,
        calendly_created_at: invitee.created_at,
        raw_webhook_payload: rawPayload,
        updated_at: new Date().toISOString(),
    }, { onConflict: 'calendly_invitee_uri' })

    if (error) throw error
}

async function markCanceledBooking(
    supabaseAdmin: ReturnType<typeof getSupabaseAdmin>,
    invitee: CalendlyInvitee,
    rawPayload: Record<string, unknown>,
) {
    if (!invitee.uri) throw new Error('Canceled invitee URI is missing')

    const { data, error } = await supabaseAdmin.from('calendly_bookings')
        .update({
            status: 'canceled',
            cancellation_reason: invitee.cancellation?.reason,
            calendly_canceled_at: invitee.cancellation?.created_at || new Date().toISOString(),
            raw_webhook_payload: rawPayload,
            updated_at: new Date().toISOString(),
        })
        .eq('calendly_invitee_uri', invitee.uri)
        .select('id')

    if (error) throw error
    return data.length > 0
}

Deno.serve(async (request) => {
    if (request.method !== 'POST') {
        return jsonResponse({ error: 'Method not allowed' }, 405)
    }

    const rawBody = await request.text()
    if (!rawBody) {
        return jsonResponse({ error: 'Request body is required' }, 400)
    }

    const webhookSecret = Deno.env.get('CALENDLY_WEBHOOK_SECRET')
    if (!webhookSecret) {
        console.error('Calendly webhook secret is not configured')
        return jsonResponse({ error: 'Webhook is not configured' }, 503)
    }

    const signatureHeader = request.headers.get('Calendly-Webhook-Signature')
    if (!signatureHeader) {
        return jsonResponse({ error: 'Missing webhook signature' }, 401)
    }

    if (!(await verifyCalendlySignature(rawBody, signatureHeader, webhookSecret))) {
        return jsonResponse({ error: 'Invalid webhook signature' }, 401)
    }

    let payload: unknown
    try {
        payload = JSON.parse(rawBody)
    } catch {
        return jsonResponse({ error: 'Invalid JSON' }, 400)
    }

    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
        return jsonResponse({ error: 'Webhook payload must be a JSON object' }, 400)
    }

    const payloadObject = payload as Record<string, unknown>
    const eventType = payloadObject.event
    if (eventType !== 'invitee.created' && eventType !== 'invitee.canceled') {
        return jsonResponse({ error: 'Unknown webhook event' }, 202)
    }

    const accessToken = Deno.env.get('CALENDLY_ACCESS_TOKEN')
    if (!accessToken) {
        console.error('Calendly access token is not configured')
        return jsonResponse({ error: 'Webhook is not configured' }, 503)
    }

    let invitee: CalendlyInvitee
    try {
        invitee = getWebhookPayload(payloadObject)
    } catch (error) {
        console.error('Calendly webhook payload validation failed', {
            message: error instanceof Error ? error.message : 'Unknown error',
        })
        return jsonResponse({ error: 'Webhook payload is missing invitee data' }, 400)
    }

    try {
        const supabaseAdmin = getSupabaseAdmin()

        if (eventType === 'invitee.canceled') {
            const found = await markCanceledBooking(supabaseAdmin, invitee, payloadObject)
            if (!found) console.warn('Cancellation received for unknown invitee')
            return jsonResponse({ received: true, event: eventType, matched: found }, 202)
        }

        const details = await getCalendlyDetails(invitee, accessToken)
        await upsertCreatedBooking(supabaseAdmin, details.invitee, details.event, payloadObject)
        return jsonResponse({ received: true, event: eventType }, 202)
    } catch (error) {
        console.error('Calendly webhook processing failed', {
            event: eventType,
            message: error instanceof Error ? error.message : 'Unknown error',
        })
        return jsonResponse({ error: 'Webhook processing failed' }, 500)
    }
})