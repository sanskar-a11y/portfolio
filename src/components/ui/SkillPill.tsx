import { cn } from '@/lib/utils/cn'

interface SkillPillProps {
  label: string
  size?: 'sm' | 'md'
  className?: string
}

export default function SkillPill({
  label,
  size = 'md',
  className,
}: SkillPillProps) {
  return (
    <span
      className={cn(
        'pill-gradient inline-flex items-center',
        size === 'sm' && 'text-xs px-2.5 py-0.5',
        size === 'md' && 'text-sm px-3.5 py-1',
        className
      )}
    >
      {label}
    </span>
  )
}
