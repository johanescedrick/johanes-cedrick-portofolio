import { useCallback, useEffect, useRef } from 'react'

const SPACING = 34 // px between dots
const REACH = 200 // how far the pointer's influence carries
const BASE_R = 1
const MAX_R = 2.5
const PUSH = 6 // px a dot drifts outward at full influence
const BASE_A = 0.055
const MAX_A = 0.2
const EASE = 0.14
const IDLE_MS = 600 // effect fades once the pointer holds still this long

// A grid of dots that swell and drift away from the pointer. Drawn on canvas so
// a few thousand dots stay cheap; the loop parks itself once nothing is moving.
export function DotField() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const still =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(hover: none)').matches

    let w = 0
    let h = 0
    let dots = []
    let frame = 0
    let idle = 0
    const pointer = { x: 0, y: 0, active: false }

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const cols = Math.ceil(w / SPACING) + 1
      const rows = Math.ceil(h / SPACING) + 1
      const offX = (w - (cols - 1) * SPACING) / 2
      const offY = (h - (rows - 1) * SPACING) / 2
      dots = []
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({ x: offX + i * SPACING, y: offY + j * SPACING, e: 0 })
        }
      }
    }

    const paint = () => {
      ctx.clearRect(0, 0, w, h)
      let busy = false

      for (const d of dots) {
        let target = 0
        let dx = 0
        let dy = 0

        if (pointer.active) {
          dx = d.x - pointer.x
          dy = d.y - pointer.y
          const dist = Math.hypot(dx, dy)
          if (dist < REACH) {
            const t = 1 - dist / REACH
            target = t * t * (3 - 2 * t) // smoothstep: soft edge, defined core
          }
        }

        d.e += (target - d.e) * EASE
        if (Math.abs(target - d.e) > 0.002) busy = true

        const e = d.e
        let x = d.x
        let y = d.y
        if (e > 0.001) {
          const len = Math.hypot(dx, dy) || 1
          x += (dx / len) * PUSH * e
          y += (dy / len) * PUSH * e
        }

        ctx.beginPath()
        ctx.arc(x, y, BASE_R + (MAX_R - BASE_R) * e, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(29, 29, 31, ${BASE_A + (MAX_A - BASE_A) * e})`
        ctx.fill()
      }

      frame = busy ? requestAnimationFrame(paint) : 0
    }

    const wake = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }

    const onLeave = () => {
      window.clearTimeout(idle)
      pointer.active = false
      wake()
    }

    const onMove = (e) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
      window.clearTimeout(idle)
      idle = window.setTimeout(onLeave, IDLE_MS)
      wake()
    }

    // The canvas is viewport-fixed while the page moves underneath it, so a
    // held-still pointer would drag the bulge down the page. Drop it instead.
    const onScroll = () => {
      if (pointer.active) onLeave()
    }

    const onResize = () => {
      build()
      if (frame) cancelAnimationFrame(frame)
      frame = 0
      paint()
    }

    build()
    paint()

    if (still) return () => cancelAnimationFrame(frame)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    window.addEventListener('blur', onLeave)
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('blur', onLeave)
      window.removeEventListener('resize', onResize)
      window.clearTimeout(idle)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}

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
