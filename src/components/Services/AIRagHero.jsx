import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { NeuralCanvas } from '../Hero/Hero'
import { openBookingModal } from '../../utils/calendly'

const METRICS = [
  { value: '40%+', label: 'avg. workload automated' },
  { value: '<2s', label: 'typical query latency' },
  { value: '99.9%', label: 'pipeline uptime target' },
]

function AIRagHero() {
  return (
    <motion.section
      className="relative isolate flex min-h-[calc(100vh-1px)] items-center overflow-hidden bg-[#060e1f]"
      aria-labelledby="ai-rag-hero-heading"
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
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="mx-auto inline-flex items-center rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-secondary sm:text-xs">
              AI &amp; RAG APPLICATIONS
            </span>
          </motion.div>

          <motion.h1
            id="ai-rag-hero-heading"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-7 max-w-3xl font-brand-primary text-4xl font-normal leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            <span className="text-brand-secondary sm:whitespace-nowrap">AI &amp; RAG Applications</span>
            <br />
            <span className="sm:whitespace-nowrap">That Actually Ship</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl font-brand-secondary text-base font-normal leading-relaxed text-white/60 sm:text-lg"
          >
            Production-ready artificial intelligence systems designed to automate workflows and scale operations without increasing headcount or overhead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              to="/contact"
              onClick={(event) => {
                event.preventDefault()
                openBookingModal()
              }}
              className="inline-flex w-full items-center justify-center rounded-lg bg-brand-secondary px-7 py-3.5 font-brand-secondary text-base font-semibold text-[#06241f] shadow-lg shadow-brand-secondary/25 transition-all hover:-translate-y-px hover:bg-brand-secondary-hover hover:shadow-brand-secondary/35 sm:w-auto"
            >
              Book a Consultation
            </Link>
            <a
              href="#included"
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 font-brand-secondary text-base font-semibold text-white transition-colors hover:border-brand-secondary hover:bg-brand-secondary/10 hover:text-brand-secondary sm:w-auto"
            >
              See what&apos;s included
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mx-auto mt-16 max-w-3xl border-t border-white/10 pt-9 text-left sm:mt-20 sm:pt-10"
          aria-label="AI and RAG application performance metrics"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            {METRICS.map((metric) => (
              <div key={metric.label}>
                <p className="font-brand-primary text-3xl font-700 leading-none text-white sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 font-brand-secondary text-sm font-normal leading-tight text-white/55">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
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
  )
}

export default AIRagHero
