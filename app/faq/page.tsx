import type { Metadata } from 'next'
import { buildMetadata, faqSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata(
  'FAQ — Frequently Asked Questions',
  'Find answers to common questions about our YouTube to MP3 converter. Learn about supported formats, quality options, legal use, privacy, and how to use our service.',
  '/faq',
)

const faqs = [
  {
    question: 'Is this YouTube to MP3 converter really free?',
    answer:
      'Yes, completely free. No registration, no hidden fees, no download limits on the free tier. You can convert as many YouTube videos as you want within our rate limits (10 conversions per minute).',
  },
  {
    question: 'What audio quality options are available?',
    answer:
      'We offer two quality options: 128kbps (standard quality, ~1MB per minute) and 320kbps (high quality, ~2.5MB per minute). For music, we recommend 320kbps. For speech content like podcasts or lectures, 128kbps is perfectly adequate.',
  },
  {
    question: 'What formats can I download?',
    answer:
      'We support MP3,, WAV, OGG, and FLAC formats. MP3 is the most universally compatible and recommended for most users. WAV and FLAC are lossless formats for audiophiles and professionals.',
  },
  {
    question: 'How long does the conversion take?',
    answer:
      'Most conversions complete in 15–60 seconds depending on video length and current server load. Longer videos (over 30 minutes) may take a few minutes. The progress bar shows real-time conversion status.',
  },
  {
    question: 'Do I need to install any software?',
    answer:
      'No. Our service is entirely web-based. Simply paste the YouTube URL into the converter, choose your settings, and download. No apps, plugins, or browser extensions required.',
  },
  {
    question: 'Can I convert private or age-restricted videos?',
    answer:
      'No. Our service can only convert publicly available YouTube videos. Private videos, age-restricted content, and region-locked videos cannot be converted.',
  },
  {
    question: 'Do you store my converted files?',
    answer:
      'No. We do not store any files. All conversions are processed in real-time, and temporary files are automatically deleted from our servers immediately after you download them. We never keep copies of your audio files.',
  },
  {
    question: 'Is it legal to convert YouTube videos to MP3?',
    answer:
      'The legality depends on the content and your intended use. YouTube\'s Terms of Service prohibit downloading content without permission. However, many creators publish content under Creative Commons licenses that allow downloading. Our service is intended for personal use only with content you have the right to download. Always respect copyright laws.',
  },
  {
    question: 'What is the maximum video length I can convert?',
    answer:
      'There is no strict length limit, but very long videos (over 2 hours) may take longer to process and could potentially time out. For best results, we recommend videos under 1 hour. If you need to convert longer content, consider our Pro plan for priority processing.',
  },
  {
    question: 'Why does the conversion sometimes fail?',
    answer:
      'Conversions can fail for several reasons: the video may be unavailable, private, or region-locked; the video may have DRM protection; or there may be a temporary server issue. Check that the URL is correct and the video is publicly accessible, then try again.',
  },
  {
    question: 'Can I use this on my phone or tablet?',
    answer:
      'Yes. Our converter is fully responsive and works on all modern smartphones and tablets. Open our website in your mobile browser, paste the YouTube URL, and download your MP3 directly to your device.',
  },
  {
    question: 'How is the audio quality affected by conversion?',
    answer:
      'The output quality is limited by the source audio quality on YouTube. YouTube typically streams audio at 128kbps AAC. Selecting 320kbps in our converter will produce a 320kbps MP3 file, but the actual audio quality cannot exceed what YouTube provides. For the best results, look for videos uploaded in high quality (1080p or higher).',
  },
]

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article>
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about our YouTube to MP3 converter.
            </p>
          </header>

          <section aria-label="FAQ list" className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-200 group"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180"
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
          </section>

          <section className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h2>
            <p className="text-gray-600 mb-2">
              If you couldn&apos;t find the answer you were looking for, check our blog for detailed guides.
            </p>
            <a
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              Browse our guides →
            </a>
          </section>
        </article>
      </div>
    </>
  )
}
