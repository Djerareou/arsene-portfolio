import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    number: "02",
    name: "AfriSense",
    type: "GPS Tracking & Connected Systems",
    status: "MVP",
    description:
      "A GPS tracking platform exploring real-time vehicle monitoring, geofencing, alerts and connectivity resilience for African operating environments.",
    technologies: ["GPS", "IoT", "WebSocket", "Node.js"],
  },
  {
    number: "03",
    name: "ClassOffline",
    type: "Offline Education Technology",
    status: "Exploration",
    description:
      "An exploration of offline-first educational technology designed to provide access to digital learning resources where permanent connectivity cannot be assumed.",
    technologies: ["ESP32", "Offline-first", "IoT", "Education"],
  },
  {
    number: "04",
    name: "SmartBin",
    type: "Connected Urban Systems",
    status: "Concept",
    description:
      "A connected waste-management concept exploring how IoT could support smarter collection and monitoring of urban waste infrastructure.",
    technologies: ["IoT", "Sensors", "ESP32", "Smart City"],
  },
  {
    number: "05",
    name: "Offline GPS Intelligence",
    type: "Local AI · GPS Telemetry",
    status: "Concept",
    description:
      "Exploring whether a lightweight local language model could let users query GPS telemetry in natural language without permanent cloud connectivity.",
    technologies: ["Local LLM", "GGUF", "llama.cpp", "GPS telemetry"],
  },
]

function SelectedProjects() {
  return (
    <section id="projects" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        <div className="mb-16 grid gap-6 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
              Selected projects
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Systems I build, explore and prototype.
            </h2>
          </div>

          <p className="max-w-xl self-end text-base leading-7 text-white/45">
            A selection of engineering projects across connected devices,
            networks, software and offline-first systems.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group grid gap-8 py-10 transition-colors hover:bg-white/[0.02] lg:grid-cols-[80px_1fr_1.1fr_120px]"
            >
              <div className="text-sm text-white/25">
                {project.number}
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.15em] text-white/30">
                  {project.type}
                </p>

                <h3 className="text-2xl font-semibold tracking-tight">
                  {project.name}
                </h3>
              </div>

              <div>
                <p className="max-w-xl text-sm leading-6 text-white/45">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 lg:block">
                <span className="inline-flex rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                  {project.status}
                </span>

                <button
                  type="button"
                  className="mt-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-white/30 group-hover:bg-white group-hover:text-black lg:mt-6"
                  aria-label={`View ${project.name}`}
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SelectedProjects