import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import { MoreProjects, Contact } from './components/MoreAndContact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <MoreProjects />
      </main>
      <Contact />
    </>
  )
}
