import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ConverterForm from '@/components/ConverterForm'
import AdSlot from '@/components/AdSlot'
import { buildMetadata, webAppSchema } from '@/lib/seo'

type Format = 'mp3' | 'wav' | 'ogg' | 'flac'

const FORMATS: Format[] = ['mp3', 'wav', 'ogg', 'flac']

interface FormatInfo {
  name: string
  fullName: string
  description: string
  longDescription: string
  useCases: string[]
  pros: string[]
  cons: string[]
  fileSize: string
  quality: string
}

const FORMAT_INFO: Record<Format, FormatInfo> = {
  mp3: {
    name: 'MP3',
    fullName: 'MPEG-1 Audio Layer III',
    description:
      'The universal audio standard. MP3 files play on every device and platform, making it the best choice for music and podcasts.',
    longDescription:
      'MP3 (MPEG-1 Audio Layer III) has been the dominant audio format since the late 1990s. It uses lossy compression to reduce file sizes while maintaining good audio quality. At 320kbps, the quality is virtually indistinguishable from lossless audio for most listeners.',
    useCases: [
      'Music libraries and playlists',
      'Podcast episodes',
      'Offline listening on any device',
      'Sharing audio files',
      'Car audio systems',
    ],
    pros: [
      'Universal compatibility — plays everywhere',
      'Small file sizes',
      'Excellent quality at 320kbps',
      'Supported by all music players and apps',
    ],
    cons: [
      'Lossy compression (some audio data discarded)',
      'Not ideal for professional audio production',
    ],
    fileSize: '~1–2.5 MB per minute',
    quality: '128kbps or 320kbps',
  },
  wav: {
    name: 'WAV',
    fullName: 'Waveform Audio File Format',
    description:
      'Uncompressed audio format for professional use. WAV files preserve every detail of the original audio.',
    longDescription:
      'WAV (Waveform Audio File Format) is an uncompressed audio format developed by Microsoft and IBM. Unlike MP3, WAV files contain raw, uncompressed audio data, making them ideal for professional audio work. The trade-off is significantly larger file sizes.',
    useCases: [
      'Professional audio production',
      'Music mastering and mixing',
      'Sound design and sampling',
      'Archiving audio at maximum quality',
      'Audio editing workflows',
    ],
    pros: [
      'Lossless — no audio quality degradation',
      'Industry standard for professional audio',
      'Compatible with all DAWs and audio software',
      'No re-encoding artifacts',
    ],
    cons: [
      'Very large file sizes (~10MB per minute)',
      'Overkill for casual listening',
      'Not ideal for mobile devices with limited storage',
    ],
    fileSize: '~10 MB per minute',
    quality: 'Lossless (limited by YouTube source quality)',
  },
  ogg: {
    name: 'OGG',
    fullName: 'Ogg Vorbis',
    description:
      'Open-source audio format with excellent quality-to-size ratio. Great for Linux users and open-source enthusiasts.',
    longDescription:
      'OGG Vorbis is a free, open-source audio compression format. It offers better audio quality than MP3 at the same bitrate, making it an efficient choice for those who prioritize open standards. While not as universally supported as MP3, it works well on most modern devices.',
    useCases: [
      'Linux and open-source environments',
      'Web audio applications',
      'Game audio assets',
      'Streaming audio',
      'Privacy-conscious users who prefer open formats',
    ],
    pros: [
      'Better quality than MP3 at same bitrate',
      'Free and open-source format',
      'Good compression efficiency',
      'Supported by most modern browsers',
    ],
    cons: [
      'Less universal than MP3',
      'Not supported by some older devices',
      'Limited support on iOS/Apple devices',
    ],
    fileSize: '~0.8–2 MB per minute',
    quality: 'Variable bitrate, typically 128–320kbps equivalent',
  },
  flac: {
    name: 'FLAC',
    fullName: 'Free Lossless Audio Codec',
    description:
      'Lossless audio compression for audiophiles. FLAC preserves 100% of the original audio quality with smaller files than WAV.',
    longDescription:
      'FLAC (Free Lossless Audio Codec) is a lossless audio format that compresses audio without any quality loss. Unlike MP3, no audio data is discarded during compression. FLAC files are typically 50–60% smaller than WAV files while maintaining identical audio quality, making it the preferred format for audiophiles and music archivists.',
    useCases: [
      'Audiophile music collections',
      'Music archiving and preservation',
      'High-fidelity listening on quality equipment',
      'Audio mastering source files',
      'Long-term audio storage',
    ],
    pros: [
      'Lossless — identical to source audio',
      'Smaller than WAV (50–60% compression)',
      'Supports metadata and album art',
      'Free and open-source',
      'Supported by most modern audio players',
    ],
    cons: [
      'Larger than MP3 (3–5x)',
      'Not supported by all devices (limited iOS support)',
      'Overkill for casual listening',
    ],
    fileSize: '~4–6 MB per minute',
    quality: 'Lossless (limited by YouTube source quality)',
  },
}

export function generateStaticParams() {
  return FORMATS.map((format) => ({ format }))
}

export async function generateMetadata({
  params,
}: {
  params: { format: string }
}): Promise<Metadata> {
  const format = params.format as Format
  if (!FORMATS.includes(format)) return {}

  const info = FORMAT_INFO[format]
  return buildMetadata(
    `YouTube to ${info.name} Converter — Free Online ${info.name} Downloader`,
    `Convert YouTube videos to ${info.name} format for free. ${info.description} Fast, high-quality ${info.name} downloads with no registration required.`,
    `/convert/${format}`,
  )
}

export default function FormatPage({ params }: { params: { format: string } }) {
  const format = params.format as Format
  if (!FORMATS.includes(format)) notFound()

  const info = FORMAT_INFO[format]

  const schema = {
    ...webAppSchema({
      name: `YouTube to ${info.name} Converter`,
      description: `Free online YouTube to ${info.name} converter. ${info.description}`,
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-gray-50 pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              YouTube to {info.name} Converter
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{info.description}</p>
          </header>

          <ConverterForm defaultFormat={format} />
        </div>
      </section>

      {/* Ad */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <AdSlot slot="1111111111" format="leaderboard" />
      </div>

      {/* Format info */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What is {info.name}? ({info.fullName})
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">{info.longDescription}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Advantages
                </h3>
                <ul className="space-y-2">
                  {info.pros.map((pro) => (
                    <li key={pro} className="text-sm text-green-800 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Limitations
                </h3>
                <ul className="space-y-2">
                  {info.cons.map((con) => (
                    <li key={con} className="text-sm text-red-800 flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Format Specifications</h3>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Typical File Size</dt>
                  <dd className="text-sm text-gray-900 mt-1">{info.fileSize}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Quality</dt>
                  <dd className="text-sm text-gray-900 mt-1">{info.quality}</dd>
                </div>
              </dl>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Best Use Cases for {info.name}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {info.useCases.map((useCase) => (
                <li key={useCase} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" aria-hidden="true" />
                  {useCase}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}
