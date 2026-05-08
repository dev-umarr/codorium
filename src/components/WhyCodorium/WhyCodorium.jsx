import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

/* ─── Card data ─────────────────────────────────────────── */

const CARDS = [
  {
    id: 'ai-first',
    title: 'AI-First by Default',
    desc: 'Every project starts with the right AI tools — speeding delivery without sacrificing quality or scalability.',
    bg: 'linear-gradient(175deg, #051a14 0%, #071e2e 60%, #060e1f 100%)',
    accent: '#14b8a6',
    visual: (
      <svg viewBox="0 0 120 200" fill="none" className="absolute inset-0 h-full w-full opacity-20">
        <circle cx="60" cy="60" r="40" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="60" cy="60" r="22" stroke="#14b8a6" strokeWidth="0.8" />
        <circle cx="60" cy="60" r="6" fill="#14b8a6" />
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
          <line key={i}
            x1={60 + 22 * Math.cos(deg * Math.PI / 180)}
            y1={60 + 22 * Math.sin(deg * Math.PI / 180)}
            x2={60 + 44 * Math.cos(deg * Math.PI / 180)}
            y2={60 + 44 * Math.sin(deg * Math.PI / 180)}
            stroke="#14b8a6" strokeWidth="0.8" />
        ))}
        <circle cx="60" cy="140" r="18" stroke="#0a2463" strokeWidth="1" strokeDasharray="3 5" />
        <line x1="60" y1="100" x2="60" y2="122" stroke="#14b8a6" strokeWidth="0.6" strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    id: 'fast-ship',
    title: 'Ship in Weeks',
    desc: 'MVPs in 6–8 weeks, end-to-end. We move fast without cutting corners — from design to deployment.',
    bg: 'linear-gradient(175deg, #060e1f 0%, #091a3a 60%, #071e2e 100%)',
    accent: '#14b8a6',
    visual: (
      <svg viewBox="0 0 120 200" fill="none" className="absolute inset-0 h-full w-full opacity-20">
        {[20, 45, 70, 95, 120, 145].map((y, i) => (
          <rect key={i} x={20 + i * 4} y={y} width={80 - i * 8} height="2" rx="1" fill="#14b8a6" />
        ))}
        <path d="M60 30 L75 55 L60 50 L45 55 Z" fill="#14b8a6" fillOpacity="0.6" />
        <line x1="60" y1="55" x2="60" y2="170" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    ),
  },
  {
    id: 'clean-code',
    title: 'Clean Architecture',
    desc: 'No tech debt, no rewrites. We build for your future — scalable systems that grow with your product.',
    bg: 'linear-gradient(175deg, #051a10 0%, #062d26 50%, #071e1a 100%)',
    accent: '#14b8a6',
    visual: (
      <svg viewBox="0 0 120 200" fill="none" className="absolute inset-0 h-full w-full opacity-25">
        <rect x="30" y="30" width="60" height="40" rx="6" stroke="#14b8a6" strokeWidth="1" />
        <rect x="15" y="90" width="38" height="30" rx="4" stroke="#14b8a6" strokeWidth="0.8" />
        <rect x="67" y="90" width="38" height="30" rx="4" stroke="#14b8a6" strokeWidth="0.8" />
        <line x1="60" y1="70" x2="34" y2="90" stroke="#14b8a6" strokeWidth="0.7" />
        <line x1="60" y1="70" x2="86" y2="90" stroke="#14b8a6" strokeWidth="0.7" />
        <rect x="25" y="140" width="28" height="24" rx="4" stroke="#14b8a6" strokeWidth="0.7" strokeDasharray="3 3" />
        <rect x="67" y="140" width="28" height="24" rx="4" stroke="#14b8a6" strokeWidth="0.7" strokeDasharray="3 3" />
        <line x1="34" y1="120" x2="39" y2="140" stroke="#14b8a6" strokeWidth="0.6" />
        <line x1="86" y1="120" x2="81" y2="140" stroke="#14b8a6" strokeWidth="0.6" />
      </svg>
    ),
  },
  {
    id: 'startup-friendly',
    title: 'Startup-Friendly',
    desc: 'We adapt to your stage, budget, and pace. No enterprise overhead — just the right team for your goals.',
    bg: 'linear-gradient(175deg, #060e1f 0%, #0a2463 60%, #091a3a 100%)',
    accent: '#14b8a6',
    visual: (
      <svg viewBox="0 0 120 200" fill="none" className="absolute inset-0 h-full w-full opacity-20">
        <polygon points="60,25 85,70 35,70" stroke="#14b8a6" strokeWidth="1" fill="none" />
        <polygon points="60,50 78,82 42,82" stroke="#14b8a6" strokeWidth="0.7" fill="#14b8a6" fillOpacity="0.08" />
        <line x1="20" y1="100" x2="100" y2="100" stroke="#14b8a6" strokeWidth="0.6" />
        <path d="M20 160 Q40 110 60 130 Q80 150 100 100" stroke="#14b8a6" strokeWidth="1.2" fill="none" />
        <circle cx="100" cy="100" r="3" fill="#14b8a6" />
      </svg>
    ),
  },
  {
    id: 'long-term',
    title: 'Long-Term Partner',
    desc: "We don't disappear after launch. We stay in the loop — iterating, scaling, and optimizing alongside you.",
    bg: 'linear-gradient(175deg, #071e1a 0%, #060e1f 50%, #091a3a 100%)',
    accent: '#14b8a6',
    visual: (
      <svg viewBox="0 0 120 200" fill="none" className="absolute inset-0 h-full w-full opacity-20">
        <circle cx="40" cy="70" r="18" stroke="#14b8a6" strokeWidth="1" />
        <circle cx="80" cy="70" r="18" stroke="#14b8a6" strokeWidth="1" />
        <circle cx="60" cy="110" r="18" stroke="#14b8a6" strokeWidth="1" />
        <line x1="52" y1="75" x2="68" y2="75" stroke="#14b8a6" strokeWidth="0.8" />
        <line x1="46" y1="84" x2="54" y2="98" stroke="#14b8a6" strokeWidth="0.8" />
        <line x1="74" y1="84" x2="66" y2="98" stroke="#14b8a6" strokeWidth="0.8" />
        <circle cx="40" cy="70" r="4" fill="#14b8a6" fillOpacity="0.5" />
        <circle cx="80" cy="70" r="4" fill="#14b8a6" fillOpacity="0.5" />
        <circle cx="60" cy="110" r="4" fill="#14b8a6" />
      </svg>
    ),
  },
]

/* ─── Component ─────────────────────────────────────────── */

export default function WhyCodorium() {
  const [hovered, setHovered] = useState(null)
  const [headerRef, headerInView] = useInView()

  return (
    <section id="why-codorium" data-navbar-light className="bg-brand-surface pt-10 pb-10 lg:pt-14 lg:pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <motion.p
            className="mb-3 font-brand-secondary text-xs font-600 uppercase tracking-widest text-brand-secondary"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            Why Us
          </motion.p>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <motion.h2
              className="font-brand-primary text-4xl font-700 leading-tight text-brand-primary lg:text-5xl"
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Why Codorium?
            </motion.h2>
            <motion.p
              className="max-w-xs font-brand-secondary text-sm leading-relaxed text-brand-primary/45 sm:text-right"
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              AI-powered delivery meets engineering discipline — speed, quality, and a partner invested in your success.
            </motion.p>
          </div>
        </div>

        {/* ── Mobile: sticky stacking cards (hidden on sm+) ── */}
        <div className="flex flex-col sm:hidden">
          {CARDS.map((card, i) => {
            const topPx  = 80 + (CARDS.length - 1 - i) * 14
            const zIndex = (i + 1) * 10
            return (
              <div key={card.id} className="sticky pb-3" style={{ top: topPx, zIndex }}>
                <div
                  className="relative min-h-[220px] overflow-hidden"
                  style={{
                    borderRadius: '1.75rem',
                    background: '#0c1a2e',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {card.visual}
                  <div
                    className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full opacity-25"
                    style={{ background: `radial-gradient(circle, ${card.accent}, transparent 70%)` }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-16"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(4,8,18,0.97) 0%, rgba(4,8,18,0.70) 55%, transparent 100%)',
                      borderRadius: '0 0 1.75rem 1.75rem',
                    }}
                  >
                    <span
                      className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full border font-brand-secondary text-xs font-600"
                      style={{ borderColor: `${card.accent}40`, color: card.accent }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-1.5 font-brand-primary text-base font-700 leading-snug text-white">
                      {card.title}
                    </p>
                    <p className="mt-1 font-brand-secondary text-xs leading-relaxed text-white/55">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Tablet grid: sm → lg (hidden on mobile and lg+) ── */}
        <div className="hidden sm:grid sm:grid-cols-2 sm:gap-4 lg:hidden">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              className="relative min-h-[200px] overflow-hidden"
              style={{ borderRadius: '1.75rem', background: card.bg }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: 'easeOut' }}
            >
              {card.visual}
              <div
                className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full opacity-25"
                style={{ background: `radial-gradient(circle, ${card.accent}, transparent 70%)` }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-16"
                style={{
                  background:
                    'linear-gradient(to top, rgba(4,8,18,0.97) 0%, rgba(4,8,18,0.70) 55%, transparent 100%)',
                  borderRadius: '0 0 1.75rem 1.75rem',
                }}
              >
                <span
                  className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full border font-brand-secondary text-xs font-600"
                  style={{ borderColor: `${card.accent}40`, color: card.accent }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-1.5 font-brand-primary text-base font-700 leading-snug text-white">
                  {card.title}
                </p>
                <p className="mt-1 font-brand-secondary text-xs leading-relaxed text-white/55">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Desktop accordion (hidden below lg) ── */}
        <div
          className="hidden gap-3 lg:flex"
          style={{ height: '540px' }}
          onMouseLeave={() => setHovered(null)}
        >
          {CARDS.map((card, i) => {
            const isHovered = hovered === card.id
            const isAnyHovered = hovered !== null
            return (
              <motion.div
                key={card.id}
                className="relative cursor-pointer overflow-hidden"
                style={{
                  borderRadius: '1.75rem',
                  background: card.bg,
                  flexShrink: 0,
                  minWidth: 0,
                }}
                animate={{
                  flex: isHovered ? 3 : isAnyHovered ? 0.65 : 1,
                }}
                transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                onHoverStart={() => setHovered(card.id)}
              >
                {card.visual}

                <div
                  className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full opacity-25"
                  style={{ background: `radial-gradient(circle, ${card.accent}, transparent 70%)` }}
                />

                <div className="absolute top-5 left-0 right-0 flex justify-center">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full border font-brand-secondary text-xs font-600"
                    style={{ borderColor: `${card.accent}40`, color: card.accent }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 px-8 pb-8 pt-24"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(4,8,18,0.97) 0%, rgba(4,8,18,0.75) 55%, transparent 100%)',
                        borderRadius: '0 0 1.75rem 1.75rem',
                      }}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, delay: 0.22, ease: 'easeOut' }}
                    >
                      <p className="mb-2 font-brand-primary text-xl font-700 leading-snug text-white">
                        {card.title}
                      </p>
                      <p className="font-brand-secondary text-sm leading-relaxed text-white/55">
                        {card.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {!isHovered && (
                    <motion.div
                      className="absolute inset-0 flex items-end justify-center pb-7"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <p
                        className="font-brand-secondary text-xs font-600 uppercase tracking-widest text-white/25"
                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                      >
                        {card.title}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
