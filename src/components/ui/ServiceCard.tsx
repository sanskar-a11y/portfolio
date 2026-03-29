'use client'

import { motion } from 'framer-motion'
import type { Service } from '@/data/services'
import CTAButton from './CTAButton'

interface ServiceCardProps {
  service: Service
  index?: number
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = service.icon
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="group relative overflow-hidden card-float h-full flex flex-col"
      style={{ padding: '32px' }}
    >
      {/* Decorative large number */}
      <span
        className="absolute top-6 right-6 text-6xl font-bold leading-none select-none pointer-events-none"
        style={{ color: 'rgba(108,99,255,0.08)' }}
      >
        {num}
      </span>

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
        style={{
          background: 'linear-gradient(135deg, rgba(108,99,255,0.12), rgba(167,139,250,0.12))',
        }}
      >
        <Icon className="w-7 h-7" style={{ color: '#6c63ff' }} />
      </div>

      {/* Title */}
      <h3 className="card-title mb-3">{service.title}</h3>

      {/* Description */}
      <p className="body-light text-sm mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Deliverables as pill-gradient tags */}
      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
        {service.deliverables.map((item) => (
          <span key={item} className="pill-gradient text-xs">
            {item}
          </span>
        ))}
      </div>

      {/* CTA */}
      <CTAButton variant="accent" href="/contact" className="w-full">
        Get Started
      </CTAButton>
    </motion.div>
  )
}
