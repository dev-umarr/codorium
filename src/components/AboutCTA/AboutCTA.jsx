import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { openBookingModal } from '../../utils/calendly'

function ArrowIcon({ direction = 'next' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={direction === 'next' ? 'M3 8h10m0 0L9 4m4 4-4 4' : 'M13 8H3m0 0 4-4M3 8l4 4'}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AboutCTA({
  title = <>Ready To Build The <span className="text-brand-secondary">Future</span> With AI?</>,
  description = 'Partner with Codorium to turn ambitious ideas into intelligent, production-ready systems.',
  contactLabel = 'Contact Us',
  contactHref = 'mailto:hello@codorium.com',
  scheduleLabel = 'Schedule a Meeting',
  scheduleHref = 'mailto:hello@codorium.com?subject=Schedule%20a%20meeting',
  primaryFirst = false,
  flushTop = false,
}) {
  const [ctaRef, ctaInView] = useInView()

  return (
    <section id="about-cta" data-navbar-light className={`bg-brand-surface pb-24 lg:pb-32 ${flushTop ? 'pt-0 lg:pt-0' : 'pt-24 lg:pt-32'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 32 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          className="group relative mb-4 overflow-hidden rounded-2xl px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          style={{
            background: 'linear-gradient(135deg, #0a2463 0%, #091a3a 60%, #062d26 100%)',
            border: '1px solid rgba(20,184,166,0.38)',
            boxShadow: '0 0 22px rgba(20,184,166,0.16), 0 0 3px rgba(20,184,166,0.22), inset 0 0 30px rgba(20,184,166,0.05)',
          }}
          whileHover={{
            borderColor: 'rgba(20,184,166,0.72)',
            boxShadow: '0 0 36px rgba(20,184,166,0.32), 0 0 6px rgba(20,184,166,0.52), 0 8px 48px rgba(0,0,0,0.25), inset 0 0 44px rgba(20,184,166,0.08)',
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="relative flex flex-col items-center gap-5">
            <h2 className="max-w-3xl font-brand-primary text-3xl font-700 leading-tight text-white sm:text-4xl lg:max-w-none lg:whitespace-nowrap lg:text-4xl xl:text-5xl">
              {title}
            </h2>
            <p className="max-w-2xl font-brand-secondary text-base font-normal leading-relaxed text-white/60 sm:text-lg">
              {description}
            </p>

            <div className="mt-4 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <a
                href={contactHref}
                className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-brand-secondary text-sm font-semibold transition-all hover:-translate-y-0.5 sm:w-auto ${
                  primaryFirst
                    ? 'bg-brand-secondary text-brand-primary shadow-lg shadow-brand-secondary/25 hover:bg-brand-secondary-hover'
                    : 'border border-brand-secondary/70 text-brand-secondary hover:bg-brand-secondary/10'
                }`}
              >
                {contactLabel}
                <span className="transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
              </a>
              <a
                href={scheduleHref}
                onClick={(event) => {
                  event.preventDefault()
                  openBookingModal()
                }}
                className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-brand-secondary text-sm font-semibold transition-all hover:-translate-y-0.5 sm:w-auto ${
                  primaryFirst
                    ? 'border border-brand-secondary/70 text-brand-secondary hover:bg-brand-secondary/10'
                    : 'bg-brand-secondary text-brand-primary shadow-lg shadow-brand-secondary/25 hover:bg-brand-secondary-hover'
                }`}
              >
                {scheduleLabel}
                <span className="transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutCTA
