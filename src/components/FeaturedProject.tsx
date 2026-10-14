import { CircleCheck } from 'lucide-react'
import { projects } from '../data/portfolio'
import { ActionLink } from './UI'
import { Reveal } from './Reveal'

function FeaturedProject() {
  const project = projects[0]
  return (
    <Reveal id="work" className="featured-project container">
      <div className="section-heading">
        <div><p className="eyebrow">01 / Featured engineering</p><h2>From the field.<br /><span className="muted">Into a system.</span></h2></div>
        <p className="muted max-copy">A real object, a connected workflow. Agri-Scan Elite brings embedded electronics, sensing and digital software into the same engineering question.</p>
      </div>
      <div className="featured-stage">
        <div className="featured-caption"><span>AGRI–SCAN / ELITE</span><span>HARDWARE · IoT · AGRICULTURE</span></div>
        <figure className="featured-photo">
          <img src="/images/projects/agri-scan-elite.jpg" loading="lazy" decoding="async" alt="Official photograph of the Agri-Scan Elite connected soil probe prototype" />
          <figcaption>Official prototype photograph / Agri-Scan Elite</figcaption>
        </figure>
        <div className="featured-notes">
          <span className="badge"><CircleCheck size={14} aria-hidden="true" />{project.status}</span>
          <h3>{project.name}</h3>
          <p className="muted">{project.description}</p>
          <p className="prototype-progress">{project.progress}</p>
          <ul className="tags" aria-label="Declared technologies">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
          <ActionLink to="/projects/agri-scan-elite">Inside the project</ActionLink>
        </div>
      </div>
    </Reveal>
  )
}
export default FeaturedProject
