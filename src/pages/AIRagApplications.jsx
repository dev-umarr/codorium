import { motion } from 'framer-motion'
import AIRagHero from '../components/Services/AIRagHero'
import KeyCapabilities from '../components/Services/KeyCapabilities'
import ServiceCTASection from '../components/Services/ServiceCTASection'
import TechStackSection from '../components/Services/TechStackSection'
import WhyChooseAISection from '../components/Services/WhyChooseAISection'
import Seo from '../components/SEO/Seo'

function AIRagApplications() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Seo
        title="AI & RAG Applications"
        description="Production-ready artificial intelligence systems designed to automate workflows and scale operations without increasing headcount or overhead."
        path="/services/ai-rag-applications"
      />
      <AIRagHero />
      <KeyCapabilities />
      <TechStackSection />
      <WhyChooseAISection />
      <ServiceCTASection />
    </motion.main>
  )
}

export default AIRagApplications
