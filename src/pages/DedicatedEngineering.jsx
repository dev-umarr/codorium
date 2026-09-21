import DedicatedEngineeringHero from '../components/Services/DedicatedEngineering-services/DedicatedEngineeringHero'
import DedicatedEngineeringCapabilities from '../components/Services/DedicatedEngineering-services/DedicatedEngineeringCapabilities'
import Foundation from '../components/Foundation/Foundation'
import DedicatedEngineeringTechStack from '../components/Services/DedicatedEngineering-services/DedicatedEngineeringTechStack'
import CaseStudies from '../components/CaseStudies/CaseStudies'
import WhyChooseDedicatedEngineering from '../components/Services/DedicatedEngineering-services/WhyChooseDedicatedEngineering'
import Testimonials from '../components/Testimonials/Testimonials'
import DedicatedEngineeringCTASection from '../components/Services/DedicatedEngineering-services/DedicatedEngineeringCTASection'
import Seo from '../components/SEO/Seo'

function DedicatedEngineering() {
  return (
    <>
      <Seo
        title="Dedicated Engineering Teams"
        description="Experienced engineers who work like in-house team members, aligned to your sprints, culture, and roadmap."
        path="/services/dedicated-engineering"
      />
      <DedicatedEngineeringHero />
      <DedicatedEngineeringCapabilities />
      <Foundation />
      <DedicatedEngineeringTechStack />
      <CaseStudies />
      <WhyChooseDedicatedEngineering />
      <Testimonials variant="dedicated" />
      <DedicatedEngineeringCTASection />
    </>
  )
}

export default DedicatedEngineering
