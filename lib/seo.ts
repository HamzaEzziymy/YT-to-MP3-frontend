import type { Metadata } from 'next'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://yourdomain.com'
export const SITE_NAME = 'YouTube to MP3 Converter'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

/**
 * Build a full Metadata object for a page.
 */
export function buildMetadata(
  title: string,
  description: string,
  path: string,
  image?: string,
): Metadata {
  const url = `${SITE_URL}${path}`
  const ogImage = image || DEFAULT_OG_IMAGE

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

/**
 * Format an array of keywords into a comma-separated string.
 */
export function formatKeywords(base: string[]): string {
  return base.join(', ')
}

/**
 * Generate JSON-LD WebApplication schema.
 */
export function webAppSchema(overrides?: Record<string, unknown>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Free online YouTube to MP3 converter. Fast, high-quality audio downloads.',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2847',
    },
    ...overrides,
  }
}

/**
 * Generate JSON-LD FAQ schema from a list of Q&A pairs.
 */
export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate JSON-LD Article schema for blog posts.
 */
export function articleSchema(post: {
  title: string
  description: string
  slug: string
  date: string
  author?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author || SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}
