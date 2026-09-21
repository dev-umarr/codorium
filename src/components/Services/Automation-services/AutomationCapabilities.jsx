import { motion } from "framer-motion";

const CAPABILITIES = [
  [
    "Workflow Automation",
    "Replace repetitive manual work with dependable workflows that move tasks, data, and approvals between your tools.",
  ],
  [
    "Intelligent Routing",
    "Route requests, cases, and work items to the right person or system using clear rules and real-time context.",
  ],
  [
    "Rules & Decision Engines",
    "Make business logic explicit, testable, and easy to change as your policies and operations evolve.",
  ],
  [
    "Compliance Frameworks",
    "Build privacy, access controls, and compliance requirements into the workflow foundation from day one.",
  ],
  [
    "Audit Trails & Reporting",
    "Track every action with searchable logs, operational visibility, and reports your teams can trust.",
  ],
  [
    "Human-in-the-Loop",
    "Keep people in control where judgment matters with approval gates, exceptions, and safe escalation paths.",
  ],
];

const ICONS = [
  <>
    <path d="M4 6h7v5H4zM13 13h7v5h-7z" />
    <path d="M11 8h2v7M8 11v2h8" />
  </>,
  <>
    <path d="M4 5h16v14H4z" />
    <path d="M8 9h8M8 13h5" />
    <path d="m16 16 2 2 3-4" />
  </>,
  <>
    <path d="M5 4h14v16H5z" />
    <path d="M8 8h8M8 12h5M8 16h3" />
  </>,
  <>
    <path d="M12 3 20 7v5c0 4.5-3.5 7.7-8 9-4.5-1.3-8-4.5-8-9V7l8-4Z" />
    <path d="m8.5 12 2.2 2.2 4.8-5" />
  </>,
  <>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </>,
  <>
    <circle cx="7" cy="12" r="3" />
    <circle cx="17" cy="12" r="3" />
    <path d="M10 12h4" />
  </>,
];

function AutomationCapabilities() {
  return (
    <section
      id="automation-capabilities"
      className="bg-brand-surface px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="automation-capabilities-heading"
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
            id="automation-capabilities-heading"
            className="mt-3 font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl"
          >
            Automation{" "}
            <span className="text-brand-secondary">capabilities</span>
          </h2>
          <p className="mt-4 max-w-xl font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/60 sm:text-base">
            From first trigger to final audit trail, we build automation that is
            secure, observable, and useful to the people running your business.
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
    </section>
  );
}

export default AutomationCapabilities;
