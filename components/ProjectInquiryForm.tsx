'use client'
import { useState } from 'react'
import { submitProjectInquiry, type ProjectInquiryData } from '@/lib/formSubmit'
import { CheckCircle, AlertCircle, Loader2, ChevronDown } from 'lucide-react'

const cooperationTypes = [
  'Logo 設計',
  'DM 設計',
  '海報設計',
  '名片設計',
  '產品包裝設計',
  '貼紙設計',
  'Google Ads 廣告投放',
  'WordPress 網站架設',
  'SEO 文章撰寫',
  'LINE 官方帳號設置及圖文設計',
]

const budgetOptions = [
  '5,000 以下',
  '5,000 – 15,000',
  '15,000 – 30,000',
  '30,000 – 60,000',
  '60,000 以上',
  '視需求討論',
]

const timelineOptions = [
  '1 週內',
  '2 – 4 週',
  '1 – 2 個月',
  '2 個月以上',
  '時程彈性，可討論',
]

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-violet/40 focus:border-brand-violet transition-colors'
const labelCls = 'block text-sm font-medium text-gray-700 mb-1.5'
const selectWrap = 'relative'
const selectCls =
  'w-full appearance-none px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-violet/40 focus:border-brand-violet transition-colors pr-10'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ProjectInquiryForm() {
  const [form, setForm] = useState<ProjectInquiryData>({
    name: '',
    phone: '',
    cooperationType: '',
    budget: '',
    timeline: '',
    company: '',
    email: '',
    lineId: '',
    problem: '',
    notes: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ProjectInquiryData, string>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  const set = (field: keyof ProjectInquiryData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const e: typeof errors = {}
    if (!form.name.trim()) e.name = '請填寫姓名'
    if (!form.phone.trim()) e.phone = '請填寫聯絡電話'
    if (!form.cooperationType) e.cooperationType = '請選擇合作類型'
    if (!form.budget) e.budget = '請選擇預算區間'
    if (!form.timeline) e.timeline = '請選擇預計時程'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    const result = await submitProjectInquiry(form)
    setStatus(result.success ? 'success' : 'error')
    setMessage(result.message)
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="text-white" size={28} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">已收到您的需求！</h3>
        <p className="text-gray-500 leading-relaxed">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Required fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>姓名 <span className="text-brand-purple">*</span></label>
          <input className={inputCls} placeholder="您的稱呼" value={form.name} onChange={set('name')} />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className={labelCls}>聯絡電話 <span className="text-brand-purple">*</span></label>
          <input className={inputCls} placeholder="09XX-XXX-XXX" value={form.phone} onChange={set('phone')} />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className={labelCls}>合作類型 <span className="text-brand-purple">*</span></label>
        <div className={selectWrap}>
          <select className={selectCls} value={form.cooperationType} onChange={set('cooperationType')}>
            <option value="">請選擇合作類型</option>
            {cooperationTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        {errors.cooperationType && <p className="text-xs text-red-500 mt-1">{errors.cooperationType}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>預算區間 <span className="text-brand-purple">*</span></label>
          <div className={selectWrap}>
            <select className={selectCls} value={form.budget} onChange={set('budget')}>
              <option value="">請選擇預算</option>
              {budgetOptions.map((b) => <option key={b} value={b}>{b} 元</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          {errors.budget && <p className="text-xs text-red-500 mt-1">{errors.budget}</p>}
        </div>
        <div>
          <label className={labelCls}>預計時程 <span className="text-brand-purple">*</span></label>
          <div className={selectWrap}>
            <select className={selectCls} value={form.timeline} onChange={set('timeline')}>
              <option value="">請選擇時程</option>
              {timelineOptions.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          {errors.timeline && <p className="text-xs text-red-500 mt-1">{errors.timeline}</p>}
        </div>
      </div>

      {/* Optional fields */}
      <div className="border-t border-gray-100 pt-5">
        <p className="text-xs text-gray-400 mb-4">以下為選填項目，填寫有助於我更快速了解您的需求</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls}>公司 / 品牌名稱</label>
            <input className={inputCls} placeholder="選填" value={form.company} onChange={set('company')} />
          </div>
          <div>
            <label className={labelCls}>Email</label>
            <input type="email" className={inputCls} placeholder="選填" value={form.email} onChange={set('email')} />
          </div>
          <div>
            <label className={labelCls}>LINE ID</label>
            <input className={inputCls} placeholder="選填" value={form.lineId} onChange={set('lineId')} />
          </div>
        </div>
        <div className="mt-5">
          <label className={labelCls}>想解決的問題</label>
          <textarea
            className={`${inputCls} resize-none`}
            rows={3}
            placeholder="簡單描述您目前遇到的問題或挑戰..."
            value={form.problem}
            onChange={set('problem')}
          />
        </div>
        <div className="mt-5">
          <label className={labelCls}>需求補充說明</label>
          <textarea
            className={`${inputCls} resize-none`}
            rows={3}
            placeholder="其他想補充的資訊，例如參考案例、風格偏好..."
            value={form.notes}
            onChange={set('notes')}
          />
        </div>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 text-red-600 text-sm">
          <AlertCircle size={16} className="shrink-0" />
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 rounded-xl gradient-bg text-white font-semibold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-purple-200 transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            送出中...
          </>
        ) : (
          '送出需求'
        )}
      </button>
    </form>
  )
}
