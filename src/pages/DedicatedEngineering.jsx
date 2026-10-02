import { motion } from 'framer-motion'
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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
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
    </motion.main>
  )
}

export default DedicatedEngineering
