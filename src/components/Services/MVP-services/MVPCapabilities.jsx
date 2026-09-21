import { motion } from "framer-motion";

const CAPABILITIES = [
  [
    "Product discovery & scoping",
    "Turn a rough idea into a focused product brief, prioritized roadmap, and build plan that protects your timeline.",
  ],
  [
    "Rapid UX & prototyping",
    "Test the core experience early with focused flows, clickable prototypes, and decisions grounded in real user needs.",
  ],
  [
    "Lean full-stack engineering",
    "Ship the smallest complete product with a durable architecture that can grow beyond the first release.",
  ],
  [
    "Launch-ready foundations",
    "Production deployment, analytics, error tracking, and secure environments are part of the MVP, not an afterthought.",
  ],
  [
    "User feedback loops",
    "Instrument the product to learn what users do, where they struggle, and which features deserve the next sprint.",
  ],
  [
    "Investor-ready delivery",
    "Get a polished, working product and a clear technical story for demos, fundraising, and early customer conversations.",
  ],
];

const ICONS = [
  <>
    <path d="M5 4h14v16H5z" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </>,
  <>
    <path d="m14.5 4.5 5 5-9.5 9.5-4-1 1-4 9.5-9.5Z" />
    <path d="m13 6 5 5" />
  </>,
  <>
    <path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 4l-2 16" />
  </>,
  <>
    <path d="M12 3 20 7v5c0 4.5-3.5 7.7-8 9-4.5-1.3-8-4.5-8-9V7l8-4Z" />
    <path d="m8.5 12 2.2 2.2 4.8-5" />
  </>,
  <>
    <circle cx="11" cy="11" r="6" />
    <path d="m16 16 4 4M8.5 11h5M11 8.5v5" />
  </>,
  <>
    <path d="M4 17V7M4 12h4l8-4v8l-8-4H4Z" />
    <path d="M16 10.5c2 .4 3 1.4 3 3" />
  </>,
];

function MVPCapabilities() {
  return (
    <section
      id="mvp-capabilities"
      className="bg-brand-surface px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="mvp-capabilities-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-secondary sm:text-xs">
            What we deliver
          </span>
          <h2
            id="mvp-capabilities-heading"
            className="mt-3 font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl"
          >
            MVP <span className="text-brand-secondary">capabilities</span>
          </h2>
          <p className="mt-4 max-w-xl font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/60 sm:text-base">
            Everything you need to move from a validated concept to a product
            real users can try, share, and pay for.
          </p>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map(([title, description], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
              whileHover={{ y: -4, borderColor: "rgba(20,184,166,0.72)" }}
              className="group flex min-h-[225px] flex-col rounded-xl border border-brand-secondary/25 p-6 shadow-[0_12px_28px_rgba(10,36,99,0.12)] transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(20,184,166,0.2)]"
              style={{
                background:
                  "linear-gradient(145deg, #10243b 0%, #0b1b31 55%, #091a2d 100%)",
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-secondary/20 bg-brand-secondary/10 text-brand-secondary shadow-[0_0_16px_rgba(20,184,166,0.12)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[index]}
                </svg>
              </div>
              <h3 className="mt-5 font-brand-primary text-base font-700 leading-tight text-white sm:text-lg">
                {title}
              </h3>
              <p className="mt-3 font-brand-secondary text-sm font-normal leading-relaxed text-white/60">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MVPCapabilities;
