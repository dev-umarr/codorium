import { motion } from 'framer-motion'
import SaaSHero from '../components/Services/SaasServices/SaaS-Hero'
import SaasCapabilities from '../components/Services/SaasServices/SaasCapabilities'
import SaasTechStack from '../components/Services/SaasServices/SaasTechStack'
import WhyChooseSaas from '../components/Services/SaasServices/WhyChooseSaas'
import SaasCTASection from '../components/Services/SaasServices/SaasCTASection'
import Seo from '../components/SEO/Seo'

function SaaSDevelopmentServices() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Seo
        title="SaaS Development Services"
        description="Scalable B2B and B2C SaaS product engineering with multi-tenant architecture, billing systems, high-performance applications, and enterprise-ready security."
        path="/services/saas-development"
      />
      <SaaSHero />
      <SaasCapabilities />
      <SaasTechStack />
      <WhyChooseSaas />
      <SaasCTASection />
    </motion.main>
  )
}

export default SaaSDevelopmentServices