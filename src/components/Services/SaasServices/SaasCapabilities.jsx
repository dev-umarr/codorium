import { motion } from 'framer-motion'

const CAPABILITIES = [
  { title: 'Multi-Tenant Architecture', description: 'Secure, isolated tenant models with row-level security and high-performance database sharding.', icon: <><path d="M4 6.5 12 3l8 3.5v11L12 21l-8-3.5v-11Z" /><path d="M4 6.5 12 10l8-3.5M12 10v11" /></> },
  { title: 'Billing & Subscription Engines', description: 'Seamless Stripe/LemonSqueezy integration handling tiered pricing, usage-based billing, and automated invoicing.', icon: <><rect x="3.5" y="5" width="17" height="14" rx="2" /><path d="M3.5 9h17M8 14h3" /></> },
  { title: 'High-Performance Dashboards', description: 'Lightning-fast analytics interfaces built with modern UI frameworks and optimized state management.', icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 16v-4M12 16V8M16 16v-7" /></> },
  { title: 'Authentication & RBAC', description: 'Enterprise-grade auth with SSO, SAML, multi-factor authentication, and granular role-based access control.', icon: <><path d="M12 3.5 18 6v5.5c0 4-2.5 7.1-6 9-3.5-1.9-6-5-6-9V6l6-2.5Z" /><path d="m9.5 12 1.7 1.7 3.5-3.5" /></> },
  { title: 'API-First Design', description: 'Robust, well-documented REST and GraphQL APIs ready for third-party developer integrations and webhooks.', icon: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></> },
  { title: 'Automated CI/CD & Testing', description: 'Zero-downtime deployment pipelines, automated end-to-end testing, and continuous performance monitoring.', icon: <><path d="M4 12a8 8 0 0 1 13.5-5.8L20 8.5M20 4v4.5h-4.5M20 12a8 8 0 0 1-13.5 5.8L4 15.5M4 20v-4.5h4.5" /></> },
]

function CapabilityIcon({ children }) {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
}

function SaasCapabilities() {
  return (
    <section id="saas-capabilities" className="bg-brand-surface px-6 py-16 sm:px-8 sm:py-20 lg:py-24" aria-labelledby="saas-capabilities-heading">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45 }} className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-secondary sm:text-xs">What we deliver</span>
          <h2 id="saas-capabilities-heading" className="mt-3 font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl">
            Key SaaS <span className="text-brand-secondary">capabilities</span>
          </h2>
          <p className="mt-4 max-w-xl font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/60 sm:text-base">
            Every engagement is built around the core architectural pillars that ensure your SaaS scales securely and gracefully under load.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability, index) => (
            <motion.article key={capability.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: (index % 3) * 0.07 }} whileHover={{ y: -4, borderColor: 'rgba(20,184,166,0.72)' }} className="group flex min-h-[235px] flex-col rounded-xl border border-brand-secondary/25 p-6 shadow-[0_12px_28px_rgba(10,36,99,0.12)] transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(20,184,166,0.2)]" style={{ background: 'linear-gradient(145deg, #10243b 0%, #0b1b31 55%, #091a2d 100%)' }}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-secondary/20 bg-brand-secondary/10 text-brand-secondary shadow-[0_0_16px_rgba(20,184,166,0.12)]"><CapabilityIcon>{capability.icon}</CapabilityIcon></div>
              <h3 className="mt-5 font-brand-primary text-base font-700 leading-tight text-white sm:text-lg">{capability.title}</h3>
              <p className="mt-3 font-brand-secondary text-sm font-normal leading-relaxed text-white/60">{capability.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SaasCapabilities