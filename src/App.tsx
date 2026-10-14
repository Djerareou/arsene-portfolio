import { useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { identity, pageMetadata } from './data/portfolio'
import { AboutPage, AgriScanPage, ContactPage, HomePage, NotFoundPage, PricingPage, ProjectsPage, ServicesPage } from './pages/Pages'

function Portfolio() {
  const { pathname, hash } = useLocation()
  const main = useRef<HTMLElement>(null)
  const firstRender = useRef(true)
  const metadata = pageMetadata[pathname] ?? { title: 'Page not found', description: 'This portfolio page is unavailable. Return home or explore the engineering projects.' }
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null
      if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' })
      else window.scrollTo({ top: 0, behavior: 'instant' })
      if (!firstRender.current) main.current?.focus({ preventScroll: true })
      firstRender.current = false
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])
  return <><title>{metadata.title} | {identity.name}</title><meta name="description" content={metadata.description} /><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content" ref={main} tabIndex={-1}><Routes><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="/projects/agri-scan-elite" element={<AgriScanPage />} /><Route path="/services" element={<ServicesPage />} /><Route path="/pricing" element={<PricingPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFoundPage />} /></Routes></main><Footer /></>
}
function App() { return <BrowserRouter><Portfolio /></BrowserRouter> }
export default App
