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
    <section className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <p className="label-overline text-center mb-8 tracking-wider">
          Certifications & Recognition
        </p>

        {/* Floating white strip */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="card-float px-6 py-4 flex items-center justify-center overflow-hidden">
            <div
              className="flex gap-0"
              style={{
                animation: 'scroll-strip 30s linear infinite',
                width: 'max-content',
              }}
            >
              {[...certificates, ...certificates].map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 whitespace-nowrap px-6"
                  style={{
                    borderRight: i < certificates.length * 2 - 1
                      ? '1px solid rgba(0,0,0,0.08)'
                      : 'none',
                  }}
                >
                  <Award size={16} style={{ color: '#6c63ff', flexShrink: 0 }} />
                  <span className="text-sm font-medium" style={{ color: '#0f0f1a' }}>
                    {cert.name}
                  </span>
                  <span className="text-xs" style={{ color: '#6b6b80' }}>
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
