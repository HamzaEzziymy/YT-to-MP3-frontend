import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, getBlogPost, getRelatedPosts } from '@/lib/blog-posts'
import BlogCard from '@/components/BlogCard'
import AdSlot from '@/components/AdSlot'
import { buildMetadata, articleSchema } from '@/lib/seo'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}

  return buildMetadata(post.title, post.description, `/blog/${post.slug}`)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.slug, 3)

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: post.title,
              description: post.description,
              slug: post.slug,
              date: post.date,
            }),
          ),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Ad at top */}
        <AdSlot slot="3333333333" format="leaderboard" className="mb-10" />

        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          {/* Main article */}
          <main>
            <article>
              <header className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Link
                    href="/blog"
                    className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    ← Blog
                  </Link>
                  <span className="badge badge-red">{post.category}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h1>

                <p className="text-lg text-gray-600 mb-6">{post.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-b border-gray-200 py-4">
                  <time dateTime={post.date}>{formattedDate}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </header>

              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Related posts */}
            {related.length > 0 && (
              <section className="mt-16" aria-labelledby="related-heading">
                <h2 id="related-heading" className="text-2xl font-bold text-gray-900 mb-6">
                  Related Articles
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {related.slice(0, 2).map((relPost) => (
                    <BlogCard
                      key={relPost.slug}
                      title={relPost.title}
                      slug={relPost.slug}
                      excerpt={relPost.description}
                      date={relPost.date}
                      readTime={relPost.readTime}
                      category={relPost.category}
                    />
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <AdSlot slot="4444444444" format="rectangle" />

              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3">Try Our Converter</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Convert any YouTube video to MP3 for free — no registration required.
                </p>
                <Link href="/" className="btn-primary w-full justify-center text-sm">
                  Convert Now →
                </Link>
              </div>

              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3">More Articles</h3>
                <ul className="space-y-3">
                  {related.map((relPost) => (
                    <li key={relPost.slug}>
                      <Link
                        href={`/blog/${relPost.slug}`}
                        className="text-sm text-gray-700 hover:text-primary-600 transition-colors line-clamp-2"
                      >
                        {relPost.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
