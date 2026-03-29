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
      className={`group relative overflow-hidden card-float ${
        featured ? 'border-[1.5px]' : ''
      }`}
      style={featured ? { borderColor: 'rgba(108,99,255,0.4)' } : {}}
    >
      {/* Decorative gradient accent for featured card */}
      {featured && <div className="card-gradient-accent" />}

      {/* Image placeholder with soft gradient */}
      <div
        className="relative h-48 overflow-hidden"
        style={{
          borderRadius: '24px 24px 0 0',
          background: 'linear-gradient(135deg, #f0edff 0%, #e8f4ff 50%, #ffedf5 100%)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(108,99,255,0.12)' }}
          >
            <span className="text-2xl font-bold" style={{ color: '#6c63ff' }}>
              {project.title[0]}
            </span>
          </div>
        </div>
        {project.status === 'In Progress' && (
          <span className="absolute top-3 right-3 pill-gradient text-xs">
            {project.status}
          </span>
        )}
        {project.status === 'Live' && (
          <span
            className="absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full"
            style={{
              background: 'rgba(34, 197, 94, 0.12)',
              color: '#22c55e',
              border: '1px solid rgba(34, 197, 94, 0.3)',
            }}
          >
            {project.status}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="card-title mb-2 group-hover:text-accent transition-colors"
        >
          {project.title}
        </h3>
        <p className="body-light text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <SkillPill key={tech} label={tech} size="sm" />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors group/link"
            style={{ color: '#6c63ff' }}
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
              className="text-sm transition-colors"
              style={{ color: '#a78bfa' }}
            >
              Live →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
