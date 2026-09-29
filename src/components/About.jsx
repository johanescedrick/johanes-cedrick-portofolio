import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { logoFor } from '../data/logos'
import { useSpotlight } from '../lib/pointer'

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

function EducationCard({ e }) {
  const { ref, onPointerMove } = useSpotlight()
  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className="spotlight rounded-xl2 border border-hairline bg-white/70 p-7 transition hover:border-accent/40"
    >
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <span className="text-[13px] text-muted">{e.grad}</span>
        <span className="font-display text-sm font-semibold text-accent">{e.gpa}</span>
      </div>
      <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{e.degree}</h3>
      <p className="mt-1 text-[15px] text-muted">{e.school}</p>
      <p className="mt-5 border-t border-hairline/70 pt-4 text-[14px] leading-relaxed text-graphite">
        {e.coursework}
      </p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto max-w-content px-5 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={reveal}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
            Who am I
          </p>
          <h2 className="text-balance font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
            About me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={reveal}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="overflow-hidden rounded-xl3 border border-hairline bg-mist">
              <img
                src="/assets/about.jpg"
                alt="Johanes Cedrick Wijaya"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-4 flex items-center gap-2 text-[14px] text-muted">
              <MapPin size={15} className="text-accent" />
              {profile.location}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={reveal}
          >
            <div className="prose-justify max-w-read space-y-6 text-[17px] leading-[1.65] text-graphite md:text-[19px]">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="mb-6 font-display text-xl font-semibold tracking-tight text-ink">
                Education
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {profile.education.map((e) => (
                  <EducationCard key={e.degree} e={e} />
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h3 className="mb-6 font-display text-xl font-semibold tracking-tight text-ink">
                Capabilities
              </h3>
              <div className="space-y-8">
                {Object.entries(profile.skills).map(([group, items]) => (
                  <div
                    key={group}
                    className="grid grid-cols-1 gap-3 sm:grid-cols-[150px_1fr] sm:gap-6"
                  >
                    <h4 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted sm:pt-2">
                      {group}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((s) => {
                        const logo = logoFor(s)
                        return (
                          <span
                            key={s}
                            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/70 px-3.5 py-1.5 text-[14px] text-graphite transition hover:border-accent/50 hover:text-ink"
                          >
                            {logo && (
                              <img
                                src={logo}
                                alt=""
                                aria-hidden="true"
                                loading="lazy"
                                className="logo-mark h-3.5 w-3.5"
                              />
                            )}
                            {s}
                          </span>
                        )
                      })}
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
