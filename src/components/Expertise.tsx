import { services } from '../data/portfolio'
import { ServiceIcon } from './ServiceIcon'
import { Reveal } from './Reveal'
import { SectionHeading } from './UI'

export function Expertise() {
  return <Reveal className="section expertise container">
    <SectionHeading eyebrow="Architecture of my work" title="Think in connections."><p>Devices, connectivity, data and people. The interfaces between them are where the engineering happens.</p></SectionHeading>
    <div className="architecture">
      <div className="architecture-plane" aria-hidden="true">
        <svg viewBox="0 0 600 360" fill="none"><path d="M80 70H270V180H480M80 290H270V180M480 70V290" stroke="#7384a2" strokeWidth="1.5" /><path d="M80 70V290M80 180H480" stroke="#6be7ee" strokeWidth="2" /><circle cx="270" cy="180" r="62" stroke="#af9bff" strokeDasharray="4 8" /><circle cx="270" cy="180" r="34" fill="#0a1020" stroke="#6be7ee" />{[[80,70],[80,180],[80,290],[480,70],[480,180],[480,290]].map(([x,y]) => <rect key={`${x}-${y}`} x={x-10} y={y-10} width="20" height="20" fill="#0a1020" stroke="#6be7ee" />)}<text x="249" y="185" fill="#6be7ee" fontSize="13" fontFamily="monospace">AD /</text></svg>
        <p>Conceptual architecture / not a live network</p>
      </div>
      <ol className="expertise-list">{services.slice(0,4).map(service => <li key={service.id}><ServiceIcon id={service.id} /><div><h3>{service.id === 'iot' ? 'IoT & Embedded Systems' : service.id === 'gps' ? 'GPS & Geolocation' : service.title}</h3><p className="muted">{service.description}</p></div></li>)}</ol>
    </div>
  </Reveal>
}
