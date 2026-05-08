import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const LOGO_TICKER = [
  'OpenAI', 'Next.js', 'React', 'Flutter', 'Node.js',
  'Python', 'LangChain', 'AWS', 'Vercel', 'FastAPI',
  'PostgreSQL', 'Pinecone', 'Supabase', 'Docker', 'Stripe',
]

/* ── Neural network canvas ── */
function NeuralCanvas() {
  const canvasRef = useRef(null)
  const mouseRef  = useRef({ x: -9999, y: -9999 })
  const rafRef    = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let nodes    = []

    const NODE_COUNT   = 90
    const MAX_DIST     = 220   // connection reach
    const MOUSE_R      = 280   // mouse influence radius
    const MOUSE_PULL   = 0.022 // spring strength
    const ORBIT_DIST   = 85    // preferred distance from cursor (repel if closer)
    const BASE_SPEED   = 0.45  // idle drift speed

    function resize() {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    function spawn() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * BASE_SPEED,
        vy: (Math.random() - 0.5) * BASE_SPEED,
        r:  Math.random() * 2 + 1.5,   // 1.5 – 3.5 px
      }))
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      /* ── update positions ── */
      nodes.forEach((n) => {
        const dx   = mx - n.x
        const dy   = my - n.y
        const dist = Math.hypot(dx, dy)

        if (dist < MOUSE_R && dist > 1) {
          if (dist >= ORBIT_DIST) {
            // Attraction — pull toward cursor (dx*f keeps force proportional to distance)
            const f = (1 - dist / MOUSE_R) * MOUSE_PULL
            n.vx += dx * f
            n.vy += dy * f
          } else {
            // Repulsion — push away so nodes never stick to cursor
            const repel = (1 - dist / ORBIT_DIST) * MOUSE_PULL * 5
            n.vx -= (dx / dist) * repel * ORBIT_DIST * 0.35
            n.vy -= (dy / dist) * repel * ORBIT_DIST * 0.35
          }
        }

        n.vx *= 0.93
        n.vy *= 0.93
        n.x  += n.vx
        n.y  += n.vy

        // wrap edges
        if (n.x < 0)              n.x = canvas.width
        if (n.x > canvas.width)   n.x = 0
        if (n.y < 0)              n.y = canvas.height
        if (n.y > canvas.height)  n.y = 0
      })

      /* ── connections ── */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
          if (d < MAX_DIST) {
            const proximity = 1 - d / MAX_DIST

            // boost lines that are close to the mouse
            const midX   = (nodes[i].x + nodes[j].x) / 2
            const midY   = (nodes[i].y + nodes[j].y) / 2
            const mDist  = Math.hypot(mx - midX, my - midY)
            const mBoost = mDist < MOUSE_R ? (1 - mDist / MOUSE_R) * 0.35 : 0

            const alpha = proximity * (0.18 + mBoost)

            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(20,184,166,${alpha})`
            ctx.lineWidth   = proximity * 1.2
            ctx.stroke()
          }
        }
      }

      /* ── dots ── */
      nodes.forEach((n) => {
        const dMouse = Math.hypot(mx - n.x, my - n.y)
        const boost  = dMouse < MOUSE_R ? (1 - dMouse / MOUSE_R) * 0.5 : 0
        const alpha  = 0.35 + boost

        // outer glow for nearby nodes
        if (boost > 0.1) {
          const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4)
          grd.addColorStop(0, `rgba(20,184,166,${boost * 0.4})`)
          grd.addColorStop(1, 'rgba(20,184,166,0)')
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(20,184,166,${alpha})`
        ctx.fill()
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    const section = canvas.closest('section')
    resize()
    spawn()
    tick()

    const ro = new ResizeObserver(() => { resize(); spawn() })
    ro.observe(canvas)
    section.addEventListener('mousemove',  onMouseMove)
    section.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      section.removeEventListener('mousemove',  onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}

function Hero() {
  function scrollTo(e, href) {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Neural network canvas */}
      <NeuralCanvas />

      {/* Teal glow — upper right */}
      <div
        className="pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] opacity-18"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #14b8a6 0%, transparent 60%)',
        }}
      />
      {/* Faint blue glow — lower left */}
      <div
        className="pointer-events-none absolute bottom-0 -left-20 h-[400px] w-[400px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #0a2463 0%, transparent 70%)',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-0 lg:px-8 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">

          {/* ── LEFT column ── */}
          <div className="flex flex-col gap-7">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 font-brand-secondary text-sm font-semibold text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
                AI-Powered Development Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-brand-primary text-[1.75rem] font-normal leading-[1.08] text-white sm:text-[2.4rem] lg:text-6xl xl:text-[4.25rem]"
            >
              AI-First Software <br />
              Development. <br />
              <span className="text-brand-secondary">Built to Scale.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="max-w-[480px] font-brand-secondary text-base leading-relaxed text-white/50"
            >
              From RAG-powered AI assistants to full-stack SaaS products — we partner with
              founders and startups to ship production-ready software, fast.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              {/* Primary CTA */}
              <a
                href="#cta"
                onClick={(e) => scrollTo(e, '#cta')}
                className="group inline-flex items-center gap-2.5 rounded-lg bg-brand-secondary px-7 py-3.5 font-brand-secondary text-base font-semibold text-white transition-all hover:bg-brand-secondary-hover hover:-translate-y-px hover:shadow-lg hover:shadow-brand-secondary/30 no-underline"
              >
                Book a Call
                <svg
                  className="transition-transform group-hover:translate-x-1"
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Trust signal */}
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 1L9.8 6.1H15.3L10.9 9.3L12.7 14.4L8 11.2L3.3 14.4L5.1 9.3L0.7 6.1H6.2L8 1Z"
                        fill="#14b8a6"
                      />
                    </svg>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="font-brand-secondary text-sm font-semibold text-white leading-tight">
                    5.0 Rated
                  </span>
                  <span className="font-brand-secondary text-xs text-white/40 leading-tight">
                    by founders &amp; startups
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ── RIGHT column — Terminal mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="hidden lg:block"
          >
            <TerminalMockup />
          </motion.div>
        </div>
      </div>

      {/* ── Logo ticker ── */}
      <div className="relative mt-20">
        {/* Top separator */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-t border-white/8" />
        </div>

        <div className="mt-7 overflow-hidden pb-4">
          <p className="mb-5 text-center font-brand-secondary text-xs font-semibold uppercase tracking-[0.18em] text-white/25">
            Built with industry-leading tools
          </p>

          {/* Fade masks */}
          <div className="relative">
            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20"
              style={{ background: 'linear-gradient(to right, #060e1f, transparent)' }}
            />
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20"
              style={{ background: 'linear-gradient(to left, #060e1f, transparent)' }}
            />

            {/* Ticker */}
            <div className="flex overflow-hidden">
              <div className="marquee-track flex shrink-0 gap-10 pr-10">
                {[...LOGO_TICKER, ...LOGO_TICKER].map((name, i) => (
                  <span
                    key={i}
                    className="shrink-0 font-brand-secondary text-sm font-semibold text-white/20 tracking-wide"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

/* ── Terminal window mockup ── */
function TerminalMockup() {
  return (
    <div className="relative">
      {/* Glow behind the card */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-3xl opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, #14b8a6 0%, transparent 70%)',
        }}
      />

      {/* Main card */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10"
        style={{ background: 'rgba(6, 14, 31, 0.85)', backdropFilter: 'blur(12px)' }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <span className="ml-3 font-brand-secondary text-xs text-white/30">rag_pipeline.py</span>
        </div>

        {/* Code body */}
        <div className="p-6 font-mono text-sm leading-7">
          <CodeLine color="white/25" text="# Codorium RAG Engine v2.1" />
          <CodeLine color="white/10" text="" />
          <CodeLine indent={0}>
            <span className="text-brand-secondary/90">from</span>
            <span className="text-white/60"> langchain </span>
            <span className="text-brand-secondary/90">import</span>
            <span className="text-white/80"> RAGChain</span>
          </CodeLine>
          <CodeLine indent={0}>
            <span className="text-brand-secondary/90">from</span>
            <span className="text-white/60"> pinecone </span>
            <span className="text-brand-secondary/90">import</span>
            <span className="text-white/80"> VectorStore</span>
          </CodeLine>
          <CodeLine color="white/10" text="" />
          <CodeLine indent={0}>
            <span className="text-purple-400/80">def</span>
            <span className="text-teal-300/90"> query_knowledge_base</span>
            <span className="text-white/60">(q: str):</span>
          </CodeLine>
          <CodeLine indent={1}>
            <span className="text-white/50">docs </span>
            <span className="text-brand-secondary/70">= </span>
            <span className="text-white/70">store.similarity_search(q)</span>
          </CodeLine>
          <CodeLine indent={1}>
            <span className="text-white/50">answer </span>
            <span className="text-brand-secondary/70">= </span>
            <span className="text-white/70">chain.run(docs, q)</span>
          </CodeLine>
          <CodeLine indent={1}>
            <span className="text-brand-secondary/90">return</span>
            <span className="text-white/70"> answer</span>
          </CodeLine>
          <CodeLine color="white/10" text="" />

          {/* "Running" line */}
          <div className="flex items-center gap-2">
            <span className="text-green-400/70">▶</span>
            <span className="text-white/40 text-xs">Response generated in</span>
            <span className="text-brand-secondary text-xs font-semibold">127ms</span>
            <span className="terminal-cursor ml-1 text-brand-secondary">|</span>
          </div>
        </div>

        {/* Metric pills row */}
        <div className="flex gap-3 border-t border-white/8 px-6 py-4">
          {[
            { label: 'Accuracy', value: '99.2%' },
            { label: 'Latency', value: '< 200ms' },
            { label: 'Uptime', value: '99.9%' },
          ].map((m) => (
            <div
              key={m.label}
              className="flex flex-1 flex-col items-center gap-0.5 rounded-lg border border-white/8 bg-white/3 py-3"
            >
              <span className="font-brand-primary text-lg text-brand-secondary">{m.value}</span>
              <span className="font-brand-secondary text-[10px] font-semibold uppercase tracking-wider text-white/30">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge — top right */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-5 -right-5 flex items-center gap-2 rounded-xl border border-white/10 px-3.5 py-2.5"
        style={{ background: 'rgba(20, 184, 166, 0.12)', backdropFilter: 'blur(8px)' }}
      >
        <span className="text-base">🤖</span>
        <div className="flex flex-col">
          <span className="font-brand-secondary text-xs font-semibold text-white/80 leading-tight">AI-Powered</span>
          <span className="font-brand-secondary text-[10px] text-white/40 leading-tight">RAG Pipeline</span>
        </div>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-4 -left-5 flex items-center gap-2 rounded-xl border border-white/10 px-3.5 py-2.5"
        style={{ background: 'rgba(10, 36, 99, 0.8)', backdropFilter: 'blur(8px)' }}
      >
        <span className="text-base">⚡</span>
        <div className="flex flex-col">
          <span className="font-brand-secondary text-xs font-semibold text-white/80 leading-tight">Ship in Weeks</span>
          <span className="font-brand-secondary text-[10px] text-white/40 leading-tight">Not months</span>
        </div>
      </motion.div>
    </div>
  )
}

/* tiny helper to render a code line */
function CodeLine({ color, text, indent = 0, children }) {
  if (text !== undefined) {
    return (
      <div className={`text-${color}`}>
        {'\u00A0'.repeat(indent * 4)}{text}
      </div>
    )
  }
  return (
    <div>
      {'\u00A0'.repeat(indent * 4)}
      {children}
    </div>
  )
}

export default Hero
