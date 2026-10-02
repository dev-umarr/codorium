import { motion } from 'framer-motion'
import AutomationHero from '../components/Services/Automation-services/AutomationHero'
import AutomationCapabilities from '../components/Services/Automation-services/AutomationCapabilities'
import AutomationTechStack from '../components/Services/Automation-services/AutomationTechStack'
import WhyChooseAutomation from '../components/Services/Automation-services/WhyChooseAutomation'
import AutomationCTASection from '../components/Services/Automation-services/AutomationCTASection'
import Seo from '../components/SEO/Seo'

function AutomationSystems() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Seo title="Automation Systems Services" description="Secure, rules-based workflow automation, compliance frameworks, and intelligent routing systems for growing teams." path="/services/automation-systems" />
      <AutomationHero />
      <AutomationCapabilities />
      <AutomationTechStack />
      <WhyChooseAutomation />
      <AutomationCTASection />
    </motion.main>
  )
}

export default AutomationSystems