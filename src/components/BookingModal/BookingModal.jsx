import { useEffect, useRef, useState } from 'react'
import { supabase } from '../../lib/supabase'

const SERVICES = [
  'AI & RAG Applications',
  'SaaS Product Engineering',
  'Web & Mobile Apps',
  'Automation Systems',
  'API Engineering',
  'Dedicated Engineering Services',
]

const TIME_ZONE = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
const INPUT_CLASS = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-brand-secondary text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-brand-secondary/60 focus:bg-white/8'

function formatDate(date) {
  return date.toISOString().slice(0, 10)
}

function normalizeDate(value) {
  const match = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})$/)
  return match ? `${match[1]}-${match[2]}-${match[3]}` : ''
}

function getInitialDate() {
  const date = new Date()
  date.setDate(date.getDate() + 1)
  return formatDate(date)
}

function getCalendarDays(value) {
  const calendarDate = new Date(`${value}T00:00:00`)
  const year = calendarDate.getFullYear()
  const month = calendarDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  return [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => {
      const day = String(index + 1).padStart(2, '0')
      return `${year}-${String(month + 1).padStart(2, '0')}-${day}`
    }),
  ]
}

function getCalendarLabel(value) {
  return new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(`${value}T00:00:00`))
}

function getWeekdayLabels() {
  return Array.from({ length: 7 }, (_, index) => new Intl.DateTimeFormat('en', { weekday: 'short' }).format(new Date(2021, 7, index + 1)))
}

function shiftCalendarMonth(value, offset) {
  const calendarDate = new Date(`${value}T00:00:00`)
  calendarDate.setMonth(calendarDate.getMonth() + offset, 1)
  return `${calendarDate.getFullYear()}-${String(calendarDate.getMonth() + 1).padStart(2, '0')}-01`
}

function BookingModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [service, setService] = useState(SERVICES[0])
  const [date, setDate] = useState(getInitialDate)
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [times, setTimes] = useState([])
  const [availabilityLoading, setAvailabilityLoading] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [error, setError] = useState('')
  const [showCalendlyFallback, setShowCalendlyFallback] = useState(false)
  const [success, setSuccess] = useState(null)
  const availabilityCacheRef = useRef(new Map())

  useEffect(() => {
    function open() {
      setIsOpen(true)
      setError('')
      setShowCalendlyFallback(false)
    }

    window.addEventListener('codorium:open-booking-modal', open)
    return () => window.removeEventListener('codorium:open-booking-modal', open)
  }, [])

  useEffect(() => {
    if (!isOpen || !date) return

    let cancelled = false
    const requestDate = normalizeDate(date)
    const cacheKey = `${requestDate}:${TIME_ZONE}`
    const cachedTimes = availabilityCacheRef.current.get(cacheKey)

    if (cachedTimes) {
      setTimes(cachedTimes)
      setAvailabilityLoading(false)
      return undefined
    }

    setAvailabilityLoading(true)
    const timeoutId = setTimeout(async () => {
      const requestPayload = { action: 'availability', date: requestDate, timezone: TIME_ZONE }
      console.info('Requesting Calendly availability', requestPayload)
      const { data, error: invokeError } = await supabase.functions.invoke('calendly-booking', { body: requestPayload })
      if (cancelled) return
      setAvailabilityLoading(false)
      if (invokeError || !data?.success) {
        console.error('Calendly availability request failed', { error: invokeError, response: data, date: requestDate, timezone: TIME_ZONE })
        setTimes([])
        setError(data?.message || invokeError?.message || 'Unable to load available times. Please try another date.')
        return
      }
      const nextTimes = data.times || []
      availabilityCacheRef.current.set(cacheKey, nextTimes)
      setTimes(nextTimes)
    }, 300)

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [date, isOpen])

  function openCalendlyFallback() {
    const calendlyUrl = new URL('https://calendly.com/shamasulislam1999/30-minute-meeting')
    calendlyUrl.searchParams.set('name', name.trim())
    calendlyUrl.searchParams.set('email', email.trim())
    calendlyUrl.searchParams.set('a1', notes.trim())
    window.location.assign(calendlyUrl.toString())
  }

  function close() {
    if (submitLoading) return
    setIsOpen(false)
    setSuccess(null)
    setError('')
    setShowCalendlyFallback(false)
  }

  function changeCalendarMonth(offset) {
    setDate(shiftCalendarMonth(date, offset))
    setTime('')
    setError('')
    setShowCalendlyFallback(false)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (submitLoading || !time) return

    setSubmitLoading(true)
    setError('')
    setShowCalendlyFallback(false)
    const requestPayload = {
      action: 'book',
      date: normalizeDate(date),
      time,
      timezone: TIME_ZONE,
      name: name.trim(),
      email: email.trim(),
      notes: notes.trim(),
      service,
    }
    console.info('Requesting Calendly booking', requestPayload)
    const { data, error: invokeError } = await supabase.functions.invoke('calendly-booking', { body: requestPayload })
    setSubmitLoading(false)

    if (invokeError || !data?.success) {
      console.error('Calendly booking request failed', { error: invokeError, response: data, date, time, timezone: TIME_ZONE })
      const message = data?.message || invokeError?.message || 'Unable to create the meeting. Please try again.'
      setError(message)
      setShowCalendlyFallback(message.includes('Too many') || message.includes('429'))
      return
    }
    setSuccess(data)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020817]/85 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-labelledby="booking-title">
      <div className="max-h-[calc(100vh-1.5rem)] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-[#050d1b] text-white shadow-2xl sm:max-h-[calc(100vh-3rem)]">
        <div className="flex items-start justify-between border-b border-white/10 px-6 py-5 sm:px-8">
          <div>
            <p className="font-brand-secondary text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">Let&apos;s talk</p>
            <h2 id="booking-title" className="mt-2 font-brand-primary text-2xl text-white sm:text-3xl">Plan your next build</h2>
          </div>
          <button type="button" onClick={close} aria-label="Close booking dialog" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xl text-white/50 transition-colors hover:border-white/40 hover:text-white">&times;</button>
        </div>

        {success ? (
          <div className="flex min-h-[360px] flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-secondary/15 text-brand-secondary">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="m6 14 5 5L22 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 className="mt-6 font-brand-primary text-3xl text-white">Meeting confirmed</h3>
            <p className="mt-3 max-w-md font-brand-secondary text-sm leading-relaxed text-white/55">{success.message || 'Your meeting has been booked successfully.'}</p>
            <button type="button" onClick={close} className="mt-8 rounded-xl bg-brand-secondary px-6 py-3 font-brand-secondary text-sm font-semibold text-[#06241f] transition-colors hover:bg-brand-secondary-hover">Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <label className="mb-3 block font-brand-secondary text-sm font-semibold text-white">What can we help you build?</label>
                <div className="flex flex-col gap-2">
                  {SERVICES.map((option) => (
                    <button key={option} type="button" onClick={() => setService(option)} className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left font-brand-secondary text-sm transition-colors ${service === option ? 'border-brand-secondary bg-brand-secondary/10 text-white' : 'border-white/10 text-white/55 hover:border-white/25'}`}>
                      {option}
                      {service === option && <span className="text-brand-secondary">✓</span>}
                    </button>
                  ))}
                </div>
                <div className="mt-6 grid gap-4">
                  <label className="font-brand-secondary text-xs font-semibold text-white/60">Your name<input className={`${INPUT_CLASS} mt-2`} value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" required /></label>
                  <label className="font-brand-secondary text-xs font-semibold text-white/60">Work email<input className={`${INPUT_CLASS} mt-2`} type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" required /></label>
                  <label className="font-brand-secondary text-xs font-semibold text-white/60">Meeting details<span className="ml-1 font-normal text-white/30">(optional)</span><textarea className={`${INPUT_CLASS} mt-2 min-h-20 resize-y`} value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Tell us a little about your project" /></label>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="font-brand-secondary text-sm font-semibold text-white">Choose a date</h3><p className="mt-1 font-brand-secondary text-xs text-white/40">30 minutes, in your local time</p></div><span className="font-brand-secondary text-xs text-white/40">{TIME_ZONE}</span></div>
                <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex items-center justify-between">
                    <button type="button" onClick={() => changeCalendarMonth(-1)} disabled={shiftCalendarMonth(date, -1) < getInitialDate().slice(0, 7) + '-01'} aria-label="Previous month" className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/55 transition-colors hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-25">←</button>
                    <h3 className="font-brand-secondary text-sm font-semibold text-white">{getCalendarLabel(date)}</h3>
                    <button type="button" onClick={() => changeCalendarMonth(1)} aria-label="Next month" className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/55 transition-colors hover:border-white/25 hover:text-white">→</button>
                  </div>
                  <div className="mt-4 grid grid-cols-7 gap-1 text-center font-brand-secondary text-[10px] font-semibold uppercase tracking-wide text-white/35">
                    {getWeekdayLabels().map((day) => <span key={day}>{day}</span>)}
                  </div>
                  <div className="mt-2 grid grid-cols-7 gap-1">
                    {getCalendarDays(date).map((calendarDay, index) => calendarDay ? <button key={calendarDay} type="button" onClick={() => { setDate(calendarDay); setTime(''); setError(''); setShowCalendlyFallback(false) }} disabled={calendarDay < getInitialDate()} aria-label={`Choose ${calendarDay}`} className={`aspect-square rounded-lg font-brand-secondary text-xs transition-colors ${date === calendarDay ? 'bg-brand-secondary text-[#06241f]' : 'text-white/65 hover:bg-white/10 hover:text-white'} disabled:cursor-not-allowed disabled:text-white/15`}>{Number(calendarDay.slice(-2))}</button> : <span key={`empty-${index}`} aria-hidden="true" />)}
                  </div>
                </div>
                <div className="mt-7 border-t border-white/10 pt-6"><h3 className="font-brand-secondary text-sm font-semibold text-white">Available times</h3>{availabilityLoading ? <p className="mt-4 font-brand-secondary text-sm text-white/45">Checking availability...</p> : times.length > 0 ? <div className="mt-4 grid max-h-64 grid-cols-2 gap-2 overflow-y-auto pr-1">{times.map((slot) => <button key={slot.time} type="button" onClick={() => setTime(slot.time)} className={`rounded-xl border px-3 py-3 font-brand-secondary text-sm transition-colors ${time === slot.time ? 'border-brand-secondary bg-brand-secondary/10 text-white' : 'border-white/10 text-white/60 hover:border-white/25'}`}>{slot.label}</button>)}</div> : <p className="mt-4 font-brand-secondary text-sm text-white/45">No times are available for this date.</p>}</div>
                {error && (
                  <div className="mt-5 rounded-lg border border-red-400/20 bg-red-400/10 px-3 py-3" role="alert">
                    <p className="font-brand-secondary text-sm text-red-200">{error}</p>
                    {showCalendlyFallback && (
                      <button type="button" onClick={openCalendlyFallback} className="mt-3 font-brand-secondary text-sm font-semibold text-brand-secondary underline underline-offset-4">
                        Continue on Calendly
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end border-t border-white/10 px-6 py-5 sm:px-8"><button type="submit" disabled={submitLoading || !time || availabilityLoading} className="rounded-xl bg-brand-secondary px-6 py-3 font-brand-secondary text-sm font-semibold text-[#06241f] transition-colors hover:bg-brand-secondary-hover disabled:cursor-not-allowed disabled:opacity-50">{submitLoading ? 'Confirming...' : 'Confirm meeting →'}</button></div>
          </form>
        )}
      </div>
    </div>
  )
}

export default BookingModal
