'use client'
import { useState } from 'react'
import { submitHealingBooking, type HealingBookingData } from '@/lib/formSubmit'
import { CheckCircle, AlertCircle, Loader2, ChevronDown } from 'lucide-react'

const districts = [
  '台北市中正區', '台北市大同區', '台北市中山區', '台北市松山區',
  '台北市大安區', '台北市萬華區', '台北市信義區', '台北市士林區',
  '台北市北投區', '台北市內湖區', '台北市南港區', '台北市文山區',
  '新北市板橋區', '新北市三重區', '新北市中和區', '新北市永和區',
  '新北市新莊區', '新北市新店區', '新北市樹林區', '新北市鶯歌區',
  '新北市三峽區', '新北市淡水區', '新北市汐止區', '新北市瑞芳區',
  '新北市土城區', '新北市蘆洲區', '新北市五股區', '新北市泰山區',
  '新北市林口區', '新北市其他區域',
]

const timeSlots = [
  '10:00 – 11:00',
  '11:30 – 12:30',
  '14:00 – 15:00',
  '15:30 – 16:30',
  '19:00 – 20:00',
  '20:30 – 21:30',
]

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-violet/40 focus:border-brand-violet transition-colors'
const labelCls = 'block text-sm font-medium text-gray-700 mb-1.5'
const selectWrap = 'relative'
const selectCls =
  'w-full appearance-none px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-violet/40 focus:border-brand-violet transition-colors pr-10'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function HealingBookingForm() {
  const [form, setForm] = useState<HealingBookingData>({
    name: '',
    phone: '',
    district: '',
    preferredDate: '',
    preferredTime: '',
    email: '',
    lineId: '',
    hasExperience: '',
    goals: '',
    notes: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof HealingBookingData, string>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  const set = (field: keyof HealingBookingData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const e: typeof errors = {}
    if (!form.name.trim()) e.name = '請填寫姓名'
    if (!form.phone.trim()) e.phone = '請填寫聯絡電話'
    if (!form.district) e.district = '請選擇預約地區'
    if (!form.preferredDate) e.preferredDate = '請選擇希望日期'
    if (!form.preferredTime) e.preferredTime = '請選擇希望時段'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    const result = await submitHealingBooking(form)
    setStatus(result.success ? 'success' : 'error')
    setMessage(result.message)
  }

  const today = new Date().toISOString().split('T')[0]

  if (status === 'success') {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-16 h-16 gradient-bg-soft rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="text-white" size={28} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">預約已收到 🙏</h3>
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
        <label className={labelCls}>預約地區 <span className="text-brand-purple">*</span></label>
        <div className={selectWrap}>
          <select className={selectCls} value={form.district} onChange={set('district')}>
            <option value="">請選擇雙北地區</option>
            {districts.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        {errors.district && <p className="text-xs text-red-500 mt-1">{errors.district}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>希望預約日期 <span className="text-brand-purple">*</span></label>
          <input
            type="date"
            className={inputCls}
            min={today}
            value={form.preferredDate}
            onChange={set('preferredDate')}
          />
          {errors.preferredDate && <p className="text-xs text-red-500 mt-1">{errors.preferredDate}</p>}
        </div>
        <div>
          <label className={labelCls}>希望預約時段 <span className="text-brand-purple">*</span></label>
          <div className={selectWrap}>
            <select className={selectCls} value={form.preferredTime} onChange={set('preferredTime')}>
              <option value="">請選擇時段</option>
              {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          {errors.preferredTime && <p className="text-xs text-red-500 mt-1">{errors.preferredTime}</p>}
        </div>
      </div>

      {/* Optional fields */}
      <div className="border-t border-gray-100 pt-5">
        <p className="text-xs text-gray-400 mb-4">以下為選填項目，有助於我為您準備更合適的療癒體驗</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
          <label className={labelCls}>是否曾體驗過頌缽</label>
          <div className={selectWrap}>
            <select className={selectCls} value={form.hasExperience} onChange={set('hasExperience')}>
              <option value="">請選擇</option>
              <option value="是，曾體驗過">是，曾體驗過</option>
              <option value="否，第一次體驗">否，第一次體驗</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div className="mt-5">
          <label className={labelCls}>想改善的狀態</label>
          <textarea
            className={`${inputCls} resize-none`}
            rows={3}
            placeholder="例如：失眠、焦慮、肩頸緊繃、想放鬆..."
            value={form.goals}
            onChange={set('goals')}
          />
        </div>
        <div className="mt-5">
          <label className={labelCls}>備註（如身體特殊狀況）</label>
          <textarea
            className={`${inputCls} resize-none`}
            rows={2}
            placeholder="請告知懷孕、心臟疾病、金屬植入物等狀況..."
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
        className="w-full py-3.5 rounded-xl gradient-bg-soft text-white font-semibold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-violet-200 transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            送出中...
          </>
        ) : (
          '送出預約申請'
        )}
      </button>
    </form>
  )
}
