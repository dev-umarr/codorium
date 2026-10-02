import { motion } from 'framer-motion'

const VALUES = [
  {
    title: 'Expert Teams',
    description: 'Our specialists have deep expertise in their respective fields with years of proven experience.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 18c.4-2.7 2-4 4.5-4s4.1 1.3 4.5 4M11.5 18c.4-2.7 2-4 4.5-4s4.1 1.3 4.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Fast Delivery',
    description: 'We use agile methodologies to deliver projects on time without compromising quality.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m13.5 4.5 6 6-8.5 8.5-4-4 6.5-6.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="m7 13-3 3m7-9 3-3M8 20l-4-4m12-3 3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="15.5" cy="8.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Proven Process',
    description: 'Our established workflows ensure consistency, quality, and successful project outcomes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3.5 14 5l2.5-.25.8 2.4 2.2 1.25-.8 2.4.8 2.4-2.2 1.25-.8 2.4L14 16.6l-2 1.5-2-1.5-2.5.25-.8-2.4-2.2-1.25.8-2.4-.8-2.4 2.2-1.25.8-2.4L10 5l2-1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="m9.5 11.5 1.7 1.7 3.4-3.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Data-Driven',
    description: 'Every decision is backed by data and analytics to maximize your return on investment.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 8.5v3.5l2.5 1.5M8.5 15.5l2-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Client Focused',
    description: "Your success is our success. We're committed to understanding and exceeding your goals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m8 12 3 3 7.5-7.5a2.1 2.1 0 0 1 3 3L12.5 19.5a2.1 2.1 0 0 1-3 0l-5-5a2.1 2.1 0 0 1 3-3L8 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Measurable Results',
    description: 'We provide detailed metrics and reporting to track progress and demonstrate impact.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="m7.5 15 3-3 2 1.5 4-4M16.5 9.5v3h-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const MIXED_GRADIENT = 'linear-gradient(175deg, #071e1a 0%, #060e1f 50%, #091a3a 100%)'

function CoreValues() {
  return (
    <motion.section
      id="core-values"
      data-navbar-light
      className="bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0"
      aria-labelledby="core-values-heading"
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
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.14em] text-brand-secondary">
            Core Values
          </span>
          <h2 id="core-values-heading" className="mt-5 font-brand-primary text-4xl font-700 leading-tight text-brand-primary sm:text-5xl">
            Why Choose <span className="text-brand-secondary">Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-brand-secondary text-base font-normal leading-relaxed text-brand-primary/60">
            Building innovative, scalable, and reliable digital solutions that help businesses grow with confidence.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, index) => {
            const dark = index % 2 === 1
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
                className={`min-h-[226px] rounded-2xl border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 ${
                  dark
                    ? 'border-white/8 bg-[#0b1628] text-white shadow-brand-primary/15'
                    : 'border-brand-border bg-brand-surface text-brand-primary shadow-brand-primary/5'
                }`}
                style={['Fast Delivery', 'Data-Driven', 'Measurable Results'].includes(value.title)
                  ? { background: MIXED_GRADIENT }
                  : undefined}
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${dark ? 'bg-brand-secondary text-brand-primary' : 'bg-brand-bg text-brand-primary'}`}>
                  <span className="h-6 w-6">{value.icon}</span>
                </div>
                <h3 className={`mt-6 font-brand-primary text-xl font-700 ${dark ? 'text-white' : 'text-brand-primary'}`}>
                  {value.title}
                </h3>
                <p className={`mt-3 max-w-sm font-brand-secondary text-sm font-normal leading-relaxed ${dark ? 'text-white/70' : 'text-brand-primary/65'}`}>
                  {value.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default CoreValues
