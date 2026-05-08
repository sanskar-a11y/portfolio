'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Film, ImageIcon, Rocket } from 'lucide-react'
import HeroSection from '@/components/hero/HeroSection'
import ServicesSnapshot from '@/components/sections/ServicesSnapshot'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import TrustStrip from '@/components/sections/TrustStrip'
import CTAButton from '@/components/ui/CTAButton'

const sectionMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
  viewport: { once: true, margin: '-100px' },
}

const identities = [
  { label: 'Creative Developer', icon: Code, color: '#9ffcff' },
  { label: 'Editor', icon: Film, color: '#ffd166' },
  { label: 'Designer', icon: ImageIcon, color: '#ff7ab6' },
]

export default function Home() {
  return (
    <>
      <HeroSection />

      <motion.section {...sectionMotion} className="px-5 py-8 sm:px-6 md:px-12 xl:px-24">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-3 sm:grid-cols-3">
          {identities.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.label} className="signal-tile group min-h-[78px] justify-between px-5">
                <Icon className="h-6 w-6 shrink-0" style={{ color: item.color }} />
                <span className="text-base font-semibold uppercase tracking-[0.18em] sm:text-xs lg:text-sm">{item.label}</span>
              </div>
            )
          })}
        </div>
      </motion.section>

      <ServicesSnapshot />
      <FeaturedProjects />
      <TrustStrip />

      <motion.section {...sectionMotion} className="px-5 py-24 sm:px-6 md:px-12 xl:px-24">
        <div className="mission-cta relative mx-auto max-w-5xl overflow-hidden px-6 py-12 text-center sm:px-10 md:px-16 md:py-18">
          <div className="mission-cta-orbit" aria-hidden="true" />
          <Rocket className="mx-auto mb-7 h-8 w-8 text-[#9ffcff]" />
          <h2 className="section-headline mb-6">Ready to launch something people remember?</h2>
          <p className="body-dark mx-auto mb-10 max-w-2xl text-lg">
            Let&apos;s shape your next site, edit, or creator asset into a polished digital object with real momentum.
          </p>
          <div className="mx-auto flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
            <CTAButton variant="accent" href="/contact">
              Contact Me
              <ArrowRight size={16} />
            </CTAButton>
            <CTAButton
              variant="secondary"
              href="https://www.fiverr.com/sanskar6008/buying?source=avatar_menu_profile"
              external
            >
              Open Fiverr
            </CTAButton>
          </div>
        </div>
      </motion.section>
    </>
  )
}
