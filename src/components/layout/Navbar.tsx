'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/creative-lab', label: 'Creative Lab' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b'
          : 'bg-transparent'
      )}
      style={{
        background: scrolled ? 'rgba(8, 8, 16, 0.85)' : 'rgba(8, 8, 16, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottomColor: scrolled ? 'rgba(255,255,255,0.07)' : 'transparent',
        height: '60px',
      }}
    >
      <nav className="flex items-center justify-between h-full max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Logo — geometric SVG mark + wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
        >
          {/* Two overlapping circles in accent purple */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="9" cy="12" r="7" fill="#6c63ff" opacity="0.7" />
            <circle cx="15" cy="12" r="7" fill="#a78bfa" opacity="0.7" />
          </svg>
          <span className="text-base font-medium" style={{ color: '#f0f0f8' }}>
            Sanskar
          </span>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200 relative group"
              style={{ color: 'rgba(240, 240, 248, 0.65)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240, 240, 248, 0.65)')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right CTA — Hire Me white pill */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="text-sm font-medium transition-all duration-300"
            style={{
              background: '#ffffff',
              color: '#0f0f1a',
              borderRadius: '999px',
              padding: '8px 20px',
              fontSize: '14px',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.20)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden z-50"
          style={{ color: '#f0f0f8' }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-0 z-40"
          style={{
            top: '60px',
            background: 'rgba(8, 8, 16, 0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium transition-colors"
                style={{ color: '#f0f0f8' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4"
              style={{
                background: '#ffffff',
                color: '#0f0f1a',
                borderRadius: '999px',
                padding: '12px 32px',
                fontSize: '16px',
                fontWeight: 500,
              }}
            >
              Hire Me
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
