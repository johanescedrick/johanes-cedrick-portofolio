import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { moreProjects } from '../data/projects'
import { profile } from '../data/profile'

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.03 },
  }),
}

function ProjectRow({ p, i }) {
  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={reveal}
      className="grid grid-cols-1 items-baseline gap-x-6 gap-y-2.5 rounded-xl2 border-b border-hairline/70 px-3 py-6 transition-colors sm:grid-cols-[1fr_auto]"
    >
      <h3 className="font-display text-[17px] font-medium leading-snug tracking-tight text-ink md:text-lg">
        {p.title}
      </h3>
      <div className="flex items-center gap-3 text-[12px] text-muted sm:justify-end">
        <span className="rounded-full border border-hairline px-2.5 py-1">{p.kind}</span>
        <span>{p.date}</span>
      </div>
    </motion.div>
  )
}

export function MoreProjects() {
  return (
    <section id="more" className="scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto max-w-content px-5 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={reveal}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
            Also on the bench
          </p>
          <h2 className="text-balance font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
            More things I&apos;ve built
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted md:text-[19px]">
            A wider set of projects across NLP, deep learning, optimization, and
            mathematical modeling.
          </p>
        </motion.div>

        <div className="border-t border-hairline/70">
          {moreProjects.map((p, i) => (
            <ProjectRow key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="group flex items-center justify-between gap-3 rounded-xl2 border border-hairline bg-white p-6 transition hover:border-accent/50"
    >
      <span className="flex min-w-0 items-center gap-4">
        <Icon size={19} className="shrink-0 text-muted transition group-hover:text-accent" />
        <span className="min-w-0">
          <span className="block text-[12px] uppercase tracking-[0.1em] text-muted">{label}</span>
          <span className="mt-1 block truncate text-[14px] text-ink">{value}</span>
        </span>
      </span>
      <ArrowUpRight
        size={17}
        className="shrink-0 text-hairline transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </a>
  )
}

export function Contact() {
  const socials = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'in/johanes-cedrick', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'johanescedrick', href: profile.github },
  ]
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 border-t border-hairline/70"
      style={{ paddingBottom: 'var(--safe-b)' }}
    >
      <div className="mx-auto max-w-content px-5 py-24 md:px-10 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
            Let&apos;s talk
          </p>
          <h2 className="text-balance font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink">
            Have a problem worth solving with data?
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-graphite md:text-[19px]">
            I&apos;m open to data science, machine learning, and research
            opportunities. The fastest way to reach me is email.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {socials.map((s) => (
            <ContactCard key={s.label} {...s} />
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-hairline/70 pt-8 text-[13px] text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Johanes Cedrick W.</p>
          <p>{profile.role}</p>
        </div>
      </div>
    </footer>
  )
}
