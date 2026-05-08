'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certificates = [
  { name: 'AI & Generative AI Internship', issuer: 'YBI Foundation' },
  { name: 'Introduction to Modern AI', issuer: 'Cisco' },
  { name: 'Computer Hardware Basics', issuer: 'Cisco' },
  { name: 'AI Workshop', issuer: 'Sanskriti University' },
]

export default function TrustStrip() {
  return (
    <section className="overflow-hidden py-14 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <p className="hero-kicker mb-8 text-center">
          Certifications & Recognition
        </p>

        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="cosmic-strip flex items-center justify-center overflow-hidden px-4 py-4 sm:px-6">
            <div
              className="flex gap-0"
              style={{
                animation: 'scroll-strip 26s linear infinite',
                width: 'max-content',
              }}
            >
              {[...certificates, ...certificates].map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 whitespace-nowrap px-4 sm:px-6"
                  style={{
                    borderRight: i < certificates.length * 2 - 1
                      ? '1px solid rgba(255,255,255,0.12)'
                      : 'none',
                  }}
                >
                  <Award size={16} style={{ color: '#ffd166', flexShrink: 0 }} />
                  <span className="text-sm font-semibold text-white">
                    {cert.name}
                  </span>
                  <span className="text-xs text-white/45">
                    {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
