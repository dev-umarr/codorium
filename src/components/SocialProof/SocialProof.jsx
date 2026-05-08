import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const STATS = [
  { value: '3×', label: 'Faster time-to-market vs. traditional agencies' },
  { value: '20+', label: 'Satisfied clients across startups & SMBs' },
  { value: '6 wks', label: 'Average MVP delivery, from kickoff to live' },
  { value: '40%', label: 'Average reduction in operational overhead' },
]

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
        stroke="#14b8a6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StatItem({ stat, index, inView }) {
  return (
    <motion.div
      className="flex flex-col gap-1.5 border-t border-white/10 pt-5"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.25 + index * 0.08, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-2">
        <span className="font-brand-primary text-3xl font-700 leading-none text-white">
          {stat.value}
        </span>
        <ArrowIcon />
      </div>
      <p className="font-brand-secondary text-sm leading-snug text-white/50">
        {stat.label}
      </p>
    </motion.div>
  )
}

export default function SocialProof() {
  const [ref, inView] = useInView()

  return (
    <section data-navbar-light className="bg-brand-surface px-6 pt-10 pb-20 lg:px-8 lg:pt-14 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          className="relative overflow-hidden rounded-2xl px-5 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
          style={{
            background: 'linear-gradient(135deg, #051a10 0%, #071e1a 50%, #060e1f 100%)',
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          {/* Teal glow — bottom right */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] opacity-20"
            style={{ background: 'radial-gradient(circle at 80% 80%, #14b8a6, transparent 60%)' }}
          />
          {/* Blue glow — top left */}
          <div
            className="pointer-events-none absolute -top-20 -left-20 h-[300px] w-[300px] opacity-10"
            style={{ background: 'radial-gradient(circle, #0a2463, transparent 65%)' }}
          />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            {/* ── Left: headline + CTA ── */}
            <div className="flex flex-col justify-between gap-10">
              <motion.h2
                className="font-brand-primary text-2xl font-700 leading-tight text-white sm:text-3xl lg:text-4xl"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              >
                <span className="text-brand-secondary">30+</span> AI-powered products
                shipped and running in production
              </motion.h2>

              <motion.a
                href="mailto:hello@codorium.com"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-secondary/50 px-6 py-2.5 font-brand-secondary text-sm font-500 text-brand-secondary transition-all duration-200 hover:bg-brand-secondary/10 hover:border-brand-secondary"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.35 }}
                whileHover={{ scale: 1.03 }}
              >
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            </div>

            {/* ── Right: 2×2 stats grid ── */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-0">
              {STATS.map((stat, i) => (
                <StatItem key={stat.value} stat={stat} index={i} inView={inView} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
