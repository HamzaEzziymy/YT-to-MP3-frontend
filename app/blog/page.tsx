import type { Metadata } from 'next'
import { blogPosts } from '@/lib/blog-posts'
import BlogCard from '@/components/BlogCard'
import AdSlot from '@/components/AdSlot'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata(
  'Blog — YouTube to MP3 Tips, Guides & News',
  'Read our latest guides and tips on YouTube to MP3 conversion, audio quality, formats, and more. Expert advice for getting the best audio downloads.',
  '/blog',
)

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Ad at top */}
      <AdSlot slot="2222222222" format="leaderboard" className="mb-10" />

      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Blog</h1>
        <p className="text-lg text-gray-600">
          Guides, tips, and insights on YouTube audio conversion and digital audio.
        </p>
      </header>

      <main>
        <div className="grid sm:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              slug={post.slug}
              excerpt={post.description}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
