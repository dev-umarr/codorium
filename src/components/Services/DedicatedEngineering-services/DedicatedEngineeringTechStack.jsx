import { motion } from 'framer-motion'
import { NeuralCanvas } from '../../Hero/Hero'

const TECHNOLOGIES = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Supabase',
  'Redis',
  'GraphQL',
  'REST APIs',
  'Docker',
  'Kubernetes',
  'Terraform',
  'AWS',
  'GCP',
  'Vercel',
  'CI/CD',
  'Tailwind CSS',
  'Figma',
  'Stripe',
  'OpenAI API',
  'LangChain',
  'Elastic',
  'Kafka',
]

function DedicatedEngineeringTechStack() {
  return (
    <section
      id="dedicated-engineering-tech-stack"
      aria-labelledby="dedicated-engineering-tech-stack-heading"
      className="relative isolate overflow-hidden bg-[#060e1f] py-16 text-white lg:py-20"
    >
      <NeuralCanvas />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] opacity-18"
        style={{ background: 'radial-gradient(circle at 70% 30%, #14b8a6 0%, transparent 60%)' }}
        animate={{ x: [0, 35, 0], y: [0, -18, 0], opacity: [0.65, 0.9, 0.65] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 h-[400px] w-[400px] opacity-20"
        style={{ background: 'radial-gradient(circle, #0a2463 0%, transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 24%, rgba(20, 184, 166, 0.18) 0 1px, transparent 1.5px), radial-gradient(circle at 78% 18%, rgba(255, 255, 255, 0.32) 0 1px, transparent 1.5px), radial-gradient(circle at 64% 76%, rgba(20, 184, 166, 0.2) 0 1px, transparent 1.5px)',
          backgroundSize: '220px 220px, 310px 310px, 270px 270px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ background: 'linear-gradient(160deg, transparent 0%, rgba(9, 26, 58, 0.8) 48%, rgba(7, 46, 40, 0.65) 100%)' }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute left-0 top-0 z-20 w-full -translate-y-px rotate-180 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[72px] w-full" preserveAspectRatio="none">
          <path d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8 lg:pb-24 lg:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-emerald-400" aria-hidden="true" />
            <span className="font-brand-secondary text-[10px] font-700 uppercase tracking-[0.18em] text-emerald-400 sm:text-xs">
              Tools of the trade
            </span>
          </div>
          <h2
            id="dedicated-engineering-tech-stack-heading"
            className="font-brand-primary text-4xl font-700 leading-[1.02] text-white sm:text-5xl lg:text-6xl"
          >
            Your stack, <span className="text-emerald-400 drop-shadow-[0_0_18px_rgba(16,185,129,0.35)]">our expertise</span>
          </h2>
          <p className="mt-5 max-w-2xl font-brand-secondary text-sm leading-relaxed text-white/60 sm:text-base">
            We work inside the tools your company already trusts so delivery feels fast, familiar, and dependable from day one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/65 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-8"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden="true" />
          <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-brand-secondary text-[10px] font-700 uppercase tracking-[0.18em] text-white/55">
              Product and platform stack
            </span>
            <span className="rounded-full border border-emerald-400/25 bg-emerald-400/5 px-2.5 py-1 font-brand-secondary text-[10px] uppercase tracking-[0.18em] text-emerald-300/80">
              Full lifecycle
            </span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04 } },
            }}
            className="relative mt-7 flex flex-wrap gap-3"
            aria-label="Dedicated engineering technology stack"
          >
            {TECHNOLOGIES.map((technology) => (
              <motion.span
                key={technology}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                }}
                whileHover={{ y: -2, borderColor: 'rgba(20,184,166,0.6)', boxShadow: '0 0 0 1px rgba(20,184,166,0.2)' }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-4 py-2.5 font-brand-secondary text-sm font-semibold text-white/80 shadow-[0_8px_24px_rgba(10,36,99,0.08)] transition-all duration-200"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" aria-hidden="true" />
                {technology}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full translate-y-px overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[72px] w-full" preserveAspectRatio="none">
          <path d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

export default DedicatedEngineeringTechStack
