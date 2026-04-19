import { useEffect } from 'react'
import { gsap } from 'gsap'

function initTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const elements = document.querySelectorAll<HTMLElement>('.thumb')
  if (!elements.length) return

  const MAX = 20

  function setTransform(el: HTMLElement, scale: number, xRot: number, yRot: number) {
    el.style.transform =
      `perspective(500px) scale(${scale}) rotateX(${xRot}deg) rotateY(${yRot}deg)`
  }

  elements.forEach((el) => {
    const reset = () => setTransform(el, 1, 0, 0)

    el.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') return
      const { left, top, width, height } = el.getBoundingClientRect()
      const x = Math.min(Math.max(e.clientX - left, 0), width)
      const y = Math.min(Math.max(e.clientY - top, 0), height)
      const yRot =  MAX * ((x - width  / 2) / width)
      const xRot = -MAX * ((y - height / 2) / height)
      setTransform(el, 1.1, xRot, yRot)
    })

    el.addEventListener('pointerleave',  reset)
    el.addEventListener('pointercancel', reset)

    el.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') return
      setTransform(el, 0.9, 0, 0)
    })
    el.addEventListener('pointerup', (e) => {
      if (e.pointerType === 'touch') return
      setTransform(el, 1.1, 0, 0)
    })
  })
}

export default function PageAnimations() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('.site-header', { y: -12, opacity: 0, duration: 0.5 })

    if (document.querySelector('.headline')) {
      tl.from('.headline', { y: 24, opacity: 0, duration: 0.6 }, '-=0.2')
        .from('.rule', { scaleX: 0, opacity: 0, duration: 0.5, transformOrigin: 'left' }, '-=0.3')
        .from('.lede', { y: 16, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.card', { y: 24, opacity: 0, duration: 0.6, stagger: 0.15 }, '-=0.2')
    }

    initTilt()
  }, [])

  return null
}
