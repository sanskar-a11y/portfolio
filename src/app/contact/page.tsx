'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Mail, ExternalLink, Send, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const contactCards = [
  {
    iconType: 'mail' as const,
    label: 'Email',
    value: 'sanskarsharma923@gmail.com',
    href: 'mailto:sanskarsharma923@gmail.com',
  },
  {
    iconType: 'github' as const,
    label: 'GitHub',
    value: 'github.com/sanskar-a11y',
    href: 'https://github.com/sanskar-a11y',
  },
  {
    iconType: 'fiverr' as const,
    label: 'Fiverr',
    value: 'sanskar6008',
    href: 'https://www.fiverr.com/sanskar6008/buying?source=avatar_menu_profile',
  },
  {
    iconType: 'linkedin' as const,
    label: 'LinkedIn',
    value: 'sanskar-sharma',
    href: 'https://www.linkedin.com/in/sanskar-sharma-b5830433a/',
  },
]

function ContactIcon({ type }: { type: string }) {
  switch (type) {
    case 'mail':
      return <Mail className="w-5 h-5" style={{ color: '#6c63ff' }} />
    case 'github':
      return <GithubIcon size={20} className="text-accent" />
    case 'fiverr':
      return <ExternalLink className="w-5 h-5" style={{ color: '#6c63ff' }} />
    case 'linkedin':
      return <LinkedinIcon size={20} className="text-accent" />
    default:
      return <ExternalLink className="w-5 h-5" style={{ color: '#6c63ff' }} />
  }
}

const sectionMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
  viewport: { once: true },
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        reset()
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch {
      // Handle error silently
    }
  }

  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.10)',
    color: '#f0f0f8',
    fontSize: '15px',
    outline: 'none',
    transition: 'all 0.2s ease',
  }

  return (
    <div className="pt-24">
      {/* Header */}
      <motion.section {...sectionMotion} className="px-6 md:px-12 xl:px-24 py-24 text-center">
        <span className="pill-gradient inline-block mb-4">Contact</span>
        <h1 className="section-headline mb-6">
          Let&apos;s build <span className="text-gradient">something.</span>
        </h1>
        <p className="body-dark text-lg max-w-2xl mx-auto">
          Open for freelance projects, collaborations, and opportunities.
        </p>
      </motion.section>

      {/* Content */}
      <section className="px-6 md:px-12 xl:px-24 pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="card-float p-12 text-center">
                <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#0f0f1a' }}>Message Sent!</h3>
                <p style={{ color: '#6b6b80' }}>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#f0f0f8' }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    {...register('name', { required: 'Name is required' })}
                    style={inputStyles}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(108,99,255,0.5)'
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(108,99,255,0.15)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#f0f0f8' }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email',
                      },
                    })}
                    style={inputStyles}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(108,99,255,0.5)'
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(108,99,255,0.15)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#f0f0f8' }}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="What's this about?"
                    {...register('subject', {
                      required: 'Subject is required',
                    })}
                    style={inputStyles}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(108,99,255,0.5)'
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(108,99,255,0.15)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#f0f0f8' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    {...register('message', {
                      required: 'Message is required',
                    })}
                    style={{
                      ...inputStyles,
                      resize: 'none' as const,
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(108,99,255,0.5)'
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(108,99,255,0.15)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-accent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#f0f0f8' }}>
              Or reach out directly
            </h3>

            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 card-float transition-all duration-300 group"
                style={{ borderRadius: '20px' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                  style={{
                    background: 'linear-gradient(135deg, rgba(108,99,255,0.12), rgba(167,139,250,0.12))',
                  }}
                >
                  <ContactIcon type={card.iconType} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#0f0f1a' }}>
                    {card.label}
                  </p>
                  <p className="text-xs" style={{ color: '#6b6b80' }}>
                    {card.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Bottom line */}
            <div className="pt-8">
              <p className="italic text-sm" style={{ color: 'rgba(240,240,248,0.55)' }}>
                &ldquo;Every great project starts with a conversation.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
