import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <header className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="intro-copy">{children}</div></header>
}
export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{children && <div className="muted max-copy">{children}</div>}</div>
}
export function ActionLink({ to, children, secondary = false }: { to: string; children: ReactNode; secondary?: boolean }) {
  return <Link className={`button ${secondary ? 'button-secondary' : ''}`} to={to}>{children}<ArrowUpRight size={16} aria-hidden="true" /></Link>
}
export function ProjectList({ includeFeatured = false }: { includeFeatured?: boolean }) {
  const selection = includeFeatured ? projects : projects.slice(1)
  return <div className="project-list">{selection.map(project => <article key={project.slug} id={project.slug} className="project-row"><div><p className="eyebrow muted">{project.category}</p><h3>{project.name}</h3><span className="badge">{project.status}</span></div><div><p className="muted">{project.description}</p><ul className="tags" aria-label={`${project.name} technologies`}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul><p className="small muted">{project.progress}</p>{project.slug === 'agri-scan-elite' && <Link className="text-link" to="/projects/agri-scan-elite">Read the case study <ArrowUpRight size={16} aria-hidden="true" /></Link>}</div></article>)}</div>
}
export function ContactCTA() {
  return <section className="contact-cta container"><p className="eyebrow">Let’s build with purpose</p><h2>A real problem.<br />A clear next step.</h2><p className="muted">Tell me what you want to connect, build, digitize or explain.</p><ActionLink to="/contact">Start a conversation</ActionLink></section>
}
