import { motion } from 'framer-motion'
import aboutImageUrl from '../../assets/about-us/About-Us_image.jpeg'

const STATS = [
  { value: '250+', label: 'Clients' },
  { value: '$50M+', label: 'Recovered' },
  { value: '4.9★', label: 'Rated' },
]

function AboutUsSection() {
  return (
    <motion.section
      id="about-us"
      data-navbar-light
      className="overflow-hidden bg-brand-surface pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pb-32 lg:pt-20"
      aria-labelledby="about-us-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative"
        >
          <div
            className="absolute -left-3 -top-6 z-10 rounded-2xl border border-white/10 bg-[#0b1628] px-6 py-5 text-center shadow-xl shadow-brand-primary/15 sm:-left-5 sm:-top-6"
            style={{
              background: 'linear-gradient(135deg, #0a2463 0%, #091a3a 60%, #062d26 100%)',
              border: '1px solid rgba(20,184,166,0.38)',
              boxShadow: '0 0 22px rgba(20,184,166,0.16), 0 0 3px rgba(20,184,166,0.22), inset 0 0 30px rgba(20,184,166,0.05)',
            }}
          >
            <p className="font-brand-primary text-xl font-700 text-brand-secondary sm:text-2xl">10+ Years</p>
            <p className="mt-0.5 font-brand-secondary text-xs text-white/75 sm:text-sm">Building AI at scale</p>
          </div>

          <img
            src={aboutImageUrl}
            alt="Codorium team building software together in a modern office"
            className="aspect-[1.45] w-full rounded-2xl object-cover shadow-xl shadow-brand-primary/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
        >
          <span className="inline-flex rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.14em] text-brand-secondary">
            About Us
          </span>

          <h2
            id="about-us-heading"
            className="mt-7 max-w-xl font-brand-primary text-4xl font-700 leading-[1.08] text-brand-primary sm:text-5xl"
          >
            We build <span className="text-brand-secondary">AI systems</span> that businesses can
            actually trust
          </h2>

          <div className="mt-7 max-w-xl space-y-5 font-brand-secondary text-base font-normal leading-relaxed text-brand-primary/65 sm:text-lg">
            <p>
              Codorium started as a founder-led engineering studio solving difficult product and
              automation problems for ambitious teams. Today, we partner with organizations that
              need dependable AI running across real workflows.
            </p>
            <p>
              What has not changed is our belief that AI should create measurable business impact,
              not become a  science experiment.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
                className="rounded-2xl px-4 py-4 text-center"
                style={{
                  background: 'linear-gradient(135deg, #0a2463 0%, #091a3a 60%, #062d26 100%)',
                  border: '1px solid rgba(20,184,166,0.38)',
                  boxShadow: '0 0 22px rgba(20,184,166,0.16), 0 0 3px rgba(20,184,166,0.22), inset 0 0 30px rgba(20,184,166,0.05)',
                }}
              >
                <p className="font-brand-primary text-lg font-700 text-brand-secondary sm:text-xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-brand-secondary text-xs text-white/65 sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutUsSection
