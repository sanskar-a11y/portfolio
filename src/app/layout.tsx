import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LenisProvider from '@/components/providers/LenisProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sanskar — Creative Developer & Visual Storyteller',
  description:
    'Portfolio of Sanskar — a creative developer, video editor, and designer building premium digital experiences.',
  keywords: [
    'Sanskar',
    'web developer',
    'portfolio',
    'React',
    'Next.js',
    'video editor',
    'thumbnail designer',
  ],
  authors: [{ name: 'Sanskar' }],
  openGraph: {
    title: 'Sanskar — Creative Developer & Visual Storyteller',
    description:
      'Websites, videos, and thumbnails crafted to feel premium.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {/* Ambient Background Blobs */}
        <div className="bg-ambient" aria-hidden="true">
          <div className="bg-blob-3" />
        </div>

        <LenisProvider>
          <Navbar />
          <main className="flex-1 relative z-[1]">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
