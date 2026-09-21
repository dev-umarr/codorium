import { motion } from 'framer-motion'

const REASONS = [
  {
    title: 'Production-first engineering',
    description: 'We design for the failure cases — rate limits, hallucination, cost spikes — from day one, not after a client complaint.',
  },
  {
    title: 'Model-agnostic by default',
    description: "Your system isn't locked to one vendor's pricing or roadmap; we build so the underlying model is swappable.",
  },
  {
    title: 'Fast, honest timelines',
    description: "You get a working retrieval pipeline in weeks, with a clear map of what's next rather than an open-ended roadmap.",
  },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  )
}

function WhyChooseAISection() {
  return (
    <section
      id="why-choose-ai"
      className="bg-brand-surface px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="why-choose-ai-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="self-start lg:sticky lg:top-24"
        >
          <span className="inline-flex items-center rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-secondary sm:text-xs">
            WHY CODORIUM
          </span>
          <h2 id="why-choose-ai-heading" className="mt-5 max-w-xl font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl">
            Why choose <span className="text-brand-secondary">Codorium</span> for <span className="text-brand-secondary">AI &amp; rag</span>
          </h2>
          <p className="mt-5 max-w-xl font-brand-secondary text-base font-normal leading-relaxed text-brand-primary/60 sm:text-lg">
            AI projects fail more often from weak infrastructure than weak models. We treat the pipeline, evaluation, and guardrails as the real product.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {REASONS.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -4, borderColor: 'rgba(20,184,166,0.72)' }}
              className="group rounded-2xl border border-brand-secondary/25 p-6 shadow-[0_12px_28px_rgba(10,36,99,0.12)] transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(20,184,166,0.2)] sm:p-7"
              style={{ background: 'linear-gradient(145deg, #10243b 0%, #0b1b31 55%, #091a2d 100%)' }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-secondary/20 bg-brand-secondary/15 text-brand-secondary shadow-[0_0_16px_rgba(20,184,166,0.14)] transition-colors group-hover:bg-brand-secondary group-hover:text-brand-primary">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="font-brand-primary text-lg font-700 leading-tight text-white sm:text-xl">
                    {reason.title}
                  </h3>
                  <p className="mt-2 font-brand-secondary text-sm font-normal leading-relaxed text-white/60 sm:text-base">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseAISection