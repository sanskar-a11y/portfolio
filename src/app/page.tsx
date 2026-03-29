'use client'

import { motion } from 'framer-motion'
import { Code, Film, ImageIcon } from 'lucide-react'
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

export default function Home() {
  return (
    <>
      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Section 2 — Identity Strip */}
      <motion.section {...sectionMotion} className="py-20 px-6 md:px-12 xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <Code className="w-6 h-6" style={{ color: '#6c63ff' }} />
            <span className="text-xl md:text-2xl font-light" style={{ color: 'rgba(240,240,248,0.55)' }}>
              Developer
            </span>
          </div>
          <span className="hidden md:block text-2xl" style={{ color: 'rgba(240,240,248,0.20)' }}>·</span>
          <div className="flex items-center gap-3">
            <Film className="w-6 h-6" style={{ color: '#a78bfa' }} />
            <span className="text-xl md:text-2xl font-light" style={{ color: 'rgba(240,240,248,0.55)' }}>
              Editor
            </span>
          </div>
          <span className="hidden md:block text-2xl" style={{ color: 'rgba(240,240,248,0.20)' }}>·</span>
          <div className="flex items-center gap-3">
            <ImageIcon className="w-6 h-6" style={{ color: '#ec4899' }} />
            <span className="text-xl md:text-2xl font-light" style={{ color: 'rgba(240,240,248,0.55)' }}>
              Designer
            </span>
          </div>
        </div>
      </motion.section>

      {/* Section 3 — Services */}
      <ServicesSnapshot />

      {/* Section 4 — Featured Projects */}
      <FeaturedProjects />

      {/* Section 5 — Trust Strip */}
      <TrustStrip />

      {/* Section 6 — CTA */}
      <motion.section {...sectionMotion} className="py-32 px-6 md:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto text-center card-float p-12 md:p-20 relative overflow-hidden">
          <div className="card-gradient-accent" />
          <h2 className="section-headline-light mb-6">
            Ready to work together?
          </h2>
          <p className="body-light mb-10 text-lg">
            Let&apos;s build something that stands out.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <CTAButton variant="accent" href="/contact">Contact Me</CTAButton>
            <CTAButton
              variant="secondary"
              href="https://www.fiverr.com/sanskar6008/buying?source=avatar_menu_profile"
              external
              className="!border-[rgba(108,99,255,0.3)] !text-[#6c63ff]"
            >
              Open Fiverr
            </CTAButton>
          </div>
        </div>
      </motion.section>
    </>
  )
}
