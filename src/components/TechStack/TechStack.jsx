import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const CATEGORIES = [
  {
    label: 'Frontend',
    techs: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Flutter', icon: '🎯' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Tailwind CSS', icon: '🎨' },
    ],
  },
  {
    label: 'Backend',
    techs: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'Django', icon: '🐍' },
      { name: 'GraphQL', icon: '◈' },
      { name: 'REST APIs', icon: '🔗' },
    ],
  },
  {
    label: 'AI / ML',
    techs: [
      { name: 'OpenAI', icon: '🤖' },
      { name: 'LangChain', icon: '🔗' },
      { name: 'Pinecone', icon: '🌲' },
      { name: 'HuggingFace', icon: '🤗' },
      { name: 'LlamaIndex', icon: '🦙' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    techs: [
      { name: 'AWS', icon: '☁️' },
      { name: 'GCP', icon: '🌩️' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Docker', icon: '🐳' },
      { name: 'GitHub CI/CD', icon: '🔄' },
    ],
  },
  {
    label: 'Databases',
    techs: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Supabase', icon: '⚡' },
      { name: 'PlanetScale', icon: '🪐' },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

function TechStack() {
  const [ref, inView] = useInView()
  const [stackRef, stackInView] = useInView()

  return (
    <section className="bg-brand-primary py-24 lg:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-secondary/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="mb-16 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-block font-brand-secondary text-sm font-semibold uppercase tracking-widest text-brand-secondary"
          >
            Tech Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 font-brand-primary text-4xl text-white lg:text-5xl"
          >
            Built With the{' '}
            <span className="text-brand-secondary">Best Tools</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-brand-secondary text-base text-white/50"
          >
            We choose technology based on what&apos;s right for your product — not what&apos;s trendy.
          </motion.p>
        </div>

        {/* Categories */}
        <div ref={stackRef} className="flex flex-col gap-10">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={stackInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <p className="mb-4 font-brand-secondary text-xs font-semibold uppercase tracking-widest text-white/30">
                {cat.label}
              </p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={stackInView ? 'visible' : 'hidden'}
                className="flex flex-wrap gap-3"
              >
                {cat.techs.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-brand-secondary/30 hover:bg-brand-secondary/5 cursor-default"
                  >
                    <span className="text-base leading-none">{tech.icon}</span>
                    <span className="font-brand-secondary text-sm font-semibold text-white/70">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
