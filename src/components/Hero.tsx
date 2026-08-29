import { ArrowDown, ArrowUpRight } from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
              Network · IoT · Digital Systems
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            I design connected systems
            <span className="text-white/35"> and make technology understandable.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            I build and explore solutions across networks, IoT, GPS,
            embedded systems and digital platforms — with a focus on
            real-world constraints.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              View my work
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Work with me
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
            <div className="absolute inset-8 rounded-2xl border border-white/10" />

            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/30 bg-emerald-400/10" />

            <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-white/10" />

            <div className="absolute left-1/2 top-1/2 h-[70%] w-px -translate-y-1/2 bg-white/10" />

            <div className="absolute left-8 top-8 text-[10px] uppercase tracking-[0.2em] text-white/30">
              SYSTEM / 01
            </div>

            <div className="absolute bottom-8 right-8 text-right">
              <div className="text-xs uppercase tracking-[0.2em] text-white/30">
                Connected
              </div>
              <div className="mt-1 text-sm text-emerald-400">
                Systems / Online
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero