'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { projects } from '@/data/projects'
import SkillPill from '@/components/ui/SkillPill'
import CTAButton from '@/components/ui/CTAButton'

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]

  if (!project) notFound()

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return <ProjectDetailClient project={project} prevProject={prevProject} nextProject={nextProject} />
}

function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: {
  project: (typeof projects)[number]
  prevProject: (typeof projects)[number] | null
  nextProject: (typeof projects)[number] | null
}) {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 md:px-12 xl:px-24 py-24"
      >
        <div className="max-w-4xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm transition-colors mb-8"
            style={{ color: 'rgba(240,240,248,0.55)' }}
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>

          <div className="flex items-center gap-3 mb-4">
            {project.status === 'Live' && (
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'rgba(34,197,94,0.12)',
                  color: '#22c55e',
                  border: '1px solid rgba(34,197,94,0.3)',
                }}
              >
                Live
              </span>
            )}
            {project.status === 'In Progress' && (
              <span className="pill-gradient text-xs">
                In Progress
              </span>
            )}
            <span className="text-sm" style={{ color: 'rgba(240,240,248,0.55)' }}>
              {project.category}
            </span>
          </div>

          <h1 className="section-headline mb-6">
            {project.title}
          </h1>
          <p className="body-dark text-lg max-w-2xl">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex gap-4 mt-8">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-sm"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                <GithubIcon size={14} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </motion.section>

      {/* Visual Gallery Placeholder */}
      <section className="px-6 md:px-12 xl:px-24 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="card-float aspect-video flex items-center justify-center overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #f0edff 0%, #e8f4ff 50%, #ffedf5 100%)',
                border: '1px solid rgba(255,255,255,0.9)',
              }}
            >
              <span className="text-xs" style={{ color: '#6b6b80' }}>Screenshot {i}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Problem / Solution / Outcome */}
      <section className="px-6 md:px-12 xl:px-24 py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Problem', text: project.problem },
            { title: 'Solution', text: project.solution },
            { title: 'Outcome', text: project.outcome },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-float p-6"
            >
              <h3 className="label-overline mb-3" style={{ color: '#6c63ff' }}>
                {item.title}
              </h3>
              <p className="body-light leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="px-6 md:px-12 xl:px-24 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="label-overline mb-4">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <SkillPill key={tech} label={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 md:px-12 xl:px-24 py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-4xl mx-auto flex justify-between">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'rgba(240,240,248,0.55)' }}
            >
              <ArrowLeft size={14} />
              {prevProject.title}
            </Link>
          ) : (
            <div />
          )}
          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'rgba(240,240,248,0.55)' }}
            >
              {nextProject.title}
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 xl:px-24 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-headline mb-6">
            Like what you <span className="text-gradient">see?</span>
          </h2>
          <CTAButton href="/contact">Contact Me</CTAButton>
        </div>
      </section>
    </div>
  )
}
