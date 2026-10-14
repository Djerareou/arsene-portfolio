import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { identity, navigation } from '../data/portfolio'

function Navbar() {
  const [openFor, setOpenFor] = useState<string | null>(null)
  const location = useLocation()
  const open = openFor === location.key
  const reduced = useReducedMotion()
  const toggle = useRef<HTMLButtonElement>(null)
  const menu = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const background = [...document.querySelectorAll<HTMLElement>('main, footer')]
    const previousInert = background.map(element => element.inert)
    background.forEach(element => { element.inert = true })
    menu.current?.querySelector<HTMLButtonElement>('button')?.focus()
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpenFor(null); toggle.current?.focus(); return }
      if (event.key !== 'Tab') return
      const items = menu.current?.querySelectorAll<HTMLElement>('a, button')
      if (!items?.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    function handleResize() { if (window.innerWidth > 900) setOpenFor(null) }
    document.addEventListener('keydown', handleKey)
    window.addEventListener('resize', handleResize)
    return () => {
      document.body.style.overflow = previousOverflow
      background.forEach((element, index) => { element.inert = previousInert[index] })
      document.removeEventListener('keydown', handleKey)
      window.removeEventListener('resize', handleResize)
      previousFocus?.focus({ preventScroll: true })
    }
  }, [open])

  return <header className="site-header">
    <div className="container nav-shell">
      <Link className="brand" to="/" aria-label="Arsène Djerareou — Home"><span className="brand-symbol" aria-hidden="true">AD<span>↗</span></span><span className="brand-caption">ARSÈNE<br />DJERAREOU</span></Link>
      <nav className="desktop-nav" aria-label="Primary">{navigation.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>)}</nav>
      <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls={open ? 'mobile-navigation' : undefined} aria-label="Open navigation" onClick={() => setOpenFor(location.key)}><Menu size={24} aria-hidden="true" /></button>
    </div>
    <AnimatePresence>{open && <motion.nav ref={menu} id="mobile-navigation" className="mobile-navigation" role="dialog" aria-modal="true" aria-label="Site navigation" initial={reduced ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.2 }}>
      <div className="mobile-menu-top"><p className="eyebrow">AD / Navigation</p><button type="button" className="menu-close" onClick={() => setOpenFor(null)} aria-label="Close navigation"><X size={26} aria-hidden="true" /></button></div>
      <div className="mobile-links">{navigation.map((item, index) => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpenFor(null)}><span className="menu-index">0{index + 1}</span><span>{item.label}</span><span aria-hidden="true">↗</span></NavLink>)}</div>
      <p className="mobile-menu-foot">{identity.positioning}</p>
    </motion.nav>}</AnimatePresence>
  </header>
}
export default Navbar
