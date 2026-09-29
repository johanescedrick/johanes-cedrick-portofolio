import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectChapter from './ProjectChapter'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-content px-5 pb-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
            What I do
          </p>
          <h2 className="text-balance font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
            Featured Works &amp; Case Studies
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted md:text-[19px]">
            Each case study tracks a real-world decision: from the initial problem statement,
            through the technical approach and results, to actionable next steps. Explore a selection of
            my work spanning Data Science, Natural Language Processing (NLP), Predictive, and Prescriptive Analytics.
          </p>
        </motion.div>
      </div>

      {projects.map((p) => (
        <ProjectChapter key={p.id} project={p} />
      ))}
    </section>
  )
}
