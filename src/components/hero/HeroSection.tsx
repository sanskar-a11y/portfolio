'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GeometricBackground from './GeometricBackground'
import SocialCard from '@/components/ui/SocialCard'
import CTAButton from '@/components/ui/CTAButton'
import SkillPill from '@/components/ui/SkillPill'

gsap.registerPlugin(ScrollTrigger)

/* ── Frame content definitions ───────────────────── */
const TOTAL_FRAMES = 15
const MOBILE_FRAMES = [0, 1, 4, 9, 10, 12, 14] // Indices of the 7 mobile frames

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const framesRef = useRef<(HTMLDivElement | null)[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const setFrameRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      framesRef.current[i] = el
    },
    []
  )

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced || !containerRef.current) return

    const activeIndices = isMobile ? MOBILE_FRAMES : Array.from({ length: TOTAL_FRAMES }, (_, i) => i)
    const frames = activeIndices.map((i) => framesRef.current[i]).filter(Boolean) as HTMLDivElement[]
    if (frames.length === 0) return

    const ctx = gsap.context(() => {
      // Set initial states — all invisible except first
      frames.forEach((f, i) => {
        gsap.set(f, { opacity: i === 0 ? 1 : 0, willChange: 'opacity' })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      })

      const segmentDuration = 1 / frames.length

      for (let i = 0; i < frames.length; i++) {
        const start = i * segmentDuration

        if (i > 0) {
          tl.fromTo(
            frames[i],
            { opacity: 0 },
            { opacity: 1, duration: segmentDuration * 0.25, ease: 'none' },
            start
          )
        }

        if (i < frames.length - 1) {
          tl.to(
            frames[i],
            { opacity: 0, duration: segmentDuration * 0.25, ease: 'none' },
            start + segmentDuration * 0.75
          )
        }
      }
    }, containerRef)

    return () => ctx.revert()
  }, [isMobile])

  const heroHeight = isMobile ? '300vh' : '600vh'

  return (
    <section ref={containerRef} style={{ height: heroHeight }} className="relative">
      {/* Sticky viewport */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ background: '#080810' }}
      >
        {/* CSS Animated Background */}
        <GeometricBackground />

        {/* ── Frame 1 — Tagline ──────────────────────── */}
        <div
          ref={setFrameRef(0)}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 xl:px-24 z-10"
        >
          <h1 className="hero-display text-center max-w-4xl">
            <span className="text-gradient">Creative</span> developer.
            <br />
            Visual storyteller.
          </h1>
          <p className="body-dark mt-6 tracking-wider text-center">
            Websites · Videos · Thumbnails
          </p>
        </div>

        {/* ── Frame 2 — I build for the web ──────────── */}
        <div
          ref={setFrameRef(1)}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <div className="text-6xl md:text-8xl font-mono font-bold mb-8 select-none" style={{ color: '#6c63ff' }}>&lt;/&gt;</div>
          <h2 className="section-headline text-center mb-6">
            I build for the <span className="text-gradient">web.</span>
          </h2>
          <p className="body-dark text-center max-w-xl">
            Clean, fast, responsive websites and web apps built with React and modern tooling.
          </p>
        </div>

        {/* ── Frame 3 — Project 01: Digital Learning (card-float white card) ─── */}
        <div
          ref={setFrameRef(2)}
          className="absolute inset-0 flex items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <div className="card-float p-8 md:p-10 max-w-lg relative overflow-hidden">
            <div className="card-gradient-accent" />
            <span
              className="text-7xl md:text-8xl font-bold leading-none select-none block mb-4"
              style={{ color: 'rgba(108,99,255,0.15)' }}
            >
              01
            </span>
            <h3 className="card-title text-2xl mb-3">Digital Learning Platform</h3>
            <p className="body-light mb-6">
              React PWA with Firebase Auth and AI-assisted learning.
            </p>
            <CTAButton href="https://serene-daifuku-c1f5bb.netlify.app/" external variant="accent">
              View Live →
            </CTAButton>
          </div>
        </div>

        {/* ── Frame 4 — Built to perform ────────────── */}
        <div
          ref={setFrameRef(3)}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <h2 className="section-headline text-center mb-4">
            Built to <span className="text-gradient">perform.</span>
          </h2>
          <p className="body-dark text-center max-w-lg mb-10">
            Progressive Web App. Service workers. Firebase backend.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['React.js', 'Vite', 'Bootstrap', 'Firebase'].map((s) => (
              <SkillPill key={s} label={s} />
            ))}
          </div>
        </div>

        {/* ── Frame 5 — I lead ──────────────────────── */}
        <div
          ref={setFrameRef(4)}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <h2 className="section-headline text-center mb-6">
            I <span className="text-gradient">lead.</span>
          </h2>
          <p className="body-dark text-center max-w-xl mb-8">
            Team leader at a national-level hackathon. Built and presented a working solution under pressure.
          </p>
          <span className="pill-gradient">
            COER University · 2025
          </span>
        </div>

        {/* ── Frame 6 — Project 02: AI App (card-float white card) ──────────── */}
        <div
          ref={setFrameRef(5)}
          className="absolute inset-0 flex items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <div className="card-float p-8 md:p-10 max-w-lg relative overflow-hidden">
            <div className="card-gradient-accent" />
            <span
              className="text-7xl md:text-8xl font-bold leading-none select-none block mb-4"
              style={{ color: 'rgba(108,99,255,0.15)' }}
            >
              02
            </span>
            <h3 className="card-title text-2xl mb-3">AI Productivity App</h3>
            <p className="body-light mb-4">
              Automating workflows with prompt engineering and AI tools.
            </p>
            <span className="pill-gradient">
              In Progress — 2026
            </span>
          </div>
        </div>

        {/* ── Frame 7 — AI is the new toolkit ──────── */}
        <div
          ref={setFrameRef(6)}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <h2 className="section-headline text-center mb-6">
            <span className="text-gradient">AI</span> is the new toolkit.
          </h2>
          <p className="body-dark text-center max-w-lg">
            AI & Generative AI Internship · Cisco AI Certification · Prompt Engineering
          </p>
        </div>

        {/* ── Frame 8 — I edit ──────────────────────── */}
        <div
          ref={setFrameRef(7)}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <h2 className="section-headline text-center mb-6">
            I <span className="text-gradient">edit.</span>
          </h2>
          <p className="body-dark text-center max-w-xl mb-10">
            Cinematic, punchy video edits built to hold attention from the first second.
          </p>
          {/* Decorative timeline lines */}
          <div className="flex flex-col gap-3 items-center">
            <div className="h-[2px] w-48" style={{ background: 'linear-gradient(to right, transparent, rgba(108,99,255,0.4), transparent)' }} />
            <div className="h-[2px] w-36" style={{ background: 'linear-gradient(to right, transparent, rgba(167,139,250,0.3), transparent)' }} />
            <div className="h-[2px] w-24" style={{ background: 'linear-gradient(to right, transparent, rgba(236,72,153,0.2), transparent)' }} />
          </div>
        </div>

        {/* ── Frame 9 — I design ───────────────────── */}
        <div
          ref={setFrameRef(8)}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <h2 className="section-headline text-center mb-6">
            I <span className="text-gradient">design.</span>
          </h2>
          <p className="body-dark text-center max-w-xl mb-10">
            High-click thumbnails engineered to stop the scroll and spark curiosity.
          </p>
          {/* Decorative thumbnail frame */}
          <div
            className="w-48 md:w-64 aspect-video rounded-lg flex items-center justify-center"
            style={{ border: '2px solid rgba(108,99,255,0.3)' }}
          >
            <div className="w-6 h-6 rounded-full" style={{ background: 'rgba(108,99,255,0.2)' }} />
          </div>
        </div>

        {/* ── Frame 10 — Stats (three card-float white cards) ─────────────────────── */}
        <div
          ref={setFrameRef(9)}
          className="absolute inset-0 flex items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl w-full">
            {[
              { value: '3+', label: 'Projects built' },
              { value: '2025–26', label: 'Active builder' },
              { value: 'National', label: 'Hackathon level' },
            ].map((stat) => (
              <div key={stat.label} className="card-float p-6 text-center">
                <div
                  className="text-3xl md:text-5xl font-bold mb-2"
                  style={{ color: '#6c63ff' }}
                >
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm" style={{ color: '#6b6b80' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Frame 11 — Philosophy ────────────────── */}
        <div
          ref={setFrameRef(10)}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <blockquote className="text-center max-w-3xl">
            <p
              className="text-2xl md:text-4xl xl:text-5xl font-light italic leading-relaxed"
              style={{ color: '#f0f0f8' }}
            >
              &ldquo;I treat every project like a <span className="text-gradient">product launch.</span>&rdquo;
            </p>
            <footer className="mt-6 text-sm tracking-wider" style={{ color: 'rgba(240,240,248,0.55)' }}>
              — Work philosophy
            </footer>
          </blockquote>
        </div>

        {/* ── Frame 12 — Social Cards (card-float white cards) ──────────────── */}
        <div
          ref={setFrameRef(11)}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <p className="label-overline mb-8 tracking-wider">Find me here</p>
          <div className="flex flex-col md:flex-row gap-4">
            <SocialCard
              platform="GitHub"
              handle="sanskar-a11y"
              href="https://github.com/sanskar-a11y"
              iconType="github"
            />
            <SocialCard
              platform="Fiverr"
              handle="Hire me"
              href="https://www.fiverr.com/sanskar6008/buying?source=avatar_menu_profile"
              iconType="fiverr"
            />
          </div>
        </div>

        {/* ── Frame 13 — Services Summary ──────────── */}
        <div
          ref={setFrameRef(12)}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <p className="label-overline mb-8 tracking-wider">
            Available for freelance
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            {['Web Development', 'Video Editing', 'Thumbnail Design'].map((s) => (
              <div
                key={s}
                className="card-float px-6 py-3 text-sm md:text-base font-medium"
                style={{ borderRadius: '999px' }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* ── Frame 14 — Education ─────────────────── */}
        <div
          ref={setFrameRef(13)}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <h2 className="section-headline text-center mb-6">
            Final year. <span className="text-gradient">Full focus.</span>
          </h2>
          <p className="body-dark text-center max-w-lg">
            Diploma in Computer Science · Sanskriti University · Graduating 2026
          </p>
        </div>

        {/* ── Frame 15 — CTA ───────────────────────── */}
        <div
          ref={setFrameRef(14)}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 xl:px-24 opacity-0 z-10"
        >
          <h2 className="section-headline text-center mb-8">
            Let&apos;s build <span className="text-gradient">something.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <CTAButton href="/projects">View My Work</CTAButton>
            <CTAButton variant="secondary" href="https://www.fiverr.com/sanskar6008/buying?source=avatar_menu_profile" external>
              Hire Me
            </CTAButton>
          </div>
        </div>

        {/* Scroll indicator — visible only at start */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="label-overline tracking-widest" style={{ fontSize: '11px' }}>
            Scroll
          </span>
          <div className="w-[1px] h-8" style={{ background: 'linear-gradient(to bottom, #6c63ff, transparent)' }} />
        </div>
      </div>
    </section>
  )
}
