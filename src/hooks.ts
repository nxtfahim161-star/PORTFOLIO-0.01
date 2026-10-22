import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

export const vars = (o: Record<string, string | number>) => o as CSSProperties

export const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window) || reduced()) {
      els.forEach((e) => e.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])
}

export function useParallax() {
  useEffect(() => {
    if (reduced()) return
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-speed]'))
    let raf = 0
    const run = () => {
      raf = 0
      const vh = window.innerHeight
      els.forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.bottom < 0 || r.top > vh) return
        const d = r.top + r.height / 2 - vh / 2
        el.style.setProperty('--py', `${-d * parseFloat(el.dataset.speed || '0')}px`)
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(run)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    run()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || reduced() || !window.matchMedia('(hover: hover)').matches) return
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left - r.width / 2) * 0.22
      const y = (e.clientY - r.top - r.height / 2) * 0.3
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    const leave = () => {
      el.style.transform = ''
    }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  }, [])
  return ref
        }
