import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const OFFERINGS = [
  {
    title: 'AI Application Development',
    description:
      'We design and ship production-ready AI systems — RAG pipelines, LLM-powered assistants, intelligent agents, and vector search. Built to integrate with your existing data and workflows.',
    category: 'AI Development',
  },
  {
    title: 'Full Product Build',
    description:
      'We take your product from idea to live — handling design, architecture, frontend, backend, and DevOps. You get a working product, not just a codebase.',
    category: 'Product Build',
  },
  {
    title: 'MVP to Market',
    description:
      'Built for founders who need to move fast. We ship a lean, investor-ready MVP in 6–8 weeks, using the right tech choices to avoid rewrites later.',
    category: 'MVP Launch',
  },
  {
    title: 'Dedicated Engineering',
    description:
      'Add experienced engineers who work like in-house team members — aligned to your sprints, culture, and roadmap. No agency overhead, no ramp-up risk.',
    category: 'Engineering',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 + i * 0.1, ease: 'easeOut' },
  }),
}

/* ── sticky offset per card (mobile stack) ── */
const STACK_TOP_BASE = 80   // px — just below navbar
const STACK_PEEK     = 14   // px — how much of each buried card peeks out

function WhatWeOffer() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    /*
     * NOTE: overflow-hidden is intentionally removed from <section> so that
     * position:sticky works on mobile cards. The decorative glow is wrapped in
     * its own overflow-hidden div so it still clips cleanly.
     */
    <section id="what-we-offer" className="relative">
      {/* Glow — kept in its own overflow-hidden so it doesn't bleed horizontally */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute bottom-0 -left-24 h-[480px] w-[480px] opacity-15"
          style={{ background: 'radial-gradient(circle at 30% 70%, #14b8a6, transparent 60%)' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-0 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-10 sm:mb-14">
          <motion.p
            className="mb-3 font-brand-secondary text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary sm:mb-4"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            What We Offer
          </motion.p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-1">
            <motion.h2
              className="font-brand-primary text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              How We Can <br />
              Cooperate With You
            </motion.h2>
            <motion.p
              className="max-w-sm font-brand-secondary text-sm leading-relaxed text-white/50 sm:max-w-xs sm:text-right"
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.18 }}
            >
              Every engagement starts with understanding your goal. Each service is built around real outcomes, not deliverables.
            </motion.p>
          </div>
        </div>

        {/* ── Mobile: sticky stacking cards (hidden on sm+) ── */}
        <div className="flex flex-col sm:hidden">
          {OFFERINGS.map((offer, i) => {
            const topPx  = STACK_TOP_BASE + (OFFERINGS.length - 1 - i) * STACK_PEEK
            const zIndex = (i + 1) * 10
            return (
              <div
                key={offer.title}
                className="sticky pb-3"
                style={{ top: topPx, zIndex }}
              >
                <MobileStackCard offer={offer} index={i} />
              </div>
            )
          })}
        </div>

        {/* ── sm+: regular grid (hidden on mobile) ── */}
        <div
          ref={gridRef}
          className="hidden gap-3 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
        >
          {OFFERINGS.map((offer, i) => (
            <OfferingCard key={offer.title} offer={offer} index={i} inView={gridInView} />
          ))}
        </div>
      </div>

      {/* ── Bottom wave — transition to white Services section ── */}
      <div className="mt-12 sm:mt-16 mb-[-4px]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}

/* ─── Mobile stacking card (no y-animation — scroll IS the animation) ───── */
function MobileStackCard({ offer, index }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.35 }}
      className="group relative flex flex-col rounded-2xl p-5"
      style={{
        background: '#0b1628',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* White circle arrow — top right */}
      <div className="mb-5 flex justify-end">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 12L12 2M12 2H4M12 2V10"
              stroke="#0a2463"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Step number badge */}
      <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-brand-secondary/30 font-brand-secondary text-[10px] font-600 text-brand-secondary">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Title */}
      <h3 className="mb-3 font-brand-primary text-lg leading-snug text-white">
        {offer.title}
      </h3>

      {/* Description */}
      <p className="mb-5 flex-1 font-brand-secondary text-sm leading-relaxed text-white/50">
        {offer.description}
      </p>

      {/* Category link */}
      <button
        onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
        className="group/link flex min-h-[44px] items-center gap-2 border-t border-white/8 pt-4"
      >
        <span className="font-brand-secondary text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35 transition-colors group-hover/link:text-brand-secondary">
          {offer.category}
        </span>
        <svg
          className="text-white/30 transition-all group-hover/link:translate-x-1 group-hover/link:text-brand-secondary"
          width="14" height="14" viewBox="0 0 14 14" fill="none"
        >
          <path
            d="M2 7H12M12 7L8 3M12 7L8 11"
            stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </button>
    </motion.div>
  )
}

/* ─── Desktop / tablet card (grid layout) ──────────────────────────────── */
function OfferingCard({ offer, index, inView }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group relative flex flex-col rounded-2xl p-5 sm:p-6"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      whileHover={{
        background: 'rgba(255,255,255,0.07)',
        borderColor: 'rgba(20,184,166,0.35)',
        y: -4,
      }}
      transition={{ duration: 0.2 }}
    >
      {/* White circle arrow — top right */}
      <div className="mb-6 flex justify-end sm:mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 12L12 2M12 2H4M12 2V10"
              stroke="#0a2463"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-3 font-brand-primary text-lg leading-snug text-white sm:mb-4 sm:text-xl lg:text-2xl">
        {offer.title}
      </h3>

      {/* Description */}
      <p className="mb-6 flex-1 font-brand-secondary text-sm leading-relaxed text-white/50 sm:mb-8">
        {offer.description}
      </p>

      {/* Category link — bottom */}
      <button
        onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
        className="group/link flex min-h-[44px] items-center gap-2 border-t border-white/8 pt-4"
      >
        <span className="font-brand-secondary text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35 transition-colors group-hover/link:text-brand-secondary">
          {offer.category}
        </span>
        <svg
          className="text-white/30 transition-all group-hover/link:translate-x-1 group-hover/link:text-brand-secondary"
          width="14" height="14" viewBox="0 0 14 14" fill="none"
        >
          <path
            d="M2 7H12M12 7L8 3M12 7L8 11"
            stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </button>
    </motion.div>
  )
}

export default WhatWeOffer
