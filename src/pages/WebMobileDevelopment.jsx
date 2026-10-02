import { motion } from 'framer-motion'
import WebMobileHero from '../components/Services/WebMobile-services/WebMobileHero'
import WebMobileCapabilities from '../components/Services/WebMobile-services/WebMobileCapabilities'
import WebMobileTechStack from '../components/Services/WebMobile-services/WebMobileTechStack'
import WhyChooseWebMobile from '../components/Services/WebMobile-services/WhyChooseWebMobile'
import WebMobileCTASection from '../components/Services/WebMobile-services/WebMobileCTASection'
import Seo from '../components/SEO/Seo'

function WebMobileDevelopment() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Seo title="Web & Mobile Apps Services" description="Scalable, high-performance web and mobile applications with real-time dashboards, secure billing, and production-ready engineering." path="/services/web-mobile-development" />
      <WebMobileHero />
      <WebMobileCapabilities />
      <WebMobileTechStack />
      <WhyChooseWebMobile />
      <WebMobileCTASection />
    </motion.main>
  )
}

export default WebMobileDevelopment