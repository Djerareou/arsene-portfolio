import { Reveal } from './Reveal'
import { Link } from 'react-router-dom'
import { ProjectList, SectionHeading } from './UI'
function SelectedProjects() {
  return <Reveal className="section container"><SectionHeading eyebrow="Selected projects" title="Ideas take different forms."><p>Different problems, different stages. Every project is presented at its current level of maturity.</p></SectionHeading><ProjectList /><Link className="text-link" to="/projects">Explore all five projects →</Link></Reveal>
}
export default SelectedProjects
