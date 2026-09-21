import MVPHero from '../components/Services/MVP-services/MVPHero'
import MVPCapabilities from '../components/Services/MVP-services/MVPCapabilities'
import MVPTechStack from '../components/Services/MVP-services/MVPTechStack'
import WhyChooseMVP from '../components/Services/MVP-services/WhyChooseMVP'
import MVPCTASection from '../components/Services/MVP-services/MVPCTASection'
import Seo from '../components/SEO/Seo'

function MVPDevelopment() {
  return <><Seo title="MVP Development Services" description="Rapid MVP prototyping, validation, and market launch for founders and teams ready to turn focused ideas into working products." path="/services/mvp-development" /><MVPHero /><MVPCapabilities /><MVPTechStack /><WhyChooseMVP /><MVPCTASection /></>
}

export default MVPDevelopment