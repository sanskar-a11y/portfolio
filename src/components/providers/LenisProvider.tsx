'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    // Sync Lenis with GSAP ticker — single unified RAF loop
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
