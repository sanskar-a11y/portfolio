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
      whileHover={{ y: -8, rotate: index === 1 ? -0.5 : 0.5 }}
      className="cosmic-card group relative flex h-full flex-col overflow-hidden p-6 sm:p-8"
    >
      <span
        className="absolute right-5 top-5 select-none font-mono text-7xl font-bold leading-none"
        style={{ color: 'rgba(159,252,255,0.08)' }}
      >
        {num}
      </span>

      <div
        className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]"
      >
        <Icon className="h-7 w-7" style={{ color: '#9ffcff' }} />
      </div>

      <h3 className="mb-4 text-2xl font-semibold text-white">{service.title}</h3>

      <p className="body-dark mb-7 text-sm leading-relaxed">
        {service.description}
      </p>

      <div className="mb-8 mt-auto flex flex-wrap gap-2">
        {service.deliverables.map((item) => (
          <span key={item} className="cosmic-chip text-xs">
            {item}
          </span>
        ))}
      </div>

      <CTAButton variant="accent" href="/contact" className="w-full">
        Get Started
      </CTAButton>
    </motion.div>
  )
}
