import Link from 'next/link'

interface PricingCardProps {
  name: string
  price: number | string
  period: string
  features: string[]
  highlighted?: boolean
  ctaText: string
  ctaHref: string
  badge?: string
}

export default function PricingCard({
  name,
  price,
  period,
  features,
  highlighted = false,
  ctaText,
  ctaHref,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 ${
        highlighted
          ? 'border-primary-500 bg-primary-600 text-white shadow-xl scale-105'
          : 'border-gray-200 bg-white text-gray-900 shadow-card'
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={`text-xl font-bold mb-2 ${
            highlighted ? 'text-white' : 'text-gray-900'
          }`}
        >
          {name}
        </h3>
        <div className="flex items-baseline gap-1">
          {typeof price === 'number' ? (
            <>
              <span
                className={`text-4xl font-extrabold ${
                  highlighted ? 'text-white' : 'text-gray-900'
                }`}
              >
                ${price.toFixed(2)}
              </span>
              <span
                className={`text-sm ${
                  highlighted ? 'text-primary-100' : 'text-gray-500'
                }`}
              >
                /{period}
              </span>
            </>
          ) : (
            <span
              className={`text-4xl font-extrabold ${
                highlighted ? 'text-white' : 'text-gray-900'
              }`}
            >
              {price}
            </span>
          )}
        </div>
      </div>

      <ul className="flex-1 space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                highlighted ? 'text-primary-200' : 'text-primary-600'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span
              className={`text-sm ${
                highlighted ? 'text-primary-100' : 'text-gray-600'
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={`block text-center py-3 px-6 rounded-xl font-semibold transition-colors duration-200 ${
          highlighted
            ? 'bg-white text-primary-600 hover:bg-primary-50'
            : 'bg-primary-600 text-white hover:bg-primary-700'
        }`}
      >
        {ctaText}
      </Link>
    </div>
  )
}
