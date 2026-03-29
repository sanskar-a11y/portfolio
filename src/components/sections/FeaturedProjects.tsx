'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="px-6 md:px-12 xl:px-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Header */}
        <div className="flex items-end justify-between mb-12 max-w-[1200px] mx-auto">
          <div>
            <span className="pill-gradient inline-block mb-4">Selected Work</span>
            <h2 className="section-headline">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm transition-colors group"
            style={{ color: 'rgba(240,240,248,0.55)' }}
          >
            View all
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} featured={i === 1} />
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: '#6c63ff' }}
          >
            View all projects
            <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
