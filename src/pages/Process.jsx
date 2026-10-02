import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import processImageUrl from '../assets/Process/team-sprint-planning.png'
import AboutCTA from '../components/AboutCTA/AboutCTA'
import { NeuralCanvas } from '../components/Hero/Hero'
import Seo from '../components/SEO/Seo'
import Testimonials from '../components/Testimonials/Testimonials'

const PROCESS_STAGES = [
  {
    number: '1',
    title: 'Discovery & Strategy',
    subItems: ['Stakeholder input', 'Requirements', 'AI readiness', 'Project brief'],
    icon: 'document',
    accent: '#5dd8ca',
  },
  {
    number: '2',
    title: 'Solution Design',
    subItems: ['Architecture', 'Tech stack', 'Prototypes', 'Design doc'],
    icon: 'shield',
    accent: '#a9a0ff',
  },
  {
    number: '3',
    title: 'Development & Engineering',
    subItems: ['Two-week sprints', 'Working builds', 'Demo cadence', 'Sprint releases'],
    icon: 'code',
    accent: '#9ee58b',
  },
  {
    number: '4',
    title: 'Testing & QA',
    subItems: ['Model validation', 'Security review', 'Performance checks', 'QA report'],
    icon: 'send',
    accent: '#f7d9a1',
  },
  {
    number: '5',
    title: 'Deployment & Integration',
    subItems: ['Production rollout', 'Team training', 'Tool integration', 'Live system demo'],
    icon: 'dollar',
    accent: '#f4c4c4',
  },
  {
    number: '6',
    title: 'Support & Optimization',
    subItems: ['Monitoring', 'Usage analytics', 'Continuous improvement', 'Monthly report'],
    icon: 'alert',
    accent: '#b9dcf2',
  },
]

const DELIVERY_PRINCIPLES = [
  {
    title: 'Agile Sprints',
    description: 'Two-week iteration cycles with a working build to review at the end of every sprint.',
    icon: '▮',
    dark: false,
  },
  {
    title: 'Dedicated Pod',
    description: 'The same fixed team from kickoff to launch - never a rotating cast of contractors.',
    icon: '◆',
    dark: true,
  },
  {
    title: 'Transparent Reporting',
    description: 'Weekly demos and a live dashboard so you can progress without asking for it.',
    icon: '▤',
    dark: false,
  },
  {
    title: 'Rigorous QA',
    description: 'Automated test suites plus manual review at every stage gate before sign-off.',
    icon: '✓',
    dark: true,
  },
  {
    title: 'Secure by Design',
    description: 'Data privacy and compliance requirements are built in from the architecture stage, not bolted on.',
    icon: '◈',
    dark: false,
  },
  {
    title: 'Scalable Architecture',
    description: 'Systems built to handle 10x your current load without a rebuild.',
    icon: '↗',
    dark: true,
  },
]

const MIXED_GRADIENT = 'linear-gradient(175deg, #071e1a 0%, #060e1f 50%, #091a3a 100%)'

const TIMELINE_MILESTONES = [
  { timeframe: 'Week 1–2', title: 'Discovery', description: 'Requirements & design' },
  { timeframe: 'Week 3–6', title: 'Build', description: 'Sprint development' },
  { timeframe: 'Week 7–8', title: 'Test & Launch', description: 'QA and rollout' },
  { timeframe: 'Ongoing', title: 'Optimize', description: 'Monitoring & support' },
]

const PROCESS_FAQS = [
  {
    question: 'What does the discovery phase involve?',
    answer: 'We map your goals, users, constraints, technical landscape, and AI-readiness so the project starts with a clear, shared direction.',
  },
  {
    question: 'How do you handle scope changes mid-project?',
    answer: 'We review the impact together, document the tradeoffs, and agree on the updated scope, timeline, and priorities before moving forward.',
  },
  {
    question: 'Will we have a dedicated point of contact?',
    answer: 'Yes. Your dedicated team keeps communication clear from kickoff through launch, with regular demos and a predictable feedback loop.',
  },
  {
    question: 'What if we need ongoing support after launch?',
    answer: 'We offer post-launch monitoring, optimization, and continued engineering support so your system keeps improving as your needs evolve.',
  },
  {
    question: 'How do you ensure data security throughout development?',
    answer: 'Security and privacy requirements are considered from architecture through deployment, with appropriate access controls, reviews, and safeguards built into the process.',
  },
]

function StageIcon({ type }) {
  const paths = {
    document: <><path d="M7 3.5h7l3 3V20H7z" /><path d="M14 3.5V7h3M10 11h4M10 14h4M10 17h3" /></>,
    shield: <><path d="m12 3 7 3v5c0 4.5-3 7.8-7 10-4-2.2-7-5.5-7-10V6l7-3Z" /><path d="m8.5 11.8 2.2 2.2 4.8-5" /></>,
    code: <><path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 4l-2 16" /></>,
    send: <path d="m3 11 18-8-8 18-2.5-7.5L3 11Z" />,
    dollar: <><path d="M12 3v18M16 7.5c-.8-1-2-1.5-4-1.5-2.3 0-4 1.1-4 3s1.7 3 4 3 4 1.1 4 3-1.7 3-4 3c-2 0-3.2-.5-4-1.5" /></>,
    alert: <><path d="M12 3 21 7.5v9L12 21l-9-4.5v-9L12 3Z" /><path d="M12 8v5M12 16h.01" /></>,
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

function ProcessStage({ stage, index }) {
  const stageLabel = stage.number.padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-brand-secondary/20 p-7 shadow-[0_24px_48px_-20px_rgba(10,36,99,0.45)] transition-[border-color,box-shadow] duration-500 hover:border-brand-secondary/50 hover:shadow-[0_32px_60px_-20px_rgba(20,184,166,0.35)] sm:p-8"
      style={{ background: 'linear-gradient(150deg, #0a2463 0%, #091a3a 55%, #062d26 100%)' }}
    >
      {/* Top highlight line */}
      <span
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/70 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      {/* Hover glow */}
      <span
        className="pointer-events-none absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.55) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Subtle grid texture */}
      <span
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
        aria-hidden="true"
      />
      {/* Watermark number */}
      <span
        className="pointer-events-none absolute -bottom-6 -right-2 -z-10 select-none font-brand-primary text-[8.5rem] font-700 leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-brand-secondary/[0.08]"
        aria-hidden="true"
      >
        {stageLabel}
      </span>

      <div className="flex items-start justify-between gap-4">
        <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-secondary text-brand-primary shadow-[0_0_24px_rgba(20,184,166,0.35)] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
          <span className="h-7 w-7"><StageIcon type={stage.icon} /></span>
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-brand-secondary text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 backdrop-blur-sm">
          Stage <span className="text-brand-secondary">{stageLabel}</span>
        </span>
      </div>

      <h3 className="mt-7 font-brand-primary text-xl font-700 leading-snug text-white sm:text-[1.35rem]">
        {stage.title}
      </h3>

      <div className="mt-5 h-px w-full bg-gradient-to-r from-brand-secondary/40 via-white/10 to-transparent" aria-hidden="true" />

      <ul className="mt-5 grid flex-1 grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
        {stage.subItems.map((item) => (
          <li key={item} className="flex items-start gap-2.5 font-brand-secondary text-sm font-normal leading-snug text-white/65">
            <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-secondary/15 text-brand-secondary" aria-hidden="true">
              <svg viewBox="0 0 12 12" fill="none" className="h-2.5 w-2.5">
                <path d="m2.5 6.2 2.2 2.2 4.8-4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
function ProcessFaqs() {
  const [openIndex, setOpenIndex] = useState(1)

  function toggle(index) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <motion.section
      id="process-faqs"
      data-navbar-light
      className="bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0"
      aria-labelledby="process-faqs-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.14em] text-brand-secondary">
            FAQ
          </span>
          <h2 id="process-faqs-heading" className="mt-5 font-brand-primary text-4xl font-700 leading-tight text-brand-primary sm:text-5xl">
            Process <span className="text-brand-secondary">Questions</span>
          </h2>
        </motion.div>

        <div className="mt-10 flex flex-col gap-3">
          {PROCESS_FAQS.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-lg shadow-brand-primary/5"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`process-faq-answer-${index}`}
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors hover:bg-brand-bg sm:px-7"
                >
                  <span className="font-brand-primary text-base font-600 text-brand-primary sm:text-lg">
                    {item.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-secondary/20 font-brand-secondary text-xl leading-none text-brand-secondary">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={`process-faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-6 pb-6 font-brand-secondary text-sm leading-relaxed text-brand-primary/60 sm:px-7 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

function Process() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Seo
        title="Our Process"
        description="See how Codorium turns ambitious AI ideas into transparent, production-ready systems through a proven delivery process."
        path="/process"
      />

      <motion.section
        className="relative isolate flex min-h-[calc(100vh-1px)] items-center overflow-hidden bg-[#060e1f]"
        aria-labelledby="process-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <NeuralCanvas />

        <div
          className="pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] opacity-18"
          style={{ background: 'radial-gradient(circle at 70% 30%, #14b8a6 0%, transparent 60%)' }}
        />
        <div
          className="pointer-events-none absolute bottom-0 -left-20 h-[400px] w-[400px] opacity-20"
          style={{ background: 'radial-gradient(circle, #0a2463 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage: `radial-gradient(circle at 12% 24%, rgba(20, 184, 166, 0.18) 0 1px, transparent 1.5px), radial-gradient(circle at 78% 18%, rgba(255, 255, 255, 0.32) 0 1px, transparent 1.5px), radial-gradient(circle at 64% 76%, rgba(20, 184, 166, 0.2) 0 1px, transparent 1.5px), radial-gradient(circle at 35% 88%, rgba(255, 255, 255, 0.2) 0 1px, transparent 1.5px)`,
            backgroundSize: '220px 220px, 310px 310px, 270px 270px, 380px 380px',
          }}
        />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 68%)' }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: 'linear-gradient(160deg, transparent 0%, rgba(9, 26, 58, 0.8) 48%, rgba(7, 46, 40, 0.65) 100%)',
          }}
        />

        <div className="relative mx-auto w-full max-w-5xl px-6 py-32 text-center sm:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-brand-secondary/60 bg-brand-secondary/5 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary sm:text-sm"
          >
            <span aria-hidden="true">+</span>
            How We Work
          </motion.div>

          <motion.h1
            id="process-title"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-brand-primary text-5xl font-normal leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-brand-secondary to-[#2dd4bf] bg-clip-text text-transparent">
              Process
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl font-brand-secondary text-base font-normal leading-relaxed text-white/60 sm:text-lg"
          >
            A proven, transparent framework for turning ambitious AI ideas into production-ready
            systems - on time, on budget, with no black boxes along the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-secondary px-7 py-3.5 font-brand-secondary text-base font-semibold text-[#06241f] transition-all hover:-translate-y-px hover:bg-brand-secondary-hover hover:shadow-lg hover:shadow-brand-secondary/35"
            >
              Start a Project
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 font-brand-secondary text-base font-semibold text-white transition-all hover:-translate-y-px hover:border-brand-secondary hover:bg-brand-secondary/10 hover:text-brand-secondary"
            >
              Talk to Our Team
            </Link>
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 mb-[-1px] w-full overflow-hidden leading-none"
          style={{ lineHeight: 0 }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block h-[72px] w-full"
            style={{ display: 'block', lineHeight: 0 }}
            preserveAspectRatio="none"
          >
            <path
              d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </motion.section>

      <motion.section
        id="process-overview"
        data-navbar-light
        className="overflow-hidden bg-brand-surface pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pb-32 lg:pt-20"
        aria-labelledby="process-overview-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div
              className="absolute -left-3 -top-6 z-10 rounded-2xl border border-white/10 bg-[#0b1628] px-6 py-5 text-center shadow-xl shadow-brand-primary/15 sm:-left-5 sm:-top-6"
              style={{
                background: 'linear-gradient(135deg, #0a2463 0%, #091a3a 60%, #062d26 100%)',
                border: '1px solid rgba(20,184,166,0.38)',
                boxShadow: '0 0 22px rgba(20,184,166,0.16), 0 0 3px rgba(20,184,166,0.22), inset 0 0 30px rgba(20,184,166,0.05)',
              }}
            >
              <p className="font-brand-primary text-xl font-700 text-brand-secondary sm:text-2xl">6 Stages</p>
              <p className="mt-0.5 font-brand-secondary text-xs text-white/75 sm:text-sm">Delivery framework</p>
            </div>

            <img
              src={processImageUrl}
              alt="Team collaborating during sprint planning"
              className="aspect-[1.45] w-full rounded-2xl object-cover shadow-xl shadow-brand-primary/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
          >
            <span className="inline-flex rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.14em] text-brand-secondary">
              Our Process
            </span>

            <h2
              id="process-overview-heading"
              className="mt-7 max-w-xl font-brand-primary text-4xl font-700 leading-[1.08] text-brand-primary sm:text-5xl"
            >
              A process built on <span className="text-brand-secondary">clarity</span>, not guesswork
            </h2>

            <div className="mt-7 max-w-xl space-y-5 font-brand-secondary text-base font-normal leading-relaxed text-brand-primary/65 sm:text-lg">
              <p>
                Every Codorium engagement follows the same disciplined framework - regardless of size or industry. You always know what phase you&apos;re in, what&apos;s shipping next, and who owns it.
              </p>
              <p>
                No black-box AI, no surprise scope creep. Just a clear line from first conversation to a system your team actually uses.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { value: '6', label: 'Stages' },
                { value: '2-Wk', label: 'Sprints' },
                { value: '100%', label: 'Milestone visibility' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: 'easeOut' }}
                  className="rounded-2xl px-4 py-4 text-center"
                  style={{
                    background: 'linear-gradient(135deg, #0a2463 0%, #091a3a 60%, #062d26 100%)',
                    border: '1px solid rgba(20,184,166,0.38)',
                    boxShadow: '0 0 22px rgba(20,184,166,0.16), 0 0 3px rgba(20,184,166,0.22), inset 0 0 30px rgba(20,184,166,0.05)',
                  }}
                >
                  <p className="font-brand-primary text-lg font-700 text-brand-secondary sm:text-xl">{stat.value}</p>
                  <p className="mt-1 font-brand-secondary text-xs text-white/65 sm:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="six-stages"
        data-navbar-light
        className="overflow-hidden bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0"
        aria-labelledby="six-stages-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex rounded-full border border-brand-secondary/70 px-4 py-1 font-brand-secondary text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-secondary">
          The Framework
            </span>
            <h2 id="six-stages-heading" className="mt-5 font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-4xl lg:text-5xl">
              Six Stages, <span className="text-brand-secondary">Zero</span> Ambiguity
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/60">
              Each stage ends with a concrete deliverable and a clear checkpoint before we move forward.
            </p>
          </motion.div>

          <div className="relative mt-14 lg:mt-20">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-3xl"
              style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {PROCESS_STAGES.map((stage, index) => (
                <ProcessStage key={stage.number} stage={stage} index={index} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="how-we-deliver"
        data-navbar-light
        className="bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0"
        aria-labelledby="how-we-deliver-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.14em] text-brand-secondary">
              Methodology
            </span>
            <h2 id="how-we-deliver-heading" className="mt-5 font-brand-primary text-4xl font-700 leading-tight text-brand-primary sm:text-5xl">
              How We <span className="text-brand-secondary">Deliver</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-brand-secondary text-base font-normal leading-relaxed text-brand-primary/60">
              The habits and safeguards that keep every project predictable.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERY_PRINCIPLES.map((principle, index) => (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
                className={`group min-h-[226px] rounded-2xl border p-6 shadow-lg transition-transform duration-200 ${
                  principle.dark
                    ? 'border-white/8 bg-[#0b1628] text-white shadow-brand-primary/15'
                    : 'border-brand-border bg-brand-surface text-brand-primary shadow-brand-primary/5'
                }`}
                style={principle.dark ? { background: MIXED_GRADIENT } : undefined}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-lg ${
                    principle.dark
                      ? 'bg-brand-secondary text-brand-primary'
                      : 'bg-brand-bg text-brand-primary'
                  }`}
                  aria-hidden="true"
                >
                  <span className="h-6 w-6">{principle.icon}</span>
                </span>
                <h3 className={`mt-6 font-brand-primary text-xl font-700 ${principle.dark ? 'text-white' : 'text-brand-primary'}`}>
                  {principle.title}
                </h3>
                <p className={`mt-3 max-w-sm font-brand-secondary text-sm font-normal leading-relaxed ${principle.dark ? 'text-white/70' : 'text-brand-primary/65'}`}>
                  {principle.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="timeline"
        data-navbar-light
        className="overflow-hidden bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0"
        aria-labelledby="timeline-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.14em] text-brand-secondary">
              Timeline
            </span>
            <h2 id="timeline-heading" className="mt-5 whitespace-normal font-brand-primary text-xl font-700 leading-tight text-brand-primary sm:whitespace-nowrap sm:text-5xl">
              What To <span className="text-brand-secondary">Expect</span>, Week By Week
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-brand-secondary text-base font-normal leading-relaxed text-brand-primary/60">
              A typical mid-sized engagement runs 8–10 weeks from kickoff to launch.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {},
            }}
            className="relative mx-auto mt-12 max-w-6xl overflow-visible"
          >
            <div className="relative -my-5 min-w-[720px] overflow-x-auto px-2 pb-4 pt-6">
              {/* Rail spans first to last circle centre: pt-6 (24px) + half of h-8 (16px) = 40px; px-2 + gap-5 accounted for horizontally */}
              <div className="pointer-events-none absolute left-[calc(8px+(100%-76px)/8)] right-[calc(8px+(100%-76px)/8)] top-[40px] z-0 h-[2px] -translate-y-1/2" aria-hidden="true">
                <motion.span
                  initial={{ width: '0%' }}
                  animate={{
                    width: ['0%', '0%', '33.333%', '33.333%', '66.666%', '66.666%', '100%', '100%'],
                  }}
                  transition={{
                    duration: 10,
                    ease: 'linear',
                    repeat: Infinity,
                    times: [0, 0.1, 0.3, 0.4, 0.6, 0.7, 0.9, 1],
                  }}
                  className="absolute left-0 top-0 block h-full rounded-full bg-brand-secondary"
                />
              </div>
              <div className="flex w-full flex-row flex-nowrap gap-5">
                {TIMELINE_MILESTONES.map((milestone, index) => (
                  <motion.article
                    key={milestone.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
                    className="group relative min-w-0 flex-1 text-center"
                  >
                    <span className="relative z-10 mx-auto flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-secondary bg-brand-surface shadow-[0_0_0_3px_rgba(20,184,166,0.12),0_0_18px_rgba(20,184,166,0.25)]">
                      <span className="h-3.5 w-3.5 rounded-full bg-brand-secondary transition-transform group-hover:scale-125" />
                    </span>
                    <div className="mt-5">
                      <p className="font-brand-primary text-xl font-700 text-brand-secondary">{milestone.timeframe}</p>
                      <h3 className="mt-1 font-brand-primary text-xl font-700 text-brand-primary">{milestone.title}</h3>
                      <p className="mt-3 max-w-sm font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/65">{milestone.description}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Testimonials />
      <ProcessFaqs />
      <AboutCTA
        title={<>Ready To Start Your <span className="text-brand-secondary">Project?</span></>}
        description="Let's map out your first milestone together."
        contactLabel="Contact Us"
        contactHref="/contact"
        scheduleLabel="Schedule a Call"
        scheduleHref="mailto:hello@codorium.com?subject=Schedule%20a%20call"
        flushTop
      />
    </motion.main>
  )
}

export default Process
