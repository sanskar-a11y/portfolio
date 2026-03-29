'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'
import ServiceCard from '@/components/ui/ServiceCard'
import CTAButton from '@/components/ui/CTAButton'
import { FileText, Lightbulb, Hammer, Send } from 'lucide-react'

const workflowSteps = [
  { icon: FileText, label: 'Brief', description: 'Share your vision' },
  { icon: Lightbulb, label: 'Plan', description: 'Strategy & scope' },
  { icon: Hammer, label: 'Build', description: 'Execute & iterate' },
  { icon: Send, label: 'Deliver', description: 'Launch & support' },
]

const sectionMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
  viewport: { once: true },
}

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <motion.section {...sectionMotion} className="px-6 md:px-12 xl:px-24 py-24 text-center">
        <span className="pill-gradient inline-block mb-4">What I Offer</span>
        <h1 className="section-headline mb-6">
          Services
        </h1>
        <p className="body-dark text-lg max-w-2xl mx-auto">
          Crafted solutions for brands, creators, and businesses that demand
          premium quality.
        </p>
      </motion.section>

      {/* Service Blocks */}
      <section className="px-6 md:px-12 xl:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <motion.section {...sectionMotion} className="px-6 md:px-12 xl:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="pill-gradient inline-block mb-4">Process</span>
            <h2 className="section-headline">How I Work</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="card-float w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-7 h-7" style={{ color: '#6c63ff' }} />
                  {i < workflowSteps.length - 1 && (
                    <div
                      className="hidden md:block absolute -right-[calc(50%+12px)] top-1/2 -translate-y-1/2 w-[calc(100%-24px)] h-[1px]"
                      style={{ background: 'rgba(108,99,255,0.3)' }}
                    />
                  )}
                </div>
                <p className="font-semibold text-sm" style={{ color: '#f0f0f8' }}>
                  {step.label}
                </p>
                <p className="text-xs mt-1" style={{ color: 'rgba(240,240,248,0.55)' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section {...sectionMotion} className="px-6 md:px-12 xl:px-24 py-32">
        <div className="max-w-4xl mx-auto text-center card-float p-12 md:p-20 relative overflow-hidden">
          <div className="card-gradient-accent" />
          <h2 className="section-headline-light mb-6">
            Start a project →
          </h2>
          <p className="body-light mb-10 text-lg">
            Let&apos;s bring your vision to life with precision and care.
          </p>
          <CTAButton variant="accent" href="/contact">Get in Touch</CTAButton>
        </div>
      </motion.section>
    </div>
  )
}
