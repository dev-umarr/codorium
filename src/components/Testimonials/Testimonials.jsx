import { useState } from 'react'
import { motion } from 'framer-motion'
import testimonialsProfileUrl from '../../assets/images/Testimonials-Profile.jpg'

const TESTIMONIALS = [
  {
    quote: 'Working with Codorium was a fantastic experience. Their team understood our vision quickly and delivered a scalable solution that exceeded our expectations. Communication was smooth throughout the project.',
    name: 'Sarah Chen',
    role: 'VP Product, Finovate',
  },
  {
    quote: 'Codorium brought clarity to a complex build and moved from strategy to a working product with remarkable speed. The result gave our team confidence to scale.',
    name: 'Marcus Lee',
    role: 'Founder, Northstar Labs',
  },
  {
    quote: 'The Codorium team felt like an extension of our company from day one. They cared about the details, explained every tradeoff, and shipped an experience our customers love.',
    name: 'Priya Shah',
    role: 'COO, Atlas Commerce',
  },
]

function ArrowIcon({ direction }) {
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

function TestimonialCard({ testimonial, variant = 'default' }) {
  const isDedicated = variant === 'dedicated'

  return (
    <motion.article
      initial={isDedicated ? { opacity: 0, y: 18 } : false}
      whileInView={isDedicated ? { opacity: 1, y: 0 } : undefined}
      viewport={isDedicated ? { once: true, amount: 0.2 } : undefined}
      whileHover={isDedicated ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={[
        'relative flex min-h-[300px] w-[min(82vw,360px)] shrink-0 flex-col rounded-2xl p-6 shadow-lg sm:w-[360px]',
        isDedicated
          ? 'border border-brand-border bg-white shadow-[0_18px_40px_rgba(10,36,99,0.08)] after:absolute after:-bottom-3 after:left-8 after:h-6 after:w-6 after:rotate-45 after:border-b after:border-r after:border-brand-border after:bg-white'
          : 'border border-brand-border bg-brand-surface shadow-brand-primary/10 after:absolute after:-bottom-3 after:left-8 after:h-6 after:w-6 after:rotate-45 after:border-b after:border-r after:border-brand-border after:bg-brand-surface',
      ].join(' ')}
    >
      {isDedicated && (
        <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl" aria-hidden="true" />
      )}

      <p className={[
        'relative z-10 flex-1 font-brand-secondary text-sm font-normal leading-relaxed',
        isDedicated ? 'text-brand-primary/70' : 'text-brand-primary/70',
      ].join(' ')}>
        {testimonial.quote}
      </p>

      <div className={[
        'relative z-10 mt-6 flex items-center gap-1',
        isDedicated ? 'text-brand-secondary' : 'text-brand-secondary',
      ].join(' ')} aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} aria-hidden="true">★</span>
        ))}
      </div>

      <div className={[
        'relative z-10 mt-5 flex items-center gap-3 border-t pt-4',
        isDedicated ? 'border-brand-border' : 'border-brand-border',
      ].join(' ')}>
        <img
          src={testimonialsProfileUrl}
          alt=""
          className="h-10 w-10 rounded-full object-cover object-top"
        />
        <div>
          <p className={[
            'font-brand-secondary text-sm font-semibold',
            isDedicated ? 'text-brand-primary' : 'text-brand-primary',
          ].join(' ')}>{testimonial.name}</p>
          <p className={[
            'font-brand-secondary text-xs font-normal',
            isDedicated ? 'text-brand-primary/45' : 'text-brand-primary/45',
          ].join(' ')}>{testimonial.role}</p>
        </div>
      </div>
    </motion.article>
  )
}

function Testimonials({ variant = 'default' }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const isDedicated = variant === 'dedicated'

  function move(direction) {
    setActiveIndex((current) => {
      if (direction === 'next') return (current + 1) % TESTIMONIALS.length
      return (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    })
  }

  return (
    <motion.section
      id="testimonials"
      data-navbar-light
      className={[
        'relative overflow-hidden px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0',
        isDedicated ? 'bg-brand-surface' : 'bg-brand-surface',
      ].join(' ')}
      aria-labelledby="testimonials-heading"
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
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="mt-5 font-brand-primary text-4xl font-700 leading-tight text-brand-primary sm:text-5xl">
            What Our <span className="text-brand-secondary">Partners</span> Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-brand-secondary text-base font-normal leading-relaxed text-brand-primary/60">
            Hear directly from the businesses that trust Codorium to turn their ideas into successful digital solutions.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="font-brand-primary text-[7rem] font-700 leading-[0.55] text-brand-secondary" aria-hidden="true">“</div>
            <h3 className="mt-12 max-w-xs font-brand-primary text-4xl font-700 leading-tight text-brand-primary sm:text-5xl">
              What Our Customers are saying
            </h3>
            <p className="mt-7 max-w-xs font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/60 sm:text-base">
              Discover how businesses have partnered with Codorium to build innovative solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            className="min-w-0"
          >
            <div className="overflow-hidden px-1 pb-5 pt-1">
              <motion.div
                className="flex gap-5"
                animate={{ x: `calc(-${activeIndex} * (min(82vw, 360px) + 20px))` }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
              >
                {TESTIMONIALS.map((testimonial) => (
                  <TestimonialCard key={testimonial.name} testimonial={testimonial} variant={variant} />
                ))}
              </motion.div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-1.5" aria-label="Testimonial slides">
                {TESTIMONIALS.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-pressed={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${activeIndex === index ? 'w-8 bg-brand-secondary' : 'w-2 bg-brand-primary/20'}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => move('previous')}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/15 text-brand-primary transition-colors hover:border-brand-secondary hover:text-brand-secondary"
                >
                  <ArrowIcon direction="previous" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => move('next')}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/15 text-brand-primary transition-colors hover:border-brand-secondary hover:text-brand-secondary"
                >
                  <ArrowIcon direction="next" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Testimonials
