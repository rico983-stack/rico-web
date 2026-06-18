'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import AdminGuard from '@/components/blog/AdminGuard'
import PostForm from '@/components/blog/PostForm'
import { supabase } from '@/lib/supabaseClient'
import type { BlogPost } from '@/types/blog'

export default function EditPostPage() {
  const params = useParams<{ id: string }>()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true)
      const { data, error: postError } = await supabase
        .from('posts')
        .select('*')
        .eq('id', params.id)
        .maybeSingle()

      if (postError) {
        console.error('Supabase load post error:', postError)
        setError([
          `message：${postError.message}`,
          `code：${postError.code ?? '無'}`,
          `details：${postError.details ?? '無'}`,
          `hint：${postError.hint ?? '無'}`,
        ].join('\n'))
      } else if (!data) {
        setError('找不到這篇文章，或目前帳號沒有權限查看。')
      } else {
        setPost(data as BlogPost)
      }

      setLoading(false)
    }

    loadPost()
  }, [params.id])

  return (
    <AdminGuard>
      {loading ? (
        <div className="min-h-screen pt-24 px-4 flex items-center justify-center bg-surface">
          <p className="text-sm text-gray-500">載入文章中...</p>
        </div>
      ) : error ? (
        <div className="min-h-screen pt-24 px-4 flex items-center justify-center bg-surface">
          <div className="max-w-md rounded-3xl bg-white p-7 text-center shadow-sm">
            <h1 className="font-heading text-2xl font-bold text-gray-900 mb-2">無法編輯文章</h1>
            <p className="whitespace-pre-wrap text-sm text-gray-500">{error}</p>
          </div>
        </div>
      ) : post ? (
        <PostForm mode="edit" post={post} />
      ) : null}
    </AdminGuard>
  )
}
