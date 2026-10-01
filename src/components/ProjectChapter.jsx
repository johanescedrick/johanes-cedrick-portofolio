import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, ArrowUpRight, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react'
import { logoFor } from '../data/logos'

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

// Idle time before the gallery advances on its own. Any user input on the
// gallery restarts this countdown.
const AUTO_ADVANCE_MS = 10000

const arrowClass =
  'absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-white/90 text-ink shadow-sm backdrop-blur transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent'

function Visual({ project }) {
  const [active, setActive] = useState(0)
  // Bumped on every user input so the auto-advance timer restarts even when
  // the input lands on the slide that is already showing.
  const [interaction, setInteraction] = useState(0)
  const touchX = useRef(null)
  const v = project.visuals
  const n = v.length
  // Some charts are wide or tall enough that their text is unreadable at
  // card size, so the frame links to the full image (or its `full` version).
  const fullHref = `/assets_final/${v[active].full ?? v[active].src}`

  useEffect(() => {
    if (n < 2) return
    const id = setTimeout(() => setActive((a) => (a + 1) % n), AUTO_ADVANCE_MS)
    return () => clearTimeout(id)
  }, [active, interaction, n])

  const goTo = (i) => {
    setActive(((i % n) + n) % n)
    setInteraction((c) => c + 1)
  }

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
    setInteraction((c) => c + 1)
  }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) > 40) goTo(active + (dx < 0 ? 1 : -1))
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') goTo(active - 1)
    if (e.key === 'ArrowRight') goTo(active + 1)
  }

  return (
    <figure
      className="overflow-hidden rounded-xl2 border border-hairline bg-white"
      onKeyDown={onKeyDown}
    >
      <div
        className="relative"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <a
          href={fullHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open full size: ${v[active].caption}`}
          className="relative block aspect-[16/11] cursor-zoom-in bg-white"
        >
          {v.map((img, i) => (
            <img
              key={img.src}
              src={`/assets_final/${img.src}`}
              alt={img.caption}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-contain p-4 transition-opacity duration-500 ${
                i === active ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </a>
        {n > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous visual"
              className={`${arrowClass} left-3`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next visual"
              className={`${arrowClass} right-3`}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
      <figcaption className="flex items-center justify-between gap-4 border-t border-hairline/80 px-5 py-3.5">
        <span className="text-[13px] leading-snug text-muted">{v[active].caption}</span>
        {n > 1 && (
          <span className="flex shrink-0 items-center gap-1.5">
            <span className="mr-1.5 font-mono text-[11px] tabular-nums text-muted">
              {active + 1}/{n}
            </span>
            {v.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
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
    <dl className="grid grid-cols-3 gap-2 sm:gap-3">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="min-w-0 rounded-xl2 border border-hairline bg-white px-2 py-4 text-center sm:px-3 sm:py-5"
        >
          {/* Sizes step back at lg: that is where the chapter splits into two
              columns and these cards get their narrowest. */}
          <dt className="break-words font-display text-[clamp(0.7rem,3.2vw,1.25rem)] font-bold leading-tight tracking-tight text-accent sm:text-xl lg:text-lg xl:text-2xl">
            {m.value}
          </dt>
          <dd className="mt-1.5 break-words text-[11px] leading-tight text-muted sm:text-[12px]">
            {m.label}
          </dd>
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

  // The index is its own column so it can never be orphaned on a line of its
  // own; everything after it reflows as ordinary text.
  const meta = (
    <div className="mb-5 flex items-baseline gap-3 text-[13px] leading-relaxed text-muted">
      <span className="shrink-0 font-mono text-[12px] font-medium text-accent">
        {String(project.index).padStart(2, '0')}
      </span>
      <p className="min-w-0">
        {project.role}
        <span className="px-1.5 text-hairline">·</span>
        {project.domain}
        <span className="px-1.5 text-hairline">·</span>
        {project.date}
      </p>
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
        <div className="rounded-xl3 border border-hairline bg-white p-6 md:p-12">
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
