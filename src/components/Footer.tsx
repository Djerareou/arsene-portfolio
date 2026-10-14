import { Link } from 'react-router-dom'
import { contact, identity, navigation } from '../data/portfolio'
function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link className="brand" to="/">ARSÈNE DJERAREOU</Link><p className="muted">{identity.role}</p><p className="eyebrow">{identity.positioning}</p></div><nav aria-label="Footer">{navigation.map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</nav><div><a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub <span className="sr-only">(opens in a new tab)</span>↗</a><p className="small muted">© {new Date().getFullYear()} {identity.name}<br />Built with care. Explained with clarity.</p></div></div></footer>
}
export default Footer
