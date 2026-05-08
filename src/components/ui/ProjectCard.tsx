'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import SkillPill from './SkillPill'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`cosmic-card group relative flex h-full flex-col overflow-hidden ${
        featured ? 'md:-translate-y-5' : ''
      }`}
    >
      <div className="project-visual relative h-56 overflow-hidden">
        <div className="project-planet" />
        <div className="project-orbit" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="project-monogram">
            <span>
              {project.title[0]}
            </span>
          </div>
        </div>
        {project.status === 'In Progress' && (
          <span className="cosmic-chip absolute right-3 top-3 text-xs">
            {project.status}
          </span>
        )}
        {project.status === 'Live' && (
          <span className="cosmic-chip absolute right-3 top-3 text-xs">
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-2xl font-semibold text-white transition-colors group-hover:text-[#9ffcff]">
          {project.title}
        </h3>
        <p className="body-dark mb-5 text-sm">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <SkillPill key={tech} label={tech} size="sm" />
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#9ffcff] transition-colors"
          >
            View Project
            <ArrowRight
              size={14}
              className="transition-transform group-hover/link:translate-x-1"
            />
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-[0.12em] text-white/45 transition-colors hover:text-white"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
