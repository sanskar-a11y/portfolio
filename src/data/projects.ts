export interface Project {
  slug: string
  title: string
  description: string
  stack: string[]
  category: 'Web Development' | 'Video' | 'Thumbnails' | 'Experiments'
  live: string
  github: string
  status: 'Live' | 'In Progress' | 'Concept'
  problem: string
  solution: string
  outcome: string
}

export const projects: Project[] = [
  {
    slug: 'digital-learning-platform',
    title: 'Digital Learning Platform',
    description:
      'A React PWA with Firebase Auth, Firestore, and AI-assisted learning features.',
    stack: ['React.js', 'Vite', 'Bootstrap', 'Firebase'],
    category: 'Web Development',
    live: 'https://serene-daifuku-c1f5bb.netlify.app/',
    github: 'https://github.com/sanskar-a11y',
    status: 'Live',
    problem:
      'Students needed an accessible digital learning tool with AI features.',
    solution:
      'Built a PWA using React + Firebase with service workers and AI-assisted prompts.',
    outcome:
      'Fully deployed and live. Demonstrates full-stack PWA capability.',
  },
  {
    slug: 'hackathon-coer',
    title: 'Hackathon Project — COER University',
    description:
      'National-level hackathon solution built and presented as team leader.',
    stack: ['Rapid Prototyping', 'Team Collaboration'],
    category: 'Web Development',
    live: 'https://serene-daifuku-c1f5bb.netlify.app/',
    github: 'https://github.com/sanskar-a11y',
    status: 'Live',
    problem:
      'Build and present a working technology solution in limited time.',
    solution:
      'Led a team to ideate, build, and present a functional solution at national level.',
    outcome:
      'Successfully presented at COER University national hackathon.',
  },
  {
    slug: 'ai-productivity-app',
    title: 'AI Productivity App',
    description:
      'An AI-powered task management and workflow app — currently in progress.',
    stack: ['AI Tools', 'Prompt Engineering'],
    category: 'Experiments',
    live: '',
    github: 'https://github.com/sanskar-a11y',
    status: 'In Progress',
    problem:
      'Productivity tools lack smart AI-driven workflow automation.',
    solution:
      'Building an app that uses prompt engineering to automate task management.',
    outcome: 'In active development — 2026.',
  },
]
