'use client'

import { motion } from 'framer-motion'
import SkillPill from '@/components/ui/SkillPill'
import CTAButton from '@/components/ui/CTAButton'
import { Award } from 'lucide-react'

const timeline = [
  { year: '2023', event: 'Started Diploma in CS at Sanskriti University' },
  {
    year: '2025',
    event: 'Built Digital Learning Platform (React PWA + Firebase)',
  },
  {
    year: '2025',
    event: 'Led team at national hackathon, COER University',
  },
  { year: '2026', event: 'Building AI Productivity App' },
  { year: '2026', event: 'Graduating' },
]

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML', 'CSS', 'Vite', 'Bootstrap'],
  },
  {
    category: 'Backend/Tools',
    skills: ['Firebase', 'GitHub', 'Linux Basics'],
  },
  { category: 'Languages', skills: ['Python', 'C'] },
  {
    category: 'Other',
    skills: ['Prompt Engineering', 'PWA Development', 'AI Tools'],
  },
]

const certificates = [
  {
    title: 'AI & Generative AI Internship',
    issuer: 'YBI Foundation',
  },
  {
    title: 'Introduction to Modern AI',
    issuer: 'Cisco',
  },
  {
    title: 'Computer Hardware Basics',
    issuer: 'Cisco',
  },
  {
    title: 'AI Workshop',
    issuer: 'Sanskriti University',
  },
]

const sectionMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
  viewport: { once: true },
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Section 1 — Intro */}
      <motion.section {...sectionMotion} className="px-6 md:px-12 xl:px-24 py-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder — card-float white card */}
          <div className="card-float aspect-square flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div
                className="w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(167,139,250,0.15))',
                }}
              >
                <span className="text-5xl font-bold" style={{ color: '#6c63ff' }}>S</span>
              </div>
              <p className="text-sm" style={{ color: '#6b6b80' }}>Photo placeholder</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="pill-gradient inline-block mb-4">About</span>
            <h1 className="section-headline mb-6 leading-tight">
              The person behind
              <br />
              <span className="text-gradient">the work</span>
            </h1>
            <p className="body-dark text-lg leading-relaxed">
              I&apos;m Sanskar, a final-semester Computer Science student from
              Uttar Pradesh, India. I build web apps, edit videos, and design
              thumbnails — and I care deeply about making things that look and
              feel premium.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 2 — Timeline */}
      <motion.section {...sectionMotion} className="px-6 md:px-12 xl:px-24 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="pill-gradient inline-block mb-4">Journey</span>
            <h2 className="section-headline">Timeline</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[19px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px]"
              style={{
                background: 'linear-gradient(to bottom, #6c63ff, rgba(108,99,255,0.3), transparent)',
              }}
            />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 mb-12 ${
                  i % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse md:text-right'
                }`}
              >
                {/* Dot */}
                <div
                  className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 w-[16px] h-[16px] rounded-full z-10"
                  style={{
                    background: '#6c63ff',
                    border: '4px solid #080810',
                  }}
                />

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <span className="font-mono text-sm font-bold" style={{ color: '#6c63ff' }}>
                    {item.year}
                  </span>
                  <p style={{ color: '#f0f0f8' }} className="mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 3 — Skills */}
      <motion.section {...sectionMotion} className="px-6 md:px-12 xl:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="pill-gradient inline-block mb-4">Expertise</span>
            <h2 className="section-headline">Skills & Tools</h2>
          </div>

          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="label-overline mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillPill key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 4 — Certificates */}
      <motion.section {...sectionMotion} className="px-6 md:px-12 xl:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="pill-gradient inline-block mb-4">Credentials</span>
            <h2 className="section-headline">Certificates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="card-float p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(108,99,255,0.12), rgba(167,139,250,0.12))',
                    }}
                  >
                    <Award className="w-6 h-6" style={{ color: '#6c63ff' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: '#0f0f1a' }}>
                      {cert.title}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: '#6b6b80' }}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 5 — Philosophy Quote */}
      <motion.section {...sectionMotion} className="px-6 md:px-12 xl:px-24 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="relative">
            <div
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl font-serif"
              style={{ color: 'rgba(108,99,255,0.2)' }}
            >
              &ldquo;
            </div>
            <p
              className="text-2xl md:text-3xl xl:text-4xl font-light leading-relaxed italic"
              style={{ color: '#f0f0f8' }}
            >
              I treat every project like a <span className="text-gradient">product launch.</span>{' '}
              Clean structure, premium feel, no shortcuts.
            </p>
            <footer className="mt-8" style={{ color: 'rgba(240,240,248,0.55)' }}>— Sanskar</footer>
          </blockquote>
        </div>
      </motion.section>

      {/* Section 6 — CTA */}
      <motion.section {...sectionMotion} className="px-6 md:px-12 xl:px-24 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-headline mb-6">
            Want to <span className="text-gradient">work together?</span>
          </h2>
          <CTAButton href="/contact">Contact Me</CTAButton>
        </div>
      </motion.section>
    </div>
  )
}
