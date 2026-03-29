'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon, FiverrIcon } from './BrandIcons'

interface SocialCardProps {
  platform: string
  handle: string
  href: string
  iconType?: 'github' | 'fiverr' | 'other'
}

export default function SocialCard({
  platform,
  handle,
  href,
  iconType = 'other',
}: SocialCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
      className="group flex items-center gap-4 p-5 min-w-[240px] card-float"
      style={{ borderRadius: '20px' }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
        style={{
          background: 'linear-gradient(135deg, rgba(108,99,255,0.12), rgba(167,139,250,0.12))',
        }}
      >
        {iconType === 'github' ? (
          <GithubIcon size={24} className="text-accent" />
        ) : iconType === 'fiverr' ? (
          <FiverrIcon size={24} className="text-accent" />
        ) : (
          <ExternalLink className="w-6 h-6 text-accent" />
        )}
      </div>
      <div>
        <p className="text-sm font-semibold" style={{ color: '#0f0f1a' }}>{platform}</p>
        <p className="text-xs" style={{ color: '#6b6b80' }}>{handle}</p>
      </div>
    </motion.a>
  )
}
