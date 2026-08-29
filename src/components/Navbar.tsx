import { ArrowUpRight } from "lucide-react"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

function Navbar() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="#"
          className="text-sm font-semibold tracking-[0.18em] text-white"
        >
          ARSÈNE DJERAREOU
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition-all hover:border-white/30 hover:bg-white/5 md:flex"
        >
          Work with me
          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
          aria-label="Open navigation"
        >
          Menu
        </button>
      </div>
    </header>
  )
}

export default Navbar