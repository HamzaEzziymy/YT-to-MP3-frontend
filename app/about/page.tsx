import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata(
  'About Us — YouTube to MP3 Converter',
  'Learn about our free YouTube to MP3 converter service. We provide fast, high-quality audio conversion powered by yt-dlp and FFmpeg. No registration required.',
  '/about',
)

const stats = [
  { value: '10M+', label: 'Conversions completed' },
  { value: '4.8/5', label: 'Average user rating' },
  { value: '99.9%', label: 'Uptime' },
  { value: '0', label: 'Files stored' },
]

const values = [
  {
    title: 'Privacy First',
    description:
      'We never store your converted files. All temporary files are automatically deleted from our servers immediately after download. We collect no personal information.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Always Free',
    description:
      'Our core converter is and will always be free. We believe everyone should have access to tools that help them enjoy their favorite content offline.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Quality Matters',
    description:
      'We use industry-standard tools — yt-dlp and FFmpeg — to ensure the highest possible audio quality from every conversion. Up to 320kbps MP3 quality.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    title: 'Transparency',
    description:
      'We\'re upfront about what our service does, how it works, and its limitations. No misleading claims, no dark patterns, no surprise charges.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article>
        {/* Hero */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            About YT to MP3
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We built the simplest, fastest, and most reliable YouTube to MP3 converter on the web.
            No fluff, no bloat — just paste a URL and get your audio file.
          </p>
        </header>

        {/* Stats */}
        <section aria-label="Service statistics" className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-3xl font-extrabold text-primary-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Our story */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              YT to MP3 started as a simple tool built out of frustration with existing converters —
              slow, ad-heavy, and often unreliable. We wanted something that just worked: paste a URL,
              get an MP3, done.
            </p>
            <p>
              We built our converter on top of{' '}
              <strong>yt-dlp</strong>, the most actively maintained YouTube download library, and{' '}
              <strong>FFmpeg</strong>, the industry-standard audio/video processing tool. This combination
              gives us the best compatibility and highest quality output available.
            </p>
            <p>
              Today, millions of users rely on our service every month to download music, podcasts,
              lectures, and other audio content for offline listening. We&apos;re proud to offer this
              service completely free, supported by non-intrusive advertising.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16" aria-labelledby="values-heading">
          <h2 id="values-heading" className="text-2xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4 bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Technology</h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  name: 'yt-dlp',
                  description: 'The most powerful and actively maintained YouTube download library. Supports thousands of sites.',
                },
                {
                  name: 'FFmpeg',
                  description: 'Industry-standard audio/video processing. Used by YouTube, Netflix, and countless other platforms.',
                },
                {
                  name: 'FastAPI + Celery',
                  description: 'High-performance Python backend with async task processing for fast, reliable conversions.',
                },
              ].map((tech) => (
                <div key={tech.name}>
                  <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal notice */}
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-amber-900 mb-3">Legal Notice</h2>
          <p className="text-sm text-amber-800 leading-relaxed mb-3">
            This service is intended for personal use only. Users are responsible for ensuring they
            have the right to download and convert content. Please respect copyright laws and
            YouTube&apos;s Terms of Service.
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            We do not host, store, or distribute copyrighted content. Our service facilitates the
            conversion of publicly available YouTube videos to audio format.{' '}
            <Link href="/dmca" className="underline hover:text-amber-900">
              View our DMCA policy
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  )
}
