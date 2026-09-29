import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import { MoreProjects, Contact } from './components/MoreAndContact'
import { DotField } from './lib/pointer'

export default function App() {
  return (
    <>
      <DotField />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <MoreProjects />
        </main>
        <Contact />
      </div>
    </>
  )
}
