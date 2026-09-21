import AutomationHero from '../components/Services/Automation-services/AutomationHero'
import AutomationCapabilities from '../components/Services/Automation-services/AutomationCapabilities'
import AutomationTechStack from '../components/Services/Automation-services/AutomationTechStack'
import WhyChooseAutomation from '../components/Services/Automation-services/WhyChooseAutomation'
import AutomationCTASection from '../components/Services/Automation-services/AutomationCTASection'
import Seo from '../components/SEO/Seo'

function AutomationSystems() {
  return <><Seo title="Automation Systems Services" description="Secure, rules-based workflow automation, compliance frameworks, and intelligent routing systems for growing teams." path="/services/automation-systems" /><AutomationHero /><AutomationCapabilities /><AutomationTechStack /><WhyChooseAutomation /><AutomationCTASection /></>
}

export default AutomationSystems