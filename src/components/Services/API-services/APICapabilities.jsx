import { motion } from "framer-motion";

const CAPABILITIES = [
  [
    "API Architecture",
    "Design clear service boundaries and contracts that keep your product maintainable as teams, clients, and traffic grow.",
  ],
  [
    "REST & GraphQL APIs",
    "Build well-structured APIs with predictable schemas, useful documentation, and the right interface for every consumer.",
  ],
  [
    "Third-Party Integrations",
    "Connect payments, CRMs, internal tools, and partner platforms through dependable integrations that are easy to operate.",
  ],
  [
    "Webhooks & Event Systems",
    "Deliver reliable event-driven workflows with retries, idempotency, queues, and clear delivery visibility.",
  ],
  [
    "Authentication & Security",
    "Protect every request with strong identity, permissions, rate limits, validation, and secure secrets management.",
  ],
  [
    "Observability & Performance",
    "Measure latency, errors, throughput, and usage so your API stays fast and dependable after launch.",
  ],
];

const ICONS = [
  <>
    <path d="M4 6h16v12H4z" />
    <path d="M8 10h8M8 14h5" />
  </>,
  <>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
  </>,
  <>
    <path d="M4 5h16v14H4z" />
    <path d="M8 9h8M8 13h5" />
    <path d="m16 16 2 2 3-4" />
  </>,
  <>
    <circle cx="6" cy="12" r="2" />
    <circle cx="18" cy="7" r="2" />
    <circle cx="18" cy="17" r="2" />
    <path d="m8 11 8-3M8 13l8 3" />
  </>,
  <>
    <path d="M12 3 20 7v5c0 4.5-3.5 7.7-8 9-4.5-1.3-8-4.5-8-9V7l8-4Z" />
    <path d="m8.5 12 2.2 2.2 4.8-5" />
  </>,
  <>
    <path d="m4 16 5-5 3 3 7-8" />
    <path d="M15 6h4v4" />
  </>,
];

function APICapabilities() {
  return (
    <motion.section
      id="api-capabilities"
      className="bg-brand-surface px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="api-capabilities-heading"
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
            id="api-capabilities-heading"
            className="mt-3 font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl"
          >
            API engineering{" "}
            <span className="text-brand-secondary">capabilities</span>
          </h2>
          <p className="mt-4 max-w-xl font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/60 sm:text-base">
            Every engagement is built around APIs that are secure, easy to
            consume, and ready to support the next stage of your product.
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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-secondary/20 bg-brand-secondary/10 text-brand-secondary">
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

export default APICapabilities;
