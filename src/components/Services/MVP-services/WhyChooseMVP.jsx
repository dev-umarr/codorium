import { motion } from "framer-motion";

const REASONS = [
  [
    "Speed without shortcuts",
    "A focused scope and experienced delivery team get you to a working product quickly without sacrificing the foundations that matter.",
  ],
  [
    "Built around learning",
    "Every sprint creates something testable, so real user feedback shapes the roadmap instead of assumptions and endless planning.",
  ],
  [
    "Ready for the next stage",
    "We make pragmatic technology decisions today that keep your product flexible for traction, fundraising, and scale tomorrow.",
  ],
];

function WhyChooseMVP() {
  return (
    <motion.section
      id="why-choose-mvp"
      className="bg-brand-surface px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="why-choose-mvp-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="self-start lg:sticky lg:top-24"
        >
          <span className="inline-flex items-center rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-secondary sm:text-xs">
            WHY CODORIUM MVP
          </span>
          <h2
            id="why-choose-mvp-heading"
            className="mt-5 max-w-xl font-brand-primary text-3xl font-700 leading-tight text-brand-primary sm:text-5xl"
          >
            Why choose <span className="text-brand-secondary">Codorium</span>{" "}
            for MVP development
          </h2>
          <p className="mt-5 max-w-xl font-brand-secondary text-base font-normal leading-relaxed text-brand-primary/60 sm:text-lg">
            Move from idea to evidence quickly. We help founders build the right
            first version, learn from the market, and create a foundation worth
            investing in.
          </p>
        </motion.div>
        <div className="flex flex-col gap-4">
          {REASONS.map(([title, description], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 + index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4, borderColor: "rgba(20,184,166,0.72)", transition: { duration: 0.25, ease: 'easeOut' } }}
              className="group rounded-2xl border border-brand-secondary/25 p-6 shadow-[0_12px_28px_rgba(10,36,99,0.12)] transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(20,184,166,0.2)] sm:p-7"
              style={{
                background:
                  "linear-gradient(145deg, #10243b 0%, #0b1b31 55%, #091a2d 100%)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-secondary/20 bg-brand-secondary/15 text-brand-secondary transition-colors group-hover:bg-brand-secondary group-hover:text-brand-primary">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-brand-primary text-lg font-700 leading-tight text-white sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2 font-brand-secondary text-sm font-normal leading-relaxed text-white/60 sm:text-base">
                    {description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default WhyChooseMVP;
