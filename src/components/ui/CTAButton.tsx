'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

const MotionLink = motion(Link)

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'accent'
  href?: string
  external?: boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function CTAButton({
  variant = 'primary',
  href,
  external = false,
  children,
  className,
  onClick,
}: CTAButtonProps) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
  }

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  }

  if (href && external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(variants[variant], className)}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  if (href) {
    return (
      <MotionLink
        href={href}
        className={cn(variants[variant], className)}
        {...motionProps}
      >
        {children}
      </MotionLink>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={cn(variants[variant], className)}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
