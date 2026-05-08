import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const PILLARS = [
  {
    icon: '🧠',
    title: 'AI-First Mindset',
    desc: 'We integrate AI not as an afterthought, but as a foundational layer in every product we build.',
  },
  {
    icon: '⚡',
    title: 'Speed Without Shortcuts',
    desc: 'We ship fast using battle-tested patterns, clean architecture, and iterative delivery cycles.',
  },
  {
    icon: '🤝',
    title: 'Startup-Native',
    desc: "We've worked inside early-stage companies. We understand constraints, pivots, and investor timelines.",
  },
  {
    icon: '🔒',
    title: 'Production-Grade Quality',
    desc: 'Every codebase we hand over is documented, tested, and built to grow — not to be rewritten.',
  },
]

function About() {
  const [ref, inView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section id="about" data-navbar-light className="bg-brand-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left — copy */}
          <div ref={ref}>
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-block font-brand-secondary text-sm font-semibold uppercase tracking-widest text-brand-secondary"
            >
              Why Codorium
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 font-brand-primary text-4xl leading-tight text-brand-primary lg:text-5xl"
            >
              A Technical Partner, <br />
              <span className="text-brand-secondary">Not Just an Agency.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-5"
            >
              <p className="font-brand-secondary text-lg leading-relaxed text-brand-primary/70">
                Codorium is a founder-led development studio. We built this agency because we
                experienced firsthand how hard it is to find a technical team that moves with
                startup urgency, thinks in systems, and actually cares about outcomes.
              </p>
              <p className="font-brand-secondary text-base leading-relaxed text-brand-primary/60">
                We don&apos;t just write code — we co-own your roadmap. Every engagement includes
                architecture consulting, strategy sessions, and post-launch iteration. We&apos;re in it
                with you from idea to scale.
              </p>

              {/* Signature quote */}
              <blockquote className="mt-2 border-l-4 border-brand-secondary pl-5">
                <p className="font-brand-primary text-xl italic text-brand-primary/80">
                  "We treat every client&apos;s product like it&apos;s our own."
                </p>
                <footer className="mt-2 font-brand-secondary text-sm text-brand-primary/50">
                  — Codorium Founding Team
                </footer>
              </blockquote>
            </motion.div>
          </div>

          {/* Right — pillars grid */}
          <motion.div
            ref={gridRef}
            initial={{ opacity: 0, x: 30 }}
            animate={gridInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col gap-3 rounded-2xl border border-brand-border bg-brand-bg p-6 transition-shadow hover:shadow-lg hover:shadow-brand-primary/5"
              >
                <span className="text-3xl">{p.icon}</span>
                <h4 className="font-brand-primary text-lg text-brand-primary">{p.title}</h4>
                <p className="font-brand-secondary text-sm leading-relaxed text-brand-primary/60">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
