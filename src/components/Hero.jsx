import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Mail, Linkedin, Github } from 'lucide-react'
import { profile } from '../data/profile'
import { marqueeLogos } from '../data/logos'

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'in/johanes-cedrick', href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: 'johanescedrick', href: profile.github },
]

function Marquee() {
  const row = [...marqueeLogos, ...marqueeLogos]
  return (
    <div className="marquee-mask overflow-hidden py-2">
      <div className="flex w-max animate-marquee items-center gap-14 px-6">
        {row.map((slug, i) => (
          <img
            key={`${slug}-${i}`}
            src={`/assets/logos/${slug}.svg`}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="logo-mark h-6 w-6 shrink-0 sm:h-7 sm:w-7"
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden"
      style={{ paddingTop: 'calc(var(--safe-t) + 92px)' }}
    >
      <div className="mx-auto flex w-full max-w-content flex-1 items-center px-5 md:px-10">
        <div className="mx-auto w-full max-w-4xl py-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-hairline bg-white/70 px-4 py-1.5 text-[13px] font-medium text-graphite backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="font-display text-[clamp(2.75rem,8.4vw,5.75rem)] font-bold leading-[1.02] tracking-[-0.035em] text-ink"
          >
            Johanes Cedrick
            <br />
            <span className="bg-gradient-to-r from-accent to-violet bg-clip-text text-transparent">
              Wijaya
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-graphite sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-white transition hover:bg-accent"
            >
              View my work
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/70 px-7 py-3.5 text-[15px] font-medium text-ink backdrop-blur transition hover:border-ink"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-3 border-t border-hairline/80 pt-8 sm:gap-6"
          >
            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex flex-col items-center gap-1.5 text-center"
              >
                <Icon size={18} className="text-muted transition group-hover:text-accent" />
                <span className="font-display text-[14px] font-semibold tracking-tight text-ink transition group-hover:text-accent sm:text-base">
                  {label}
                </span>
                <span className="hidden max-w-full truncate text-[12px] text-muted sm:block">
                  {value}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="pb-6">
        <Marquee />
        <div className="mx-auto mt-4 flex max-w-content items-center justify-center px-5 md:px-10">
          <a
            href="#about"
            aria-label="Scroll to about"
            className="flex flex-col items-center gap-1.5 text-muted transition hover:text-accent"
          >
            <span className="text-[11px] tracking-wide">Scroll</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={15} />
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  )
}
