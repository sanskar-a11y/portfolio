import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { projects } from '@/data/projects'
import SkillPill from '@/components/ui/SkillPill'
import CTAButton from '@/components/ui/CTAButton'

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]

  if (!project) notFound()

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <div className="pt-24">
      <section className="px-5 py-20 sm:px-6 md:px-12 md:py-24 xl:px-24">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: 'rgba(240,240,248,0.65)' }}
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            {project.status === 'Live' && (
              <span
                className="rounded-full px-3 py-1 text-xs font-medium"
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
              <span className="pill-gradient text-xs">In Progress</span>
            )}
            <span className="text-sm" style={{ color: 'rgba(240,240,248,0.65)' }}>
              {project.category}
            </span>
          </div>

          <h1 className="section-headline mb-6">{project.title}</h1>
          <p className="body-dark max-w-2xl text-lg">{project.description}</p>

          <div className="mt-8 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row">
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
      </section>

      <section className="px-5 pb-16 sm:px-6 md:px-12 xl:px-24">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="card-float flex aspect-video items-center justify-center overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #f0edff 0%, #e8f4ff 50%, #ffedf5 100%)',
                border: '1px solid rgba(255,255,255,0.9)',
              }}
            >
              <span className="text-xs font-medium" style={{ color: '#6b6b80' }}>
                Case Study Frame {i}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 md:px-12 md:py-24 xl:px-24">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { title: 'Problem', text: project.problem },
            { title: 'Solution', text: project.solution },
            { title: 'Outcome', text: project.outcome },
          ].map((item) => (
            <div key={item.title} className="card-float p-6">
              <h3 className="label-overline mb-3" style={{ color: '#6c63ff' }}>
                {item.title}
              </h3>
              <p className="body-light leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 md:px-12 md:py-16 xl:px-24">
        <div className="mx-auto max-w-4xl">
          <h3 className="label-overline mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <SkillPill key={tech} label={tech} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 md:px-12 md:py-16 xl:px-24" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="mx-auto flex max-w-4xl flex-col justify-between gap-5 sm:flex-row">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'rgba(240,240,248,0.65)' }}
            >
              <ArrowLeft size={14} />
              {prevProject.title}
            </Link>
          ) : (
            <span />
          )}
          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-sm transition-colors sm:text-right"
              style={{ color: 'rgba(240,240,248,0.65)' }}
            >
              {nextProject.title}
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 md:px-12 md:py-24 xl:px-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-headline mb-6">
            Like what you <span className="text-gradient">see?</span>
          </h2>
          <CTAButton href="/contact">Contact Me</CTAButton>
        </div>
      </section>
    </div>
  )
}
