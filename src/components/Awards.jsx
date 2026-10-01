import { motion } from 'framer-motion'
import { Trophy, Globe2, Flag } from 'lucide-react'
import { profile } from '../data/profile'

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
}

function AwardCard({ a, i }) {
  const ScopeIcon = a.scope === 'National' ? Flag : Globe2

  return (
    <motion.article
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={reveal}
      className="flex flex-col overflow-hidden rounded-xl3 border border-hairline bg-white transition hover:border-accent/40"
    >
      <a
        href={`/assets_final/${a.image}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open photo: ${a.award}, ${a.event}`}
        className="relative block aspect-[4/3] cursor-zoom-in overflow-hidden bg-mist"
      >
        <img
          src={`/assets_final/${a.image}`}
          alt={`${a.award} at ${a.event}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
          style={{ objectPosition: a.imagePosition }}
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium text-ink shadow-sm backdrop-blur">
          <ScopeIcon size={13} className="text-accent" />
          {a.scope}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-4 flex items-center gap-2 text-[13px] text-muted">
          <Trophy size={14} className="shrink-0 text-accent" />
          <span>
            {a.year}
            <span className="px-1.5 text-hairline">·</span>
            {a.organizer}
          </span>
        </div>
        <h3 className="text-balance font-display text-[clamp(1.35rem,2.6vw,1.75rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
          {a.award}
        </h3>
        <p className="mt-1.5 text-[15px] font-medium text-graphite">{a.event}</p>
        <p className="mt-1 text-[14px] text-accent">{a.project}</p>

        <p className="prose-justify mt-5 flex-1 border-t border-hairline/70 pt-5 text-[15px] leading-[1.65] text-graphite">
          {a.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {a.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-hairline px-3 py-1 text-[12px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Awards() {
  return (
    <section id="awards" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-content px-5 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={reveal}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
            Recognition
          </p>
          <h2 className="text-balance font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
            Awards &amp; Achievements
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted md:text-[19px]">
            Competitions where I put data science, NLP, and spatial analysis to work under
            real constraints, at national and Southeast Asian level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {profile.awards.map((a, i) => (
            <AwardCard key={a.event} a={a} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
