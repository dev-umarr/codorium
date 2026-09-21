import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import AboutCTA from '../components/AboutCTA/AboutCTA'
import { NeuralCanvas } from '../components/Hero/Hero'
import Seo from '../components/SEO/Seo'
import { getCaseStudy } from '../data/caseStudies'

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function DetailSection({ eyebrow, title, description, children, dark = false }) {
  return (
    <section className={dark ? 'bg-[#071426] py-24 text-white lg:py-32' : 'bg-brand-surface py-24 lg:py-32'}>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
        <Reveal>
          <p className="font-brand-secondary text-xs font-700 uppercase tracking-[0.18em] text-brand-secondary">{eyebrow}</p>
          <h2 className={`mt-4 max-w-md font-brand-primary text-3xl font-700 leading-[1.08] sm:text-5xl ${dark ? 'text-white' : 'text-brand-primary'}`}>{title}</h2>
          {description && <p className={`mt-6 max-w-md font-brand-secondary text-sm leading-relaxed sm:text-base ${dark ? 'text-white/60' : 'text-brand-primary/55'}`}>{description}</p>}
        </Reveal>
        <Reveal delay={0.08} className={`font-brand-secondary text-base leading-relaxed sm:text-lg ${dark ? 'text-white/65' : 'text-brand-primary/65'}`}>
          {children}
        </Reveal>
      </div>
    </section>
  )
}

const TECHNOLOGY_DETAILS = {
  React: { icon: 'react', type: 'Frontend', description: 'Component-driven interface' },
  JavaScript: { icon: 'javascript', type: 'Language', description: 'Flexible product logic' },
  'Tailwind CSS': { icon: 'tailwind', type: 'Styling', description: 'Consistent visual system' },
  'Analytics instrumentation': { icon: 'analytics', type: 'Insights', description: 'Measurable user journeys' },
}

function TechnologyIcon({ type }) {
  const iconPaths = {
    react: <><ellipse cx="12" cy="12" rx="9" ry="3.7" /><ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(120 12 12)" /><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" /></>,
    javascript: <><path d="M4 4h16v16H4z" fill="currentColor" stroke="none" /><path d="M9.4 16.2c.4.7 1 1.1 1.8 1.1 1 0 1.6-.5 1.6-1.3 0-.7-.4-1-1.4-1.4l-.5-.2c-1.5-.6-2.4-1.4-2.4-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.4.9c-.3-.6-.7-.8-1.3-.8-.6 0-1 .4-1 .8 0 .6.4.8 1.3 1.2l.5.2c1.7.7 2.6 1.5 2.6 3.1 0 1.8-1.4 2.8-3.4 2.8-1.9 0-3-.9-3.6-2l1.7-.5Zm7.2-5.1h1.8v4.8c0 1 .3 1.4 1 1.4.6 0 .9-.3 1-1.2l1.6.2c-.2 1.8-1 2.8-2.7 2.8-1.8 0-2.7-1-2.7-2.9v-5.1Z" fill="white" stroke="none" /></>,
    tailwind: <><path d="M4.5 12c1.5-3 3.5-4.5 6-4.5 3.7 0 4 3 6.5 3 1.1 0 1.9-.5 2.5-1.5-.5 3-2.5 4.5-6 4.5-3.7 0-4-3-6.5-3-1.1 0-1.9.5-2.5 1.5Z" fill="currentColor" stroke="none" /><path d="M4.5 17c1.5-3 3.5-4.5 6-4.5 3.7 0 4 3 6.5 3 1.1 0 1.9-.5 2.5-1.5-.5 3-2.5 4.5-6 4.5-3.7 0-4-3-6.5-3-1.1 0-1.9.5-2.5 1.5Z" fill="currentColor" opacity=".55" stroke="none" /></>,
    analytics: <><path d="M5 19V11M12 19V5M19 19v-8" /><path d="m4 8 5-3 4 2 6-4" /></>,
  }

  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">{iconPaths[type] || iconPaths.analytics}</svg>
}

function ChallengeSection({ challenge }) {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    let characterIndex = 0
    const interval = window.setInterval(() => {
      characterIndex += 1
      setTypedText(challenge.slice(0, characterIndex))
      if (characterIndex >= challenge.length) window.clearInterval(interval)
    }, 24)

    return () => window.clearInterval(interval)
  }, [challenge])

  return (
    <section className="relative isolate overflow-hidden bg-[#060e1f] py-16 text-white lg:py-20">
      <NeuralCanvas />
      <div className="pointer-events-none absolute left-0 top-0 z-20 w-full -translate-y-px rotate-180 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[72px] w-full" preserveAspectRatio="none">
          <path d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z" fill="#ffffff" />
        </svg>
      </div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] opacity-18"
        style={{ background: 'radial-gradient(circle at 70% 30%, #14b8a6 0%, transparent 60%)' }}
        animate={{ x: [0, 35, 0], y: [0, -18, 0], opacity: [0.65, 0.9, 0.65] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 h-[400px] w-[400px] opacity-20"
        style={{ background: 'radial-gradient(circle, #0a2463 0%, transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: 'radial-gradient(circle at 12% 24%, rgba(20, 184, 166, 0.18) 0 1px, transparent 1.5px), radial-gradient(circle at 78% 18%, rgba(255, 255, 255, 0.32) 0 1px, transparent 1.5px), radial-gradient(circle at 64% 76%, rgba(20, 184, 166, 0.2) 0 1px, transparent 1.5px)', backgroundSize: '220px 220px, 310px 310px, 270px 270px' }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: 'linear-gradient(160deg, transparent 0%, rgba(9, 26, 58, 0.8) 48%, rgba(7, 46, 40, 0.65) 100%)' }} aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8 lg:py-10">
        <Reveal className="self-center py-4 sm:py-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-emerald-400" />
            <p className="font-brand-secondary text-xs font-700 uppercase tracking-[0.18em] text-emerald-400">Challenge</p>
          </div>
          <h2 className="mt-5 max-w-md font-brand-primary text-4xl font-700 leading-[1.04] text-white sm:text-6xl">
            What <span className="text-emerald-400 drop-shadow-[0_0_18px_rgba(16,185,129,0.35)]">needed</span> to change.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/70 p-7 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:border-emerald-400/50 hover:shadow-[0_28px_100px_rgba(16,185,129,0.14)] sm:p-10">
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
          <div className="relative flex items-center justify-between border-b border-white/10 pb-5 font-brand-secondary text-[10px] uppercase tracking-[0.18em] text-white/35">
            <span className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.9)]" />Live challenge brief</span>
            <span className="rounded-full border border-emerald-400/25 px-2.5 py-1 text-emerald-300/70">01 / 01</span>
          </div>
          <div className="relative mt-8 flex gap-5">
            <span className="mt-1 h-16 w-1 shrink-0 rounded-full bg-gradient-to-b from-emerald-400 via-teal-400 to-transparent shadow-[0_0_18px_rgba(16,185,129,0.45)]" aria-hidden="true" />
            <p className="min-h-[7rem] font-brand-secondary text-base font-semibold leading-relaxed text-white/75 sm:text-lg">
              {typedText}
              <motion.span
                aria-hidden="true"
                className="ml-1 inline-block h-5 w-px bg-emerald-400 align-[-2px] shadow-[0_0_10px_rgba(16,185,129,0.9)]"
                animate={{ opacity: [1, 0.25, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>
          </div>
        </Reveal>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full translate-y-px overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[72px] w-full" preserveAspectRatio="none">
          <path d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

function ApproachSolutionSection({ solution }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#060e1f] py-24 text-white lg:py-32">
      <NeuralCanvas />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[560px] w-[560px] opacity-25"
        style={{ background: 'radial-gradient(circle at 70% 30%, #14b8a6 0%, transparent 68%)' }}
        animate={{ x: [0, 30, 0], y: [0, -16, 0], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-[420px] w-[420px] opacity-20"
        style={{ background: 'radial-gradient(circle, #0a2463 0%, transparent 70%)' }}
        animate={{ x: [0, -24, 0], y: [0, 18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: 'linear-gradient(160deg, transparent 0%, rgba(9, 26, 58, 0.8) 48%, rgba(7, 46, 40, 0.65) 100%)' }} aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-8">
        <Reveal>
          <p className="font-brand-secondary text-xs font-700 uppercase tracking-[0.18em] text-brand-secondary">Our Approach / Solution</p>
          <h2 className="mt-5 max-w-xl font-brand-primary text-4xl font-700 leading-[1.02] text-white sm:text-6xl">Strategy translated into <span className="text-brand-secondary drop-shadow-[0_0_18px_rgba(20,184,166,0.35)]">shipped work.</span></h2>
          <motion.span
            aria-hidden="true"
            className="mt-8 block h-px w-24 origin-left bg-brand-secondary shadow-[0_0_14px_rgba(20,184,166,0.8)]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </Reveal>

        <Reveal delay={0.1} className="group relative overflow-hidden rounded-[2rem] border border-brand-secondary/25 bg-slate-950/70 p-7 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-brand-secondary/55 hover:shadow-[0_28px_100px_rgba(20,184,166,0.14)] sm:p-10">
          <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-brand-secondary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
          <div className="relative flex items-center justify-between border-b border-white/10 pb-5 font-brand-secondary text-[10px] uppercase tracking-[0.18em] text-white/40">
            <span className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-brand-secondary shadow-[0_0_14px_rgba(20,184,166,0.9)]" />Solution architecture</span>
            <span className="rounded-full border border-brand-secondary/25 px-2.5 py-1 text-brand-secondary/80">01 / 01</span>
          </div>
          <div className="relative mt-8 flex gap-5">
            <motion.span
              aria-hidden="true"
              className="mt-1 h-20 w-1 shrink-0 rounded-full bg-gradient-to-b from-brand-secondary via-teal-400 to-transparent shadow-[0_0_18px_rgba(20,184,166,0.45)]"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <p className="font-brand-secondary text-base font-semibold leading-relaxed text-white/75 sm:text-lg">{solution}</p>
          </div>
          <div className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-5 font-brand-secondary text-[10px] uppercase tracking-[0.16em] text-white/35">
            <span className="h-px w-8 bg-brand-secondary/70" />Built for clarity, scale, and momentum
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ProcessSection({ process }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#060e1f] py-24 text-white lg:py-32">
      <NeuralCanvas />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] opacity-18"
        style={{ background: 'radial-gradient(circle at 70% 30%, #14b8a6 0%, transparent 60%)' }}
        animate={{ x: [0, 35, 0], y: [0, -18, 0], opacity: [0.65, 0.9, 0.65] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 h-[400px] w-[400px] opacity-20"
        style={{ background: 'radial-gradient(circle, #0a2463 0%, transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: 'radial-gradient(circle at 12% 24%, rgba(20, 184, 166, 0.18) 0 1px, transparent 1.5px), radial-gradient(circle at 78% 18%, rgba(255, 255, 255, 0.32) 0 1px, transparent 1.5px), radial-gradient(circle at 64% 76%, rgba(20, 184, 166, 0.2) 0 1px, transparent 1.5px)', backgroundSize: '220px 220px, 310px 310px, 270px 270px' }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: 'linear-gradient(160deg, transparent 0%, rgba(9, 26, 58, 0.8) 48%, rgba(7, 46, 40, 0.65) 100%)' }} aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 top-0 z-20 w-full -translate-y-px rotate-180 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[72px] w-full" preserveAspectRatio="none">
          <path d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
        <Reveal className="self-center">
          <span className="inline-flex rounded-full border border-brand-secondary/30 bg-brand-secondary/5 px-4 py-2 font-brand-secondary text-[10px] font-700 uppercase tracking-[0.24em] text-brand-secondary">Our Process</span>
          <h2 className="mt-6 max-w-xl font-brand-primary text-4xl font-700 leading-[1.02] tracking-tight text-white sm:text-6xl">A focused path from <span className="text-brand-secondary drop-shadow-[0_0_18px_rgba(20,184,166,0.35)]">first conversation</span> to launch.</h2>
          <p className="mt-6 max-w-md font-brand-secondary text-base leading-relaxed text-white/65 sm:text-lg">A deliberate sequence of decisions, designed to turn complexity into forward motion.</p>
          <motion.span
            aria-hidden="true"
            className="mt-8 block h-px w-24 origin-left bg-brand-secondary shadow-[0_0_14px_rgba(20,184,166,0.8)]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </Reveal>

        <div className="relative">
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {process.map((step, index) => (
              <Reveal key={step} delay={index * 0.1} className="relative pt-5 lg:pt-8">
                <motion.span
                  aria-hidden="true"
                  className="absolute left-5 top-0 z-10 h-3 w-3 rounded-full border-2 border-white bg-brand-secondary shadow-[0_0_0_5px_rgba(20,184,166,0.1),0_0_20px_rgba(20,184,166,0.65)] lg:left-1/2 lg:-translate-x-1/2"
                  initial={{ scale: 0.6, opacity: 0.35 }}
                  whileInView={{ scale: [0.6, 1.3, 1], opacity: [0.35, 1, 1] }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.35 + index * 0.48, ease: 'easeOut' }}
                />
                <motion.article
                  className="group relative flex min-h-[205px] flex-col overflow-hidden rounded-[1.5rem] border border-white/15 bg-slate-950/70 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-brand-secondary/55 hover:shadow-[0_24px_60px_rgba(20,184,166,0.16)] sm:p-6"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: 0.45 + index * 0.48, ease: 'easeOut' }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-secondary to-teal-300 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                  <span className="font-brand-primary text-4xl font-700 leading-none text-transparent bg-gradient-to-br from-emerald-300 to-slate-400 bg-clip-text">{String(index + 1).padStart(2, '0')}</span>
                  <p className="mt-auto pt-8 font-brand-secondary text-sm font-600 leading-relaxed text-white/70 transition-colors group-hover:text-white">{step}</p>
                  {index === 3 && (
                    <svg className="pointer-events-none absolute -right-2 -top-3 h-32 w-36 opacity-45 transition-opacity duration-500 group-hover:opacity-80" viewBox="0 0 190 150" fill="none" aria-hidden="true">
                      <path d="M20 100L46 42L94 29L146 54L170 103L119 128L61 124L20 100ZM46 42L61 124M94 29L119 128M146 54L61 124M20 100L119 128M46 42L146 54" stroke="#14b8a6" strokeOpacity="0.55" strokeWidth="1" />
                      {[[20, 100], [46, 42], [94, 29], [146, 54], [170, 103], [119, 128], [61, 124]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill="#14b8a6" fillOpacity="0.7" />)}
                    </svg>
                  )}
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full translate-y-px overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[72px] w-full" preserveAspectRatio="none">
          <path d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

function WorkDeliveredSection({ deliveredWork }) {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <Reveal>
          <p className="font-brand-secondary text-xs font-700 uppercase tracking-[0.22em] text-emerald-500">Work Delivered</p>
          <h2 className="mt-4 max-w-2xl font-brand-primary text-4xl font-700 leading-[1.04] tracking-tight text-slate-900 sm:text-6xl">The pieces that made it real.</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deliveredWork.map((feature, index) => (
            <Reveal key={feature} delay={index * 0.08} className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/90 bg-white p-7 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-400/60 hover:shadow-[0_24px_50px_-15px_rgba(20,184,166,0.2)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <span className="relative font-brand-primary text-5xl font-700 leading-none text-transparent [background:linear-gradient(135deg,#14b8a6,#64748b)] [background-clip:text]">{String(index + 1).padStart(2, '0')}</span>
              <p className="relative mt-auto max-w-[15rem] pr-8 font-brand-secondary text-base font-600 leading-relaxed text-slate-700 transition-colors duration-300 group-hover:text-slate-950">{feature}</p>
              <span className="absolute bottom-6 right-6 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-slate-200 text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:border-emerald-400/50 group-hover:text-emerald-500 group-hover:opacity-100" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyDetail() {
  const { slug } = useParams()
  const study = getCaseStudy(slug)
  if (!study) return <Navigate to="/case-studies" replace />
  const deliveredWork = study.bullets || study.features
  const titleWords = study.title.split(' ')
  const highlightedTitleStart = Math.max(titleWords.length - 2, 0)

  return (
    <>
      <Seo title={`${study.title} | Case Study`} description={study.shortDescription} path={study.path} />
      <section className="relative isolate min-h-screen overflow-hidden bg-[#060e1f] pb-32 pt-32 text-white sm:pb-40 lg:pt-40 lg:pb-48">
        <NeuralCanvas />

        <div className="pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] opacity-18" style={{ background: 'radial-gradient(circle at 70% 30%, #14b8a6 0%, transparent 60%)' }} />
        <div className="pointer-events-none absolute bottom-0 -left-20 h-[400px] w-[400px] opacity-20" style={{ background: 'radial-gradient(circle, #0a2463 0%, transparent 70%)' }} />
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage: 'radial-gradient(circle at 12% 24%, rgba(20, 184, 166, 0.18) 0 1px, transparent 1.5px), radial-gradient(circle at 78% 18%, rgba(255, 255, 255, 0.32) 0 1px, transparent 1.5px), radial-gradient(circle at 64% 76%, rgba(20, 184, 166, 0.2) 0 1px, transparent 1.5px), radial-gradient(circle at 35% 88%, rgba(255, 255, 255, 0.2) 0 1px, transparent 1.5px)',
            backgroundSize: '220px 220px, 310px 310px, 270px 270px, 380px 380px',
          }}
        />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-25 blur-3xl" style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 68%)' }} />
        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: 'linear-gradient(160deg, transparent 0%, rgba(9, 26, 58, 0.8) 48%, rgba(7, 46, 40, 0.65) 100%)' }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link to="/case-studies" className="group inline-flex items-center gap-3 font-brand-secondary text-sm text-white/55 transition-colors hover:text-brand-secondary"><span className="transition-transform group-hover:-translate-x-1">←</span>Back to Case Studies</Link>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-12">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="flex flex-col gap-7">
              <h1 className="max-w-2xl font-brand-primary text-[1.75rem] font-normal leading-[1.08] text-white sm:text-[2.4rem] lg:text-6xl xl:text-[4.25rem]">{titleWords.map((word, index) => <span key={`${word}-${index}`} className={index >= highlightedTitleStart ? 'text-brand-secondary' : ''}>{index > 0 ? ' ' : ''}{word}</span>)}</h1>
              <p className="max-w-[480px] font-brand-secondary text-base leading-relaxed text-white/50 sm:text-lg">{study.shortDescription}</p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-5 font-brand-secondary text-xs uppercase tracking-[0.16em] text-white/40"><span className="h-2 w-2 rounded-full bg-brand-secondary shadow-[0_0_12px_rgba(20,184,166,0.8)]" />Case Study / {study.category}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl opacity-30" style={{ background: 'radial-gradient(ellipse at 60% 50%, #14b8a6 0%, transparent 70%)' }} />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1d32] shadow-[0_25px_90px_rgba(0,0,0,0.38),0_0_45px_rgba(20,184,166,0.12)]">
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5"><span className="h-3 w-3 rounded-full bg-red-500/70" /><span className="h-3 w-3 rounded-full bg-yellow-400/70" /><span className="h-3 w-3 rounded-full bg-green-400/70" /><span className="ml-3 font-brand-secondary text-xs text-white/30">{study.slug}.project</span></div>
                <img src={study.image} alt={study.imageAlt} className="aspect-[16/10] h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 mb-[-1px] w-full overflow-hidden leading-none" style={{ lineHeight: 0 }} aria-hidden="true">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[72px] w-full" preserveAspectRatio="none">
            <path d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      <section className="bg-brand-surface px-6 pb-20 pt-0 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative z-10 -translate-y-1/2">
            <Reveal className="overflow-hidden rounded-2xl border border-brand-border bg-brand-bg shadow-xl shadow-brand-primary/10">
              <div className={`grid sm:grid-cols-2 ${study.metrics.length === 3 ? 'lg:grid-cols-3' : study.metrics.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
                {study.metrics.map((metric, index) => (
                  <motion.div key={metric.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }} className={`flex min-h-[180px] flex-col justify-center px-6 py-8 sm:px-8 sm:py-9 ${index > 0 ? 'border-t border-brand-border sm:border-l sm:border-t-0' : ''}`}>
                    <p className="font-brand-primary text-4xl font-700 leading-none text-brand-secondary sm:text-5xl">{metric.value}</p>
                    <p className="mt-3 max-w-[12rem] font-brand-secondary text-xs leading-relaxed text-brand-primary/55">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
          {study.quote && <Reveal className="mx-auto mt-16 max-w-4xl text-center"><span className="font-brand-primary text-5xl leading-none text-brand-secondary/40">“</span><blockquote className="font-brand-primary text-2xl font-700 leading-tight text-brand-primary sm:text-4xl">{study.quote.text}</blockquote><p className="mt-5 font-brand-secondary text-xs uppercase tracking-[0.14em] text-brand-primary/45">{study.quote.author} / {study.quote.role}</p></Reveal>}
        </div>
      </section>
      <ChallengeSection challenge={study.challenge} />
      <DetailSection eyebrow="Goals / Objectives" title="The outcomes we designed toward."><ul className="grid gap-4 sm:grid-cols-2">{study.goals.map((goal, index) => <li key={goal} className="group flex gap-4 border-t border-brand-border pt-4"><span className="font-brand-primary text-xl text-brand-secondary/60">0{index + 1}</span><span className="transition-colors group-hover:text-brand-secondary">{goal}</span></li>)}</ul></DetailSection>
      <ApproachSolutionSection solution={study.solution} />

      <WorkDeliveredSection deliveredWork={deliveredWork} />
      <DetailSection eyebrow="Technology" title="A stack chosen for clarity and scale." description="A focused toolkit for building a polished product, learning from real users, and scaling with confidence.">
        <div className="grid gap-4 sm:grid-cols-2" aria-label="Technologies used in this project">
          {study.techStack.map((technology, index) => {
            const details = TECHNOLOGY_DETAILS[technology] || { icon: 'analytics', type: 'Technology', description: 'Purpose-built for this product' }

            return (
              <motion.article
                key={technology}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group relative overflow-hidden rounded-2xl border border-brand-border bg-white p-5 shadow-[0_12px_30px_rgba(10,36,99,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary/45 hover:shadow-[0_18px_36px_rgba(20,184,166,0.12)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-secondary to-teal-300 transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-secondary/25 bg-brand-secondary/10 text-brand-secondary"><TechnologyIcon type={details.icon} /></span>
                  <span className="font-brand-secondary text-[10px] font-700 uppercase tracking-[0.16em] text-brand-primary/35">{details.type}</span>
                </div>
                <h3 className="mt-7 font-brand-primary text-lg font-700 text-brand-primary">{technology}</h3>
                <p className="mt-1 font-brand-secondary text-sm text-brand-primary/50">{details.description}</p>
              </motion.article>
            )
          })}
        </div>
      </DetailSection>
      <ProcessSection process={study.process} />
      <section className="bg-white px-6 py-24 sm:px-8 lg:py-32"><div className="mx-auto max-w-7xl lg:px-8"><Reveal><p className="font-brand-secondary text-xs font-700 uppercase tracking-[0.18em] text-brand-secondary">Project Visuals</p><h2 className="mt-4 font-brand-primary text-3xl font-700 text-brand-primary sm:text-5xl">Inside the experience.</h2></Reveal><div className="mt-10 grid gap-6 md:grid-cols-2">{['Interface direction and product story', 'Responsive product experience'].map((caption, index) => <Reveal key={caption} delay={index * 0.08} className="group overflow-hidden rounded-2xl border border-brand-border bg-white shadow-lg shadow-brand-primary/5"><div className="overflow-hidden"><img src={study.image} alt={`${study.title} project detail`} className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div><figcaption className="flex items-center justify-between px-5 py-4 font-brand-secondary text-sm text-brand-primary/55"><span>{caption}</span><span className="text-brand-secondary">0{index + 1}</span></figcaption></Reveal>)}</div></div></section>
      <DetailSection eyebrow="Results / Outcomes" title="Progress the team can build on."><ul className="grid gap-4 sm:grid-cols-3">{study.outcomes.map((outcome, index) => <li key={outcome} className="rounded-2xl border border-brand-border bg-brand-bg p-6 text-sm transition-transform hover:-translate-y-1"><span className="font-brand-primary text-2xl text-brand-secondary">0{index + 1}</span><p className="mt-8">{outcome}</p></li>)}</ul></DetailSection>
      <AboutCTA title={<>Ready to build something <span className="text-brand-secondary">meaningful</span>?</>} description="Let's map out the next product your team can be proud to ship." contactLabel="Start a Project" contactHref="/contact" primaryFirst flushTop />
    </>
  )
}

export default CaseStudyDetail