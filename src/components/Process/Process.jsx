import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    headline: 'Understand Before We Build',
    description:
      'We start with a deep-dive strategy session. We map your goals, constraints, users, and technical landscape before writing a single line of code.',
    details: ['Goal mapping', 'Technical audit', 'Scope definition', 'Risk identification'],
  },
  {
    number: '02',
    title: 'Design & Architecture',
    headline: 'Blueprint for Scale',
    description:
      'We design the system architecture, data models, and UI flows. You get wireframes, technical specs, and a clear roadmap — no surprises.',
    details: ['System design', 'UI wireframes', 'Tech stack selection', 'Sprint planning'],
  },
  {
    number: '03',
    title: 'Build & Iterate',
    headline: 'Ship in Sprints',
    description:
      'Agile, transparent development with weekly demos. You see progress constantly, provide feedback in real time, and stay in full control.',
    details: ['2-week sprints', 'Weekly demos', 'Continuous testing', 'Stakeholder access'],
  },
  {
    number: '04',
    title: 'Launch & Scale',
    headline: 'Go Live, Then Grow',
    description:
      'We handle production deployment, monitoring setup, and post-launch iterations. We stay engaged beyond launch to help you scale.',
    details: ['CI/CD pipeline', 'Monitoring setup', 'Performance tuning', 'Growth support'],
  },
]

function Process() {
  const [headerRef, headerInView] = useInView()

  return (
    <section id="process" data-navbar-light className="bg-brand-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-10 max-w-2xl sm:mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -12 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-block font-brand-secondary text-sm font-semibold uppercase tracking-widest text-brand-secondary"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-brand-primary text-3xl text-brand-primary sm:text-4xl lg:text-5xl"
          >
            From Idea to{' '}
            <span className="text-brand-secondary">Production</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="absolute left-[27px] top-0 bottom-0 hidden w-px bg-brand-border lg:block" />

          <div className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <ProcessStep key={step.number} step={step} index={i} isLast={i === STEPS.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, isLast }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative grid gap-8 lg:grid-cols-[56px_1fr] ${!isLast ? 'pb-12' : ''}`}
    >
      {/* Step dot */}
      <div className="hidden lg:flex flex-col items-center pt-1">
        <div
          className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
            inView
              ? 'border-brand-secondary bg-brand-primary text-white'
              : 'border-brand-border bg-white text-brand-primary/40'
          }`}
        >
          <span className="font-brand-primary text-lg">{step.number}</span>
        </div>
      </div>

      {/* Content */}
      <div className="rounded-2xl border border-brand-border bg-brand-surface p-5 transition-shadow hover:shadow-lg hover:shadow-brand-primary/5 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            {/* Mobile step number */}
            <span className="mb-2 inline-block font-brand-secondary text-xs font-semibold uppercase tracking-widest text-brand-secondary lg:hidden">
              Step {step.number}
            </span>
            <p className="mb-1 font-brand-secondary text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              {step.title}
            </p>
            <h3 className="mb-3 font-brand-primary text-2xl text-brand-primary lg:text-3xl">
              {step.headline}
            </h3>
            <p className="font-brand-secondary text-base leading-relaxed text-brand-primary/60">
              {step.description}
            </p>
          </div>

          {/* Detail tags */}
          <div className="flex flex-wrap items-start gap-2 lg:flex-col lg:flex-nowrap lg:min-w-[180px]">
            {step.details.map((d) => (
              <div
                key={d}
                className="flex items-center gap-2 rounded-lg bg-brand-bg px-3 py-2 font-brand-secondary text-sm text-brand-primary/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Process
