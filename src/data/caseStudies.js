import fundraiseUpVisual from '../assets/images/image-3.png'
import fashionPassVisual from '../assets/images/image-2.jpg'
import enporVisual from '../assets/images/image.png'

const detailDefaults = {
    bg: 'linear-gradient(145deg, #071e1a 0%, #060e1f 55%, #091a3a 100%)',
    overview: 'Codorium partnered with the team to turn a complex product idea into a clear, dependable digital experience.',
    challenge: 'The existing experience made important workflows harder to understand and slower to operate as the business grew.',
    goals: ['Clarify the core user journey', 'Create a scalable foundation for the next phase', 'Ship a polished experience that the team could confidently share'],
    solution: 'We combined product strategy, interface design, and focused engineering to create a simpler path from first interaction to measurable value.',
    features: ['Responsive product experience', 'Reusable component foundation', 'Conversion-focused flows', 'Analytics-ready implementation'],
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Supabase'],
    process: ['Discovery and alignment', 'Experience mapping and visual direction', 'Iterative implementation', 'QA, launch, and handoff'],
    outcomes: ['A clearer product story', 'A more consistent user experience', 'A foundation ready for continued growth'],
}

function createCaseStudy(study) {
    return { ...detailDefaults, ...study, path: `/case-studies/${study.slug}` }
}

export const CASE_STUDIES = [
    createCaseStudy({
        slug: 'fundraise-up', category: 'Donation Technology', title: 'Fundraise Up - Online Donation Platform',
        shortDescription: 'A conversion-focused donation experience for nonprofits, built around modern payments and personalized donor journeys.', image: fundraiseUpVisual, imageAlt: 'Fundraise Up donation platform project visual',
        quote: { text: 'Codorium turned our donation flow into a modern, high-converting experience.', author: 'Emily R.', role: 'Growth Lead, Fundraise Up' },
        metrics: [{ value: '2017', label: 'Year founded' }, { value: '3,000+', label: 'Nonprofits using Fundraise Up' }, { value: '300+', label: 'Team members worldwide' }, { value: 'NYC', label: 'Headquarters in Brooklyn, New York' }],
        overview: 'Fundraise Up needed to modernize a decade-old donation flow without interrupting live fundraising campaigns for thousands of nonprofits.',
        challenge: 'The donation journey had to become faster and more flexible while the platform continued processing real campaigns without downtime.',
        goals: ['Modernize the checkout and personalization engine', 'Protect live fundraising operations during migration', 'Make the donor journey easier to complete'],
        solution: 'We rebuilt the core checkout and personalization experience around a modern, AI-ready architecture and shipped it in six weeks.',
        features: ['Donation checkout redesign', 'Personalized donor journeys', 'Modern payment options', 'Migration-ready architecture'],
        outcomes: ['28% lift in completed donations', 'Zero downtime during migration', 'A foundation ready for AI-assisted personalization'],
    }),
    createCaseStudy({
        slug: 'fashionpass', category: 'E-commerce Subscription', title: 'FashionPass - Clothing Rental Platform',
        shortDescription: 'A faster subscription commerce experience for discovering, renting, and rotating premium fashion.', image: fashionPassVisual, imageAlt: 'FashionPass clothing rental platform project visual',
        quote: { text: 'The experience feels faster, cleaner, and much easier to scale.', author: 'Marketing Team', role: 'FashionPass' },
        metrics: [{ value: '100K+', label: 'Happy members highlighted' }, { value: '600+', label: 'Google reviews showcased' }, { value: '5.0', label: 'Google review rating shown' }, { value: '2026', label: 'Latest site copyright year' }],
        overview: 'FashionPass needed a clearer member journey that could move shoppers from discovery to rental with less friction.',
        challenge: 'Product discovery, membership context, and checkout competed for attention across a growing subscription experience.',
        goals: ['Make the membership value immediately legible', 'Reduce friction between browsing and renting', 'Create a system that could support ongoing merchandising'],
        solution: 'We reorganized the experience around the member journey, pairing sharper content hierarchy with a faster, more consistent interface.',
        features: ['Membership-led product discovery', 'Rental journey improvements', 'Responsive commerce patterns', 'Reusable merchandising sections'],
        techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Analytics instrumentation'],
        outcomes: ['A cleaner member journey', 'Improved content hierarchy', 'A scalable base for future commerce experiments'],
    }),
    createCaseStudy({
        slug: 'enpor', category: 'Fintech & Blockchain', title: 'ENPOR - Borderless Finance Platform',
        shortDescription: 'A clear fintech web experience connecting crypto and traditional banking with focused conversion flows.', image: enporVisual, imageAlt: 'ENPOR borderless finance platform project visual',
        quote: { text: 'Codorium gave structure to a complex fintech vision and turned it into a clear, launch-ready platform.', author: 'Paul S.', role: 'CEO, ENPOR' },
        metrics: [{ value: '250M', label: 'EPR token supply highlighted' }, { value: '4', label: 'Card tiers presented' }, { value: '8 wks', label: 'ICO timeline shown' }, { value: '15%', label: 'Early-week bonus structure' }],
        overview: 'ENPOR needed to explain a borderless finance product to users and investors without burying the story in technical complexity.',
        challenge: 'Crypto, banking, cards, and ICO information needed to coexist in one experience while keeping the next action obvious.',
        goals: ['Explain the product in plain language', 'Present the token and card ecosystem clearly', 'Give visitors confident paths into account actions'],
        solution: 'We shaped the experience around clear product sections, focused ICO flows, and conversion-oriented account actions.',
        features: ['Fintech product narrative', 'ICO information architecture', 'Card tier presentation', 'Account-focused conversion paths'],
        techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Responsive design system'],
        outcomes: ['A launch-ready investor story', 'Clearer product education', 'A stronger bridge between product detail and conversion'],
    }),
    createCaseStudy({ slug: 'northstar-labs', category: 'AI Systems', title: 'Northstar Labs - RAG-Powered Support Copilot', shortDescription: 'A retrieval-augmented support assistant connected to the team knowledge base.', image: fundraiseUpVisual, imageAlt: 'Northstar Labs support copilot project visual', bullets: ['Custom RAG pipeline on existing docs', 'Zendesk + Slack integration', 'Continuous feedback-loop retraining'], metrics: [{ value: '62%', label: 'Faster first response' }, { value: '4.8/5', label: 'Agent satisfaction' }] }),
    createCaseStudy({ slug: 'meridian-health', category: 'Enterprise Automation', title: 'Meridian Health - Claims Processing Overhaul', shortDescription: 'An automated intake, validation, and routing system for a high-volume claims workflow.', image: fashionPassVisual, imageAlt: 'Meridian Health claims processing project visual', bullets: ['OCR + validation pipeline', 'Rules-based routing engine', 'Full HIPAA-compliant audit trail'], metrics: [{ value: '74%', label: 'Less processing time' }, { value: '$1.2M', label: 'Annual savings' }] }),
    createCaseStudy({ slug: 'orderly', category: 'Frontend Engineering', title: 'Orderly - Real-Time Ops Dashboard Rebuild', shortDescription: 'A faster operations dashboard for a growing warehouse network.', image: enporVisual, imageAlt: 'Orderly operations dashboard project visual', bullets: ['React + WebSocket rearchitecture', 'Sub-200ms live data refresh', 'Component library for scaling'], metrics: [{ value: '3.2x', label: 'Faster load time' }, { value: '40%', label: 'Fewer support tickets' }] }),
    createCaseStudy({ slug: 'litely', category: 'MVP Development', title: 'Litely - Investor-Ready MVP in 8 Weeks', shortDescription: 'A focused product MVP designed and shipped to help a pre-seed founder close a round.', image: fundraiseUpVisual, imageAlt: 'Litely MVP project visual', bullets: ['Core product build', 'Stripe billing integration', 'Analytics instrumentation from day one'], metrics: [{ value: '8 wks', label: 'Idea to MVP' }, { value: '$2.4M', label: 'Round closed post-launch' }] }),
    createCaseStudy({ slug: 'vantage-retail', category: 'AI Systems', title: 'Vantage Retail - Demand Forecasting Engine', shortDescription: 'A forecasting layer over existing point-of-sale data for better inventory decisions.', image: fashionPassVisual, imageAlt: 'Vantage Retail forecasting project visual', bullets: ['ML forecasting pipeline', 'POS + inventory integration', 'Buyer-facing forecast dashboard'], metrics: [{ value: '31%', label: 'Less overstock' }, { value: '19%', label: 'Fewer stockouts' }] }),
    createCaseStudy({ slug: 'harbor-logistics', category: 'Enterprise Automation', title: 'Harbor Logistics - Dispatch Automation Suite', shortDescription: 'Automated route assignment and live tracking for a busy dispatch operation.', image: enporVisual, imageAlt: 'Harbor Logistics dispatch project visual', bullets: ['Automated dispatch engine', 'Live GPS driver tracking', 'Dispatcher override controls'], metrics: [{ value: '50%', label: 'Faster dispatch' }, { value: '22%', label: 'Lower fuel cost' }] }),
]

export const FEATURED_CASE_STUDIES = CASE_STUDIES.slice(0, 3)

export function getCaseStudy(slug) {
    return CASE_STUDIES.find((study) => study.slug === slug)
}