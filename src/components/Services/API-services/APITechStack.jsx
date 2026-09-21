import { motion } from "framer-motion";

const TECHNOLOGIES = [
  "Node.js",
  "Express.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "REST APIs",
  "GraphQL",
  "Webhooks",
  "Docker",
  "AWS / GCP",
  "OpenAPI",
];

function APITechStack() {
  return (
    <section
      id="api-tech-stack"
      className="bg-brand-surface px-6 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0 lg:pb-24 lg:pt-0"
      aria-labelledby="api-tech-stack-heading"
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
            Tools of the trade
          </span>
          <h2
            id="api-tech-stack-heading"
            className="mt-3 font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl"
          >
            API tech <span className="text-brand-secondary">stack</span>
          </h2>
          <p className="mt-4 max-w-xl font-brand-secondary text-sm font-normal leading-relaxed text-brand-primary/60 sm:text-base">
            Production-tested technologies for building fast services, reliable
            integrations, and APIs developers enjoy using.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-10 flex max-w-5xl flex-wrap gap-3"
          aria-label="API engineering technologies"
        >
          {TECHNOLOGIES.map((technology) => (
            <motion.span
              key={technology}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
              whileHover={{ y: -2, borderColor: "rgba(20,184,166,0.5)" }}
              className="inline-flex items-center gap-2 rounded-xl border border-brand-border bg-white px-4 py-2.5 font-brand-secondary text-sm font-semibold text-brand-primary shadow-[0_4px_12px_rgba(10,36,99,0.03)] transition-colors"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-secondary"
                aria-hidden="true"
              />
              {technology}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default APITechStack;
