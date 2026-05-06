import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import MobileNav from '@/components/MobileNav'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://yourdomain.com'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'YouTube to MP3 Converter — Free, Fast & High Quality',
    template: '%s | YT to MP3',
  },
  description:
    'Convert YouTube videos to MP3 audio files for free. Fast, easy, and high-quality audio downloads in 128kbps or 320kbps. No registration required.',
  keywords: [
    'youtube to mp3',
    'youtube converter',
    'mp3 download',
    'audio converter',
    'youtube audio',
    'free mp3 converter',
    'youtube to mp3 converter',
    'convert youtube',
  ],
  authors: [{ name: 'YT to MP3' }],
  creator: 'YT to MP3',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'YT to MP3',
    title: 'YouTube to MP3 Converter — Free, Fast & High Quality',
    description:
      'Convert YouTube videos to MP3 audio files for free. Fast, easy, and high-quality audio downloads.',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'YouTube to MP3 Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube to MP3 Converter — Free, Fast & High Quality',
    description:
      'Convert YouTube videos to MP3 audio files for free. Fast, easy, and high-quality audio downloads.',
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const navLinks = [
  { href: '/', label: 'Converter' },
  { href: '/blog', label: 'Blog' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        {/* Google AdSense */}
        {ADSENSE_ID && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
        )}
        {/* Adsterra Social Bar / Popunder */}
        <Script
          src="https://pl29361189.profitablecpmratenetwork.com/b2/02/b5/b202b57de32878a97b6fb8e7b5e2dee2.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <nav
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="YT to MP3 home">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-900">YT to MP3</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile nav */}
            <MobileNav links={navLinks} />
          </nav>
        </header>

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-2 md:col-span-1">
                <Link href="/" className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 bg-primary-600 rounded-md flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900">YT to MP3</span>
                </Link>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Free, fast YouTube to MP3 converter. No registration required.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Converter</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/convert/mp3', label: 'YouTube to MP3' },
                    { href: '/convert/wav', label: 'YouTube to WAV' },
                    { href: '/convert/ogg', label: 'YouTube to OGG' },
                    { href: '/convert/flac', label: 'YouTube to FLAC' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Resources</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/blog', label: 'Blog' },
                    { href: '/pricing', label: 'Pricing' },
                    { href: '/about', label: 'About' },
                    { href: '/faq', label: 'FAQ' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Legal</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/privacy', label: 'Privacy Policy' },
                    { href: '/terms', label: 'Terms of Service' },
                    { href: '/dmca', label: 'DMCA Policy' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} YT to MP3. All rights reserved.
              </p>
              <p className="text-xs text-gray-400 text-center sm:text-right">
                For personal use only. Respect copyright laws and YouTube&apos;s Terms of Service.
              </p>
            </div>
          </div>
        </footer>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
