import { ArrowUpRight, CircleCheck } from "lucide-react"
import { Link } from "react-router-dom"
import { projects } from "../data/portfolio"

function FeaturedProject() {
  return (
    <section id="work" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* Section header */}
        <div className="mb-14 flex items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
              Selected project · 01
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Agri-Scan Elite
            </h2>
          </div>

          <span className="hidden text-sm text-slate-400 md:block">
            Hardware · IoT · Agriculture
          </span>
        </div>

        {/* Main project */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">

          {/* Image */}
          <div className="relative overflow-hidden bg-black">
            <img
              loading="lazy"
              decoding="async"
              src="/images/projects/agri-scan-elite.jpg"
              alt="Agri-Scan Elite connected soil probe prototype"
              className="mx-auto block max-h-[780px] w-full object-contain transition-transform duration-700 hover:scale-[1.01]"
            />

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-2 text-xs font-medium backdrop-blur-md">
              <CircleCheck size={14} className="text-emerald-400" />
              Working prototype
            </div>
          </div>

          {/* Project information */}
          <div className="grid gap-12 p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-14">

            <div>
              <p className="mb-3 text-sm text-slate-400">
                7-in-1 Connected Soil Certification Probe
              </p>

              <h3 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl">
                A connected probe designed to bring soil analysis into a
                field-ready digital workflow.
              </h3>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
                Agri-Scan Elite is an IoT prototype combining embedded
                electronics, sensing, positioning and digital software
                components for agricultural field use.
              </p>

              <Link
                to="/projects/agri-scan-elite"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                View case study
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="space-y-8">

              {/* Status */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Status
                </p>

                <p className="text-sm text-white/70">
                  Working prototype
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {projects[0].progress}
                </p>
              </div>

              {/* Dimensions */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Prototype
                </p>

                <p className="text-sm text-white/70">
                  65 cm total length
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  15 cm electronics module · 50 cm probe body
                </p>
              </div>

              {/* Stack */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Technology
                </p>

                <div className="flex flex-wrap gap-2">
                  {projects[0].technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProject
