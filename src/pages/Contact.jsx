import { useState } from 'react'
import { motion } from 'framer-motion'
import AboutCTA from '../components/AboutCTA/AboutCTA'
import { NeuralCanvas } from '../components/Hero/Hero'
import Seo from '../components/SEO/Seo'
import { openBookingModal } from '../utils/calendly'

const FIELD_CLASS = 'w-full rounded-lg border border-brand-border bg-white px-4 py-3 font-brand-secondary text-sm text-brand-primary placeholder:text-brand-primary/45 outline-none transition-colors focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/10'

const FAQ_ITEMS = [
  {
    question: 'What Services Does Codorium Offer?',
    answer: 'We build AI and RAG applications, SaaS products, web and mobile apps, and automation systems for ambitious teams.',
  },
  {
    question: 'Which Industries Do You Work With?',
    answer: 'We work with startups, small and medium-sized businesses, and enterprises across industries including healthcare, finance, retail, education, logistics, and technology.',
  },
  {
    question: 'How Long Does A Project Usually Take?',
    answer: 'Timelines depend on the scope and complexity of the project. After an initial conversation, we provide a clear delivery plan with practical milestones.',
  },
  {
    question: 'Do You Provide Ongoing Support After Project Delivery?',
    answer: 'Yes. We can continue to iterate, scale, monitor, and improve your product after launch through an ongoing support engagement.',
  },
  {
    question: 'How Can I Get Started With Codorium?',
    answer: 'Send us a message with a few details about your goals. We will review your request and get back to you within one business day.',
  },
]

const SOCIAL_LINKS = [
  {
    label: 'Twitter / X',
    href: 'https://x.com/codorium',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/codorium',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/codorium',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
]

function ContactDetails() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact-form" className="bg-brand-surface pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pb-32 lg:pt-20">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-brand-border bg-white shadow-[0_24px_70px_rgba(10,36,99,0.12)] px-0 sm:mx-8 lg:grid-cols-[55fr_45fr] lg:mx-auto">
        <div
          className="order-2 bg-brand-surface p-6 sm:p-8 lg:order-1 lg:p-10"
        >
          {submitted ? (
            <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-secondary/15 text-brand-secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="mt-5 font-brand-primary text-2xl font-700 text-brand-primary">Message received</h2>
              <p className="mt-2 font-brand-secondary text-sm text-brand-primary/60">We&apos;ll get back to you within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="font-brand-secondary text-xs font-600 text-brand-primary/75">First Name
                  <input className={`${FIELD_CLASS} mt-2`} placeholder="Enter your first name" required />
                </label>
                <label className="font-brand-secondary text-xs font-600 text-brand-primary/75">Last Name
                  <input className={`${FIELD_CLASS} mt-2`} placeholder="Enter your last name" required />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="font-brand-secondary text-xs font-600 text-brand-primary/75">Email Address
                  <input className={`${FIELD_CLASS} mt-2`} type="email" placeholder="Enter your email" required />
                </label>
                <label className="font-brand-secondary text-xs font-600 text-brand-primary/75">Contact Number
                  <span className="mt-2 flex overflow-hidden rounded-lg border border-brand-border focus-within:border-brand-secondary focus-within:ring-2 focus-within:ring-brand-secondary/10">
                    <select aria-label="Country code" className="shrink-0 border-r border-brand-border bg-brand-bg px-2 text-xs text-brand-primary outline-none">
                      <option>PK +92</option>
                      <option>US +1</option>
                      <option>GB +44</option>
                    </select>
                    <input className="min-w-0 flex-1 bg-white px-3 py-3 font-brand-secondary text-sm text-brand-primary outline-none placeholder:text-brand-primary/35" placeholder="Enter your phone number" />
                  </span>
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="font-brand-secondary text-xs font-600 text-brand-primary/75">Service Interested In
                  <select className={`${FIELD_CLASS} mt-2`} defaultValue="" required>
                    <option value="" disabled>Select your interest</option>
                    <option>AI &amp; RAG Applications</option>
                    <option>SaaS Development</option>
                    <option>Web &amp; Mobile Apps</option>
                    <option>Automation Systems</option>
                  </select>
                </label>
                <label className="font-brand-secondary text-xs font-600 text-brand-primary/75">Budget
                  <select className={`${FIELD_CLASS} mt-2`} defaultValue="" required>
                    <option value="" disabled>Select your budget</option>
                    <option>Up to $10k</option>
                    <option>$10k - $30k</option>
                    <option>$30k - $80k</option>
                    <option>More than $80k</option>
                  </select>
                </label>
              </div>

              <label className="font-brand-secondary text-xs font-600 text-brand-primary/75">Company Name
                <input className={`${FIELD_CLASS} mt-2`} placeholder="Enter your company name" />
              </label>

              <label className="font-brand-secondary text-xs font-600 text-brand-primary/75">Message <span className="text-brand-secondary">*</span>
                <textarea className={`${FIELD_CLASS} mt-2 min-h-32 resize-y`} placeholder="Tell us about your project, timeline and goals" required />
              </label>

              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-2 font-brand-secondary text-xs text-brand-primary/65">
                  <input type="checkbox" required className="h-4 w-4 accent-brand-secondary" />
                  I agree to the <a href="/privacy" className="text-brand-secondary underline">Privacy Policy</a>
                </label>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-secondary px-6 py-3 font-brand-secondary text-sm font-600 text-[#06241f] transition-all hover:-translate-y-px hover:bg-brand-secondary-hover hover:shadow-lg hover:shadow-brand-secondary/20">
                  Send Message
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                    <path d="m2 7.5 10.5-5L9 13l-2-4-5-1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </form>
          )}
        </div>

        <div
          className="order-1 flex min-w-0 flex-col justify-between p-6 sm:p-8 lg:order-2 lg:p-10"
          style={{
            background: 'linear-gradient(145deg, #091a3a 0%, #060e1f 100%)',
            border: '1px solid rgba(20,184,166,0.32)',
            boxShadow: '0 0 16px rgba(20,184,166,0.12), 0 0 2px rgba(20,184,166,0.2), inset 0 0 20px rgba(20,184,166,0.04)',
          }}
        >
          <div>
            <span className="inline-flex rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.14em] text-brand-secondary">CONTACT US</span>
            <h2 className="mt-5 font-brand-primary text-3xl font-700 leading-tight text-white sm:text-4xl">Let&apos;s get in <span className="text-brand-secondary">touch!</span></h2>
            <p className="mt-5 font-brand-secondary text-sm leading-relaxed text-white/65 sm:text-base">Thank you for considering Codorium for your digital and AI solutions. We&apos;re here to answer your questions, understand your goals, and help you build scalable solutions that drive real growth.</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              ['Email', 'hello@codorium.com', '✉'],
              ['Phone', 'Available on request', '☎'],
              ['Business Hours', 'Mon-Fri, 9am-6pm PKT', '◷'],
            ].map(([label, value, icon]) => (
              <div key={label} className="min-w-0 rounded-xl border border-brand-secondary/25 bg-white/5 px-2.5 py-3 shadow-sm sm:p-3">
                <span className="text-lg text-brand-secondary" aria-hidden="true">{icon}</span>
                <p className="mt-2 font-brand-secondary text-xs font-600 text-white/55">{label}</p>
                <p className="mt-1 whitespace-nowrap font-brand-secondary text-[10px] tracking-[-0.01em] text-white sm:text-[11px]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-2.5">
            {SOCIAL_LINKS.map((socialLink) => (
              <a
                key={socialLink.label}
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLink.label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 text-white/35 no-underline transition-all hover:border-brand-secondary/35 hover:text-brand-secondary"
              >
                {socialLink.icon}
              </a>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-brand-secondary/25 bg-brand-bg shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
            <iframe
              title="Codorium location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.95%2C33.62%2C73.15%2C33.75&layer=mapnik&marker=33.6844%2C73.0479"
              className="block aspect-[16/9] h-auto min-h-56 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a href="https://www.openstreetmap.org/?mlat=33.6844&mlon=73.0479#map=12/33.6844/73.0479" target="_blank" rel="noopener noreferrer" className="block border-t border-white/10 bg-[#08162a] px-3 py-2 font-brand-secondary text-[10px] uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-brand-secondary">View larger map</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(1)

  function toggle(index) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.14em] text-brand-secondary">
            FAQ
          </span>
          <h2 id="faq-heading" className="mt-5 font-brand-primary text-4xl font-700 leading-tight text-brand-primary sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-lg shadow-brand-primary/5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors hover:bg-brand-bg sm:px-7"
                >
                  <span className="font-brand-primary text-base font-600 text-brand-primary sm:text-lg">{item.question}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-secondary/20 font-brand-secondary text-xl leading-none text-brand-secondary">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-6 pb-6 font-brand-secondary text-sm leading-relaxed text-brand-primary/60 sm:px-7 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Tell Codorium about your goals and connect with our experts to start building intelligent, production-ready systems."
        path="/contact"
      />

      <section
        className="relative isolate flex min-h-[calc(100vh-1px)] items-center overflow-hidden bg-[#060e1f]"
        aria-labelledby="contact-title"
      >
        <NeuralCanvas />

        <div
          className="pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] opacity-18"
          style={{
            background: 'radial-gradient(circle at 70% 30%, #14b8a6 0%, transparent 60%)',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 -left-20 h-[400px] w-[400px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #0a2463 0%, transparent 70%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage: `radial-gradient(circle at 12% 24%, rgba(20, 184, 166, 0.18) 0 1px, transparent 1.5px), radial-gradient(circle at 78% 18%, rgba(255, 255, 255, 0.32) 0 1px, transparent 1.5px), radial-gradient(circle at 64% 76%, rgba(20, 184, 166, 0.2) 0 1px, transparent 1.5px), radial-gradient(circle at 35% 88%, rgba(255, 255, 255, 0.2) 0 1px, transparent 1.5px)`,
            backgroundSize: '220px 220px, 310px 310px, 270px 270px, 380px 380px',
          }}
        />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 68%)' }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: 'linear-gradient(160deg, transparent 0%, rgba(9, 26, 58, 0.8) 48%, rgba(7, 46, 40, 0.65) 100%)',
          }}
        />

        <div className="relative mx-auto w-full max-w-5xl px-6 py-32 text-center sm:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-brand-secondary/60 bg-brand-secondary/5 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary shadow-[0_0_12px_rgba(20,184,166,0.9)]" />
            GET IN TOUCH
          </motion.div>

          <motion.h1
            id="contact-title"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-brand-primary text-5xl font-normal leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Contact <span className="text-brand-secondary">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl font-brand-secondary text-base font-normal leading-relaxed text-white/60 sm:text-lg"
          >
            Ready to transform your operations? Get in touch with our experts and start your journey today. Tell us about your goals, we&apos;ll respond within one business day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="mailto:hello@codorium.com?subject=Book%20a%20meeting"
              onClick={(event) => {
                event.preventDefault()
                openBookingModal()
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-secondary px-7 py-3.5 font-brand-secondary text-base font-semibold text-[#06241f] transition-all hover:-translate-y-px hover:bg-brand-secondary-hover hover:shadow-lg hover:shadow-brand-secondary/25"
            >
              Book a Meeting
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="mailto:hello@codorium.com"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-secondary/60 px-7 py-3.5 font-brand-secondary text-base font-semibold text-brand-secondary transition-all hover:-translate-y-px hover:bg-brand-secondary/10"
            >
              Send a Message
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none"
          style={{ lineHeight: 0, margin: 0, padding: 0, transform: 'translateY(1px)' }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block h-[72px] w-full"
            style={{ display: 'block', lineHeight: 0 }}
            preserveAspectRatio="none"
          >
            <path
              d="M0 72H1440V36C1200 0 960 72 720 36C480 0 240 72 0 36V72Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>
      <ContactDetails />
      <FAQ />
      <AboutCTA flushTop />
    </>
  )
}

export default Contact
