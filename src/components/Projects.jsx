import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectChapter from './ProjectChapter'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      {/* Section intro */}
      <div className="mx-auto max-w-content px-6 pb-4 pt-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 font-display text-sm font-semibold tracking-[0.2em] text-ember">
            WHAT I DO
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Seven projects, one throughline
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate2">
            Each of these turns messy, real-world data into a decision — walking from
            the problem, through the approach and results, to what someone should
            actually do next. Scroll through them like short case studies.
          </p>
        </motion.div>
      </div>

      {projects.map((p) => (
        <ProjectChapter key={p.id} project={p} />
      ))}
    </section>
  )
}
