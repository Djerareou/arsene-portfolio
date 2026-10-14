import { useEffect, useRef } from 'react'
import { MotionConfig, motion, useReducedMotion } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { identity, pageMetadata } from './data/portfolio'
import { AboutPage, AgriScanPage, ContactPage, HomePage, NotFoundPage, PricingPage, ProjectsPage, ServicesPage } from './pages/Pages'

function Portfolio() {
  const { pathname, hash, search, key } = useLocation()
  const main = useRef<HTMLElement>(null)
  const firstRender = useRef(true)
  const reduced = useReducedMotion()
  const metadata = pageMetadata[pathname] ?? { title: 'Page not found', description: 'This portfolio page is unavailable. Return home or explore the engineering projects.' }
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      let anchor = hash.slice(1)
      try { anchor = decodeURIComponent(anchor) } catch { /* Malformed hashes fall back to their literal value. */ }
      const target = anchor ? document.getElementById(anchor) : null
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' })
        target.tabIndex = -1
        target.focus({ preventScroll: true })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
        if (!firstRender.current) main.current?.focus({ preventScroll: true })
      }
      firstRender.current = false
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])
  return <>
    <title>{metadata.title} | {identity.name}</title>
    <meta name="description" content={metadata.description} />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar />
    <main id="main-content" ref={main} tabIndex={-1}>
      <motion.div key={pathname} className="route-content" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 0.2 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/agri-scan-elite" element={<AgriScanPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage key={search} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </main>
    <Footer />
  </>
}
function App() {
  return <MotionConfig reducedMotion="user"><BrowserRouter><Portfolio /></BrowserRouter></MotionConfig>
}
export default App
