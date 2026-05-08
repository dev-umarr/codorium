import { useInView } from "../../hooks/useInView"
import { motion } from "framer-motion"

const AI_TOOLS = ['Cursor', 'Claude', 'GPT-4o', 'Copilot', 'v0', 'Bolt', 'Windsurf', 'Lovable']

export default function Results() {
  const [ref, inView] = useInView()

  return (
    <section data-navbar-light className="bg-brand-surface px-6 pb-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          className="relative overflow-hidden rounded-2xl px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-12"
          style={{
            background: 'linear-gradient(120deg, #060e1f 0%, #071e1a 60%, #051a10 100%)',
            border: '1px solid rgba(20,184,166,0.18)',
            boxShadow: '0 0 32px rgba(20,184,166,0.07)',
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* faint teal glow top-left */}
          <div
            className="pointer-events-none absolute -top-16 -left-16 h-[280px] w-[280px] opacity-15"
            style={{ background: 'radial-gradient(circle, #14b8a6, transparent 65%)' }}
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left: headline */}
            <div className="max-w-xl">
              <motion.p
                className="mb-3 font-brand-secondary text-xs font-600 uppercase tracking-widest text-brand-secondary"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                AI-First Development
              </motion.p>
              <motion.h3
                className="font-brand-primary text-2xl font-700 leading-snug text-white lg:text-3xl"
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
              >
                We reduce the timeline{' '}
                <span className="text-brand-secondary">and cost by 40–50%.</span>
              </motion.h3>
              <motion.p
                className="mt-3 font-brand-secondary text-base leading-relaxed text-white/50"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                We use the latest AI tools to boost productivity, complete projects
                faster, and pass the savings directly to you.
              </motion.p>

              <motion.a
                href="mailto:hello@codorium.com"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-brand-secondary px-6 py-2.5 font-brand-secondary text-sm font-600 text-white transition-all duration-200 hover:bg-brand-secondary-hover"
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 }}
                whileHover={{ scale: 1.03 }}
              >
                See How It Works
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

            {/* Right: comparison visual + tool pills */}
            <motion.div
              className="flex flex-col gap-5 sm:min-w-[300px] lg:min-w-[340px]"
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            >
              {/* Speed comparison bars */}
              <div className="rounded-xl border border-white/8 bg-white/4 p-5 backdrop-blur-sm">
                <p className="mb-4 font-brand-secondary text-xs font-600 uppercase tracking-widest text-white/30">
                  Delivery speed comparison
                </p>

                {/* Traditional */}
                <div className="mb-4">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="font-brand-secondary text-xs text-white/40">Traditional agency</span>
                    <span className="font-brand-secondary text-xs text-white/40">12–16 wks</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      className="h-full rounded-full bg-white/20"
                      initial={{ width: 0 }}
                      animate={inView ? { width: '85%' } : {}}
                      transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* AI-First */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="font-brand-secondary text-xs font-600 text-brand-secondary">Codorium AI-First</span>
                    <span className="font-brand-secondary text-xs font-600 text-brand-secondary">6–8 wks</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-brand-secondary/15">
                    <motion.div
                      className="h-full rounded-full bg-brand-secondary"
                      initial={{ width: 0 }}
                      animate={inView ? { width: '45%' } : {}}
                      transition={{ duration: 0.9, delay: 0.65, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                <p className="mt-3.5 font-brand-secondary text-xs text-white/25">
                  ↑ Same quality output, half the time
                </p>
              </div>

              {/* Tool pills */}
              <div>
                <p className="mb-2.5 font-brand-secondary text-xs font-600 uppercase tracking-widest text-white/25">
                  Powered by
                </p>
                <div className="flex flex-wrap gap-2">
                  {AI_TOOLS.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-brand-secondary/20 bg-brand-secondary/5 px-3.5 py-1.5 font-brand-secondary text-xs text-white/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
