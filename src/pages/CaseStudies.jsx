import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AboutCTA from '../components/AboutCTA/AboutCTA'
import CaseStudiesSection from '../components/CaseStudies/CaseStudies'
import { NeuralCanvas } from '../components/Hero/Hero'
import Seo from '../components/SEO/Seo'
import { CASE_STUDIES } from '../data/caseStudies'

const PORTFOLIO_FILTERS = ['All', 'Donation Technology', 'E-commerce Subscription', 'Fintech & Blockchain']

const PORTFOLIO_STUDIES = CASE_STUDIES.slice(0, 3)

const IMPACT_METRICS = [
  { icon: '🏆', value: '250+', label: 'Projects Delivered' },
  { icon: '💰', value: '$50M+', label: 'Revenue Recovered' },
  { icon: '⏱️', value: '12,000+', label: 'Eng. Hours Saved' },
  { icon: '⭐', value: '4.9/5', label: 'Avg. Client Rating' },
  { icon: '🔁', value: '94%', label: 'Client Retention' },
]

function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const visibleStudies = activeFilter === 'All'
    ? PORTFOLIO_STUDIES
    : PORTFOLIO_STUDIES.filter((study) => study.category === activeFilter)

  return (
    <motion.section
      id="portfolio"
      className="bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0"
      aria-labelledby="portfolio-heading"
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
          className="mx-auto max-w-5xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/60 bg-brand-secondary/5 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.16em] text-brand-secondary">
            <span aria-hidden="true">+</span>
            OUR PORTFOLIO
          </span>
          <h2 id="portfolio-heading" className="mt-5 whitespace-nowrap font-brand-primary text-lg font-700 leading-tight text-brand-primary sm:text-5xl">
            Case Studies Across Every <span className="text-brand-secondary">Stage</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-brand-secondary text-base leading-relaxed text-brand-primary/60">
            From pre-seed MVPs to enterprise automation - here&apos;s the range of problems we&apos;ve shipped solutions for.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter case studies"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {PORTFOLIO_FILTERS.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 font-brand-secondary text-xs font-semibold transition-colors ${
                  isActive
                    ? 'border-brand-secondary bg-brand-secondary text-[#06241f]'
                    : 'border-brand-border bg-brand-surface text-brand-primary/60 hover:border-brand-secondary/50 hover:text-brand-secondary'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleStudies.map((study, index) => {
            const bullets = Array.isArray(study.bullets) ? study.bullets : []
            const metrics = Array.isArray(study.metrics) ? study.metrics : []

            return (
              <motion.article
                key={study.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
                className={`flex min-h-[370px] flex-col rounded-xl border p-5 shadow-lg transition-transform duration-200 hover:-translate-y-1 sm:p-6 ${
                  study.highlight
                    ? 'border-brand-secondary/40 shadow-[0_14px_32px_rgba(20,184,166,0.12)]'
                    : 'border-[#17304d] shadow-brand-primary/15'
                }`}
                style={{
                  background: study.highlight
                    ? 'linear-gradient(145deg, #0d4a3f 0%, #092c32 48%, #091a3a 100%)'
                    : 'linear-gradient(145deg, #10243b 0%, #0b1b31 55%, #091a2d 100%)',
                }}
              >
                <span className="w-fit rounded-full border border-brand-secondary/30 bg-brand-secondary/10 px-2.5 py-1 font-brand-secondary text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-secondary">
                  {study.category}
                </span>
                <h3 className="mt-4 font-brand-primary text-lg font-700 leading-tight text-white">
                  {study.title}
                </h3>
                <p className="mt-3 font-brand-secondary text-xs leading-relaxed text-white/55">
                  {study.shortDescription}
                </p>
                {bullets.length > 0 && (
                  <ul className="mt-4 space-y-1.5 font-brand-secondary text-[11px] leading-relaxed text-white/65">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="text-brand-secondary" aria-hidden="true">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto border-t border-white/10 pt-4">
                  <div className="grid grid-cols-2 gap-3">
                    {metrics.length > 0 ? (
                      metrics.map(({ value, label }) => (
                        <div key={label}>
                          <p className="font-brand-primary text-base font-700 leading-none text-white">{value}</p>
                          <p className="mt-1 font-brand-secondary text-[8px] font-semibold uppercase leading-tight tracking-[0.08em] text-white/45">{label}</p>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-2 text-left">
                        <p className="font-brand-secondary text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-secondary">Project</p>
                      </div>
                    )}
                  </div>
                  <Link to={study.path} className="mt-4 inline-flex items-center gap-1 font-brand-secondary text-[10px] font-semibold text-brand-secondary transition-colors hover:text-brand-secondary-hover">
                    Read Case Study
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

function ImpactMetricsSection() {
  return (
    <motion.section
      id="impact-metrics"
      className="bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0"
      aria-labelledby="impact-metrics-heading"
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
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/60 bg-brand-secondary/5 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.16em] text-brand-secondary">
            <span aria-hidden="true">+</span>
            BY THE NUMBERS
          </span>
          <h2 id="impact-metrics-heading" className="mt-5 font-brand-primary text-4xl font-700 leading-tight text-brand-primary sm:text-5xl">
            Impact That <span className="text-brand-secondary">Compounds</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-brand-secondary text-base leading-relaxed text-brand-primary/60">
            Every engagement is measured — not just against a deadline, but against outcomes clients can take to their board.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {IMPACT_METRICS.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1, ease: 'easeOut' }}
              className="flex min-h-[224px] min-w-0 flex-col items-center justify-center rounded-2xl border border-[#17304d] bg-[#10243b] px-4 py-8 text-center shadow-lg shadow-brand-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary/40 hover:shadow-[0_16px_34px_rgba(20,184,166,0.14)]"
              style={{ background: 'linear-gradient(145deg, #0d4a3f 0%, #092c32 48%, #091a3a 100%)' }}
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-secondary/35 bg-brand-secondary/10 text-2xl" aria-hidden="true">
                {metric.icon}
              </span>
              <p className="mt-5 font-brand-primary text-3xl font-700 leading-none tracking-tight text-white sm:text-4xl">{metric.value}</p>
              <p className="mt-3 flex min-h-[2.5rem] items-center font-brand-secondary text-sm leading-tight text-white/65">{metric.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function FeaturedCaseStudy() {
  return (
    <motion.section
      id="featured-case-study"
      className="bg-brand-surface px-6 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:pb-32 lg:pt-20"
      aria-labelledby="featured-case-study-heading"
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
          className="mb-5 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/40 bg-brand-secondary/5 px-3 py-1 font-brand-secondary text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-secondary sm:px-4 sm:py-1.5 sm:text-xs">
            <span aria-hidden="true">+</span>
            FEATURED CASE STUDY
          </span>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl border border-brand-border bg-white shadow-[0_18px_55px_rgba(0,0,0,0.24),0_0_28px_rgba(20,184,166,0.08)]"
        >
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              className="relative min-h-[280px] overflow-hidden bg-[#081b2e] sm:min-h-[360px] lg:min-h-[420px]"
              style={{ background: 'linear-gradient(145deg, #0b1d32 0%, #091a2d 52%, #071827 100%)' }}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img
                src={CASE_STUDIES[0].image}
                alt="Fundraise Up donation platform laptop mockup"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#06101d]/90 px-3 py-2 font-brand-secondary text-[10px] font-semibold text-white/80 shadow-lg sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary shadow-[0_0_8px_rgba(20,184,166,0.9)]" />
                6 Weeks - Concept to Launch
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center border-t border-brand-border bg-white px-6 py-8 sm:px-9 sm:py-10 lg:border-l lg:border-t-0 lg:px-8 lg:py-10"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            >
              <span className="w-fit rounded-full border border-brand-secondary/30 bg-brand-secondary/5 px-2.5 py-1 font-brand-secondary text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-secondary">
                FINTECH
              </span>
              <h2 id="featured-case-study-heading" className="mt-4 max-w-md font-brand-primary text-2xl font-700 leading-tight text-brand-primary sm:text-3xl">
                Fundraise Up - From Legacy Stack to AI-Ready Donation Engine
              </h2>
              <p className="mt-4 max-w-md font-brand-secondary text-xs leading-relaxed text-brand-primary/65 sm:text-sm">
                Fundraise Up needed to modernize a decade-old donation flow without breaking live fundraising campaigns for 3,000+ nonprofits. Codorium rebuilt the platform&apos;s core checkout and personalization engine around a modern, AI-assisted architecture — shipped in six weeks with zero downtime.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-baseline gap-2">
                  <strong className="font-brand-primary text-xl font-700 text-brand-primary">6 Weeks</strong>
                  <span className="font-brand-secondary text-[10px] text-brand-primary/55">Concept to production launch</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <strong className="font-brand-primary text-xl font-700 text-brand-primary">28%</strong>
                  <span className="font-brand-secondary text-[10px] text-brand-primary/55">Lift in completed donations</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <strong className="font-brand-primary text-xl font-700 text-brand-primary">99.9%</strong>
                  <span className="font-brand-secondary text-[10px] text-brand-primary/55">Uptime maintained through migration</span>
                </div>
              </div>

              <Link to={CASE_STUDIES[0].path} className="mt-6 inline-flex w-fit items-center gap-2 font-brand-secondary text-xs font-semibold text-brand-secondary transition-colors hover:text-brand-secondary-hover sm:text-sm">
                View Full Case Study
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </motion.section>
  )
}

function CaseStudies() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Seo
        title="Case Studies"
        description="See how Codorium has helped startups, SaaS teams, and enterprises turn AI ambition into shipped systems with measurable outcomes."
        path="/case-studies"
      />

      <motion.section
        className="relative isolate flex min-h-[calc(100vh-1px)] items-center overflow-hidden bg-[#060e1f]"
        aria-labelledby="case-studies-title"
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
            backgroundImage: 'radial-gradient(circle at 12% 24%, rgba(20, 184, 166, 0.18) 0 1px, transparent 1.5px), radial-gradient(circle at 78% 18%, rgba(255, 255, 255, 0.32) 0 1px, transparent 1.5px), radial-gradient(circle at 64% 76%, rgba(20, 184, 166, 0.2) 0 1px, transparent 1.5px), radial-gradient(circle at 35% 88%, rgba(255, 255, 255, 0.2) 0 1px, transparent 1.5px)',
            backgroundSize: '220px 220px, 310px 310px, 270px 270px, 380px 380px',
          }}
        />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 68%)' }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: 'linear-gradient(160deg, transparent 0%, rgba(9, 26, 58, 0.8) 48%, rgba(7, 46, 40, 0.65) 100%)' }}
        />

        <div className="relative mx-auto w-full max-w-5xl px-6 py-32 text-center sm:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-brand-secondary/60 bg-brand-secondary/5 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary sm:text-sm"
          >
            <span aria-hidden="true">+</span>
            OUR WORK
          </motion.div>

          <motion.h1
            id="case-studies-title"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-brand-primary text-5xl font-normal leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Proof Over{' '}
            <span className="bg-gradient-to-r from-brand-secondary to-[#2dd4bf] bg-clip-text text-transparent">
              Promises
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl font-brand-secondary text-base font-normal leading-relaxed text-white/60 sm:text-lg"
          >
            A look at how we&apos;ve helped startups, SaaS teams, and enterprises turn AI ambition into shipped systems - with the metrics to back it up. No vanity screenshots, just outcomes clients can point to.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#featured-case-study"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-secondary px-7 py-3.5 font-brand-secondary text-base font-semibold text-[#06241f] transition-all hover:-translate-y-px hover:bg-brand-secondary-hover hover:shadow-lg hover:shadow-brand-secondary/35"
            >
              View Featured Story
              <span className="transition-transform group-hover:translate-y-0.5" aria-hidden="true">↓</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 font-brand-secondary text-base font-semibold text-white transition-all hover:-translate-y-px hover:border-brand-secondary hover:bg-brand-secondary/10 hover:text-brand-secondary"
            >
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 mb-[-1px] w-full overflow-hidden leading-none"
          style={{ lineHeight: 0 }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[72px] w-full" preserveAspectRatio="none">
            <path d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z" fill="#ffffff" />
          </svg>
        </div>
      </motion.section>

      <FeaturedCaseStudy />
      <PortfolioSection />
      <ImpactMetricsSection />
      <CaseStudiesSection standardPageSpacing />
      <AboutCTA
        title={<>Ready To Be Our Next <span className="text-brand-secondary">Case Study</span>?</>}
        description={'Let\'s map out what "success" looks like for your project — and go build it.'}
        contactLabel="Start a Project"
        contactHref="/contact"
        scheduleLabel="Schedule a Call"
        scheduleHref="mailto:hello@codorium.com?subject=Schedule%20a%20call"
        primaryFirst
        flushTop
      />
    </motion.main>
  )
}

export default CaseStudies
