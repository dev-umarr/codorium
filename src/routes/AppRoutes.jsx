import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import About from '../pages/About'
import AIRagApplications from '../pages/AIRagApplications'
import CaseStudies from '../pages/CaseStudies'
import CaseStudyDetail from '../pages/CaseStudyDetail'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Process from '../pages/Process'
import SaaSDevelopmentServices from '../pages/SaaSDevelopmentServices'
import MVPDevelopment from '../pages/MVPDevelopment'
import WebMobileDevelopment from '../pages/WebMobileDevelopment'
import AutomationSystems from '../pages/AutomationSystems'
import APIEngineering from '../pages/APIEngineering'
import DedicatedEngineering from '../pages/DedicatedEngineering'
import Services from '../pages/Services'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="process" element={<Process />} />
          <Route path="services" element={<Services />} />
          <Route path="services/ai-rag-applications" element={<AIRagApplications />} />
          <Route path="services/saas-development" element={<SaaSDevelopmentServices />} />
          <Route path="services/mvp-development" element={<MVPDevelopment />} />
          <Route path="services/web-mobile-development" element={<WebMobileDevelopment />} />
          <Route path="services/automation-systems" element={<AutomationSystems />} />
          <Route path="services/api-engineering" element={<APIEngineering />} />
          <Route path="services/dedicated-engineering" element={<DedicatedEngineering />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
