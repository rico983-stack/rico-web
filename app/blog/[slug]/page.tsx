import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import { supabase } from '@/lib/supabaseClient'
import type { BlogFaqItem, BlogPost } from '@/types/blog'

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  if (error) throw error
  return data as BlogPost | null
}

function getFaqItems(faq: BlogPost['faq']): BlogFaqItem[] {
  if (!Array.isArray(faq)) return []
  return faq.filter((item) => item.question && item.answer)
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: '文章不存在 | Rico Lin',
    }
  }

  return {
    title: post.seo_title || post.title,
    description: post.meta_description || post.excerpt || undefined,
    openGraph: {
      title: post.seo_title || post.title,
      description: post.meta_description || post.excerpt || undefined,
      type: 'article',
      images: post.cover_image_url ? [post.cover_image_url] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  const faqItems = getFaqItems(post.faq)
  const articleUrl = `/blog/${post.slug}`
  const publishedDate = post.published_at ?? post.created_at
  const modifiedDate = post.updated_at ?? publishedDate

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.meta_description || post.excerpt || undefined,
    image: post.cover_image_url || undefined,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      '@type': 'Person',
      name: 'Rico Lin',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rico Lin',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    keywords: [post.focus_keyword, ...(post.location_tags ?? []), post.service_category].filter(Boolean),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首頁',
        item: '/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: '/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  }

  const faqSchema = faqItems.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null

  const schemas = [blogPostingSchema, breadcrumbSchema, faqSchema].filter(Boolean)

  return (
    <article className="pt-16">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-purple mb-8">
            <ArrowLeft size={15} />
            回到 Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-5">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={13} />
              {new Date(publishedDate).toLocaleDateString('zh-TW')}
            </span>
            {post.service_category && <span className="px-2.5 py-1 rounded-full bg-purple-50 text-brand-purple">{post.service_category}</span>}
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
            {post.title}
          </h1>

          {post.excerpt && <p className="text-lg text-gray-500 leading-relaxed mb-8">{post.excerpt}</p>}

          {post.cover_image_url && (
            <div className="aspect-[1200/630] rounded-2xl overflow-hidden bg-gray-100 mb-10">
              <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="prose prose-gray max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 leading-8">{post.content}</div>
          </div>

          {faqItems.length > 0 && (
            <section className="mt-12 border-t border-gray-100 pt-8">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-5">常見問題</h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div key={item.question} className="rounded-2xl bg-surface p-5">
                    <h3 className="font-heading font-bold text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {post.cta_text && (
            <section className="mt-12 rounded-2xl gradient-bg p-7 text-white">
              <h2 className="font-heading text-2xl font-bold mb-2">想進一步整理你的網站？</h2>
              <p className="text-white/80 leading-relaxed mb-5">{post.cta_text}</p>
              <Link href="/project-inquiry" className="inline-flex px-5 py-3 rounded-full bg-white text-brand-purple text-sm font-bold">
                開始合作
              </Link>
            </section>
          )}
        </div>
      </section>
    </article>
  )
}
