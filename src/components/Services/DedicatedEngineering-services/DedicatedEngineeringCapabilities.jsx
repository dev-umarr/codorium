import { motion } from 'framer-motion'

const CAPABILITIES = [
  ['Embedded Product Squads', 'Add engineers who join your rituals, communication channels, and delivery cadence as a natural extension of your team.'],
  ['Frontend Engineering', 'Build polished, accessible product experiences with engineers who understand your users and your existing design system.'],
  ['Backend & Platform Work', 'Extend services, data models, APIs, and infrastructure without creating another system your team has to untangle later.'],
  ['Feature Delivery', 'Move roadmap priorities from discovery through production with clear ownership, steady communication, and dependable execution.'],
  ['Technical Leadership', 'Bring senior perspective to architecture, trade-offs, code quality, and the decisions that keep delivery moving.'],
  ['Maintenance & Scale', 'Keep improving the product after launch with proactive monitoring, refactoring, performance work, and long-term context.'],
]

const ICONS = [
  <><circle cx="8" cy="8" r="3" /><circle cx="16" cy="8" r="3" /><path d="M3 19c.8-2.7 2.5-4 5-4s4.2 1.3 5 4M11 19c.8-2.7 2.5-4 5-4s4.2 1.3 5 4" /></>,
  <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 16V8h8M8 12h5" /></>,
  <><path d="M4 7h16M4 12h16M4 17h10" /><circle cx="18" cy="17" r="2" /></>,
  <><path d="m5 12 4 4L19 6" /><path d="M4 4v4M20 16v4" /></>,
  <><path d="M12 3 20 7v5c0 4.5-3.5 7.7-8 9-4.5-1.3-8-4.5-8-9V7l8-4Z" /><path d="M9 12h6M12 9v6" /></>,
  <><path d="m4 16 5-5 3 3 7-8" /><path d="M15 6h4v4" /></>,
]

function DedicatedEngineeringCapabilities() {
  return <section id="dedicated-engineering-capabilities" className="bg-brand-surface px-6 py-16 sm:px-8 sm:py-20 lg:py-24" aria-labelledby="dedicated-engineering-capabilities-heading"><div className="mx-auto max-w-7xl"><motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45 }} className="max-w-2xl"><span className="inline-flex items-center rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-secondary sm:text-xs">What we deliver</span><h2 id="dedicated-engineering-capabilities-heading" className="mt-3 font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl">Engineering capacity that <span className="text-brand-secondary">integrates</span></h2><p className="mt-4 max-w-xl font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/60 sm:text-base">A dedicated team should make your product stronger and your internal team faster, not create another layer to manage.</p></motion.div><div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{CAPABILITIES.map(([title, description], index) => <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: (index % 3) * 0.07 }} whileHover={{ y: -4, borderColor: 'rgba(20,184,166,0.72)' }} className="group flex min-h-[225px] flex-col rounded-xl border border-brand-secondary/25 p-6 shadow-[0_12px_28px_rgba(10,36,99,0.12)] transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(20,184,166,0.2)]" style={{ background: 'linear-gradient(145deg, #10243b 0%, #0b1b31 55%, #091a2d 100%)' }}><div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-secondary/20 bg-brand-secondary/10 text-brand-secondary"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[index]}</svg></div><h3 className="mt-5 font-brand-primary text-base font-700 leading-tight text-white sm:text-lg">{title}</h3><p className="mt-3 font-brand-secondary text-sm font-normal leading-relaxed text-white/60">{description}</p></motion.article>)}</div></div></section>
}

export default DedicatedEngineeringCapabilities
