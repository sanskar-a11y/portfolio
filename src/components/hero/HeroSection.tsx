'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Film, ImageIcon, Sparkles } from 'lucide-react'
import CTAButton from '@/components/ui/CTAButton'

const disciplines = [
  { label: 'Web Development', icon: Code2 },
  { label: 'Video Editing', icon: Film },
  { label: 'Thumbnail Design', icon: ImageIcon },
]

const orbitLabels = ['React', 'Firebase', 'PWA', 'Motion', 'AI', 'Story']

export default function HeroSection() {
  return (
    <section
      className="space-hero relative isolate min-h-dvh overflow-hidden px-5 pb-20 pt-24 sm:px-6 md:px-12 lg:pb-24 lg:pt-28 xl:px-24"
    >
      <div className="starfield" aria-hidden="true" />
      <div className="orbital-belt orbital-belt-one" aria-hidden="true" />
      <div className="orbital-belt orbital-belt-two" aria-hidden="true" />

      <div className="section-container relative z-10 grid min-h-[calc(100dvh-128px)] grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <p className="hero-kicker">Sanskar Sharma / Creative Developer</p>
          <h1 className="cosmic-display mt-5">
            Digital work with
            <span> cinematic gravity.</span>
          </h1>
          <p className="body-dark mt-7 max-w-2xl text-lg md:text-xl">
            I build polished web experiences, edit sharp creator videos, and design visuals that make projects feel premium from the first second.
          </p>

          <div className="mt-9 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row">
            <CTAButton href="/projects" variant="accent">
              Explore Work
              <ArrowRight size={16} />
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Start a Mission
            </CTAButton>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {disciplines.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.22 + index * 0.08 }}
                  className="signal-tile"
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[520px] lg:min-h-[680px]"
          aria-label="Creative orbit system"
        >
          <div className="planet-stage">
            <div className="planet-core">
              <div className="planet-shine" />
              <div className="planet-grid" />
              <div className="planet-content">
                <Sparkles size={22} />
                <span>Now booking</span>
                <strong>Websites, edits, and visuals for 2026 launches.</strong>
              </div>
            </div>

            <div className="orbit-ring orbit-ring-a" />
            <div className="orbit-ring orbit-ring-b" />
            {orbitLabels.map((label, index) => (
              <div key={label} className={`orbit-chip orbit-chip-${index + 1}`}>
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="marquee-orbit" aria-hidden="true">
        <div>
          {[...orbitLabels, ...orbitLabels, ...orbitLabels].map((label, index) => (
            <span key={`${label}-${index}`}>{label}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
