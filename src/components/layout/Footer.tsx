import Link from 'next/link'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, FiverrIcon } from '@/components/ui/BrandIcons'

const socialLinks = [
  {
    href: 'https://github.com/sanskar-a11y',
    label: 'GitHub',
    type: 'github' as const,
  },
  {
    href: 'mailto:sanskarsharma923@gmail.com',
    label: 'Email',
    type: 'mail' as const,
  },
  {
    href: 'https://www.fiverr.com/sanskar6008/buying?source=avatar_menu_profile',
    label: 'Fiverr',
    type: 'fiverr' as const,
  },
  {
    href: 'https://www.linkedin.com/in/sanskar-sharma-b5830433a/',
    label: 'LinkedIn',
    type: 'linkedin' as const,
  },
]

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/creative-lab', label: 'Creative Lab' },
  { href: '/contact', label: 'Contact' },
]

function SocialIcon({ type }: { type: string }) {
  switch (type) {
    case 'github':
      return <GithubIcon size={18} />
    case 'mail':
      return <Mail size={18} />
    case 'fiverr':
      return <FiverrIcon size={18} />
    case 'linkedin':
      return <LinkedinIcon size={18} />
    default:
      return null
  }
}

export default function Footer() {
  return (
    <footer
      className="relative z-[1]"
      style={{
        background: 'linear-gradient(180deg, rgba(3,4,10,0.35), #02030a)',
        borderTop: '1px solid rgba(159,252,255,0.12)',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 md:px-8 md:py-16">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <Link href="/" className="flex items-center gap-2.5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="9" cy="12" r="7" fill="#9ffcff" opacity="0.72" />
              <circle cx="15" cy="12" r="7" fill="#ff7ab6" opacity="0.64" />
            </svg>
            <span className="text-base font-semibold uppercase tracking-[0.16em]" style={{ color: '#f0f0f8' }}>
              Sanskar
            </span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:text-[#9ffcff]"
                style={{ color: 'rgba(240, 240, 248, 0.55)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:text-[#9ffcff]"
                style={{ color: 'rgba(240, 240, 248, 0.65)' }}
                aria-label={link.label}
              >
                <SocialIcon type={link.type} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-12 pt-8 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-sm" style={{ color: 'rgba(240, 240, 248, 0.40)' }}>
            © 2026 Sanskar. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
