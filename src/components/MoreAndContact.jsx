import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { moreProjects } from '../data/projects'
import { profile } from '../data/profile'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04 },
  }),
}

export function MoreProjects() {
  return (
    <section id="more" className="scroll-mt-24 border-t border-mist/70 py-24 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={reveal}
          className="mb-10"
        >
          <p className="mb-3 font-display text-sm font-semibold tracking-[0.2em] text-ember">
            ALSO ON THE BENCH
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            More things I&apos;ve built
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate2">
            A wider set of projects across NLP, deep learning, optimization, and
            mathematical modeling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={reveal}
              className="flex flex-col rounded-2xl border border-mist bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-lavender px-2.5 py-1 font-display text-xs font-semibold text-royal">
                  {p.kind}
                </span>
                <span className="text-xs text-slate2">{p.date}</span>
              </div>
              <p className="font-display text-base font-semibold leading-snug text-ink">
                {p.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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
      className="scroll-mt-24 bg-royal-deep text-white"
      style={{ paddingBottom: 'var(--safe-b)' }}
    >
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 font-display text-sm font-semibold tracking-[0.2em] text-ember-soft">
            LET&apos;S TALK
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Have a problem worth solving with data?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            I&apos;m open to data science, machine learning, and research
            opportunities. The fastest way to reach me is email.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {socials.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:border-white/40 hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                    <Icon size={18} />
                  </span>
                  <div>
                    <div className="font-display text-sm font-semibold">{label}</div>
                    <div className="text-sm text-white/60">{value}</div>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-white/40 transition group-hover:text-white"
                />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Johanes Cedrick W.</p>
        </div>
      </div>
    </footer>
  )
}
