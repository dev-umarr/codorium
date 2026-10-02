import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AboutCTA from '../components/AboutCTA/AboutCTA'
import FAQSection from '../components/Services/FAQSection'
import ServicesAudience from '../components/Services/Services'
import ServicesGrid from '../components/Services/ServicesGrid'
import ServicesWhyChooseUs from '../components/Services/ServicesWhyChooseUs'
import ProcessSection from '../components/Services/ProcessSection'
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer'
import { NeuralCanvas } from '../components/Hero/Hero'
import Seo from '../components/SEO/Seo'
import { openBookingModal } from '../utils/calendly'

function ServicesHero() {
  return (
    <motion.section
      className="relative isolate flex min-h-[calc(100vh-1px)] items-center overflow-hidden bg-[#060e1f]"
      aria-labelledby="services-title"
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
          <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary shadow-[0_0_12px_rgba(20,184,166,0.9)]" />
          COMPREHENSIVE SOLUTIONS
        </motion.div>

        <motion.h1
          id="services-title"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-brand-primary text-5xl font-normal leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          <span className="text-brand-secondary">Our</span> Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl font-brand-secondary text-base font-normal leading-relaxed text-white/60 sm:text-lg"
        >
          Codorium delivers innovative digital solutions and software engineering services that help businesses streamline operations, improve efficiency, and accelerate long-term growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-secondary px-7 py-3.5 font-brand-secondary text-base font-semibold text-[#06241f] transition-all hover:-translate-y-px hover:bg-brand-secondary-hover hover:shadow-lg hover:shadow-brand-secondary/25"
          >
            Contact Us
            <span aria-hidden="true">→</span>
          </Link>
          <a
            href="mailto:hello@codorium.com?subject=Free%20consultation"
            className="inline-flex items-center gap-2 rounded-lg border border-brand-secondary/60 px-7 py-3.5 font-brand-secondary text-base font-semibold text-brand-secondary transition-all hover:-translate-y-px hover:bg-brand-secondary/10"
          >
            Get Free Consultation
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none"
        style={{ lineHeight: 0, margin: 0, padding: 0, transform: 'translateY(1px)' }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[72px] w-full" preserveAspectRatio="none">
          <path d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z" fill="#ffffff" />
        </svg>
      </div>
    </motion.section>
  )
}

function Services() {
  return (
    <>
      <Seo
            onClick={(event) => {
              event.preventDefault()
              openBookingModal()
            }}
        title="Services"
        description="Codorium delivers innovative digital solutions, AI applications, and software engineering services that help businesses grow."
        path="/services"
      />
      <ServicesHero />
      <ServicesGrid />
      <ServicesWhyChooseUs />
      <ProcessSection />
      <div style={{ background: 'linear-gradient(160deg, #060e1f 0%, #091a3a 40%, #072e28 75%, #060e1f 100%)' }}>
        <WhatWeOffer />
      </div>
      <ServicesAudience />
      <FAQSection />
      <AboutCTA flushTop />
    </>
  )
}

export default Services
