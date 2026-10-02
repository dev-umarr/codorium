import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import fundraiseUpHeroImage from '../assets/Case-studies/FundraiseUp/Fundraising_Hero.png'
import AboutCTA from '../components/AboutCTA/AboutCTA'
import { NeuralCanvas } from '../components/Hero/Hero'
import Seo from '../components/SEO/Seo'
import { getCaseStudy } from '../data/caseStudies'

function Reveal({ children, className = '', delay = 0, x = 0, y = 22, scale = 1, duration = 0.55, amount = 0.2 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function DetailSection({ eyebrow, title, description, children, dark = false, spaceBefore = false }) {
  return (
    <motion.section
      className={dark ? `relative overflow-hidden bg-[#071426] pb-16 text-white sm:pb-20 lg:pb-24 ${spaceBefore ? 'pt-14 sm:pt-16 lg:pt-20' : 'pt-0 lg:pt-0'}` : `relative overflow-hidden bg-white pb-16 sm:pb-20 lg:pb-24 ${spaceBefore ? 'pt-14 sm:pt-16 lg:pt-20' : 'pt-0 lg:pt-0'}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-brand-secondary/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
        <Reveal x={-24} y={0} duration={0.6} className="self-start lg:sticky lg:top-28">
          <div className="border-l-2 border-brand-secondary pl-5">
            <p className="font-brand-secondary text-xs font-700 uppercase tracking-[0.18em] text-brand-secondary">{eyebrow}</p>
            <h2 className={`mt-4 max-w-md font-brand-primary text-3xl font-700 leading-[1.08] sm:text-5xl ${dark ? 'text-white' : 'text-brand-primary'}`}>{title}</h2>
            {description && <p className={`mt-6 max-w-md font-brand-secondary text-sm leading-relaxed sm:text-base ${dark ? 'text-white/60' : 'text-brand-primary/55'}`}>{description}</p>}
          </div>
        </Reveal>
        <Reveal x={24} y={0} duration={0.6} delay={0.08} className={`rounded-[1.75rem] border p-6 font-brand-secondary text-base leading-relaxed shadow-[0_20px_50px_rgba(10,36,99,0.06)] sm:p-9 sm:text-lg ${dark ? 'border-white/10 bg-white/5 text-white/65' : 'border-brand-border bg-white text-brand-primary/65'}`}>
          {children}
        </Reveal>
      </div>
    </motion.section>
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
    <motion.section
      className="relative overflow-hidden bg-white pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-brand-secondary/10 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 px-6 sm:gap-8 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
        <Reveal x={-24} y={0} duration={0.6} className="self-center py-2 sm:py-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-brand-secondary" />
            <p className="font-brand-secondary text-xs font-700 uppercase tracking-[0.18em] text-brand-secondary">Challenge</p>
          </div>
          <h2 className="mt-5 max-w-md font-brand-primary text-4xl font-700 leading-[1.04] text-brand-primary sm:text-6xl">
            What <span className="text-brand-secondary">needed</span> to change.
          </h2>
        </Reveal>

        <Reveal x={24} y={0} duration={0.6} delay={0.08} className="group relative overflow-hidden rounded-[2rem] border border-brand-border bg-white p-7 shadow-[0_20px_50px_rgba(10,36,99,0.06)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:border-brand-secondary/45 hover:shadow-[0_16px_30px_rgba(20,184,166,0.1)] sm:p-10">
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-secondary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
          <div className="relative flex items-center justify-between border-b border-brand-border pb-5 font-brand-secondary text-[10px] uppercase tracking-[0.18em] text-brand-primary/40">
            <span className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-brand-secondary" />Live challenge brief</span>
            <span className="rounded-full border border-brand-secondary/25 px-2.5 py-1 text-brand-secondary/70">01 / 01</span>
          </div>
          <div className="relative mt-8 flex gap-5">
            <span className="mt-1 h-16 w-1 shrink-0 rounded-full bg-gradient-to-b from-brand-secondary via-teal-400 to-transparent" aria-hidden="true" />
            <p className="min-h-[7rem] font-brand-secondary text-base font-semibold leading-relaxed text-brand-primary/70 sm:text-lg">
              {typedText}
              <motion.span
                aria-hidden="true"
                className="ml-1 inline-block h-5 w-px bg-brand-secondary align-[-2px]"
                animate={{ opacity: [1, 0.25, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>
          </div>
        </Reveal>
      </div>
    </motion.section>
  )
}

function ApproachSolutionSection({ solution }) {
  return (
    <motion.section
      className="relative isolate overflow-hidden bg-[#060e1f] py-20 text-white sm:py-24 lg:py-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
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
        <Reveal x={-24} y={0} duration={0.6}>
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

        <Reveal x={24} y={0} duration={0.6} delay={0.08} className="group relative overflow-hidden rounded-[2rem] border border-brand-secondary/25 bg-slate-950/70 p-7 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-brand-secondary/55 hover:shadow-[0_28px_100px_rgba(20,184,166,0.14)] sm:p-10">
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
    </motion.section>
  )
}

const PROCESS_DETAILS = {
  'Discovery and alignment': 'Requirement mapping, stakeholder alignment, and success criteria.',
  'Experience mapping and visual direction': 'User flows, interface framing, and product-story direction.',
  'Iterative implementation': 'Rapid build cycles, validation, and incremental refinement.',
  'QA, launch, and handoff': 'Launch checks, rollout support, and clean handoff.',
}

function ProcessSection({ process }) {
  return (
    <motion.section
      className="relative isolate overflow-hidden bg-[#060e1f] py-20 text-white sm:py-24 lg:py-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
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
        <Reveal x={-24} y={0} duration={0.6} className="self-center">
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
            {process.map((step, index) => {
              const stepTitle = typeof step === 'string' ? step : step.title
              const stepDetail = typeof step === 'string' ? PROCESS_DETAILS[step] || 'A focused execution step designed to keep momentum moving.' : step.description
              const titleClass = stepTitle.length > 24 ? 'text-[1.3rem] sm:text-[1.45rem]' : 'text-[1.55rem]'

              return (
                <Reveal key={stepTitle} delay={index * 0.1} className="relative pt-5 lg:pt-8">
                  <motion.span
                    aria-hidden="true"
                    className="absolute left-5 top-0 z-10 h-3 w-3 rounded-full border-2 border-white bg-brand-secondary shadow-[0_0_0_5px_rgba(20,184,166,0.1),0_0_20px_rgba(20,184,166,0.65)] lg:left-1/2 lg:-translate-x-1/2"
                    initial={{ scale: 0.6, opacity: 0.35 }}
                    whileInView={{ scale: [0.6, 1.3, 1], opacity: [0.35, 1, 1] }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, delay: 0.35 + index * 0.48, ease: 'easeOut' }}
                  />
                  <motion.article
                    className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-[1.5rem] border border-white/15 bg-slate-950/70 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-brand-secondary/55 hover:shadow-[0_24px_60px_rgba(20,184,166,0.16)] sm:p-6"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.45 + index * 0.48, ease: 'easeOut' }}
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-secondary to-teal-300 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                    <span className="font-brand-secondary text-[10px] font-700 uppercase tracking-[0.2em] text-brand-secondary/70">Milestone</span>
                    <span className="mt-3 font-brand-primary text-4xl font-700 leading-none text-transparent bg-gradient-to-br from-emerald-300 to-slate-400 bg-clip-text">{String(index + 1).padStart(2, '0')}</span>
                    <p className={`mt-4 max-w-[12ch] font-brand-primary font-700 leading-tight text-white ${titleClass}`}>{stepTitle}</p>
                    {stepDetail && <p className="mt-2 font-brand-secondary text-sm font-500 leading-relaxed text-white/65">{stepDetail}</p>}
                    {index === 3 && (
                      <svg className="pointer-events-none absolute -right-2 -top-3 h-32 w-36 opacity-45 transition-opacity duration-500 group-hover:opacity-80" viewBox="0 0 190 150" fill="none" aria-hidden="true">
                        <path d="M20 100L46 42L94 29L146 54L170 103L119 128L61 124L20 100ZM46 42L61 124M94 29L119 128M146 54L61 124M20 100L119 128M46 42L146 54" stroke="#14b8a6" strokeOpacity="0.55" strokeWidth="1" />
                        {[[20, 100], [46, 42], [94, 29], [146, 54], [170, 103], [119, 128], [61, 124]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill="#14b8a6" fillOpacity="0.7" />)}
                      </svg>
                    )}
                  </motion.article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full translate-y-px overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[72px] w-full" preserveAspectRatio="none">
          <path d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z" fill="#ffffff" />
        </svg>
      </div>
    </motion.section>
  )
}

function CaseStudyHero({ title, subtitle }) {
  const navigate = useNavigate()

  return (
    <motion.section
      className="relative isolate overflow-visible bg-[#0B0F17] pb-66 pt-28 text-white sm:pb-74 sm:pt-24 lg:pb-81 lg:pt-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <NeuralCanvas />

      <motion.button
        type="button"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        onClick={() => window.history.length > 1 ? window.history.back() : navigate('/case-studies')}
        className="group absolute left-4 top-20 z-30 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-2 font-brand-secondary text-sm font-semibold text-white/75 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-secondary/60 hover:bg-brand-secondary/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F17] sm:left-8 sm:top-24"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-secondary/35 bg-brand-secondary/10 text-brand-secondary transition-all duration-300 group-hover:border-brand-secondary group-hover:bg-brand-secondary group-hover:text-[#06241f]" aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4"><path d="M15 10H5M5 10L9 6M5 10L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <span>Back to Case Studies</span>
      </motion.button>

      <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden="true">
        <div className="absolute left-1/2 top-8 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-[#14b8a6]/10 blur-3xl" />
        <div className="absolute right-16 top-24 h-40 w-40 rounded-full bg-[#38bdf8]/10 blur-3xl" />
        <div className="absolute left-16 bottom-16 h-44 w-44 rounded-full bg-[#1d4ed8]/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: 'radial-gradient(circle at 12% 24%, rgba(20, 184, 166, 0.18) 0 1px, transparent 1.5px), radial-gradient(circle at 78% 18%, rgba(255, 255, 255, 0.32) 0 1px, transparent 1.5px), radial-gradient(circle at 64% 76%, rgba(20, 184, 166, 0.2) 0 1px, transparent 1.5px)', backgroundSize: '220px 220px, 310px 310px, 270px 270px' }} aria-hidden="true" />

      <div
        className="relative z-10 mx-auto max-w-5xl px-6 pb-8 pt-14 text-center sm:pb-10 sm:pt-14 lg:px-8 lg:pb-12 lg:pt-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto max-w-4xl font-brand-primary text-[2.4rem] font-700 leading-[0.96] tracking-[-0.04em] sm:text-[3.4rem] lg:text-[5.3rem]">
          {(() => {
            const parts = title.split(' - ')

            if (parts.length > 1) {
              const firstLine = `${parts[0]} ${parts[1].split(' ')[0]}`
              const secondLine = parts[1].split(' ').slice(1).join(' ')

              return (
                <>
                  <span className="block text-white">{firstLine}</span>
                  <span className="block text-[#14b8a6]">{secondLine}</span>
                </>
              )
            }

            return <span className="block text-[#14b8a6]">{title}</span>
          })()}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mx-auto mt-8 mb-2 max-w-2xl font-brand-secondary text-base leading-relaxed text-white/65 sm:mb-4 sm:mt-10 sm:text-lg lg:mt-12 lg:text-xl">
          {subtitle}
        </motion.p>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 mb-[-1px] w-full overflow-hidden leading-none" style={{ lineHeight: 0 }} aria-hidden="true">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[72px] w-full" preserveAspectRatio="none">
          <path d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z" fill="#ffffff" />
        </svg>
      </div>
    </motion.section>
  )
}

function CaseStudyDetail() {
  const { slug } = useParams()
  const study = getCaseStudy(slug)
  if (!study) return <Navigate to="/case-studies" replace />

  const isFundraiseUp = slug === 'fundraise-up'
  const heroImage = isFundraiseUp ? fundraiseUpHeroImage : study.image
  const projectVisuals = [study.image, study.image]

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Seo title={`${study.title} | Case Study`} description={study.shortDescription} path={study.path} />
      <CaseStudyHero
        title={study.title}
        subtitle={study.shortDescription}
      />

      <motion.section
        className="relative z-10 -mt-1 overflow-visible bg-white pb-4 pt-0 sm:pb-6 lg:pb-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="relative z-40 mx-auto w-full max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className={`relative left-1/2 z-50 mx-auto -mb-60 w-full max-w-[980px] -translate-x-1/2 -translate-y-60 overflow-visible rounded-[2rem] border border-[#14b8a6]/80 ${isFundraiseUp ? 'bg-transparent' : 'bg-[#071d2a]/80'} p-3 shadow-[0_0_0_1px_rgba(20,184,166,0.35),0_35px_90px_rgba(0,0,0,0.45),0_0_30px_rgba(20,184,166,0.14)] backdrop-blur-sm sm:-mb-68 sm:-translate-y-68 sm:p-5 lg:-mb-75 lg:-translate-y-75`}>
            <div className={`relative z-40 overflow-hidden rounded-[1.5rem] bg-[#0f1728] ${isFundraiseUp ? 'aspect-[1447/933]' : ''}`}>
              {/* Fundraise Up: crop the artwork to an equal 50px margin around its framed screen (source 1534×1025) */}
              <img src={heroImage} alt={study.imageAlt} className={isFundraiseUp ? 'absolute left-[-2.8334%] top-[-3.2154%] z-40 block h-auto w-[106.0124%] max-w-none' : 'relative z-40 block h-[340px] w-full object-cover sm:h-[430px] lg:h-[520px]'} />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <ChallengeSection challenge={study.challenge} />
      <ApproachSolutionSection solution={study.solution} />

      <DetailSection spaceBefore eyebrow="Technology" title="A stack chosen for clarity and scale." description="A focused toolkit for building a polished product, learning from real users, and scaling with confidence.">
        <div className="grid gap-4 sm:grid-cols-2" aria-label="Technologies used in this project">
          {study.techStack.map((technology, index) => {
            const details = TECHNOLOGY_DETAILS[technology] || { icon: 'analytics', type: 'Technology', description: 'Purpose-built for this product' }

            return (
              <motion.article
                key={technology}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-brand-border bg-white p-6 shadow-[0_16px_36px_rgba(10,36,99,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary/45 hover:shadow-[0_20px_42px_rgba(20,184,166,0.12)] sm:p-7"
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
      <DetailSection spaceBefore eyebrow="Goals / Objectives" title="The outcomes we designed toward."><ul className="grid gap-4 sm:grid-cols-2">{study.goals.map((goal, index) => <motion.li key={goal} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: 'easeOut' }} className="group rounded-2xl border border-brand-border bg-white p-5 shadow-[0_10px_24px_rgba(10,36,99,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary/45 hover:shadow-[0_16px_30px_rgba(20,184,166,0.1)]"><div className="flex items-center justify-between gap-4"><span className="font-brand-secondary text-[10px] font-700 uppercase tracking-[0.18em] text-brand-secondary/70">Objective</span><span className="font-brand-primary text-xl text-brand-secondary/60">0{index + 1}</span></div><span className="mt-6 block font-brand-secondary text-base leading-relaxed text-brand-primary/70 transition-colors group-hover:text-brand-primary">{goal}</span></motion.li>)}</ul></DetailSection>
      <motion.section
        className="bg-white px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      ><div className="mx-auto max-w-7xl lg:px-8"><Reveal y={16} duration={0.5} amount={0.35}><p className="font-brand-secondary text-xs font-700 uppercase tracking-[0.18em] text-brand-secondary">Project Visuals</p><h2 className="mt-4 font-brand-primary text-3xl font-700 text-brand-primary sm:text-5xl">Inside the experience.</h2></Reveal><div className="mt-10 grid gap-6 md:grid-cols-2">{['Interface direction and product story', 'Responsive product experience'].map((caption, index) => <Reveal key={caption} y={0} scale={0.97} duration={0.6} delay={(index % 2) * 0.1} className="group overflow-hidden rounded-2xl border border-brand-border bg-white shadow-lg shadow-brand-primary/5"><div className="overflow-hidden"><img src={projectVisuals[index]} alt={`${study.title} project detail`} className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div><figcaption className="flex items-center justify-between px-5 py-4 font-brand-secondary text-sm text-brand-primary/55"><span>{caption}</span><span className="text-brand-secondary">0{index + 1}</span></figcaption></Reveal>)}</div></div></motion.section>
      <DetailSection eyebrow="Results / Outcomes" title="Progress the team can build on."><ul className="grid gap-4 sm:grid-cols-3">{study.outcomes.map((outcome, index) => <motion.li key={outcome} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }} className="group relative overflow-hidden rounded-[1.5rem] border border-brand-border bg-brand-bg p-6 text-sm shadow-[0_12px_30px_rgba(10,36,99,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary/45 hover:bg-white sm:p-7"><span className="font-brand-primary text-3xl font-700 text-brand-secondary/70 transition-colors group-hover:text-brand-secondary">0{index + 1}</span><p className="mt-10 font-brand-secondary leading-relaxed text-brand-primary/70">{outcome}</p></motion.li>)}</ul></DetailSection>
      <AboutCTA title={<>Ready to build something <span className="text-brand-secondary">meaningful</span>?</>} description="Let's map out the next product your team can be proud to ship." contactLabel="Start a Project" contactHref="/contact" primaryFirst flushTop />
    </motion.main>
  )
}

export default CaseStudyDetail

