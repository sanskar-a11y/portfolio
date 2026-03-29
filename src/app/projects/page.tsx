'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'

const categories = ['All', 'Web Development', 'Video', 'Thumbnails', 'Experiments']

const sectionMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
  viewport: { once: true },
}

export default function ProjectsPage() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <div className="pt-24">
      {/* Header */}
      <motion.section {...sectionMotion} className="px-6 md:px-12 xl:px-24 py-24 text-center">
        <span className="pill-gradient inline-block mb-4">Portfolio</span>
        <h1 className="section-headline mb-6">
          Work that <span className="text-gradient">speaks.</span>
        </h1>
        <p className="body-dark text-lg max-w-2xl mx-auto">
          A collection of projects, experiments, and creative work.
        </p>
      </motion.section>

      {/* Filter Tabs */}
      <section className="px-6 md:px-12 xl:px-24 pb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={
                active === cat
                  ? {
                      background: 'linear-gradient(135deg, #6c63ff, #a78bfa)',
                      color: '#ffffff',
                      boxShadow: '0 4px 20px rgba(108,99,255,0.35)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.06)',
                      color: 'rgba(240,240,248,0.55)',
                      border: '1px solid rgba(255,255,255,0.10)',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 xl:px-24 pb-24">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1200px] mx-auto"
        >
          {filtered.length > 0 ? (
            filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} featured={i === 1} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-lg" style={{ color: 'rgba(240,240,248,0.55)' }}>
                No projects in this category yet.
              </p>
              <p className="text-sm mt-2" style={{ color: 'rgba(240,240,248,0.35)' }}>
                Check back soon — more work is coming.
              </p>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  )
}
