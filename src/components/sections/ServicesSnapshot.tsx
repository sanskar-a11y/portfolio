'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'
import ServiceCard from '@/components/ui/ServiceCard'

export default function ServicesSnapshot() {
  return (
    <section className="relative px-5 py-20 sm:px-6 md:px-12 md:py-28 xl:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="mx-auto mb-12 grid max-w-[1200px] gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="hero-kicker">Service Modules</p>
          <h2 className="section-headline max-w-4xl md:justify-self-end md:text-right">
            Three ways to give your project a stronger signal.
          </h2>
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
