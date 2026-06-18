import Link from 'next/link'
import { CalendarDays, ChevronRight } from 'lucide-react'
import { supabase } from '@/lib/supabaseClient'
import type { BlogPost } from '@/types/blog'

export const metadata = {
  title: '觀點文章',
  description: '網站、SEO、廣告與行銷接案實務筆記。',
}

export default async function BlogPage() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  const posts = (data ?? []) as BlogPost[]

  return (
    <div className="pt-16">
      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
            Blog
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            瑞虎觀點｜網站與行銷實戰筆記
          </h1>
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            分享網站轉換、SEO、廣告與台灣中小品牌行銷整理的實務觀察。
          </p>
        </div>
      </section>

      <section className="bg-surface py-10 sm:py-14 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {error ? (
            <div className="rounded-3xl bg-white p-8 text-sm text-red-600 shadow-sm">
              文章載入失敗：{error.message}
            </div>
          ) : posts.length === 0 ? (
            <div className="rounded-3xl bg-white p-8 text-sm text-gray-500 shadow-sm">
              目前還沒有已發布文章。
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {post.cover_image_url && (
                    <Link href={`/blog/${post.slug}`} className="block aspect-[1200/630] overflow-hidden bg-gray-100">
                      <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </Link>
                  )}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                      <CalendarDays size={13} />
                      {post.published_at ? new Date(post.published_at).toLocaleDateString('zh-TW') : '未設定日期'}
                    </div>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-snug tracking-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-brand-purple transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt && <p className="text-[15px] text-gray-600 leading-7 mb-5 line-clamp-3">{post.excerpt}</p>}
                    <Link href={`/blog/${post.slug}`} className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-brand-purple hover:gap-2 transition-all">
                      閱讀文章 <ChevronRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
