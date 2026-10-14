export const identity = {
  name: 'Arsène DJERAREOU',
  role: 'Network, IoT & Digital Systems Engineer',
  signature: 'I design connected systems and make technology understandable.',
  positioning: 'CONNECT · BUILD · DIGITIZE · EXPLAIN',
}

// Public contact details only. Never put credentials or private tokens here.
export const contact = {
  email: 'djerareoumbainaissem@gmail.com',
  phones: ['+23565579675', '+23592082286'],
  linkedIn: 'https://www.linkedin.com/in/arsène-djerareou',
  github: 'https://github.com/Djerareou',
}

export const projects = [
  { slug: 'agri-scan-elite', name: 'Agri-Scan Elite', category: 'Hardware · IoT · Agriculture', status: 'Working prototype', description: 'A connected soil probe combining embedded electronics, sensing, positioning and digital software for agricultural field use.', technologies: ['ESP32', 'NEO-M8N', 'ATECC508A', 'KiCad', 'Flutter', 'FastAPI'], progress: '2 units built · PCBs in fabrication' },
  { slug: 'afrisense', name: 'AfriSense', category: 'GPS · Connected systems', status: 'MVP', description: 'A GPS tracking platform exploring vehicle monitoring, geofencing, alerts and connectivity resilience for African operating environments.', technologies: ['GPS', 'IoT', 'WebSocket', 'Node.js'], progress: 'Minimum viable product; field deployment and performance are not claimed.' },
  { slug: 'classoffline', name: 'ClassOffline', category: 'Offline education technology', status: 'Exploration', description: 'Exploring access to digital learning resources in environments where permanent connectivity cannot be assumed.', technologies: ['ESP32', 'Offline-first', 'IoT', 'Education'], progress: 'An exploration of needs and technical options.' },
  { slug: 'smartbin', name: 'SmartBin', category: 'Connected urban systems', status: 'Concept', description: 'A connected waste-management concept exploring monitoring and smarter collection of urban waste infrastructure.', technologies: ['IoT', 'Sensors', 'ESP32'], progress: 'Concept stage; no deployed system is claimed.' },
  { slug: 'offline-gps-intelligence', name: 'Offline GPS Intelligence', category: 'Local AI · GPS telemetry', status: 'Concept', description: 'Exploring natural-language queries of GPS telemetry using a lightweight local language model, without permanent cloud connectivity.', technologies: ['Local LLM', 'GGUF', 'llama.cpp', 'GPS telemetry'], progress: 'Concept only; not yet a prototype.' },
]

export const services = [
  { id: 'networks', title: 'Networks', verb: 'CONNECT', description: 'Network architecture, connectivity planning, configuration and troubleshooting.', deliverable: 'A scoped network plan, configuration notes and handover documentation.', price: '75,000–200,000' },
  { id: 'iot', title: 'IoT', verb: 'BUILD', description: 'Connected-device prototyping, sensor integration and embedded-system design.', deliverable: 'A prototype plan, integration work and documented technical limits.', price: '150,000–500,000' },
  { id: 'gps', title: 'GPS', verb: 'CONNECT', description: 'Positioning workflows, tracking-system design and telemetry integration.', deliverable: 'An integration scope and a documented GPS data workflow.', price: '100,000–300,000' },
  { id: 'digital-systems', title: 'Digital Systems', verb: 'DIGITIZE', description: 'Web interfaces, APIs and digital workflows connecting people, devices and data.', deliverable: 'A scoped digital workflow with implementation and handover notes.', price: '150,000–450,000' },
  { id: 'communication', title: 'Technical Communication', verb: 'EXPLAIN', description: 'Technical writing, diagrams, demonstrations and accessible explanations of engineering work.', deliverable: 'A technical document, presentation or explanatory content package.', price: '40,000–120,000' },
  { id: 'digital-communication', title: 'Communication & Content', verb: 'EXPLAIN', description: 'Editorial planning, professional messaging and digital content for organizations, projects and personal brands (website and LinkedIn).', deliverable: 'A scoped communication brief, a one-month editorial calendar and 4–8 ready-to-publish text posts; visuals and platform management quoted separately.', price: '60,000–180,000' },
  { id: 'consulting', title: 'Consulting', verb: 'CONNECT · BUILD · DIGITIZE · EXPLAIN', description: 'Requirements clarification, feasibility discussions and technical decision support.', deliverable: 'A discussion of the problem and a written recommendation with next steps.', price: '25,000–60,000' },
]

export const navigation = [
  { to: '/', label: 'Home' }, { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' }, { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' }, { to: '/contact', label: 'Contact' },
]

export const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': { title: 'Connected systems, clear thinking', description: 'Arsène DJERAREOU — Network, IoT & Digital Systems Engineer. Connected devices, networks, digital platforms and technical communication.' },
  '/about': { title: 'About', description: 'An engineering approach spanning networks, telecommunications, IoT and clear technical communication.' },
  '/projects': { title: 'Projects', description: 'Five engineering projects, with transparent maturity levels from concept to working prototype.' },
  '/services': { title: 'Services', description: 'Network, IoT, GPS, digital systems, technical communication, editorial content and consulting services.' },
  '/pricing': { title: 'Indicative pricing', description: 'Proposed service budgets in FCFA, subject to scope. These are not verified market prices.' },
  '/contact': { title: 'Contact', description: 'Start a conversation about your connected-system, network or digital project.' },
  '/projects/agri-scan-elite': { title: 'Agri-Scan Elite — Case study', description: 'A connected soil probe working prototype: two units built, PCBs in fabrication, and its declared engineering stack.' },
}
