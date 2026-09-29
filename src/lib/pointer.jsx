import { useCallback, useRef } from 'react'

// Per-card highlight. Spread the result onto the element that carries .spotlight.
export function useSpotlight() {
  const ref = useRef(null)

  const onPointerMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--cx', `${e.clientX - r.left}px`)
    el.style.setProperty('--cy', `${e.clientY - r.top}px`)
  }, [])

  return { ref, onPointerMove }
}
