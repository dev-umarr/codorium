import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const SEGMENT_DURATION = 0.9 // seconds for the line to travel between two steps
const STEP_HOLD = 700 // ms a step stays lit before the line moves on
const END_HOLD = 1800 // ms to rest on the final step before restarting
const HOVER_SEGMENT_DURATION = 0.18 // seconds per step when jumping to a hovered step

const PROCESS_STEPS = [
  {
    title: 'Planning',
    description: 'We start by listening. Your goals shape everything we build.',
    icon: <><rect x="6" y="5" width="12" height="15" rx="1.5" /><path d="M9 5V3.5h6V5M9 10h6M9 14h4" /></>,
  },
  {
    title: 'Design',
    description: 'Clean, intuitive, and made for your users to love and keep returning for more.',
    icon: <><path d="m14.5 4.5 5 5-9.5 9.5-4-1 1-4 9.5-9.5Z" /><path d="m13 6 5 5M5 19l3-1" /></>,
  },
  {
    title: 'Development',
    description: "Behind every line of code, there's intent. Engineered for your workflow.",
    icon: <><path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 4l-2 16" /></>,
  },
  {
    title: 'QA Testing',
    description: 'We stress-test it so your team never has to.',
    icon: <><path d="m12 3 7 3v5c0 4.5-3 7.8-7 10-4-2.2-7-5.5-7-10V6l7-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
  },
  {
    title: 'Deployment',
    description: "Go live in days. We're with you at every step.",
    icon: <><path d="M4 14c4-1 6-4 7-9 4 1 7 4 8 8-2 4-5 6-9 7l-3-3-3-3Z" /><path d="M8 16 4 20M7 12H4M12 17v3" /></>,
  },
  {
    title: 'Support',
    description: 'Ongoing monitoring and optimization long after launch.',
    icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8M12 8v8M8 8h.01M16 16h.01" /></>,
  },
]

const RING_MASK = 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px))'

function ProcessStepIcon({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

function useIsDesktop() {
  const query = '(min-width: 1024px)'
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)

  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setIsDesktop(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return isDesktop
}

function ProcessSection() {
  const lastStep = PROCESS_STEPS.length - 1
  const stepsRef = useRef(null)
  const isInView = useInView(stepsRef, { amount: 0.4 })
  const isDesktop = useIsDesktop()
  const prefersReducedMotion = useReducedMotion()
  const isAnimated = isDesktop && !prefersReducedMotion

  // `target` is the step the line is travelling to, `reached` the step it last arrived at,
  // and `duration` how long the current trip takes. Steps light up from the same state, so they stay in sync.
  const [progress, setProgress] = useState({ target: 0, reached: 0, duration: SEGMENT_DURATION })
  const [hovered, setHovered] = useState(null)
  const { target, reached, duration } = progress
  const hasArrived = reached === target

  useEffect(() => {
    if (!isAnimated || !isInView) return undefined

    if (!hasArrived) {
      const arrive = setTimeout(
        () => setProgress((current) => ({ ...current, reached: current.target })),
        duration * 1000,
      )
      return () => clearTimeout(arrive)
    }

    // Hovering a step holds the line there until the pointer leaves.
    if (hovered !== null) return undefined

    const isLast = target === lastStep
    const advance = setTimeout(() => {
      setProgress(
        isLast
          ? { target: 0, reached: 0, duration: 0 }
          : { target: target + 1, reached: target, duration: SEGMENT_DURATION },
      )
    }, isLast ? END_HOLD : STEP_HOLD)
    return () => clearTimeout(advance)
  }, [target, hasArrived, duration, hovered, isAnimated, isInView, lastStep])

  function focusStep(index) {
    if (!isAnimated) return
    setHovered(index)
    setProgress((current) => {
      if (current.target === index) return current
      const distance = Math.abs(index - current.target)
      return { target: index, reached: current.reached, duration: Math.max(0.3, distance * HOVER_SEGMENT_DURATION) }
    })
  }

  const fillPercent = isAnimated ? (target / lastStep) * 100 : 100
  const litUpTo = isAnimated ? Math.min(reached, target) : lastStep
  const currentStep = isAnimated && hasArrived ? target : null

  return (
    <motion.section
      id="services-process"
      data-navbar-light
      className="bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0"
      aria-labelledby="services-process-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-brand-secondary/60 bg-brand-secondary/5 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.16em] text-brand-secondary">
            Our Process
          </span>
          <h2 id="services-process-heading" className="mx-auto mt-5 max-w-3xl font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl">
            A six-step process, proven across <span className="text-brand-secondary">120+ projects</span>
          </h2>
        </motion.div>

        <div ref={stepsRef} className="relative mt-14 lg:mt-20" onMouseLeave={() => setHovered(null)}>
          {/* Rail runs between the first and last circle centres: top-8 = half of h-16; 6 columns with gap-5 (20px) */}
          <div
            className="pointer-events-none absolute left-[calc((100%-100px)/12)] right-[calc((100%-100px)/12)] top-8 z-0 hidden h-[2px] -translate-y-1/2 lg:block"
            aria-hidden="true"
          >
            <motion.span
              className="absolute left-0 top-0 block h-full rounded-full bg-brand-secondary shadow-[0_0_8px_rgba(20,184,166,0.45)]"
              initial={{ width: '0%' }}
              animate={{ width: `${fillPercent}%` }}
              transition={{ duration, ease: 'linear' }}
            >
              {/* Shimmer flowing along the filled line */}
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <motion.span
                  className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                  initial={{ left: '-30%' }}
                  animate={isAnimated ? { left: ['-30%', '110%'] } : { left: '-30%' }}
                  transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4 }}
                />
              </span>
              {/* Glowing leading edge; it tucks behind each circle once the line arrives */}
              <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-secondary shadow-[0_0_0_3px_rgba(20,184,166,0.18),0_0_12px_rgba(20,184,166,0.7)]">
                <span className="absolute inset-[3px] rounded-full bg-white/90" />
              </span>
            </motion.span>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {PROCESS_STEPS.map((step, index) => {
              const isActive = index <= litUpTo
              const isCurrent = index === currentStep

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
                  onMouseEnter={() => focusStep(index)}
                  className="group relative text-center"
                >
                  {/* Highlight panel that glides from step to step with the line */}
                  {isAnimated && index === target && (
                    <motion.div
                      layoutId="services-process-highlight"
                      className="pointer-events-none absolute -inset-x-2 -bottom-5 -top-5 rounded-2xl border border-brand-secondary/20 bg-brand-secondary/[0.05]"
                      transition={{ duration, ease: 'linear' }}
                      aria-hidden="true"
                    />
                  )}

                  <div className="relative transition-[translate] duration-300 ease-out group-hover:-translate-y-1">
                    <motion.div
                      animate={{ scale: isCurrent ? 1.06 : 1 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className={`relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#dcecf7] bg-[#060e1f] transition-[color,box-shadow] duration-500 ${
                        isActive
                          ? 'text-brand-secondary shadow-[0_0_0_1px_rgba(10,36,99,0.08),0_0_20px_rgba(20,184,166,0.15)] group-hover:shadow-[0_0_0_1px_rgba(10,36,99,0.08),0_0_28px_rgba(20,184,166,0.3)]'
                          : 'text-brand-secondary/35 shadow-[0_0_0_1px_rgba(10,36,99,0.08)]'
                      }`}
                    >
                      {isCurrent && (
                        <>
                          {/* Orbiting ring around the active step */}
                          <motion.span
                            className="pointer-events-none absolute -inset-[9px] rounded-full"
                            style={{
                              background: 'conic-gradient(from 0deg, #14b8a6, rgba(20,184,166,0) 35%, rgba(20,184,166,0) 65%, #14b8a6)',
                              WebkitMask: RING_MASK,
                              mask: RING_MASK,
                            }}
                            initial={{ opacity: 0, rotate: 0 }}
                            animate={{ opacity: 1, rotate: 360 }}
                            transition={{ opacity: { duration: 0.3 }, rotate: { duration: 3, ease: 'linear', repeat: Infinity } }}
                            aria-hidden="true"
                          />
                          {/* One-off ripple the moment the line arrives */}
                          <motion.span
                            className="pointer-events-none absolute -inset-1 rounded-full border-2 border-brand-secondary"
                            initial={{ opacity: 0.6, scale: 1 }}
                            animate={{ opacity: 0, scale: 1.6 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            aria-hidden="true"
                          />
                        </>
                      )}

                      <span className="h-7 w-7 transition-transform duration-300 group-hover:scale-110">
                        <ProcessStepIcon>{step.icon}</ProcessStepIcon>
                      </span>
                      <motion.span
                        key={isActive ? 'active' : 'idle'}
                        initial={isAnimated ? { scale: 0.6 } : false}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                        className={`absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full font-brand-secondary text-[10px] font-bold shadow-[0_0_0_2px_#f0f6fc] transition-colors duration-500 ${
                          isActive ? 'bg-brand-secondary text-[#06241f]' : 'bg-[#dcecf7] text-brand-primary/50'
                        }`}
                      >
                        {index + 1}
                      </motion.span>
                    </motion.div>

                    <h3
                      className={`mt-5 font-brand-primary text-lg font-700 leading-tight transition-colors duration-500 ${
                        isCurrent ? 'text-brand-secondary' : 'text-brand-primary'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-[190px] font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/65">{step.description}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ProcessSection
