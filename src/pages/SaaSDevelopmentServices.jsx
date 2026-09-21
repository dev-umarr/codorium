import SaaSHero from '../components/Services/SaasServices/SaaS-Hero'
import SaasCapabilities from '../components/Services/SaasServices/SaasCapabilities'
import SaasTechStack from '../components/Services/SaasServices/SaasTechStack'
import WhyChooseSaas from '../components/Services/SaasServices/WhyChooseSaas'
import SaasCTASection from '../components/Services/SaasServices/SaasCTASection'
import Seo from '../components/SEO/Seo'

function SaaSDevelopmentServices() {
  return (
    <>
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
    </>
  )
}

export default SaaSDevelopmentServices