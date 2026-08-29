import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProject from "./components/FeaturedProject"
import SelectedProjects from "./components/SelectedProjects"

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <main>
        <Hero />
        <FeaturedProject />
        <SelectedProjects />
      </main>
    </div>
  )
}

export default App