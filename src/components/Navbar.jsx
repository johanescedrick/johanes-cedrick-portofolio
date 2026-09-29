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
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-hairline/70 bg-white/72 backdrop-blur-xl backdrop-saturate-150'
          : 'border-b border-transparent'
      }`}
      style={{ paddingTop: 'var(--safe-t)' }}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between gap-3 px-4 py-3 sm:px-5 md:px-10">
        <a
          href="#top"
          className="shrink-0 whitespace-nowrap font-display text-[14px] font-semibold tracking-tight text-ink transition hover:text-accent sm:text-[15px]"
          aria-label="Home"
        >
          Johanes Cedrick
        </a>

        <ul className="flex items-center gap-0.5 sm:gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-2 py-2 text-[13px] font-medium text-graphite transition hover:bg-mist hover:text-ink sm:px-3 sm:text-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div className="h-[2px] origin-left bg-accent" style={{ scaleX }} />
    </header>
  )
}
