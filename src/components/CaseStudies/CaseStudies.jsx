import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import lexaiVisual from '../../assets/images/image.png'
import servlyVisual from '../../assets/images/image-3.png'
import Analytix from '../../assets/images/image-2.jpg'

/* ─── Data ──────────────────────────────────────────────── */

const STUDIES = [
  {
    id: 'fundraiseup',
    category: 'DONATION TECHNOLOGY',
    title: 'Fundraise Up — Online Donation Platform',
    description:
      'Fundraise Up helps nonprofits grow online giving with a conversion-focused donation experience, modern payment options, and personalized donor journeys.',
    quote: { text: 'Codorium turned our donation flow into a modern, high-converting experience. Their team moved fast, communicated clearly, and delivered with quality.', author: 'Emily R.', role: 'Growth Lead, Fundraise Up' },
    metrics: [
      { value: '2017', label: 'Year founded' },
      { value: '3,000+', label: 'Nonprofits using Fundraise Up' },
      { value: '300+', label: 'Team members worldwide' },
      { value: 'NYC', label: 'Headquarters in Brooklyn, New York' },
    ],
    bg: 'linear-gradient(145deg, #071e1a 0%, #060e1f 55%, #091a3a 100%)',
    visual: (
      <div className="relative h-full w-full">
        <img src={servlyVisual} alt="Fundraise Up project mockup" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)', opacity: 0.30, mixBlendMode: 'color' }} />
      </div>
    ),
  },
  {
    id: 'analytix',
    category: 'E-COMMERCE SUBSCRIPTION',
    title: 'FashionPass — Clothing Rental Platform',
    description:
      'Built and optimized a subscription commerce experience for FashionPass, helping shoppers discover, rent, and rotate premium fashion with a fast and intuitive journey.',
    quote: { text: 'Codorium helped us improve the full member journey, from discovery to checkout. The experience feels faster, cleaner, and much easier to scale.', author: 'Marketing Team', role: 'FashionPass' },
    metrics: [
      { value: '100K+', label: 'Happy members highlighted' },
      { value: '600+', label: 'Google reviews showcased' },
      { value: '5.0', label: 'Google review rating shown' },
      { value: '2026', label: 'Latest site copyright year' },
    ],
    bg: 'linear-gradient(145deg, #060e1f 0%, #091a3a 55%, #071e1a 100%)',
    visual: (
      <div className="relative h-full w-full">
        <img src={Analytix} alt="FashionPass project mockup" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)', opacity: 0.30, mixBlendMode: 'color' }} />
      </div>
    ),
  },
  {
    id: 'enpor',
    category: 'FINTECH & BLOCKCHAIN',
    title: 'ENPOR — Borderless Finance Platform',
    description:
      'Designed and delivered a fintech web experience for ENPOR, combining crypto and traditional banking messaging with clear ICO flows, product sections, and conversion-focused account actions.',
    quote: { text: 'Codorium gave structure to a complex fintech vision and turned it into a clear, launch-ready platform our team could confidently present to investors and users.', author: 'Paul S.', role: 'CEO, ENPOR' },
    metrics: [
      { value: '250M', label: 'EPR token supply highlighted' },
      { value: '4', label: 'Card tiers presented' },
      { value: '8 wks', label: 'ICO timeline shown' },
      { value: '15%', label: 'Early-week bonus structure' },
    ],
    bg: 'linear-gradient(145deg, #051a14 0%, #071e2e 50%, #060e1f 100%)',
    visual: (
      <div className="relative h-full w-full">
        <img src={lexaiVisual} alt="ENPOR project mockup" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)', opacity: 0.30, mixBlendMode: 'color' }} />
      </div>
    ),
  },
]

/* ─── Arrow button ───────────────────────────────────────── */

function NavArrow({ dir, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'prev' ? 'Previous case study' : 'Next case study'}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/15 text-brand-primary/40 transition-all hover:border-brand-secondary hover:text-brand-secondary disabled:opacity-20 disabled:cursor-not-allowed"
    >
      {dir === 'prev'
        ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        : <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      }
    </button>
  )
}

/* ─── Component ─────────────────────────────────────────── */

export default function CaseStudies() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)   // 1 = forward, -1 = backward
  const [headerRef, headerInView] = useInView()
  const study = STUDIES[idx]

  function go(next) {
    setDir(next > idx ? 1 : -1)
    setIdx(next)
  }

  const variants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  }

  return (
    <section id="case-studies" data-navbar-light className="bg-brand-surface pt-10 pb-10 lg:pt-14 lg:pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div ref={headerRef} className="mb-10">
          <motion.p
            className="mb-3 font-brand-secondary text-xs font-600 uppercase tracking-widest text-brand-secondary"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            Our Work
          </motion.p>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <motion.h2
              className="font-brand-primary text-3xl font-800 uppercase tracking-tight text-brand-primary sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              Case Studies
            </motion.h2>
            <motion.p
              className="max-w-xs font-brand-secondary text-sm leading-relaxed text-brand-primary/45 sm:text-right"
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.18 }}
            >
              Real products. Real outcomes. A sample of what we've shipped for founders and businesses.
            </motion.p>
          </div>
          {/* <motion.div
            className="mt-4 h-px bg-brand-border"
            initial={{ scaleX: 0, originX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          /> */}
        </div>

        {/* Main layout */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">

          {/* ── Left: visual + info ── */}
          <div className="flex flex-col gap-6">
            {/* Project visual */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={study.id + '-visual'}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: 'easeInOut' }}
                className="relative overflow-hidden rounded-2xl"
                style={{ background: study.bg, aspectRatio: '16/9' }}
              >
                {study.visual}
              </motion.div>
            </AnimatePresence>

            {/* Info row */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={study.id + '-info'}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, delay: 0.05, ease: 'easeInOut' }}
                className="flex flex-col gap-4"
              >
                {/* Category + nav row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-2 w-2 rounded-full bg-brand-secondary" />
                    <span className="font-brand-secondary text-xs font-700 uppercase tracking-widest text-brand-secondary">
                      Featured
                    </span>
                    <span className="font-brand-secondary text-xs uppercase tracking-widest text-brand-primary/30">
                      {study.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <NavArrow dir="prev" onClick={() => go(idx - 1)} disabled={idx === 0} />
                    <NavArrow dir="next" onClick={() => go(idx + 1)} disabled={idx === STUDIES.length - 1} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-brand-primary text-2xl font-700 leading-snug text-brand-primary lg:text-3xl">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="font-brand-secondary text-sm leading-relaxed text-brand-primary/50">
                  {study.description}
                </p>

                {/* CTA */}
                <motion.a
                  href="#cta"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-primary/15 px-6 py-2.5 font-brand-secondary text-sm text-brand-primary/60 no-underline transition-all hover:border-brand-secondary hover:text-brand-secondary"
                  whileHover={{ scale: 1.03 }}
                >
                  View Case Study
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Right: metrics + counter ── */}
          <div className="flex flex-col gap-6">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={study.id + '-metrics'}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, delay: 0.08, ease: 'easeInOut' }}
                className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-brand-border bg-brand-border"
              >
                {study.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 bg-brand-surface px-4 py-5 sm:px-6 sm:py-7"
                  >
                    <span className="font-brand-primary text-2xl font-700 leading-none text-brand-secondary sm:text-4xl lg:text-5xl">
                      {m.value}
                    </span>
                    <span className="font-brand-secondary text-xs leading-snug text-brand-primary/45">
                      {m.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Testimonial */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={study.id + '-quote'}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, delay: 0.12, ease: 'easeInOut' }}
                className="flex flex-col gap-3 rounded-xl border border-brand-border bg-brand-surface px-6 py-5"
              >
                {/* Quote mark */}
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                  <path d="M0 16V9.6C0 4.267 2.933 1.067 8.8 0l1.2 1.6C7.2 2.267 5.467 3.733 5.2 6H9.6V16H0ZM12.4 16V9.6C12.4 4.267 15.333 1.067 21.2 0l1.2 1.6c-2.8.667-4.533 2.133-4.8 4.4H22V16h-9.6Z" fill="currentColor" className="text-brand-secondary" fillOpacity="0.35"/>
                </svg>
                <p className="font-brand-secondary text-sm leading-relaxed text-brand-primary/60 italic">
                  &ldquo;{study.quote.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-secondary/10 font-brand-primary text-xs font-700 text-brand-secondary">
                    {study.quote.author.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <p className="font-brand-secondary text-xs font-600 text-brand-primary/70">{study.quote.author}</p>
                    <p className="font-brand-secondary text-xs text-brand-primary/35">{study.quote.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.1L6 8.1l-2.78 1.46.53-3.1L1.5 4.27l3.11-.45L6 1z" fill="#14b8a6"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Counter */}
            <div className="mt-auto flex items-baseline gap-2 border-t border-brand-border pt-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={idx}
                  className="font-brand-primary text-4xl font-800 leading-none text-brand-primary sm:text-6xl lg:text-7xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
              <span className="font-brand-primary text-2xl font-400 text-brand-primary/20 sm:text-4xl lg:text-5xl">
                /{String(STUDIES.length).padStart(2, '0')}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
