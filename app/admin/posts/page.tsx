'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogOut, Plus } from 'lucide-react'
import AdminGuard from '@/components/blog/AdminGuard'
import { supabase } from '@/lib/supabaseClient'
import type { BlogPost } from '@/types/blog'

export default function AdminPostsPage() {
  const router = useRouter()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true)
      const { data, error: postsError } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (postsError) {
        setError(postsError.message)
      } else {
        setPosts((data ?? []) as BlogPost[])
      }

      setLoading(false)
    }

    loadPosts()
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
    router.replace('/admin/login')
  }

  return (
    <AdminGuard>
      <div className="min-h-screen pt-24 pb-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-purple mb-2">Blog CMS</p>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">文章管理</h1>
              <p className="text-sm text-gray-500 mt-2">管理草稿與已發布文章。</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={signOut}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:border-gray-300"
              >
                <LogOut size={15} />
                登出
              </button>
              <Link
                href="/admin/posts/new"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl gradient-bg text-white text-sm font-semibold"
              >
                <Plus size={15} />
                新增文章
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            {loading ? (
              <div className="p-8 text-sm text-gray-500">載入文章中...</div>
            ) : error ? (
              <div className="p-8 text-sm text-red-600">{error}</div>
            ) : posts.length === 0 ? (
              <div className="p-8 text-sm text-gray-500">目前還沒有文章。</div>
            ) : (
              <div className="divide-y divide-gray-100">
                {posts.map((post) => (
                  <Link key={post.id} href={`/admin/posts/edit/${post.id}`} className="block p-5 sm:p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h2 className="font-heading font-bold text-gray-900">{post.title}</h2>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                              post.status === 'published' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {post.status === 'published' ? '已發布' : '草稿'}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400">/{post.slug}</p>
                      </div>
                      <div className="text-xs text-gray-400">
                        {post.published_at ? `發布：${new Date(post.published_at).toLocaleString('zh-TW')}` : '尚未發布'}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminGuard>
  )
}
