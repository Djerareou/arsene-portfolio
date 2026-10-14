import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../data/portfolio'

function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const menu = useRef<HTMLElement>(null)
  const { pathname } = useLocation()
  useEffect(() => {
    if (!open) return
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])
  return <header className="site-header"><div className="container nav-shell"><Link className="brand" to="/" onClick={() => setOpen(false)}>ARSÈNE DJERAREOU<span>ENGINEERING · SYSTEMS · CLARITY</span></Link><button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button><nav ref={menu} id="primary-navigation" aria-label="Primary" className={`primary-nav ${open ? 'is-open' : ''}`} key={pathname}>{navigation.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}>{item.label}</NavLink>)}</nav></div></header>
}
export default Navbar
