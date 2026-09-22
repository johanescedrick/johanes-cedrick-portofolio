import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { profile } from '../data/profile'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={reveal}
          className="mb-12"
        >
          <p className="mb-3 font-display text-sm font-semibold tracking-[0.2em] text-ember">
            WHO AM I
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            About me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={reveal}
            className="md:sticky md:top-28 md:self-start"
          >
            <div className="overflow-hidden rounded-3xl border border-mist bg-white shadow-sm">
              <img
                src="/assets/about1.jpg"
                alt="Johanes Cedrick Wijaya"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate2">
              <MapPin size={16} className="text-royal" />
              {profile.location}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={reveal}
          >
            <div className="space-y-5 text-lg leading-relaxed text-slate2">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {profile.education.map((e) => (
                <div
                  key={e.degree}
                  className="rounded-2xl border border-mist bg-white p-5 shadow-sm"
                >
                  <div className="mb-2 flex items-center gap-2 text-royal">
                    <GraduationCap size={18} />
                    <span className="font-display text-sm font-semibold">
                      {e.grad}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {e.degree}
                  </h3>
                  <p className="text-sm text-slate2">{e.school}</p>
                  <p className="mt-2 inline-block rounded-full bg-lavender px-3 py-1 font-display text-sm font-semibold text-royal">
                    GPA {e.gpa}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate2">
                    {e.coursework}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {Object.entries(profile.skills).map(([group, items]) => (
                  <div key={group}>
                    <h4 className="mb-2 font-display text-sm font-semibold text-ink">
                      {group}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-mist bg-white px-2.5 py-1 text-xs font-medium text-slate2"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
