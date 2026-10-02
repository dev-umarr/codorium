import { motion } from "framer-motion";

const CAPABILITIES = [
  [
    "Product UI & UX",
    "Clear, intuitive interfaces that help users complete important tasks quickly across every screen size.",
  ],
  [
    "Responsive Web Apps",
    "Fast, accessible web experiences built to feel reliable on desktop, tablet, and mobile browsers.",
  ],
  [
    "Native-Quality Mobile",
    "Cross-platform iOS and Android applications with thoughtful interactions and a consistent product system.",
  ],
  [
    "Real-Time Experiences",
    "Live dashboards, notifications, collaboration, and data synchronization that keep teams in the flow.",
  ],
  [
    "Secure Payments",
    "Stripe billing, subscriptions, and checkout flows implemented with secure handling and dependable webhooks.",
  ],
  [
    "Performance & Scale",
    "Optimized frontend delivery, resilient APIs, monitoring, and infrastructure ready for growing usage.",
  ],
];

const ICONS = [
  <>
    <path d="M4 5h16v14H4z" />
    <path d="M7 9h4M7 13h7M17 9h.01" />
  </>,
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 6h8M8 18h8" />
  </>,
  <>
    <rect x="7" y="3" width="10" height="18" rx="2" />
    <path d="M10 6h4M11 18h2" />
  </>,
  <>
    <path d="M4 12h4l2-5 3 10 2-5h5" />
  </>,
  <>
    <rect x="3.5" y="5" width="17" height="14" rx="2" />
    <path d="M3.5 9h17M8 14h3" />
  </>,
  <>
    <path d="m4 16 5-5 3 3 7-8" />
    <path d="M15 6h4v4" />
  </>,
];

function WebMobileCapabilities() {
  return (
    <motion.section
      id="web-mobile-capabilities"
      className="bg-brand-surface px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="web-mobile-capabilities-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-secondary sm:text-xs">
            What we deliver
          </span>
          <h2
            id="web-mobile-capabilities-heading"
            className="mt-3 font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl"
          >
            Web &amp; mobile{" "}
            <span className="text-brand-secondary">capabilities</span>
          </h2>
          <p className="mt-4 max-w-xl font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/60 sm:text-base">
            Every engagement combines thoughtful product design and dependable
            engineering to create experiences people return to.
          </p>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map(([title, description], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4, borderColor: "rgba(20,184,166,0.72)", transition: { duration: 0.25, ease: 'easeOut' } }}
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
    </motion.section>
  );
}

export default WebMobileCapabilities;
