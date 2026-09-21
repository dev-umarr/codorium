import { motion } from 'framer-motion'

const PROCESS_STEPS = [
  {
    title: 'Planning',
    description: 'We start by listening. Your goals shape everything we build.',
    icon: <><rect x="6" y="5" width="12" height="15" rx="1.5" /><path d="M9 5V3.5h6V5M9 10h6M9 14h4" /></>,
  },
  {
    title: 'Design',
    description: 'Clean, intuitive, and made for your users to love and keep returning for more.',
    icon: <><path d="m14.5 4.5 5 5-9.5 9.5-4-1 1-4 9.5-9.5Z" /><path d="m13 6 5 5M5 19l3-1" /></>,
  },
  {
    title: 'Development',
    description: "Behind every line of code, there's intent. Engineered for your workflow.",
    icon: <><path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 4l-2 16" /></>,
  },
  {
    title: 'QA Testing',
    description: 'We stress-test it so your team never has to.',
    icon: <><path d="m12 3 7 3v5c0 4.5-3 7.8-7 10-4-2.2-7-5.5-7-10V6l7-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
  },
  {
    title: 'Deployment',
    description: "Go live in days. We're with you at every step.",
    icon: <><path d="M4 14c4-1 6-4 7-9 4 1 7 4 8 8-2 4-5 6-9 7l-3-3-3-3Z" /><path d="M8 16 4 20M7 12H4M12 17v3" /></>,
  },
  {
    title: 'Support',
    description: 'Ongoing monitoring and optimization long after launch.',
    icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8M12 8v8M8 8h.01M16 16h.01" /></>,
  },
]

function ProcessStepIcon({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

function ProcessSection() {
  return (
    <section
      id="services-process"
      data-navbar-light
      className="bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0"
      aria-labelledby="services-process-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-brand-secondary/60 bg-brand-secondary/5 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.16em] text-brand-secondary">
            Our Process
          </span>
          <h2 id="services-process-heading" className="mx-auto mt-5 max-w-3xl font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl">
            A six-step process, proven across <span className="text-brand-secondary">120+ projects</span>
          </h2>
        </motion.div>

        <div className="relative mt-14 lg:mt-20">
          <div className="absolute left-[8.333%] right-[8.333%] top-8 hidden h-px bg-brand-secondary/45 lg:block" aria-hidden="true" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {PROCESS_STEPS.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#dcecf7] bg-[#060e1f] text-brand-secondary shadow-[0_0_0_1px_rgba(10,36,99,0.08),0_0_20px_rgba(20,184,166,0.15)]">
                  <span className="h-7 w-7"><ProcessStepIcon>{step.icon}</ProcessStepIcon></span>
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-secondary font-brand-secondary text-[10px] font-bold text-[#06241f] shadow-[0_0_0_2px_#f0f6fc]">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-brand-primary text-lg font-700 leading-tight text-brand-primary">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-[190px] font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/65">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
