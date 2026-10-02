import { motion } from 'framer-motion'

const TECHNOLOGIES = [
  'OpenAI',
  'Anthropic Claude',
  'LangChain',
  'LlamaIndex',
  'Pinecone',
  'pgvector',
  'Python',
  'Node.js',
  'FastAPI',
  'Redis',
]

function TechStackSection() {
  return (
    <motion.section
      id="tech-stack"
      className="bg-brand-surface px-6 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0 lg:pb-24 lg:pt-0"
      aria-labelledby="tech-stack-heading"
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
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-secondary sm:text-xs">
            Tools of the trade
          </span>
          <h2 id="tech-stack-heading" className="mt-3 font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl">
            Tech stack &amp; <span className="text-brand-secondary">tools</span>
          </h2>
          <p className="mt-4 max-w-xl font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/60 sm:text-base">
            The technologies we reach for most often when we build this — chosen for reliability in production, not novelty.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
          className="mt-10 flex max-w-5xl flex-wrap gap-3"
          aria-label="Technologies used for AI and RAG applications"
        >
          {TECHNOLOGIES.map((technology) => (
            <motion.span
              key={technology}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
              whileHover={{ y: -2, borderColor: 'rgba(20,184,166,0.5)' }}
              className="inline-flex items-center gap-2 rounded-xl border border-brand-border bg-white px-4 py-2.5 font-brand-secondary text-sm font-semibold text-brand-primary shadow-[0_4px_12px_rgba(10,36,99,0.03)] transition-colors"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-secondary" aria-hidden="true" />
              {technology}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default TechStackSection