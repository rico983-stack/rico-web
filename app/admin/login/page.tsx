'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabaseClient'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) router.replace('/admin/posts')
    })
  }, [router])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (signInError) {
      setError(signInError.message)
      return
    }

    router.replace('/admin/posts')
  }

  return (
    <div className="min-h-screen pt-24 px-4 flex items-center justify-center bg-surface">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-sm p-7 sm:p-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-purple mb-2">Admin</p>
        <h1 className="font-heading text-3xl font-bold text-gray-900 mb-2">Blog 後台登入</h1>
        <p className="text-sm text-gray-500 mb-7">請使用 Supabase Auth 中的管理員帳號登入。</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet/40"
              placeholder="reihoo75@gmail.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">密碼</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet/40"
              required
            />
          </div>

          {error && <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl gradient-bg text-white text-sm font-semibold disabled:opacity-60"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            登入
          </button>
        </form>
      </div>
    </div>
  )
}
