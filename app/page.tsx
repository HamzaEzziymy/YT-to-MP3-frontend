import type { Metadata } from 'next'
import Link from 'next/link'
import ConverterForm from '@/components/ConverterForm'
import AdSlot from '@/components/AdSlot'
import AdsterraAd from '@/components/AdsterraAd'
import { buildMetadata, webAppSchema, faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  ...buildMetadata(
    'YouTube to MP3 Converter — Free, Fast & High Quality',
    'Convert YouTube videos to MP3 audio files instantly. Choose 128kbps or 320kbps quality. Free, no registration, no limits. The fastest YouTube to MP3 converter online.',
    '/',
  ),
  keywords: [
    'youtube to mp3',
    'youtube to mp3 converter',
    'convert youtube to mp3',
    'youtube mp3 downloader',
    'free youtube converter',
    'youtube audio download',
    'mp3 converter online',
  ],
}

const homeFaqs = [
  {
    question: 'Is this YouTube to MP3 converter free?',
    answer:
      'Yes, completely free. No registration, no hidden fees, no download limits. Convert as many YouTube videos to MP3 as you want.',
  },
  {
    question: 'How long does conversion take?',
    answer:
      'Most conversions complete in 15–60 seconds depending on video length and server load. Longer videos may take a few minutes.',
  },
  {
    question: 'What audio quality options are available?',
    answer:
      'We offer 128kbps (standard quality, ~1MB/min) and 320kbps (high quality, ~2.5MB/min). For music, we recommend 320kbps.',
  },
  {
    question: 'Do I need to install any software?',
    answer:
      'No. Our converter is entirely web-based. Just paste a YouTube URL and download your MP3 — no apps or plugins needed.',
  },
  {
    question: 'Is it safe to use this converter?',
    answer:
      'Yes. We do not store your converted files. All temporary files are automatically deleted from our servers after download. We never collect personal information.',
  },
]

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Optimized conversion engine processes most videos in under 60 seconds.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'High Quality Audio',
    description: 'Choose 128kbps or 320kbps for the perfect balance of quality and file size.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: '100% Free',
    description: 'No registration, no fees, no limits. Convert as many videos as you want.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Safe & Private',
    description: 'Files are deleted immediately after download. We never store your data.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Works on Any Device',
    description: 'Fully responsive — use it on your phone, tablet, or desktop browser.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    title: 'Multiple Formats',
    description: 'Download as MP3, WAV, OGG, or FLAC — whatever you need.',
  },
]

const steps = [
  {
    number: '1',
    title: 'Copy the YouTube URL',
    description: 'Find your video on YouTube and copy the URL from your browser\'s address bar.',
  },
  {
    number: '2',
    title: 'Paste & Get Info',
    description: 'Paste the URL into the converter above and click "Get Video Info" to load the video details.',
  },
  {
    number: '3',
    title: 'Choose Quality',
    description: 'Select your preferred format (MP3, WAV, etc.) and audio quality (128kbps or 320kbps).',
  },
  {
    number: '4',
    title: 'Convert & Download',
    description: 'Click "Convert" and wait a moment. Then click the download button to save your file.',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqs)) }}
      />

      {/* Hero + Converter */}
      <section className="bg-gradient-to-b from-white to-gray-50 pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 text-balance">
              YouTube to MP3 Converter —{' '}
              <span className="text-gradient">Free, Fast &amp; High Quality</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Convert any YouTube video to MP3 in seconds. No registration, no software, no limits!.
            </p>
          </header>

          <ConverterForm />

          {/* Adsterra Native Banner - Below Converter */}
          <div className="mt-8">
            <AdsterraAd adKey="f4534a9871703f6308d826cd5104e300" />
          </div>
        </div>
      </section>

      {/* Ad slot */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <AdSlot slot="1234567890" format="leaderboard" />
      </div>

      {/* Features */}
      <section className="section bg-white" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="features-heading" className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Converter?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-gray-50" aria-labelledby="how-it-works-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="how-it-works-heading" className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Convert YouTube to MP3
          </h2>
          <ol className="space-y-6" aria-label="Conversion steps">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-5 items-start">
                <div
                  className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg"
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ad slot */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <AdSlot slot="0987654321" format="rectangle" />
      </div>

      {/* Format links */}
      <section className="section bg-white" aria-labelledby="formats-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="formats-heading" className="text-2xl font-bold text-center text-gray-900 mb-8">
            Convert YouTube to Any Format
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { format: 'mp3', label: 'YouTube to MP3' },
              { format: 'wav', label: 'YouTube to WAV' },
              { format: 'ogg', label: 'YouTube to OGG' },
              { format: 'flac', label: 'YouTube to FLAC' },
            ].map(({ format, label }) => (
              <Link
                key={format}
                href={`/convert/${format}`}
                className="px-5 py-2.5 bg-gray-100 hover:bg-primary-50 hover:text-primary-700 text-gray-700 rounded-full text-sm font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-3xl font-bold text-center text-gray-900 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {homeFaqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-10 bg-white border-t border-gray-100" aria-label="Trust indicators">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: '10M+', label: 'Conversions' },
              { value: '4.8★', label: 'User Rating' },
              { value: '100%', label: 'Free Forever' },
              { value: '0s', label: 'Registration' },
            ].map((badge) => (
              <div key={badge.label}>
                <div className="text-2xl font-extrabold text-primary-600">{badge.value}</div>
                <div className="text-sm text-gray-500 mt-1">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
