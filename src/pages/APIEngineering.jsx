import { motion } from 'framer-motion'
import APIHero from '../components/Services/API-services/APIHero'
import APICapabilities from '../components/Services/API-services/APICapabilities'
import APITechStack from '../components/Services/API-services/APITechStack'
import WhyChooseAPI from '../components/Services/API-services/WhyChooseAPI'
import APICTASection from '../components/Services/API-services/APICTASection'
import Seo from '../components/SEO/Seo'

function APIEngineering() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Seo title="API Engineering Services" description="Secure, scalable API architecture, integrations, webhooks, and developer-ready services for growing products." path="/services/api-engineering" />
      <APIHero />
      <APICapabilities />
      <APITechStack />
      <WhyChooseAPI />
      <APICTASection />
    </motion.main>
  )
}

export default APIEngineering