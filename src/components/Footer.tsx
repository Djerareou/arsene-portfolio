import { Link } from 'react-router-dom'
import { contact, identity, navigation } from '../data/portfolio'
function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div><Link className="footer-name" to="/">ARSÈNE<br />DJERAREOU<span aria-hidden="true">↗</span></Link><p className="muted">{identity.role}</p></div>
    <nav aria-label="Footer">{navigation.map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</nav>
    <div className="footer-contact"><a href={`mailto:${contact.email}`}>Email ↗</a><a href={contact.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span></a><a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub ↗<span className="sr-only"> (opens in a new tab)</span></a></div>
  </div><div className="container footer-bottom"><p>{identity.positioning}</p><p>© {new Date().getFullYear()} {identity.name}</p></div></footer>
}
export default Footer
