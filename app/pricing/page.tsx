import type { Metadata } from 'next'
import PricingCard from '@/components/PricingCard'
import { buildMetadata, faqSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata(
  'Pricing — Free, Pro & Unlimited Plans',
  'Choose the right plan for your YouTube to MP3 conversion needs. Free plan available forever. Pro and Unlimited plans for power users with higher limits and extra features.',
  '/pricing',
)

const plans = [
  {
    name: 'Free',
    price: 'Free',
    period: 'forever',
    features: [
      '10 conversions per minute',
      'MP3, WAV, OGG, FLAC formats',
      '128kbps & 320kbps quality',
      'No registration required',
      'Standard processing speed',
    ],
    highlighted: false,
    ctaText: 'Start Converting',
    ctaHref: '/',
  },
  {
    name: 'Pro',
    price: 4.99,
    period: 'month',
    features: [
      '60 conversions per minute',
      'All audio formats',
      'Priority processing queue',
      'No ads',
      'API access (1,000 req/day)',
      'Email support',
    ],
    highlighted: true,
    ctaText: 'Get Pro',
    ctaHref: '/signup',
    badge: 'Most Popular',
  },
  {
    name: 'Unlimited',
    price: 9.99,
    period: 'month',
    features: [
      'Unlimited conversions',
      'All audio formats',
      'Fastest processing',
      'No ads',
      'Full API access (unlimited)',
      'Batch downloads',
      'Priority support',
      'Custom webhook notifications',
    ],
    highlighted: false,
    ctaText: 'Go Unlimited',
    ctaHref: '/signup',
  },
]

const pricingFaqs = [
  {
    question: 'Is the free plan really free forever?',
    answer:
      'Yes. The free plan has no time limit and no credit card required. You can use it indefinitely with the standard rate limits.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer:
      'Absolutely. You can cancel your Pro or Unlimited subscription at any time from your account settings. You\'ll retain access until the end of your billing period.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. All payments are processed securely.',
  },
  {
    question: 'What is the API access for?',
    answer:
      'The API allows developers to integrate our conversion service into their own applications. Pro users get 1,000 API requests per day; Unlimited users get unrestricted access.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Yes, we offer a 7-day money-back guarantee on all paid plans. If you\'re not satisfied, contact us within 7 days of purchase for a full refund.',
  },
]

const featureComparison = [
  { feature: 'Conversions per minute', free: '10', pro: '60', unlimited: 'Unlimited' },
  { feature: 'Audio formats', free: 'All', pro: 'All', unlimited: 'All' },
  { feature: 'Max quality', free: '320kbps', pro: '320kbps', unlimited: '320kbps' },
  { feature: 'Ads', free: 'Yes', pro: 'No', unlimited: 'No' },
  { feature: 'Processing speed', free: 'Standard', pro: 'Priority', unlimited: 'Fastest' },
  { feature: 'API access', free: '—', pro: '1,000/day', unlimited: 'Unlimited' },
  { feature: 'Batch downloads', free: '—', pro: '—', unlimited: '✓' },
  { feature: 'Support', free: 'Community', pro: 'Email', unlimited: 'Priority' },
]

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(pricingFaqs)) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free. Upgrade when you need more. No hidden fees, no surprises.
          </p>
        </header>

        {/* Pricing cards */}
        <section aria-label="Pricing plans" className="grid md:grid-cols-3 gap-8 mb-20 items-start">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </section>

        {/* Feature comparison table */}
        <section aria-labelledby="comparison-heading" className="mb-20">
          <h2 id="comparison-heading" className="text-2xl font-bold text-gray-900 text-center mb-8">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center px-6 py-4 font-semibold text-gray-900">Free</th>
                  <th className="text-center px-6 py-4 font-semibold text-primary-600 bg-primary-50">
                    Pro
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-gray-900">Unlimited</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                  >
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.free}</td>
                    <td className="px-6 py-4 text-center text-gray-600 bg-primary-50/30">{row.pro}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.unlimited}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="pricing-faq-heading" className="max-w-3xl mx-auto">
          <h2 id="pricing-faq-heading" className="text-2xl font-bold text-gray-900 text-center mb-8">
            Pricing FAQ
          </h2>
          <div className="space-y-4">
            {pricingFaqs.map((faq, i) => (
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
        </section>
      </div>
    </>
  )
}
