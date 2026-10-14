import { Link } from 'react-router-dom'
import { ProjectList, SectionHeading } from './UI'
function SelectedProjects() {
  return <section className="section container"><SectionHeading eyebrow="Selected projects" title="Build. Explore. Prototype."><p>Different problems, different stages. Every project is presented at its current level of maturity.</p></SectionHeading><ProjectList /><Link className="text-link" to="/projects">Explore all five projects →</Link></section>
}
export default SelectedProjects
