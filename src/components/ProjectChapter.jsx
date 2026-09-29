import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, ArrowUpRight, Plus, Minus } from 'lucide-react'
import { logoFor } from '../data/logos'
import { useSpotlight } from '../lib/pointer'

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

function Visual({ project }) {
  const [active, setActive] = useState(0)
  const v = project.visuals
  const { ref, onPointerMove } = useSpotlight()

  return (
    <figure
      ref={ref}
      onPointerMove={onPointerMove}
      className="spotlight overflow-hidden rounded-xl2 border border-hairline bg-white"
    >
      <div className="relative aspect-[16/11] bg-white">
        {v.map((img, i) => (
          <img
            key={img.src}
            src={`/assets/${img.src}`}
            alt={img.caption}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-contain p-4 transition-opacity duration-500 ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <figcaption className="flex items-center justify-between gap-4 border-t border-hairline/80 px-5 py-3.5">
        <span className="text-[13px] leading-snug text-muted">{v[active].caption}</span>
        {v.length > 1 && (
          <span className="flex shrink-0 gap-1.5">
            {v.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show visual ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === active ? 'w-6 bg-accent' : 'w-2 bg-hairline hover:bg-muted'
                }`}
              />
            ))}
          </span>
        )}
      </figcaption>
    </figure>
  )
}

function Metrics({ metrics }) {
  return (
    <dl className="grid grid-cols-3 gap-3">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="min-w-0 rounded-xl2 border border-hairline bg-white/70 px-4 py-5 text-center"
        >
          <dt className="font-display text-xl font-bold tracking-tight text-accent md:text-3xl">
            {m.value}
          </dt>
          <dd className="mt-1.5 break-words text-[12px] leading-tight text-muted">{m.label}</dd>
        </div>
      ))}
    </dl>
  )
}

function Details({ project }) {
  return (
    <div className="grid grid-cols-1 gap-10 pt-10 lg:grid-cols-2 lg:gap-14">
      <div className="space-y-10">
        <div>
          <h4 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
            The problem
          </h4>
          <p className="prose-justify max-w-read text-[16px] leading-[1.65] text-graphite">
            {project.problem}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
            The approach
          </h4>
          <ul className="space-y-3.5">
            {project.solution.map((item, j) => (
              <li key={j} className="flex gap-3.5 text-[16px] text-graphite">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="prose-justify leading-[1.65]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
            The recommendation
          </h4>
          <p className="prose-justify max-w-read text-[16px] leading-[1.65] text-graphite">
            {project.recommendation}
          </p>
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
          What I did
        </h4>
        <ol className="divide-y divide-hairline/70 border-y border-hairline/70">
          {project.steps.map((s, i) => (
            <li key={i} className="flex gap-4 py-4">
              <span className="w-6 shrink-0 pt-0.5 font-mono text-[12px] text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="font-display text-[15px] font-semibold tracking-tight text-ink">
                  {s.t}
                </p>
                <p className="prose-justify mt-1 text-[14px] leading-relaxed text-muted">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default function ProjectChapter({ project }) {
  const [open, setOpen] = useState(false)
  // Odd chapters put the figure on the left, even ones on the right.
  const visualFirst = project.index % 2 === 1

  const meta = (
    <div className="mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[13px] text-muted">
      <span className="font-mono text-[12px] text-accent">
        {String(project.index).padStart(2, '0')}
      </span>
      <span className="text-hairline">·</span>
      <span>{project.role}</span>
      <span className="text-hairline">·</span>
      <span>{project.domain}</span>
      <span className="text-hairline">·</span>
      <span>{project.date}</span>
    </div>
  )

  const heading = (
    <>
      <h3 className="text-balance font-display text-[clamp(1.5rem,3.2vw,2.4rem)] font-bold leading-[1.12] tracking-[-0.025em] text-ink">
        {project.title}
      </h3>
      <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">{project.tagline}</p>
    </>
  )

  const result = (
    <div>
      <h4 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
        The result
      </h4>
      <p className="prose-justify max-w-read text-[17px] leading-[1.65] text-graphite">
        {project.result}
      </p>
    </div>
  )

  const toggle = (
    <button
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-white/70 px-5 py-2.5 text-[14px] font-medium text-ink transition hover:border-accent hover:text-accent"
    >
      {open ? <Minus size={15} /> : <Plus size={15} />}
      {open ? 'Show less' : 'Read the full case study'}
    </button>
  )

  const footer = (
    <div className="mt-10 flex flex-col gap-5 border-t border-hairline/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {project.stack.map((s) => {
          const logo = logoFor(s)
          return (
            <span
              key={s}
              className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-3 py-1 text-[12px] text-muted"
            >
              {logo && (
                <img
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="logo-mark h-3 w-3"
                />
              )}
              {s}
            </span>
          )
        })}
      </div>
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex shrink-0 items-center gap-2 text-[14px] font-medium text-ink transition hover:text-accent"
      >
        <Github size={15} />
        View repository
        <ArrowUpRight
          size={14}
          className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
    </div>
  )

  const details = (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="details"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <Details project={project} />
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <motion.article
      id={project.id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-70px' }}
      variants={reveal}
      className="scroll-mt-24 py-10 md:py-14"
    >
      <div className="mx-auto max-w-content px-5 md:px-10">
        <div className="rounded-xl3 border border-hairline bg-white/60 p-6 md:p-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className={visualFirst ? 'lg:order-2' : ''}>
              {meta}
              {heading}
              <div className="mt-8">{result}</div>
              <div className="mt-8">{toggle}</div>
            </div>

            <div className={visualFirst ? 'lg:order-1' : ''}>
              <Visual project={project} />
              <div className="mt-4">
                <Metrics metrics={project.metrics} />
              </div>
            </div>
          </div>

          {details}
          {footer}
        </div>
      </div>
    </motion.article>
  )
}
