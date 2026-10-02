import { motion } from 'framer-motion'

const REASONS = [
  { title: 'MVP to Enterprise Roadmap', description: 'We architect your product to handle your first 100 users just as smoothly as your next 100,000 without a complete rewrite.' },
  { title: 'Transparent, Agile Sprints', description: 'No black boxes. You get working weekly increments, continuous feedback loops, and clear milestone timelines.' },
  { title: 'Security & Compliance First', description: 'Data privacy, encrypted data stores, and rigorous security protocols baked into the foundation, not bolted on later.' },
]

function CheckIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>
}

function WhyChooseSaas() {
  return (
    <motion.section id="why-choose-saas" className="bg-brand-surface px-6 py-16 sm:px-8 sm:py-20 lg:py-24" aria-labelledby="why-choose-saas-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="self-start lg:sticky lg:top-24">
          <span className="inline-flex items-center rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-secondary sm:text-xs">WHY CODORIUM SAAS</span>
          <h2 id="why-choose-saas-heading" className="mt-5 max-w-xl font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl">
            Why choose <span className="text-brand-secondary">Codorium</span> for SaaS development
          </h2>
          <p className="mt-5 max-w-xl font-brand-secondary text-base font-normal leading-relaxed text-brand-primary/60 sm:text-lg">
            Building a SaaS isn&apos;t just writing code; it&apos;s engineering a sustainable business asset. We focus on scalability, maintainability, and clean architecture from day one.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {REASONS.map((reason, index) => (
            <motion.article key={reason.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.08 + index * 0.1, ease: 'easeOut' }} whileHover={{ y: -4, borderColor: 'rgba(20,184,166,0.72)', transition: { duration: 0.25, ease: 'easeOut' } }} className="group rounded-2xl border border-brand-secondary/25 p-6 shadow-[0_12px_28px_rgba(10,36,99,0.12)] transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(20,184,166,0.2)] sm:p-7" style={{ background: 'linear-gradient(145deg, #10243b 0%, #0b1b31 55%, #091a2d 100%)' }}>
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-secondary/20 bg-brand-secondary/15 text-brand-secondary transition-colors group-hover:bg-brand-secondary group-hover:text-brand-primary"><CheckIcon /></div>
                <div>
                  <h3 className="font-brand-primary text-lg font-700 leading-tight text-white sm:text-xl">{reason.title}</h3>
                  <p className="mt-2 font-brand-secondary text-sm font-normal leading-relaxed text-white/60 sm:text-base">{reason.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default WhyChooseSaas