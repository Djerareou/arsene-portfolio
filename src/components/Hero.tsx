import { identity } from '../data/portfolio'
import { ActionLink } from './UI'
function Hero() {
  return <section className="hero container"><div><p className="eyebrow">{identity.positioning}</p><p className="hero-role">{identity.role}</p><h1>I design connected systems <span>and make technology understandable.</span></h1><p className="hero-copy">Networks, IoT, GPS and digital platforms — built around real-world constraints, explained with clarity.</p><div className="actions"><ActionLink to="/projects">Explore my work</ActionLink><ActionLink to="/contact" secondary>Work with me</ActionLink></div></div><div className="system-visual" aria-hidden="true"><span className="system-label">SYSTEM / 01</span><div className="system-orbit orbit-one" /><div className="system-orbit orbit-two" /><div className="system-core">AD</div><span className="system-caption">CONNECT<br /><span>Ideas → Systems</span></span></div></section>
}
export default Hero
