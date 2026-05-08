import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoWhiteUrl from '../../assets/svgs/codorium-logo-full-white.svg'
import logoDarkUrl from '../../assets/svgs/codorium-logo-full.svg'

const MAIN_LINKS = [
  { label: 'What We Offer', href: '#what-we-offer' },
  { label: 'Who We Serve', href: '#services' },
  { label: 'Why Codorium?', href: '#why-codorium' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
]

const SERVICE_LINKS = [
  'AI & RAG Applications',
  'SaaS Development',
  'MVP Development',
  'Web & Mobile Apps',
  'Automation Systems',
  'API Engineering',
]

const SOCIAL_LINKS = [
  {
    label: 'X',
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

/* ─── Main component ───────────────────────────────────────────── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightBg, setLightBg] = useState(false)

  /* Swap logo when navbar floats over a light-background section */
  useEffect(() => {
    const intersecting = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target)
          else intersecting.delete(entry.target)
        })
        setLightBg(intersecting.size > 0)
      },
      /* Only the top ~10% of the viewport — where the navbar lives */
      { rootMargin: '0px 0px -88% 0px' }
    )
    document.querySelectorAll('[data-navbar-light]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function navigate(href) {
    setMenuOpen(false)
    setTimeout(
      () => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      350
    )
  }

  return (
    <>
      {/* ── Top bar ────────────────────────────────────────────── */}
      <header className="fixed top-0 z-50 w-full">
        <div className="flex items-center justify-between px-8 py-5 lg:px-12">
          {/* Logo — swaps between white and dark depending on section bg */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center no-underline"
          >
            <img
              src={lightBg ? logoDarkUrl : logoWhiteUrl}
              alt="Codorium"
              className="h-8 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="group flex flex-col items-end gap-[5px] p-1"
          >
            <span className={`block h-px w-7 transition-all ${lightBg ? 'bg-brand-primary/60 group-hover:bg-brand-primary' : 'bg-white/70 group-hover:bg-white'}`} />
            <span className={`block h-px w-5 transition-all group-hover:w-7 ${lightBg ? 'bg-brand-primary/60 group-hover:bg-brand-primary' : 'bg-white/70 group-hover:bg-white'}`} />
          </button>
        </div>
      </header>

      {/* ── Fullscreen overlay ─────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <FullscreenMenu onClose={() => setMenuOpen(false)} onNavigate={navigate} />
        )}
      </AnimatePresence>
    </>
  )
}

/* ─── Fullscreen menu ──────────────────────────────────────────── */
function FullscreenMenu({ onClose, onNavigate }) {
  return (
    <motion.div
      key="menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] flex overflow-hidden"
    >
      {/* ── LEFT panel ── */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative flex w-full flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:w-[45%] lg:px-16 lg:py-12"
        style={{ background: '#060e1f' }}
      >
        {/* Logo + close row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logoWhiteUrl} alt="Codorium" className="h-8 w-auto" />
          </div>

          {/* Close — only on small screens (large screen close is in right panel) */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Main nav links */}
        <nav className="flex flex-col gap-2 py-10">
          {MAIN_LINKS.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.07 }}
            >
              <button
                onClick={() => onNavigate(link.href)}
                className="group flex w-full items-center gap-4 py-2 text-left"
              >
                <span className="h-px w-0 bg-brand-secondary transition-all duration-300 group-hover:w-8" />
                <span className="font-brand-primary text-3xl font-normal text-white/80 transition-colors duration-200 group-hover:text-white lg:text-4xl xl:text-5xl">
                  {link.label}
                </span>
              </button>
            </motion.div>
          ))}
        </nav>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <button
            onClick={() => onNavigate('#contact')}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-secondary px-6 py-3 font-brand-secondary text-sm font-semibold text-white transition-all hover:bg-brand-secondary-hover"
          >
            Book a Call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="font-brand-secondary text-xs text-white/30">hello@codorium.com</span>
        </motion.div>
      </motion.div>

      {/* ── RIGHT panel ── */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative hidden flex-col justify-between overflow-hidden px-14 py-12 lg:flex lg:w-[55%]"
        style={{ background: '#060e1f' }}
      >
        {/* Teal radial glow (mimics Allomate's red glow, using our brand colors) */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-[70%] w-[70%]"
          style={{
            background:
              'radial-gradient(ellipse at 80% 80%, rgba(20,184,166,0.22) 0%, rgba(10,36,99,0.12) 45%, transparent 70%)',
          }}
        />
        <div
          className="pointer-events-none absolute top-0 right-0 h-[40%] w-[40%]"
          style={{
            background:
              'radial-gradient(ellipse at 100% 0%, rgba(10,36,99,0.4) 0%, transparent 65%)',
          }}
        />

        {/* Close button — top right */}
        <div className="relative flex justify-end">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all hover:border-white/40 hover:text-white hover:rotate-90 duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Services + contact columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="relative grid grid-cols-2 gap-10"
        >
          {/* Services column */}
          <div>
            <p className="mb-5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
              Our Services
            </p>
            <ul className="flex flex-col gap-3">
              {SERVICE_LINKS.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
                >
                  <button
                    onClick={() => onNavigate('#services')}
                    className="group flex items-center gap-2.5 text-left font-brand-secondary text-sm text-white/55 transition-colors hover:text-white"
                  >
                    <span className="h-px w-4 bg-brand-secondary/50 transition-all group-hover:w-6 group-hover:bg-brand-secondary" />
                    {s}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-4 font-brand-secondary text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
                Say Hello
              </p>
              <a
                href="mailto:hello@codorium.com"
                className="block font-brand-secondary text-base font-semibold text-white/80 no-underline transition-colors hover:text-brand-secondary"
              >
                hello@codorium.com
              </a>
            </div>

            <div>
              <p className="mb-3 font-brand-secondary text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
                Follow Us
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all hover:border-brand-secondary/40 hover:text-brand-secondary no-underline"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="relative font-brand-secondary text-xs text-white/20"
        >
          © {new Date().getFullYear()} Codorium. All rights reserved.
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default Navbar
