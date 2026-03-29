import { Code, Film, Image } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  deliverables: string[]
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'I build clean, fast, responsive websites and web apps using React and modern tooling.',
    icon: Code,
    deliverables: [
      'Responsive design',
      'React + Firebase stack',
      'PWA capability',
      'Clean component architecture',
      'Deployment included',
    ],
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description:
      'Cinematic, punchy edits for creators and brands. Built to hold attention from the first second.',
    icon: Film,
    deliverables: [
      'Story-driven cuts',
      'Color grading',
      'Motion titles',
      'Sound design',
      'All format exports',
    ],
  },
  {
    id: 'thumbnail-design',
    title: 'Thumbnail Design',
    description:
      'High-click thumbnails designed to stop the scroll and make people curious.',
    icon: Image,
    deliverables: [
      'Custom designed',
      'Platform optimized',
      'Multiple variations',
      'Fast turnaround',
    ],
  },
]
