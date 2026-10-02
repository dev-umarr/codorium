import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SERVICE_CARDS = [
  {
    category: 'AI & RAG APPLICATIONS',
    title: 'AI & RAG Applications',
    description: 'Production-ready artificial intelligence systems designed to automate workflows and scale operations without increasing overhead.',
    tags: ['RAG Pipelines', 'LLM Integration', 'AI Agents', 'Vector Search', 'ML Forecasting'],
    icon: 'ai',
    href: '/services/ai-rag-applications',
  },
  {
    category: 'FULL PRODUCT BUILD',
    title: 'Full Product Build',
    description: 'End-to-end product development covering system architecture, user experience design, frontend/backend engineering, and production deployment.',
    tags: ['Product Strategy', 'System Architecture', 'Full-Stack Dev', 'DevOps & Deployment'],
    icon: 'design',
  },
  {
    category: 'MVP TO MARKET',
    title: 'MVP to Market',
    description: 'Rapid, lean minimum viable product development built for investor readiness and fast product validation within a compressed timeline.',
    tags: ['6-8 Week Delivery', 'Scalable Tech', 'Rapid Prototyping', 'Investor-Ready'],
    icon: 'development',
    href: '/services/mvp-development',
  },
  {
    category: 'DEDICATED ENGINEERING',
    title: 'Dedicated Engineering',
    description: 'Add experienced engineers who work like in-house team members — aligned to your sprints, culture, and roadmap. No agency overhead, no ramp-up risk.',
    tags: ['Embedded Pods', 'Sprint Execution', 'React & Next.js', 'API Engineering'],
    icon: 'seo',
    href: '/services/dedicated-engineering',
  },
  {
    category: 'WEB & MOBILE APPS',
    title: 'Web & Mobile Apps',
    description: 'Scalable, high-performance web and mobile applications equipped with real-time dashboards and secure billing architectures.',
    tags: ['React / Next.js', 'Flutter Apps', 'Stripe Billing', 'Real-Time WebSockets'],
    icon: 'saas',
    href: '/services/web-mobile-development',
  },
  {
    category: 'AUTOMATION SYSTEMS',
    title: 'Automation Systems',
    description: 'Secure, rules-based enterprise workflow automation, compliance frameworks, and intelligent routing engines.',
    tags: ['Workflow Automation', 'HIPAA-Compliant', 'Rules-Based Routing', 'Audit Trails'],
    icon: 'marketing',
    href: '/services/automation-systems',
  },
]

function ServiceIcon({ type }) {
  const paths = {
    ai: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 15v-3M12 15V9M16 15v-5" /></>,
    design: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 16V8h8M8 12h5" /></>,
    development: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></>,
    seo: <><path d="M4 7h16M4 12h10M4 17h7" /><path d="m16 15 2 2 4-5" /></>,
    saas: <><path d="M6 18h12a3 3 0 0 0 .5-5.96A6.5 6.5 0 0 0 6 10.5 3.75 3.75 0 0 0 6 18Z" /><path d="M9 14h6M12 12v4" /></>,
    marketing: <><path d="M4 17V7M4 12h4l8-4v8l-8-4H4Z" /><path d="M16 10.5c2 .4 3 1.4 3 3" /></>,
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

function ServiceCard({ service, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -5, borderColor: 'rgba(20,184,166,0.72)', transition: { duration: 0.25, ease: 'easeOut' } }}
      className="group flex min-h-[310px] flex-col rounded-xl border border-brand-secondary/25 p-5 shadow-[0_12px_28px_rgba(10,36,99,0.12)] transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(20,184,166,0.2)] sm:p-6"
      style={{
        background: 'linear-gradient(145deg, #10243b 0%, #0b1b31 55%, #091a2d 100%)',
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-md border border-brand-secondary/25 bg-brand-secondary/10 text-brand-secondary shadow-[0_0_16px_rgba(20,184,166,0.12)]">
          <span className="h-5 w-5"><ServiceIcon type={service.icon} /></span>
        </div>
        <span className="pt-1 font-brand-secondary text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-secondary">
          {service.category}
        </span>
      </div>

      <h3 className="mt-5 font-brand-primary text-lg font-700 leading-tight text-white">{service.title}</h3>
      <p className="mt-3 font-brand-secondary text-xs leading-relaxed text-white/60">{service.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-brand-secondary/45 px-2.5 py-1 font-brand-secondary text-[9px] leading-tight text-white/70">
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={service.href || '/contact'}
        className="mt-auto inline-flex w-fit items-center gap-1.5 pt-6 font-brand-secondary text-xs font-semibold text-brand-secondary transition-colors hover:text-brand-secondary-hover"
      >
        Learn More
        <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
      </Link>
    </motion.article>
  )
}

function ServicesGrid() {
  return (
    <motion.section
      id="core-capabilities"
      className="bg-brand-surface px-6 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:pb-32 lg:pt-20"
      aria-labelledby="core-capabilities-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.16em] text-brand-secondary">
            Our Services
          </span>
          <h2 id="core-capabilities-heading" className="mt-5 font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl">
            Everything You Need. Under <span className="text-brand-secondary">One Roof.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-brand-secondary text-sm leading-relaxed text-brand-primary/60 sm:text-base">
            Codorium combines strategy, design, engineering, and growth capabilities to help ambitious teams build, launch, and scale with confidence.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((service, index) => (
            <ServiceCard key={service.category} service={service} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ServicesGrid
