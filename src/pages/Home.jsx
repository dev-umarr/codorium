import Hero from '../components/Hero/Hero'
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer'
import Services from '../components/Services/Services'
import Results from '../components/Results/Results'
import SocialProof from '../components/SocialProof/SocialProof'
import WhyCodorium from '../components/WhyCodorium/WhyCodorium'
import CaseStudies from '../components/CaseStudies/CaseStudies'

function Home() {
  return (
    <>
      {/* Shared dark canvas — hero + what we offer flow as one section */}
      <div style={{ background: 'linear-gradient(160deg, #060e1f 0%, #091a3a 40%, #072e28 75%, #060e1f 100%)' }}>
        <Hero />
        <WhatWeOffer />
      </div>
      <Services />
      <Results />
      <WhyCodorium />
      <CaseStudies />
      <SocialProof />
    </>
  )
}

export default Home
