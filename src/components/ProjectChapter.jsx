import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Target, Lightbulb, TrendingUp, Compass, ChevronRight } from 'lucide-react'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.05 },
  }),
}

const blocks = [
  { key: 'problem', label: 'The problem', icon: Target },
  { key: 'solution', label: 'The approach', icon: Lightbulb },
  { key: 'result', label: 'The result', icon: TrendingUp },
  { key: 'recommendation', label: 'The recommendation', icon: Compass },
]

function VisualPanel({ project }) {
  const [active, setActive] = useState(0)
  const v = project.visuals
  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-mist bg-white shadow-lg shadow-royal/5">
        <div className="relative aspect-[16/11] bg-lavender">
          {v.map((img, i) => (
            <img
              key={img.src}
              src={`/assets/${img.src}`}
              alt={img.caption}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-contain p-3 transition-opacity duration-500 ${
                i === active ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-mist px-4 py-3">
          <p className="text-sm text-slate2">{v[active].caption}</p>
          {v.length > 1 && (
            <div className="flex shrink-0 gap-1.5">
              {v.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show visual ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === active ? 'w-6 bg-royal' : 'w-2.5 bg-mist hover:bg-royal-bright'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProjectChapter({ project }) {
  const accentText = project.accent === 'ember' ? 'text-ember' : 'text-royal'
  const accentBg = project.accent === 'ember' ? 'bg-ember' : 'bg-royal'

  return (
    <article
      id={project.id}
      className="scroll-mt-24 border-t border-mist/70 py-20 md:py-28"
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        {/* Chapter header */}
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={reveal}
          className="mb-10"
        >
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span
              className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${accentBg} font-display text-lg font-bold text-white`}
            >
              {String(project.index).padStart(2, '0')}
            </span>
            <div className="flex flex-col">
              <span className={`font-display text-sm font-semibold ${accentText}`}>
                {project.role}
              </span>
              <span className="text-sm text-slate2">
                {project.domain} · {project.date}
              </span>
            </div>
          </div>
          <h3 className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl text-balance">
            {project.title}
          </h3>
          <p className="mt-3 max-w-2xl text-lg italic text-slate2">
            {project.tagline}
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          {/* Left: narrative */}
          <div className="order-2 md:order-1">
            <div className="space-y-7">
              {blocks.map((b, i) => {
                const Icon = b.icon
                const content = project[b.key]
                return (
                  <motion.div
                    key={b.key}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={reveal}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <Icon size={17} className={accentText} />
                      <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
                        {b.label}
                      </h4>
                    </div>
                    {Array.isArray(content) ? (
                      <ul className="space-y-2 pl-1">
                        {content.map((item, j) => (
                          <li key={j} className="flex gap-2.5 text-slate2">
                            <ChevronRight
                              size={18}
                              className={`mt-0.5 shrink-0 ${accentText}`}
                            />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="leading-relaxed text-slate2">{content}</p>
                    )}
                  </motion.div>
                )
              })}

              {project.note && (
                <p className="rounded-xl border border-dashed border-mist bg-white/60 px-4 py-3 text-sm text-slate2">
                  {project.note}
                </p>
              )}
            </div>
          </div>

          {/* Right: sticky visual + metrics */}
          <div className="order-1 md:order-2">
            <VisualPanel project={project} />

            {/* Metrics */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={reveal}
              className="mt-5 grid grid-cols-3 gap-3"
            >
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-mist bg-white p-4 text-center shadow-sm"
                >
                  <div className={`font-display text-xl font-bold ${accentText} md:text-2xl`}>
                    {m.value}
                  </div>
                  <div className="mt-1 text-[11px] leading-tight text-slate2">
                    {m.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* What I did — steps */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={reveal}
          className="mt-14"
        >
          <div className="mb-5 flex items-center gap-2">
            <span className={`h-[3px] w-8 ${accentBg}`} />
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
              What I did
            </h4>
          </div>
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.steps.map((s, i) => (
              <li
                key={i}
                className="group rounded-2xl border border-mist bg-white p-4 shadow-sm transition hover:border-royal-bright/50 hover:shadow-md"
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-md ${accentBg} font-display text-xs font-bold text-white`}
                  >
                    {i + 1}
                  </span>
                  <span className="font-display text-sm font-semibold text-ink">
                    {s.t}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate2">{s.d}</p>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Footer: stack + repo */}
        <div className="mt-10 flex flex-col gap-4 border-t border-mist pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full bg-lavender px-2.5 py-1 font-display text-xs font-medium text-royal"
              >
                {s}
              </span>
            ))}
          </div>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-royal px-4 py-2 font-display text-sm font-semibold text-royal transition hover:bg-royal hover:text-white"
          >
            <Github size={16} />
            View repository
          </a>
        </div>
      </div>
    </article>
  )
}
