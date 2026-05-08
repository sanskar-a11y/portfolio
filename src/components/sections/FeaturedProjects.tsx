'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="relative px-5 py-20 sm:px-6 md:px-12 md:py-28 xl:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="mx-auto mb-12 flex max-w-[1200px] flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="hero-kicker mb-4">Selected Work</p>
            <h2 className="section-headline max-w-3xl">
              Projects with launch-ready shape and story.
            </h2>
          </div>
          <Link
            href="/projects"
            className="group hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-white md:inline-flex"
          >
            View all
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} featured={i === 1} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#9ffcff]"
          >
            View all projects
            <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
