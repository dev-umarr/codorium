import { useState } from 'react'

const FAQ_ITEMS = [
  {
    question: 'What Services Does Codorium Offer?',
    answer: 'We offer end-to-end digital solutions including AI & RAG application development, full product builds, MVP to market execution, custom SaaS development, and enterprise workflow automation.',
  },
  {
    question: 'Which Industries Do You Work With?',
    answer: 'We partner with startups, SaaS companies, fintech, healthcare & MedTech, eCommerce/D2C, logistics, and enterprise businesses across various growth stages.',
  },
  {
    question: 'How Long Does A Project Usually Take?',
    answer: 'Typical MVPs and core product builds range from 6 to 8 weeks, while larger enterprise systems are delivered through structured two-week sprint milestones.',
  },
  {
    question: 'Do You Provide Ongoing Support After Project Delivery?',
    answer: 'Yes, we provide continuous monitoring, performance optimization, and long-term engineering support post-launch.',
  },
  {
    question: 'How Can I Get Started With Codorium?',
    answer: 'You can reach out via our contact form or book a free consultation call to discuss your project requirements and roadmap.',
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1)

  function toggle(index) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section
      id="services-faq"
      data-navbar-light
      className="bg-brand-surface px-6 pb-20 pt-0 sm:px-8 sm:pb-24 lg:pb-32 lg:pt-0"
      aria-labelledby="services-faq-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-brand-secondary/70 px-4 py-1.5 font-brand-secondary text-xs font-semibold uppercase tracking-[0.14em] text-brand-secondary">
            FAQ
          </span>
          <h2 id="services-faq-heading" className="mt-5 font-brand-primary text-4xl font-700 leading-tight text-brand-primary sm:text-5xl">
            Frequently Asked <span className="text-brand-secondary">Questions</span>
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `services-faq-answer-${index}`

            return (
              <div key={item.question} className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-lg shadow-brand-primary/5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors hover:bg-brand-bg sm:px-7"
                >
                  <span className="font-brand-primary text-base font-600 text-brand-primary sm:text-lg">{item.question}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-secondary/20 font-brand-secondary text-xl leading-none text-brand-secondary" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={answerId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-6 pb-6 font-brand-secondary text-sm leading-relaxed text-brand-primary/60 sm:px-7 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
