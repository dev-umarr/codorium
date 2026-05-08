import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const TRUST_SIGNALS = [
  { icon: '⚡', text: 'Fast response — we reply within 24h' },
  { icon: '🎯', text: 'Free 30-min strategy call, no commitment' },
  { icon: '🔒', text: 'Your idea stays confidential — NDA on request' },
]

function CTASection() {
  const [ref, inView] = useInView()

  return (
    <section id="cta" className="bg-brand-bg py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-brand-primary px-8 py-16 text-center shadow-2xl shadow-brand-primary/20 lg:px-16 lg:py-20"
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-brand-secondary/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-brand-secondary/10 blur-[80px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative flex flex-col items-center gap-6">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 px-4 py-1.5 font-brand-secondary text-sm font-semibold text-brand-secondary"
            >
              <span className="h-2 w-2 rounded-full bg-brand-secondary animate-pulse" />
              Taking new projects
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="max-w-2xl font-brand-primary text-2xl text-white sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              Ready to Build Something{' '}
              <span className="text-brand-secondary">Great?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="max-w-lg font-brand-secondary text-lg text-white/60"
            >
              Book a free strategy call and let&apos;s explore your project. Whether you&apos;re
              pre-idea or ready to build — we&apos;d love to hear from you.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
            >
              <a
                href="mailto:hello@codorium.com"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-secondary px-8 py-4 font-brand-secondary text-base font-semibold text-white shadow-lg shadow-brand-secondary/30 transition-all hover:bg-brand-secondary-hover hover:shadow-brand-secondary/50 hover:-translate-y-0.5 no-underline sm:w-auto"
              >
                Book a Call
                <svg
                  className="transition-transform group-hover:translate-x-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="mailto:hello@codorium.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-brand-secondary text-base font-semibold text-white transition-all hover:bg-white/5 hover:-translate-y-0.5 no-underline sm:w-auto"
              >
                Send a Message
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6"
            >
              {TRUST_SIGNALS.map((s) => (
                <div
                  key={s.text}
                  className="flex items-center gap-2 font-brand-secondary text-xs text-white/40"
                >
                  <span>{s.icon}</span>
                  <span>{s.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
