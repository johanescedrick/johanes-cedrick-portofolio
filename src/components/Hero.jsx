import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowDown } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden flex items-center"
      style={{ paddingTop: 'calc(var(--safe-t) + 72px)' }}
    >
      {/* Decorative blue swoosh, echoing the PDF cover */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-royal/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[560px] w-[560px] rounded-full bg-royal-bright/10 blur-3xl" />
        <svg
          className="absolute left-0 top-0 hidden h-full w-auto opacity-90 md:block"
          viewBox="0 0 300 800"
          fill="none"
          preserveAspectRatio="xMinYMid slice"
          aria-hidden="true"
        >
          <path d="M0 0 H140 C60 220 60 560 150 800 H0 Z" fill="#1E52C8" />
          <path d="M0 0 H90 C30 240 30 540 100 800 H0 Z" fill="#3B6FE0" opacity="0.55" />
        </svg>
        {/* Mobile: a slim left accent bar instead of the big swoosh */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-royal to-royal-bright md:hidden" />
      </div>

      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-8 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-10">
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3 font-display text-sm font-semibold tracking-[0.2em] text-ember"
          >
            <span className="h-[3px] w-9 bg-ember" />
            DATA SCIENCE &amp; AI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-royal sm:text-6xl lg:text-7xl"
          >
            Johanes
            <br />
            Cedrick Wijaya
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-slate2"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="rounded-full bg-royal px-6 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-royal-deep"
            >
              View my work
            </a>
            <div className="flex items-center gap-1.5">
              {[
                { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
                { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
                { icon: Github, href: profile.github, label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-mist bg-white/70 text-royal transition hover:border-royal hover:bg-royal hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-1 flex justify-center md:order-2 md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-x-6 bottom-6 top-10 -z-10 rounded-[2rem] bg-gradient-to-b from-mist to-lavender" />
            <img
              src="/assets/profile-hero.png"
              alt="Johanes Cedrick Wijaya"
              className="h-[380px] w-auto object-contain drop-shadow-xl sm:h-[440px] md:h-[520px]"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium tracking-widest text-slate2 md:flex"
        style={{ paddingBottom: 'var(--safe-b)' }}
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="grid h-9 w-9 place-items-center rounded-full border border-mist bg-white/70"
        >
          <ArrowDown size={16} />
        </motion.span>
        SCROLL
      </a>
    </section>
  )
}
