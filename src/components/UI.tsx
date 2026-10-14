import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import { Reveal } from './Reveal'

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <Reveal className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="intro-copy">{children}</div><span className="intro-rule" aria-hidden="true" /></Reveal>
}
export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{children && <div className="muted max-copy">{children}</div>}</div>
}
export function ActionLink({ to, children, secondary = false }: { to: string; children: ReactNode; secondary?: boolean }) {
  return <Link className={`button ${secondary ? 'button-secondary' : ''}`} to={to}><span>{children}</span><ArrowUpRight size={18} aria-hidden="true" /></Link>
}
export function ProjectList({ includeFeatured = false }: { includeFeatured?: boolean }) {
  const selection = includeFeatured ? projects : projects.slice(1)
  return <div className="project-list">{selection.map(project => (
    <Reveal id={project.slug} className={`project-row project-${project.slug}`} key={project.slug}>
      <div className="project-identity"><span className="project-index">0{projects.indexOf(project) + 1}</span><p className="eyebrow muted">{project.category}</p><h3>{project.name}</h3><span className="badge">{project.status}</span></div>
      <div className="project-detail"><p className="muted">{project.description}</p><ul className="tags" aria-label={`${project.name} technologies`}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul><p className="small muted">{project.progress}</p>{project.slug === 'agri-scan-elite' && <Link className="text-link" to="/projects/agri-scan-elite">Read the case study <ArrowUpRight size={16} aria-hidden="true" /></Link>}</div>
      <div className="project-mark" aria-hidden="true"><span /><span /><span /></div>
    </Reveal>
  ))}</div>
}
export function ContactCTA() {
  return <Reveal className="contact-cta container"><p className="eyebrow">Next connection / Your project</p><h2>Good systems start<br />with a <em>conversation.</em></h2><div className="cta-bottom"><p className="muted">What do you want to connect, build, digitize or explain?</p><ActionLink to="/contact">Let’s Connect</ActionLink></div><span className="cta-cross" aria-hidden="true">+</span></Reveal>
}
