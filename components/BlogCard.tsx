import Link from 'next/link'

interface BlogCardProps {
  title: string
  slug: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  date,
  readTime,
  category,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-200">
      <Link href={`/blog/${slug}`} className="block p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge badge-red">{category}</span>
          <span className="text-xs text-gray-400">{readTime}</span>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
          {title}
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <time
            dateTime={date}
            className="text-xs text-gray-400"
          >
            {formattedDate}
          </time>
          <span className="text-primary-600 text-sm font-medium group-hover:underline">
            Read more →
          </span>
        </div>
      </Link>
    </article>
  )
}
