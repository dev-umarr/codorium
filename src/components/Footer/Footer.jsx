import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoWhiteUrl from '../../assets/svgs/codorium-logo-full-white.svg'
import umarCeoUrl from '../../assets/images/umar-ceo.jpeg'

/* ─── data ─────────────────────────────────────────────── */

const BUDGET_OPTIONS = ['Up to $10k', '$10k – $30k', '$30k – $80k', '> $80k', 'Uncertain']
const SOURCE_OPTIONS = ['Google', 'LinkedIn', 'Referral', 'Clutch', 'Other']

const TEAM_PREFS = [
  { id: 'inhouse', label: 'In-House', desc: 'Embedded in your team' },
  { id: 'offshore', label: 'Offshore', desc: 'Cost-efficient execution' },
  { id: 'hybrid', label: 'Hybrid', desc: 'Balanced cost & control' },
]

const SCOPES = [
  { id: 'mvp', label: 'MVP', desc: 'Validate fast, reduce scope, focus on core functionality' },
  { id: 'fullscale', label: 'Full-Scale', desc: 'Designed for scalability, integrations, and long-term growth' },
]

const FOOTER_LINKS = {
  Services: [
    { label: 'AI & RAG Applications', href: '#services' },
    { label: 'SaaS Development', href: '#services' },
    { label: 'MVP Development', href: '#services' },
    { label: 'Web & Mobile Apps', href: '#services' },
    { label: 'Automation Systems', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Tech Stack', href: '#' },
  ],
  Contact: [
    { label: 'hello@codorium.com', href: 'mailto:hello@codorium.com' },
    { label: 'Book a Call', href: '#cta' },
  ],
}

const SOCIAL_LINKS = [
  {
    label: 'Twitter / X',
    href: 'https://x.com/codorium',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/codorium',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/codorium',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
]

/* ─── PillSelect ────────────────────────────────────────── */

function PillSelect({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt === value ? '' : opt)}
          className={`rounded-full border px-4 py-1.5 font-brand-secondary text-sm transition-all duration-150 ${
            value === opt
              ? 'border-brand-secondary bg-brand-secondary/15 text-brand-secondary'
              : 'border-white/12 bg-white/4 text-white/50 hover:border-white/25 hover:text-white/70'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

/* ─── RadioCard ─────────────────────────────────────────── */

function RadioCard({ id, label, desc, checked, onChange, wide = false }) {
  return (
    <button
      type="button"
      onClick={() => onChange(id)}
      className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-150 ${
        wide ? 'w-full' : 'flex-1'
      } ${
        checked
          ? 'border-brand-secondary/50 bg-brand-secondary/8'
          : 'border-white/8 bg-white/3 hover:border-white/18 hover:bg-white/5'
      }`}
    >
      {/* Radio dot */}
      <span
        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
          checked ? 'border-brand-secondary' : 'border-white/25'
        }`}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-brand-secondary" />}
      </span>
      <span className="flex flex-col gap-0.5">
        <span className={`font-brand-secondary text-sm font-600 ${checked ? 'text-white' : 'text-white/60'}`}>
          {label}
        </span>
        {desc && (
          <span className="font-brand-secondary text-xs leading-snug text-white/30">{desc}</span>
        )}
      </span>
    </button>
  )
}

/* ─── ContactForm ───────────────────────────────────────── */

function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', message: '',
    teamPref: '', scope: '', budget: '', source: '',
  })
  const [sent, setSent] = useState(false)

  function set(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }
  function pick(field) {
    return (val) => setForm((prev) => ({ ...prev, [field]: prev[field] === val ? '' : val }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  const inputCls =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-brand-secondary text-sm text-white placeholder-white/25 outline-none transition-all focus:border-brand-secondary/60 focus:bg-white/8 focus:ring-2 focus:ring-brand-secondary/10'

  if (sent) {
    return (
      <div className="flex h-full min-h-[340px] flex-col items-center justify-center gap-4 rounded-2xl border border-brand-secondary/20 bg-white/4 p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-secondary/15">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-brand-primary text-xl font-600 text-white">Message received!</p>
        <p className="font-brand-secondary text-sm text-white/45">
          We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Email row */}
      <div className="grid gap-3 sm:grid-cols-2">
        <input className={inputCls} placeholder="Your name" value={form.name} onChange={set('name')} required />
        <input className={inputCls} type="email" placeholder="Email address" value={form.email} onChange={set('email')} required />
      </div>

      {/* Message */}
      <textarea
        className={`${inputCls} min-h-[100px] resize-none`}
        placeholder="How can we help you?"
        value={form.message}
        onChange={set('message')}
        required
      />

      {/* Team preference */}
      <div>
        <p className="mb-2.5 font-brand-secondary text-xs font-600 text-white/40">Team preference</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-2.5">
          {TEAM_PREFS.map((t) => (
            <RadioCard
              key={t.id}
              id={t.id}
              label={t.label}
              desc={t.desc}
              checked={form.teamPref === t.id}
              onChange={pick('teamPref')}
            />
          ))}
        </div>
      </div>

      {/* Project scope */}
      <div>
        <p className="mb-2.5 font-brand-secondary text-xs font-600 text-white/40">Project scope</p>
        <div className="flex flex-col gap-2 sm:flex-row">
          {SCOPES.map((s) => (
            <RadioCard
              key={s.id}
              id={s.id}
              label={s.label}
              desc={s.desc}
              checked={form.scope === s.id}
              onChange={pick('scope')}
              wide
            />
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <p className="mb-2 font-brand-secondary text-xs text-white/35">
          What is your budget? <span className="text-white/20">(optional)</span>
        </p>
        <PillSelect options={BUDGET_OPTIONS} value={form.budget} onChange={pick('budget')} />
      </div>

      {/* Source */}
      <div>
        <p className="mb-2 font-brand-secondary text-xs text-white/35">
          How did you hear about us? <span className="text-white/20">(optional)</span>
        </p>
        <PillSelect options={SOURCE_OPTIONS} value={form.source} onChange={pick('source')} />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-secondary px-7 py-3 font-brand-secondary text-sm font-600 text-white transition-colors hover:bg-brand-secondary-hover sm:w-fit sm:justify-start"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Send Message
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </form>
  )
}

/* ─── Footer ────────────────────────────────────────────── */

function Footer() {
  function handleNavClick(e, href) {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer id="contact"
      style={{
        background: 'linear-gradient(160deg, #060e1f 0%, #091a3a 40%, #072e28 75%, #060e1f 100%)',
      }}
    >
      {/* ── Top: contact form card ── */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/8 px-5 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
          style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)' }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          {/* corner glow */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-[320px] w-[320px] opacity-12"
            style={{ background: 'radial-gradient(circle, #14b8a6, transparent 65%)' }}
          />

          <div className="relative grid items-stretch gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            {/* ── Left ── */}
            <div className="flex flex-col">
              {/* Top group */}
              <div className="flex flex-col gap-6">
                <h2 className="font-brand-primary text-2xl font-700 leading-tight text-white sm:text-3xl lg:text-4xl">
                  Ready to bring your<br />
                  <span className="text-brand-secondary">idea into reality?</span>
                </h2>

                <ol className="flex flex-col gap-4">
                  {[
                    "We'll sign an NDA if required, carefully analyze your request and prepare a preliminary estimate.",
                    "We'll meet virtually to discuss your needs, answer questions, and align on next steps.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-secondary/30 font-brand-secondary text-xs text-brand-secondary">
                        {i + 1}
                      </span>
                      <p className="font-brand-secondary text-sm leading-relaxed text-white/45">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Spacer — pushes bottom group to align with form bottom */}
              <div className="flex-1" />

              {/* Bottom group */}
              <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2 border-t border-white/8 pt-6">
                <p className="font-brand-secondary text-xs uppercase tracking-widest text-white/25">Direct contact</p>
                <a
                  href="mailto:hello@codorium.com"
                  className="inline-flex items-center gap-1.5 font-brand-secondary text-sm text-white/55 no-underline transition-colors hover:text-brand-secondary"
                >
                  <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 6.5l7.5 5 7.5-5M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  hello@codorium.com
                </a>
                <a
                  href="#cta"
                  onClick={(e) => handleNavClick(e, '#cta')}
                  className="inline-flex items-center gap-1.5 font-brand-secondary text-sm text-white/55 no-underline transition-colors hover:text-brand-secondary"
                >
                  <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 3v5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  Book a free discovery call
                </a>
              </div>

              {/* Testimonial */}
              <div className="rounded-xl border border-white/8 bg-white/3 p-5">
                {/* Quote mark */}
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="mb-3 opacity-30" aria-hidden="true">
                  <path d="M0 18V10.8C0 4.68 3.36.6 10.08 0l1.44 2.16C7.92 3.12 6 5.4 5.76 8.4H10.08V18H0ZM13.92 18V10.8C13.92 4.68 17.28.6 24 0l1.44 2.16C21.84 3.12 19.92 5.4 19.68 8.4H24V18H13.92Z" fill="white"/>
                </svg>
                <p className="font-brand-secondary text-sm leading-relaxed text-white/55 italic">
                  "Codorium shipped our AI-powered dashboard in 5 weeks. Clean code, sharp design, zero back-and-forth. Best engineering partner we've worked with."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-secondary/15 font-brand-primary text-xs font-700 text-brand-secondary">
                    JR
                  </div>
                  <div>
                    <p className="font-brand-secondary text-xs font-600 text-white/70">Jordan R.</p>
                    <p className="font-brand-secondary text-xs text-white/30">CEO & Founder, Ordersbay</p>
                  </div>
                  {/* 5-star */}
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="#14b8a6" aria-hidden="true">
                        <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.09L6 8.02 3.22 9.55l.53-3.09L1.5 4.27l3.11-.45L6 1z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* CEO direct line */}
              <div className="border-t border-white/8 pt-5">
                <p className="mb-3 font-brand-secondary text-xs text-white/30">
                  Prefer a direct line to our CEO?
                </p>
                <div className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/3 px-4 py-3">
                  {/* Avatar initials */}
                  <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full">
                    <img src={umarCeoUrl} alt="Umar CEO" className="h-full w-full object-cover object-top" />
                  </div>
                  <div className="flex-1">
                    <p className="font-brand-secondary text-sm font-600 text-white">Engr. Umar Farooqi</p>
                    <p className="font-brand-secondary text-xs text-white/35">Founder &amp; CEO</p>
                  </div>
                  {/* Action buttons */}
                  <div className="flex gap-2">
                    {[
                      {
                        label: 'LinkedIn',
                        href: 'https://linkedin.com/in/itsumarfarooqi',
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        ),
                      },
                      {
                        label: 'Email',
                        href: 'mailto:umar@codorium.com',
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                            <path d="M2.5 6.5l7.5 5 7.5-5M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        ),
                      },
                      {
                        label: 'WhatsApp',
                        href: 'https://wa.me/1234567890',
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        ),
                      },
                    ].map((btn) => (
                      <a
                        key={btn.label}
                        href={btn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={btn.label}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/40 no-underline transition-all hover:border-brand-secondary/40 hover:text-brand-secondary"
                      >
                        {btn.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              </div>{/* end bottom group */}
            </div>{/* end left column */}

            {/* ── Right: form ── */}
            <ContactForm />
          </div>
        </motion.div>
      </div>

      {/* ── Bottom: links + copyright ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-10 sm:grid-cols-2 sm:gap-10 sm:py-16 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:py-20">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link
              to="/"
              className="flex items-center no-underline"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src={logoWhiteUrl} alt="Codorium" className="h-7 w-auto" />
            </Link>

            <p className="max-w-xs font-brand-secondary text-xs leading-relaxed text-white/35">
              Building scalable software, AI-powered solutions, and automation systems for startups and growing businesses.
            </p>

            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 text-white/35 no-underline transition-all hover:border-brand-secondary/35 hover:text-brand-secondary"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h4 className="font-brand-secondary text-xs font-600 uppercase tracking-widest text-white/25">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="font-brand-secondary text-sm text-white/45 no-underline transition-colors hover:text-white/80"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/8 py-6 sm:flex-row">
          <p className="font-brand-secondary text-xs text-white/25">
            © {new Date().getFullYear()} Codorium. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="font-brand-secondary text-xs text-white/25 no-underline hover:text-white/50">
              Privacy Policy
            </a>
            <a href="#" className="font-brand-secondary text-xs text-white/25 no-underline hover:text-white/50">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
