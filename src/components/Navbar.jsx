import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'More', href: '#more' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-lavender/85 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      style={{ paddingTop: 'var(--safe-t)' }}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-royal font-display text-sm font-bold text-white">
            JC
          </span>
          <span className="hidden font-display text-sm font-semibold text-ink sm:block">
            Johanes Cedrick
          </span>
        </a>
        <ul className="flex items-center gap-0.5 sm:gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-2.5 py-2 font-display text-[13px] font-medium text-slate2 transition hover:bg-white/70 hover:text-royal sm:px-3 sm:text-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div
        className="h-[3px] origin-left bg-gradient-to-r from-royal via-royal-bright to-ember"
        style={{ scaleX }}
      />
    </header>
  )
}
