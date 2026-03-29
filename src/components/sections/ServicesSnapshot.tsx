'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'
import ServiceCard from '@/components/ui/ServiceCard'

export default function ServicesSnapshot() {
  return (
    <section className="px-6 md:px-12 xl:px-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Header */}
        <div className="text-center mb-12 max-w-[1200px] mx-auto">
          <span className="pill-gradient inline-block mb-4">What I Do</span>
          <h2 className="section-headline">
            Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
