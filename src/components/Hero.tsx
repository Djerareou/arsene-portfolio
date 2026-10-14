import { motion, useReducedMotion } from 'framer-motion'
import { identity } from '../data/portfolio'
import { ActionLink } from './UI'

function Hero() {
  const reduced = useReducedMotion()
  const enter = (delay: number) => ({
    initial: reduced ? false as const : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.65, delay: reduced ? 0 : delay },
  })
  return (
    <section className="hero container">
      <motion.div className="hero-byline" {...enter(0)}>
        <p className="eyebrow">Independent engineering portfolio / AD</p>
        <p className="hero-name">Arsène Djerareou</p>
        <p className="hero-role">{identity.role}</p>
      </motion.div>
      <div className="hero-stage">
        <h1 className="hero-title">
          <motion.span {...enter(0.08)}>Engineering</motion.span>
          <motion.span className="title-indent" {...enter(0.17)}>the connected</motion.span>
          <motion.span className="title-last" {...enter(0.26)}>world<span className="title-stop">.</span></motion.span>
        </h1>
        <motion.div className="hero-instrument" {...enter(0.3)} aria-hidden="true">
          <svg viewBox="0 0 440 440" fill="none">
            <path d="M32 220H408M220 32V408" stroke="currentColor" strokeOpacity=".25" />
            <circle cx="220" cy="220" r="172" stroke="currentColor" strokeOpacity=".3" />
            <circle cx="220" cy="220" r="115" stroke="currentColor" strokeDasharray="3 10" />
            <motion.g
              style={{ transformOrigin: '220px 220px' }}
              initial={reduced ? false : { rotate: -35, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: reduced ? 0 : 1.4, delay: reduced ? 0 : 0.3 }}
            >
              <ellipse cx="220" cy="220" rx="195" ry="69" transform="rotate(-35 220 220)" stroke="currentColor" strokeWidth="2" />
              <circle cx="374" cy="107" r="7" fill="currentColor" />
              <path d="M127 282 220 166 304 268Z" stroke="#af9bff" strokeWidth="2" />
            </motion.g>
            <rect x="196" y="196" width="48" height="48" fill="#0a1020" stroke="currentColor" />
            <path d="M208 220H232M220 208V232" stroke="currentColor" />
            <text x="30" y="425" fill="currentColor" fontSize="10" fontFamily="monospace">CONNECTION STUDY / AD–01</text>
          </svg>
        </motion.div>
      </div>
      <motion.div className="hero-bottom" {...enter(0.38)}>
        <p className="hero-copy">I connect networks, embedded devices and GPS data to useful digital systems. Built around real constraints. Explained with clarity.</p>
        <div className="actions"><ActionLink to="/projects">Explore Projects</ActionLink><ActionLink to="/contact" secondary>Let’s Connect</ActionLink></div>
      </motion.div>
      <div className="hero-index" aria-hidden="true"><span>CONNECT / BUILD</span><span>DIGITIZE / EXPLAIN</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
  )
}
export default Hero
