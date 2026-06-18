'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Loader2, Upload } from 'lucide-react'
import { formValuesToPayload, postToFormValues, slugify } from '@/lib/blogFormat'
import { supabase } from '@/lib/supabaseClient'
import type { BlogPost, BlogPostFormValues } from '@/types/blog'

type PostFormProps = {
  mode: 'create' | 'edit'
  post?: BlogPost
}

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-violet/40 focus:border-brand-violet transition-colors'
const labelCls = 'block text-sm font-medium text-gray-700 mb-1.5'
const recommendedCoverWidth = 1200
const recommendedCoverHeight = 630
const recommendedCoverRatio = recommendedCoverWidth / recommendedCoverHeight

type SupabaseDebugError = {
  message: string
  code?: string
  details?: string
  hint?: string
}

type AdminDebugInfo = {
  userId?: string
  userEmail?: string
  adminUsers?: unknown
  adminUsersError?: SupabaseDebugError
}

function getSupabaseDebugError(error: unknown): SupabaseDebugError {
  if (typeof error === 'object' && error !== null) {
    const record = error as Record<string, unknown>
    const code = typeof record.code === 'string' ? record.code : undefined

    return {
      message:
        code === '23505'
          ? '這個 Slug 已經被使用，請換一個網址名稱。'
          : typeof record.message === 'string'
            ? record.message
            : '未知錯誤',
      code,
      details: code === '23505' ? undefined : typeof record.details === 'string' ? record.details : undefined,
      hint: code === '23505' ? undefined : typeof record.hint === 'string' ? record.hint : undefined,
    }
  }

  return {
    message: error instanceof Error ? error.message : '未知錯誤',
  }
}

function isRlsError(error: SupabaseDebugError) {
  const text = `${error.message} ${error.details ?? ''} ${error.hint ?? ''}`.toLowerCase()
  return error.code === '42501' || text.includes('row-level security') || text.includes('rls')
}

export default function PostForm({ mode, post }: PostFormProps) {
  const router = useRouter()
  const [values, setValues] = useState<BlogPostFormValues>(() => postToFormValues(post))
  const [coverFile, setCoverFile] = useState<File | null>(null)
  const [coverWarnings, setCoverWarnings] = useState<string[]>([])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<SupabaseDebugError | null>(null)
  const [adminDebug, setAdminDebug] = useState<AdminDebugInfo | null>(null)

  const title = mode === 'create' ? '新增文章' : '編輯文章'
  const canSubmit = values.title.trim() && (values.slug.trim() || slugify(values.title))

  const normalizedSlug = useMemo(() => slugify(values.slug || values.title), [values.slug, values.title])

  const set = (field: keyof BlogPostFormValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const checkCoverImage = (file: File) => {
    const url = URL.createObjectURL(file)
    const image = new Image()

    image.onload = () => {
      const warnings: string[] = []
      const ratio = image.width / image.height

      if (image.width < recommendedCoverWidth || image.height < recommendedCoverHeight) {
        warnings.push('這張圖片尺寸較小，前台可能會模糊，建議使用 1200 × 630 px。')
      }

      if (Math.abs(ratio - recommendedCoverRatio) > 0.03) {
        warnings.push('圖片比例不是 1200 × 630，前台會自動置中裁切。')
      }

      setCoverWarnings(warnings)
      URL.revokeObjectURL(url)
    }

    image.onerror = () => {
      setCoverWarnings(['無法讀取圖片尺寸，請確認檔案是否為 JPG / PNG / WebP。'])
      URL.revokeObjectURL(url)
    }

    image.src = url
  }

  const handleCoverFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null
    setCoverFile(file)
    setCoverWarnings([])

    if (file) checkCoverImage(file)
  }

  const uploadCover = async (userId: string) => {
    if (!coverFile) return values.cover_image_url.trim()

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(coverFile.type)) {
      throw new Error('封面圖只支援 JPG、PNG、WebP')
    }

    if (coverFile.size > 5 * 1024 * 1024) {
      throw new Error('封面圖建議 5MB 以內，請換一張較小的圖片')
    }

    const extension = coverFile.name.split('.').pop()?.toLowerCase() || 'jpg'
    const path = `${userId}/${Date.now()}-${normalizedSlug}.${extension}`
    const { error: uploadError } = await supabase.storage.from('blog-covers').upload(path, coverFile)

    if (uploadError) {
      console.error('Supabase storage upload error:', uploadError)
      throw uploadError
    }

    const { data } = supabase.storage.from('blog-covers').getPublicUrl(path)
    return data.publicUrl
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setAdminDebug(null)
    setSaving(true)

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser()

      if (authError) {
        console.error('Supabase auth getUser error:', authError)
        throw authError
      }

      if (!user) {
        throw new Error('尚未登入或 session 已失效')
      }

      const coverImageUrl = await uploadCover(user.id)
      const payload = formValuesToPayload(
        { ...values, slug: normalizedSlug, cover_image_url: coverImageUrl },
        user.id
      )

      console.log('Blog post payload:', payload)

      const query =
        mode === 'create'
          ? supabase.from('posts').insert(payload).select('id').single()
          : supabase.from('posts').update(payload).eq('id', post?.id).select('id').single()

      const { error: saveError } = await query
      if (saveError) {
        console.error(`Supabase posts ${mode === 'create' ? 'insert' : 'update'} error:`, saveError)

        const debugError = getSupabaseDebugError(saveError)

        if (isRlsError(debugError)) {
          const { data: adminUsers, error: adminUsersError } = await supabase
            .from('admin_users')
            .select('user_id,email,role')
            .or(`user_id.eq.${user.id},email.eq.${user.email}`)

          if (adminUsersError) {
            console.error('Supabase admin_users lookup error:', adminUsersError)
          }

          setAdminDebug({
            userId: user.id,
            userEmail: user.email,
            adminUsers,
            adminUsersError: adminUsersError ? getSupabaseDebugError(adminUsersError) : undefined,
          })
        }

        throw saveError
      }

      router.push('/admin/posts')
      router.refresh()
    } catch (err) {
      console.error('Blog post save failed:', err)
      setError(getSupabaseDebugError(err))
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/admin/posts" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-purple mb-6">
          <ArrowLeft size={15} />
          返回文章列表
        </Link>

        <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-purple mb-2">Blog CMS</p>
              <h1 className="font-heading text-3xl font-bold text-gray-900">{title}</h1>
            </div>
            <p className="text-xs text-gray-400">Slug 預覽：/{normalizedSlug || 'your-post-slug'}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>標題 *</label>
                <input className={inputCls} value={values.title} onChange={set('title')} required />
              </div>
              <div>
                <label className={labelCls}>Slug *</label>
                <input className={inputCls} value={values.slug} onChange={set('slug')} placeholder="seo-for-small-business" />
              </div>
            </div>

            <div>
              <label className={labelCls}>摘要</label>
              <textarea className={`${inputCls} resize-y`} rows={3} value={values.excerpt} onChange={set('excerpt')} />
            </div>

            <div>
              <label className={labelCls}>內容 Markdown / 純文字</label>
              <textarea className={`${inputCls} min-h-[320px] resize-y font-mono`} value={values.content} onChange={set('content')} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>封面圖 URL</label>
                <input className={inputCls} value={values.cover_image_url} onChange={set('cover_image_url')} placeholder="可手動貼 URL，或使用右側上傳" />
              </div>
              <div>
                <label className={labelCls}>上傳封面圖</label>
                <p className="text-xs text-gray-400 mb-2">
                  建議尺寸：1200 × 630 px，支援 JPG / PNG / WebP，5MB 以內。
                </p>
                <label className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-600 cursor-pointer hover:border-brand-violet hover:text-brand-purple transition-colors">
                  <Upload size={15} />
                  {coverFile ? coverFile.name : '選擇 JPG / PNG / WebP'}
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={handleCoverFileChange}
                  />
                </label>
                {coverWarnings.length > 0 && (
                  <div className="mt-2 space-y-1 rounded-xl bg-amber-50 px-3 py-2 text-xs text-amber-700">
                    {coverWarnings.map((warning) => (
                      <p key={warning}>{warning}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>SEO Title</label>
                <input className={inputCls} value={values.seo_title} onChange={set('seo_title')} />
              </div>
              <div>
                <label className={labelCls}>Focus Keyword</label>
                <input className={inputCls} value={values.focus_keyword} onChange={set('focus_keyword')} />
              </div>
            </div>

            <div>
              <label className={labelCls}>Meta Description</label>
              <textarea className={`${inputCls} resize-y`} rows={3} value={values.meta_description} onChange={set('meta_description')} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>地區標籤</label>
                <input className={inputCls} value={values.location_tags} onChange={set('location_tags')} placeholder="台北, 新北, 台灣" />
              </div>
              <div>
                <label className={labelCls}>服務分類</label>
                <input className={inputCls} value={values.service_category} onChange={set('service_category')} placeholder="SEO / Google Ads / 網站轉換" />
              </div>
            </div>

            <div>
              <label className={labelCls}>FAQ</label>
              <textarea
                className={`${inputCls} resize-y`}
                rows={5}
                value={values.faq}
                onChange={set('faq')}
                placeholder={'通常需要多久？\n5-7 個工作天\n\n可以先諮詢嗎？\n可以，歡迎先用 LINE 傳目前網站或需求。'}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className={labelCls}>CTA 文字</label>
                <input className={inputCls} value={values.cta_text} onChange={set('cta_text')} placeholder="想整理網站 SEO？歡迎聊聊" />
              </div>
              <div>
                <label className={labelCls}>狀態</label>
                <select className={inputCls} value={values.status} onChange={set('status')}>
                  <option value="draft">草稿</option>
                  <option value="published">發布</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>發布時間</label>
                <input type="datetime-local" className={inputCls} value={values.published_at} onChange={set('published_at')} />
              </div>
            </div>

            {error && (
              <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 space-y-1">
                <p className="font-semibold">儲存失敗</p>
                <p>message：{error.message}</p>
                <p>code：{error.code ?? '無'}</p>
                <p>details：{error.details ?? '無'}</p>
                <p>hint：{error.hint ?? '無'}</p>
                {adminDebug && (
                  <div className="mt-3 rounded-lg bg-white/70 p-3 text-xs text-red-700">
                    <p className="font-semibold mb-1">RLS debug</p>
                    <p>user.id：{adminDebug.userId ?? '無'}</p>
                    <p>user.email：{adminDebug.userEmail ?? '無'}</p>
                    <p>admin_users：{JSON.stringify(adminDebug.adminUsers ?? [])}</p>
                    {adminDebug.adminUsersError && (
                      <>
                        <p>admin_users error message：{adminDebug.adminUsersError.message}</p>
                        <p>admin_users error code：{adminDebug.adminUsersError.code ?? '無'}</p>
                        <p>admin_users error details：{adminDebug.adminUsersError.details ?? '無'}</p>
                        <p>admin_users error hint：{adminDebug.adminUsersError.hint ?? '無'}</p>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <Link href="/admin/posts" className="px-6 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 text-center hover:border-gray-300">
                取消
              </Link>
              <button
                type="submit"
                disabled={saving || !canSubmit}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white text-sm font-semibold disabled:opacity-50"
              >
                {saving && <Loader2 size={15} className="animate-spin" />}
                儲存文章
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
