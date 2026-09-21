import { motion } from 'framer-motion'
import foundationImageUrl from '../../assets/about-us/Foundation.jpeg'

const FOUNDATION_POINTS = [
  {
    title: 'Goals',
    text: 'A world where every business, big or small, has access to technology that actually moves them an edge. Not general.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.64 5.64l2.83 2.83m7.06 7.06l2.83 2.83m0-12.72l-2.83 2.83m-7.06 7.06l-2.83 2.83" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Mission',
    text: 'To make advanced AI practical, secure, and profitable for every industry we serve.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3.5v3m0 11v3M3.5 12h3m11 0h3M6 6l2.15 2.15m7.7 7.7L18 18m0-12l-2.15 2.15m-7.7 7.7L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 9.5v5m-2.5-2.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Vision',
    text: 'A world where every business decision is elevated by intelligent, transparent AI.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
]

function Foundation() {
  return (
    <section
      id="foundation"
      data-navbar-light
      className="overflow-hidden bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0"
      aria-labelledby="foundation-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-6 flex items-center gap-2" aria-hidden="true">
            <span className="h-px w-16 bg-brand-primary/40" />
            {[0, 1, 2].map((diamond) => (
              <span key={diamond} className="h-5 w-5 rotate-45 bg-brand-secondary" />
            ))}
            <span className="h-px w-16 bg-brand-primary/40" />
          </div>

          <h2 id="foundation-heading" className="font-brand-primary text-4xl font-700 leading-tight text-brand-primary sm:text-5xl">
            Our Foundation
          </h2>

          <div className="mt-12 flex flex-col gap-9">
            {FOUNDATION_POINTS.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`flex items-start gap-5 ${
                  index === 0
                    ? 'lg:ml-44'
                    : index === 2
                      ? 'lg:ml-52'
                      : ''
                }`}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#0b1628] text-brand-secondary shadow-lg shadow-brand-primary/10">
                  <span className="h-8 w-8">{point.icon}</span>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-brand-primary text-2xl font-700 text-brand-primary">
                    Our <span className="text-brand-secondary">{point.title}</span>
                  </h3>
                  <p className="mt-2 max-w-md font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/65 sm:text-base">
                    {point.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
          className="flex justify-center bg-white lg:justify-end"
        >
          <img
            src={foundationImageUrl}
            alt="Codorium team collaborating on strategy and AI systems"
            className="w-full max-w-[680px] object-contain"
            style={{ filter: 'brightness(1.032)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Foundation
