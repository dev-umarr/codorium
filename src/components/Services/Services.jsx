import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

/* ─── Illustrations ────────────────────────────────────────────── */
const IllustrationStartup = () => (
  <svg width="100" height="90" viewBox="0 0 100 90" fill="none" style={{ filter: 'drop-shadow(0 0 10px rgba(20,184,166,0.35))' }}>
    <circle cx="50" cy="45" r="38" stroke="#14b8a6" strokeWidth="0.6" strokeDasharray="4 3" opacity="0.3" />
    <circle cx="50" cy="45" r="25" stroke="#14b8a6" strokeWidth="0.6" strokeDasharray="4 3" opacity="0.2" />
    <path d="M50 72 L50 20" stroke="#14b8a6" strokeWidth="1" opacity="0.25" />
    <path d="M50 20 C50 20 38 34 38 50 L50 50 L50 20Z" fill="#14b8a6" fillOpacity="0.15" stroke="#14b8a6" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M50 20 C50 20 62 34 62 50 L50 50 L50 20Z" fill="#14b8a6" fillOpacity="0.08" stroke="#14b8a6" strokeWidth="1.2" strokeLinejoin="round" />
    <circle cx="50" cy="53" r="4" fill="#14b8a6" fillOpacity="0.5" stroke="#14b8a6" strokeWidth="1.5" />
    <path d="M38 58 Q33 62 32 68" stroke="#14b8a6" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    <path d="M62 58 Q67 62 68 68" stroke="#14b8a6" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    <circle cx="32" cy="70" r="2" fill="#14b8a6" opacity="0.5" />
    <circle cx="68" cy="70" r="2" fill="#14b8a6" opacity="0.5" />
  </svg>
)

const IllustrationSaaS = () => (
  <svg width="100" height="90" viewBox="0 0 100 90" fill="none" style={{ filter: 'drop-shadow(0 0 10px rgba(20,184,166,0.3))' }}>
    <rect x="18" y="52" width="64" height="26" rx="4" fill="#14b8a6" fillOpacity="0.08" stroke="#14b8a6" strokeWidth="1" />
    <rect x="23" y="34" width="54" height="24" rx="4" fill="#14b8a6" fillOpacity="0.12" stroke="#14b8a6" strokeWidth="1" />
    <rect x="28" y="18" width="44" height="22" rx="4" fill="#14b8a6" fillOpacity="0.18" stroke="#14b8a6" strokeWidth="1.2" />
    <path d="M36 26 H52" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <path d="M36 30 H58" stroke="#14b8a6" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    <circle cx="63" cy="27" r="4" fill="#14b8a6" fillOpacity="0.3" stroke="#14b8a6" strokeWidth="1" />
    <path d="M61.5 27 L63 28.5 L65 25.5" stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IllustrationFintech = () => (
  <svg width="100" height="90" viewBox="0 0 100 90" fill="none" style={{ filter: 'drop-shadow(0 0 10px rgba(20,184,166,0.3))' }}>
    <path d="M50 12 L78 26 L78 62 Q78 78 50 84 Q22 78 22 62 L22 26 Z" stroke="#14b8a6" strokeWidth="1.2" fill="#14b8a6" fillOpacity="0.06" />
    <path d="M34 55 L40 44 L47 50 L55 36 L62 46 L68 38" stroke="#14b8a6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    <circle cx="34" cy="55" r="2.5" fill="#14b8a6" />
    <circle cx="68" cy="38" r="2.5" fill="#14b8a6" />
    <path d="M50 22 L50 30" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>
)

const IllustrationHealth = () => (
  <svg width="100" height="90" viewBox="0 0 100 90" fill="none" style={{ filter: 'drop-shadow(0 0 10px rgba(20,184,166,0.3))' }}>
    <path d="M28 16 L72 16 L72 60 L50 78 L28 60 Z" stroke="#14b8a6" strokeWidth="1" fill="#14b8a6" fillOpacity="0.06" strokeLinejoin="round" />
    <path d="M50 32 L50 54" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
    <path d="M39 43 L61 43" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
    <circle cx="50" cy="43" r="12" stroke="#14b8a6" strokeWidth="1" opacity="0.2" />
    <path d="M22 48 Q28 40 34 48 Q40 56 46 48 Q52 40 58 48 Q64 56 70 48 Q76 40 82 48" stroke="#14b8a6" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
  </svg>
)

const IllustrationEcommerce = () => (
  <svg width="100" height="90" viewBox="0 0 100 90" fill="none" style={{ filter: 'drop-shadow(0 0 10px rgba(20,184,166,0.3))' }}>
    <rect x="16" y="14" width="28" height="28" rx="5" fill="#14b8a6" fillOpacity="0.12" stroke="#14b8a6" strokeWidth="1" />
    <rect x="56" y="14" width="28" height="28" rx="5" fill="#14b8a6" fillOpacity="0.08" stroke="#14b8a6" strokeWidth="1" />
    <rect x="16" y="52" width="28" height="28" rx="5" fill="#14b8a6" fillOpacity="0.08" stroke="#14b8a6" strokeWidth="1" />
    <rect x="56" y="52" width="28" height="28" rx="5" fill="#14b8a6" fillOpacity="0.14" stroke="#14b8a6" strokeWidth="1.2" />
    <path d="M65 66 L67 68 L71 63" stroke="#14b8a6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    <circle cx="30" cy="28" r="5" stroke="#14b8a6" strokeWidth="1.2" opacity="0.6" />
    <path d="M28.5 27 L30 28.5 L32 26" stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
  </svg>
)

const IllustrationEnterprise = () => (
  <svg width="100" height="90" viewBox="0 0 100 90" fill="none" style={{ filter: 'drop-shadow(0 0 10px rgba(20,184,166,0.3))' }}>
    <circle cx="50" cy="20" r="8" fill="#14b8a6" fillOpacity="0.15" stroke="#14b8a6" strokeWidth="1.2" />
    <circle cx="22" cy="62" r="7" fill="#14b8a6" fillOpacity="0.12" stroke="#14b8a6" strokeWidth="1" />
    <circle cx="78" cy="62" r="7" fill="#14b8a6" fillOpacity="0.12" stroke="#14b8a6" strokeWidth="1" />
    <circle cx="50" cy="62" r="7" fill="#14b8a6" fillOpacity="0.18" stroke="#14b8a6" strokeWidth="1.2" />
    <path d="M50 28 L50 55" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
    <path d="M50 42 L22 55" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
    <path d="M50 42 L78 55" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
    <circle cx="50" cy="20" r="3" fill="#14b8a6" opacity="0.8" />
    <circle cx="50" cy="62" r="3" fill="#14b8a6" opacity="0.8" />
    <circle cx="22" cy="62" r="2.5" fill="#14b8a6" opacity="0.6" />
    <circle cx="78" cy="62" r="2.5" fill="#14b8a6" opacity="0.6" />
  </svg>
)

const IllustrationAI = () => (
  <svg width="180" height="130" viewBox="0 0 180 130" fill="none" style={{ filter: 'drop-shadow(0 0 16px rgba(20,184,166,0.4))' }}>
    {[
      [90, 65], [38, 30], [142, 30], [20, 75], [160, 75],
      [50, 108], [130, 108], [90, 18],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="5" fill="#14b8a6" fillOpacity={i === 0 ? 0.9 : 0.45} stroke="#14b8a6" strokeWidth="1" />
    ))}
    {[
      [[90,65],[38,30]], [[90,65],[142,30]], [[90,65],[20,75]],
      [[90,65],[160,75]], [[90,65],[50,108]], [[90,65],[130,108]],
      [[90,65],[90,18]], [[38,30],[20,75]], [[142,30],[160,75]],
      [[20,75],[50,108]], [[160,75],[130,108]],
    ].map(([[x1,y1],[x2,y2]], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#14b8a6" strokeWidth="0.8" opacity="0.3" />
    ))}
    <circle cx="90" cy="65" r="18" stroke="#14b8a6" strokeWidth="1" opacity="0.2" />
    <circle cx="90" cy="65" r="30" stroke="#14b8a6" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.15" />
    <circle cx="90" cy="65" r="9" fill="#14b8a6" fillOpacity="0.2" />
  </svg>
)

/* ─── Data ─────────────────────────────────────────────────────── */
const ROW_ONE = [
  {
    title: ['Startups', ' & ', 'Founders'],
    highlight: [0, 2],
    description: 'Pre-seed to Series A. We help founders build their first product fast — with the right architecture to raise on and scale from.',
    illustration: <IllustrationStartup />,
  },
  {
    title: ['SaaS', ' Companies'],
    highlight: [0],
    description: 'Growing your B2B or B2C platform? We extend your team or lead product builds — shipping features without breaking what works.',
    illustration: <IllustrationSaaS />,
  },
  {
    title: ['Fin', 'Tech', ' & Finance'],
    highlight: [1],
    description: 'Payments, lending, portfolio tools. We build secure, compliant fintech software with the performance and auditability finance demands.',
    illustration: <IllustrationFintech />,
  },
]

const ROW_TWO = [
  {
    title: ['Health', 'care', ' & MedTech'],
    highlight: [0],
    description: 'Digital health apps, patient portals, and medical data platforms — built with privacy, compliance, and usability at the core.',
    illustration: <IllustrationHealth />,
  },
  {
    title: ['e', 'Commerce', ' & D2C'],
    highlight: [1],
    description: 'Custom storefronts, marketplace platforms, and order management systems built for conversion and operational efficiency.',
    illustration: <IllustrationEcommerce />,
  },
  {
    title: ['Enterprise', ' & SMB'],
    highlight: [0],
    description: null,
    cta: "Tell us about your industry →",
    tags: ['Logistics & Supply Chain', 'LegalTech', 'EdTech', 'PropTech', 'GovTech', 'And more…'],
    illustration: <IllustrationEnterprise />,
  },
]

/* ─── Animation variants ───────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

/* ─── Component ────────────────────────────────────────────────── */
function Services() {
  const [headerRef, headerInView] = useInView()
  const [row1Ref, row1InView] = useInView()
  const [featuredRef, featuredInView] = useInView()
  const [row2Ref, row2InView] = useInView()

  return (
    <section id="services" data-navbar-light className="bg-brand-surface pt-12 pb-24 lg:pt-14 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-14">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-block font-brand-secondary text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary"
          >
            Who We Serve
          </motion.span>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-brand-primary text-3xl leading-tight text-brand-primary sm:text-4xl lg:text-5xl"
            >
              We help companies <br />
              <span className="text-brand-secondary">across every growth stage</span>
            </motion.h2>
            <motion.p
              className="max-w-xs font-brand-secondary text-sm leading-relaxed text-brand-primary/45 sm:text-right"
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              From pre-seed founders to scaling SaaS teams — we adapt to your stage, stack, and speed. No enterprise overhead, just the right fit.
            </motion.p>
          </div>
        </div>

        {/* ── Row 1: mobile sticky stack ── */}
        <div className="flex flex-col sm:hidden mb-4">
          {ROW_ONE.map((card, i) => {
            const topPx  = 80 + (ROW_ONE.length - 1 - i) * 14
            const zIndex = (i + 1) * 10
            return (
              <div key={i} className="sticky pb-3" style={{ top: topPx, zIndex }}>
                <MobileIndustryCard card={card} />
              </div>
            )
          })}
        </div>

        {/* ── Row 1: sm–lg grid ── */}
        <div ref={row1Ref} className="hidden mb-4 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {ROW_ONE.map((card, i) => (
            <IndustryCard key={i} card={card} index={i} inView={row1InView} />
          ))}
        </div>

        {/* ── Featured wide card ── */}
        <motion.div
          ref={featuredRef}
          initial={{ opacity: 0, y: 32 }}
          animate={featuredInView ? { opacity: 1, y: 0 } : {}}
          className="group mb-4 overflow-hidden rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #0a2463 0%, #091a3a 60%, #062d26 100%)',
            border: '1px solid rgba(20,184,166,0.38)',
            boxShadow: '0 0 22px rgba(20,184,166,0.16), 0 0 3px rgba(20,184,166,0.22), inset 0 0 30px rgba(20,184,166,0.05)',
          }}
          whileHover={{
            borderColor: 'rgba(20,184,166,0.72)',
            boxShadow: '0 0 36px rgba(20,184,166,0.32), 0 0 6px rgba(20,184,166,0.52), 0 8px 48px rgba(0,0,0,0.25), inset 0 0 44px rgba(20,184,166,0.08)',
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="grid items-center gap-6 p-6 sm:gap-8 sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
            {/* Left */}
            <div>
              <p className="mb-2 font-brand-secondary text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">
                Fast-Growing Segment
              </p>
              <h3 className="mb-4 font-brand-primary text-2xl text-white lg:text-3xl">
                <span className="text-brand-secondary">AI-First</span> Companies & Builders
              </h3>
              <p className="mb-6 max-w-xl font-brand-secondary text-sm leading-relaxed text-white/60">
                Building AI into your core product — not bolting it on. We partner with companies
                embedding LLMs, RAG systems, and intelligent automation as their primary value driver.
                From research to production, we handle the full AI engineering lifecycle.
              </p>
              <div className="flex flex-wrap gap-2">
                {['RAG Applications', 'LLM Integration', 'AI Agents', 'Vector Search', 'ML Pipelines'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-brand-secondary/25 bg-brand-secondary/10 px-3 py-1 font-brand-secondary text-xs font-semibold text-brand-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Right — illustration */}
            <div className="hidden sm:flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500">
              <IllustrationAI />
            </div>
          </div>
        </motion.div>

        {/* ── Row 2: mobile sticky stack ── */}
        <div className="flex flex-col sm:hidden">
          {ROW_TWO.map((card, i) => {
            const topPx  = 80 + (ROW_TWO.length - 1 - i) * 14
            const zIndex = 40 + (i + 1) * 10   /* 50/60/70 — always above row1's 10/20/30 */
            return (
              <div key={i} className="sticky pb-3" style={{ top: topPx, zIndex }}>
                <MobileIndustryCard card={card} />
              </div>
            )
          })}
        </div>

        {/* ── Row 2: sm–lg grid ── */}
        <div ref={row2Ref} className="hidden sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {ROW_TWO.map((card, i) => (
            <IndustryCard key={i} card={card} index={i} inView={row2InView} />
          ))}
        </div>

      </div>
    </section>
  )
}

/* ─── Mobile industry card (opacity-only entry — scroll IS the animation) ── */
function MobileIndustryCard({ card }) {
  const titleSegments = card.title.map((seg, i) => (
    card.highlight?.includes(i)
      ? <span key={i} className="text-brand-secondary">{seg}</span>
      : <span key={i}>{seg}</span>
  ))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.35 }}
      className="group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl p-6"
      style={{
        background: 'linear-gradient(145deg, #091a3a 0%, #060e1f 100%)',
        border: '1px solid rgba(20,184,166,0.20)',
      }}
    >
      {/* Illustration — bottom right (below scrim) */}
      <div className="pointer-events-none absolute right-4 bottom-4 opacity-70">
        {card.illustration}
      </div>

      {/* Dark scrim — subtle fade so illustration stays visible but text is readable */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ background: 'linear-gradient(to top, rgba(6,14,31,0.82) 0%, rgba(6,14,31,0.45) 35%, rgba(6,14,31,0.12) 60%, transparent 100%)' }}
      />

      {/* Title */}
      <h3 className="relative font-brand-primary text-2xl leading-tight text-white">
        {titleSegments}
      </h3>

      {/* Content */}
      <div className="relative">
        {card.description && (
          <p className="mb-4 font-brand-secondary text-sm leading-relaxed text-white/55">
            {card.description}
          </p>
        )}
        {card.tags && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {card.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-2.5 py-1 font-brand-secondary text-[11px] text-white/45"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        {card.cta && (
          <button
            onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-lg border border-brand-secondary/25 bg-brand-secondary/10 px-4 py-2 font-brand-secondary text-xs font-semibold text-brand-secondary"
          >
            {card.cta}
          </button>
        )}
      </div>
    </motion.div>
  )
}

/* ─── Industry card ────────────────────────────────────────────── */
function IndustryCard({ card, index, inView }) {
  const titleSegments = card.title.map((seg, i) => (
    card.highlight?.includes(i)
      ? <span key={i} className="text-brand-secondary">{seg}</span>
      : <span key={i}>{seg}</span>
  ))

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl p-7"
      style={{
        background: 'linear-gradient(145deg, #091a3a 0%, #060e1f 100%)',
        border: '1px solid rgba(20,184,166,0.32)',
        boxShadow: '0 0 16px rgba(20,184,166,0.12), 0 0 2px rgba(20,184,166,0.2), inset 0 0 20px rgba(20,184,166,0.04)',
      }}
      whileHover={{
        y: -4,
        borderColor: 'rgba(20,184,166,0.70)',
        boxShadow: '0 0 28px rgba(20,184,166,0.30), 0 0 4px rgba(20,184,166,0.50), 0 8px 40px rgba(0,0,0,0.30), inset 0 0 32px rgba(20,184,166,0.07)',
      }}
      transition={{ duration: 0.22 }}
    >
      {/* Hover teal glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(20,184,166,0.08) 0%, transparent 65%)' }}
      />

      {/* Illustration — bottom right (below scrim) */}
      <div className="pointer-events-none absolute right-4 bottom-4 opacity-70 transition-opacity duration-300 group-hover:opacity-95">
        {card.illustration}
      </div>

      {/* Dark scrim — subtle fade so illustration stays visible but text is readable */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ background: 'linear-gradient(to top, rgba(6,14,31,0.82) 0%, rgba(6,14,31,0.45) 35%, rgba(6,14,31,0.12) 60%, transparent 100%)' }}
      />

      {/* Title */}
      <h3 className="relative font-brand-primary text-2xl leading-tight text-white lg:text-3xl">
        {titleSegments}
      </h3>

      {/* Content */}
      <div className="relative">
        {card.description && (
          <p className="mb-4 font-brand-secondary text-sm leading-relaxed text-white/55">
            {card.description}
          </p>
        )}

        {/* "Other" card tags */}
        {card.tags && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {card.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-2.5 py-1 font-brand-secondary text-[11px] text-white/45"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* CTA for last card */}
        {card.cta && (
          <button
            onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="group/btn inline-flex items-center gap-2 rounded-lg border border-brand-secondary/25 bg-brand-secondary/10 px-4 py-2 font-brand-secondary text-xs font-semibold text-brand-secondary transition-all hover:bg-brand-secondary/15"
          >
            {card.cta}
          </button>
        )}
      </div>

    </motion.div>
  )
}

export default Services
