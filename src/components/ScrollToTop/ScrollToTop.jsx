import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const lastScrollY = useRef(0)
  const stopTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      const scrollingDown = current > lastScrollY.current

      if (current < 400) {
        setVisible(false)
      } else if (scrollingDown) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      lastScrollY.current = current

      // show again when scrolling stops
      clearTimeout(stopTimer.current)
      stopTimer.current = setTimeout(() => {
        if (window.scrollY >= 400) setVisible(true)
      }, 600)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(stopTimer.current)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-teal-500/40 text-teal-300 shadow-xl shadow-teal-900/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-teal-500/30"
          style={{
            background:
              'radial-gradient(circle at 35% 35%, #1e4a5c 0%, #0f2535 45%, #091520 100%)',
            boxShadow:
              '0 8px 32px rgba(20,184,166,0.18), inset 0 1.5px 2px rgba(255,255,255,0.12), inset 0 -2px 6px rgba(0,0,0,0.5)',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
