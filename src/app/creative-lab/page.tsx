'use client'

import { motion } from 'framer-motion'

const labSections = [
  {
    title: 'Thumbnail Showcase',
    description: 'High-click thumbnails designed to stop the scroll.',
    items: 6,
    aspect: 'aspect-video',
  },
  {
    title: 'Video Editing Showcase',
    description: 'Cinematic edits and motion pieces.',
    items: 4,
    aspect: 'aspect-video',
  },
  {
    title: 'UI Experiments',
    description: 'Interface concepts and design explorations.',
    items: 4,
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Concept Designs',
    description: 'Creative concepts and visual ideas.',
    items: 3,
    aspect: 'aspect-square',
  },
]

const sectionMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
  viewport: { once: true },
}

export default function CreativeLabPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <motion.section {...sectionMotion} className="px-6 md:px-12 xl:px-24 py-24 text-center">
        <span className="pill-gradient inline-block mb-4">Creative Lab</span>
        <h1 className="section-headline mb-6">
          Experiments, concepts,
          <br />
          and <span className="text-gradient">creative energy.</span>
        </h1>
        <p className="body-dark text-lg max-w-2xl mx-auto">
          A playground for ideas that push boundaries. Some polished, some raw
          — all made with intent.
        </p>
      </motion.section>

      {/* Lab Sections */}
      {labSections.map((section, sectionIndex) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: sectionIndex * 0.1,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
          className="px-6 md:px-12 xl:px-24 py-16"
        >
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2" style={{ color: '#f0f0f8' }}>
              {section.title}
            </h2>
            <p className="mb-8 body-dark">{section.description}</p>

            <div
              className={`grid gap-4 ${
                section.items >= 6
                  ? 'grid-cols-2 md:grid-cols-3'
                  : section.items >= 4
                    ? 'grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-3'
              }`}
            >
              {Array.from({ length: section.items }).map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className={`${section.aspect} card-float overflow-hidden group relative cursor-pointer`}
                  style={{
                    background: 'linear-gradient(135deg, #f0edff 0%, #e8f4ff 50%, #ffedf5 100%)',
                  }}
                >
                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(108,99,255,0.12)' }}
                    >
                      <span className="text-lg font-bold" style={{ color: '#6c63ff' }}>
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                    style={{
                      background: 'linear-gradient(to top, rgba(108,99,255,0.15), transparent)',
                    }}
                  >
                    <p className="text-sm font-medium" style={{ color: '#0f0f1a' }}>
                      {section.title} — Item {i + 1}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  )
}
