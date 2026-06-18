'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabaseClient'

type AdminGuardProps = {
  children: React.ReactNode
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const router = useRouter()
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.replace('/admin/login')
        return
      }

      setSession(data.session)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!nextSession) {
        router.replace('/admin/login')
        return
      }

      setSession(nextSession)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [router])

  if (loading || !session) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center bg-surface">
        <p className="text-sm text-gray-500">確認登入狀態中...</p>
      </div>
    )
  }

  return <>{children}</>
}
