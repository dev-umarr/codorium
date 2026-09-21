import { useState } from 'react'
import { motion } from 'framer-motion'
import umarCeoUrl from '../../assets/images/umar-ceo.png'

const TEAM = [
  { name: 'Shamas Ul Islam', role: 'AI Full-Stack Engineer', bio: 'Builds reliable product experiences across intelligent backends and polished interfaces.' },
  { name: 'Sadam Mehmood', role: 'UI/UX Designer', bio: 'Turns complex workflows into clear, useful experiences that feel effortless to use.' },
  { name: 'Fasial Khalid', role: 'Frontend Developer', bio: 'Creates responsive interfaces that bring product ideas to life with precision and speed.' },
  { name: 'Hamza Farooq', role: 'AI Engineer', bio: 'Designs practical AI systems that connect models to real operational outcomes.' },
  { name: 'Saleem Khan', role: 'Product Strategist', bio: 'Shapes focused product direction around customer needs, measurable value, and momentum.' },
  { name: 'Owais Ahmed', role: 'Backend Engineer', bio: 'Architects secure, scalable foundations for products that need to perform under pressure.' },
]

function ProfileCard({ member, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
      className="group relative mx-auto aspect-[0.78] w-full max-w-[280px] cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#050d1b] shadow-xl shadow-brand-primary/20"
      role="button"
      tabIndex={0}
      aria-label={`${member.name}, ${member.role}. ${isOpen ? 'Hide bio' : 'Show bio'}`}
      onClick={() => setIsOpen((open) => !open)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          setIsOpen((open) => !open)
        }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/20 to-[#050d1b]" />
      <img
        src={umarCeoUrl}
        alt={`${member.name}, ${member.role}`}
        className={`relative h-full w-full object-cover object-top ${index % 2 ? 'brightness-95 saturate-75' : 'brightness-90 saturate-90'}`}
      />
      <div className="absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-[#050d1b] via-[#050d1b]/90 to-transparent px-5 pb-5 pt-20">
        <h3 className="font-brand-primary text-xl font-bold text-white">{member.name}</h3>
        <p className="mt-1 font-brand-secondary text-sm font-normal text-brand-secondary">{member.role}</p>
      </div>

      <div className={`absolute inset-0 z-10 translate-y-full bg-[#0b1528]/95 p-6 backdrop-blur-md transition-transform duration-500 ease-in-out group-hover:translate-y-0 ${isOpen ? 'translate-y-0' : ''}`}>
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative flex h-full flex-col justify-between">
          <div>
            <div className="mb-5 h-1 w-12 rounded-full bg-brand-secondary shadow-[0_0_16px_rgba(20,184,166,0.7)]" />
            <h3 className="font-brand-primary text-xl font-bold text-white">{member.name}</h3>
            <p className="mt-1 font-brand-secondary text-sm font-normal text-brand-secondary">{member.role}</p>
          </div>
          <p className="font-brand-secondary text-sm font-normal leading-relaxed text-white/80">{member.bio}</p>
        </div>
      </div>
    </motion.article>
  )
}

function FounderCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="relative mx-auto w-full max-w-[280px]"
    >
      <div
        role="button"
        tabIndex={0}
        aria-label={`Umar Farooqi, Founder & CEO. ${isOpen ? 'Hide bio' : 'Show bio'}`}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setIsOpen((open) => !open)
          }
        }}
        className="group relative aspect-[0.78] cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#050d1b] shadow-xl shadow-brand-primary/20"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/20 to-[#050d1b]" />
        <img src={umarCeoUrl} alt="Umar Farooqi, Founder and CEO" className="relative h-full w-full object-cover object-top" />
        <div className="absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-[#050d1b] via-[#050d1b]/90 to-transparent px-5 pb-5 pt-20">
          <h3 className="font-brand-primary text-xl font-bold text-white">Umar Farooqi</h3>
          <p className="mt-1 font-brand-secondary text-sm font-normal text-brand-secondary">Founder &amp; CEO</p>
        </div>
        <div className={`absolute inset-0 z-10 translate-y-full bg-[#0b1528]/95 p-6 backdrop-blur-md transition-transform duration-500 ease-in-out group-hover:translate-y-0 ${isOpen ? 'translate-y-0' : ''}`}>
          <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="mb-5 h-1 w-12 rounded-full bg-brand-secondary shadow-[0_0_16px_rgba(20,184,166,0.7)]" />
              <h3 className="font-brand-primary text-xl font-bold text-white">Umar Farooqi</h3>
              <p className="mt-1 font-brand-secondary text-sm font-normal text-brand-secondary">Founder &amp; CEO</p>
            </div>
            <p className="font-brand-secondary text-sm font-normal leading-relaxed text-white/80">Leads Codorium&apos;s product and engineering vision, helping ambitious teams turn complex ideas into dependable technology.</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Experts() {
  return (
    <>
      <section
        id="experts"
        data-navbar-light
        className="bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0"
        aria-labelledby="experts-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 id="experts-heading" className="font-brand-primary text-4xl font-700 leading-tight text-brand-primary sm:text-5xl">
              Meet our experts
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-brand-secondary text-base font-normal leading-relaxed text-brand-primary/60">
              Meet the passionate professionals dedicated to delivering innovative solutions and exceptional results for every client.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <FounderCard />

            <motion.blockquote
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="relative rounded-2xl border border-brand-secondary/30 bg-[#0b1628] p-8 text-center shadow-2xl shadow-brand-primary/20 sm:p-12"
              style={{
                background: 'linear-gradient(135deg, #0a2463 0%, #091a3a 60%, #062d26 100%)',
                border: '1px solid rgba(20,184,166,0.38)',
                boxShadow: '0 0 22px rgba(20,184,166,0.16), 0 0 3px rgba(20,184,166,0.22), inset 0 0 30px rgba(20,184,166,0.05)',
              }}
            >
              <div className="absolute -inset-2 -z-10 rounded-2xl border border-brand-secondary/25" />
              <p className="font-brand-primary text-lg font-normal leading-relaxed text-white/85 sm:text-xl">
                “Leadership is about turning vision into reality through innovation, trust, and teamwork. At Codorium, we build technology that solves today&apos;s challenges and prepares businesses for tomorrow.”
              </p>
            </motion.blockquote>
          </div>
        </div>
      </section>

      <section
        id="team"
        data-navbar-light
        className="bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0"
        aria-labelledby="team-heading"
      >
        <div className="mx-auto max-w-7xl">
          <h2 id="team-heading" className="text-center font-brand-primary text-4xl font-700 leading-tight text-brand-primary sm:text-5xl">
            Our Team Members
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, index) => <ProfileCard key={member.name} member={member} index={index} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Experts
