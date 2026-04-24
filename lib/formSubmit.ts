export interface FormResult {
  success: boolean
  message: string
}

export interface ProjectInquiryData {
  name: string
  phone: string
  cooperationType: string
  budget: string
  timeline: string
  company?: string
  email?: string
  lineId?: string
  problem?: string
  notes?: string
}

export interface HealingBookingData {
  name: string
  phone: string
  district: string
  preferredDate: string
  preferredTime: string
  email?: string
  lineId?: string
  hasExperience?: string
  goals?: string
  notes?: string
}

export async function submitProjectInquiry(data: ProjectInquiryData): Promise<FormResult> {
  const endpoint = process.env.NEXT_PUBLIC_PROJECT_FORM_ENDPOINT

  if (!endpoint) {
    console.warn('NEXT_PUBLIC_PROJECT_FORM_ENDPOINT is not set')
    return { success: false, message: '表單服務尚未設定，請聯絡站長。' }
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formType: 'project-inquiry', ...data }),
    })

    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return { success: true, message: '感謝您的需求，我會在 1-2 個工作天內與您聯絡！' }
  } catch (error) {
    console.error('submitProjectInquiry error:', error)
    return { success: false, message: '送出失敗，請稍後再試，或直接以 LINE / Email 聯絡。' }
  }
}

export async function submitHealingBooking(data: HealingBookingData): Promise<FormResult> {
  const endpoint = process.env.NEXT_PUBLIC_HEALING_FORM_ENDPOINT

  if (!endpoint) {
    console.warn('NEXT_PUBLIC_HEALING_FORM_ENDPOINT is not set')
    return { success: false, message: '表單服務尚未設定，請聯絡站長。' }
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formType: 'healing-booking', ...data }),
    })

    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return { success: true, message: '預約成功！我會盡快確認時間並與您聯絡，期待與您相見 🙏' }
  } catch (error) {
    console.error('submitHealingBooking error:', error)
    return { success: false, message: '送出失敗，請稍後再試，或直接以 LINE 聯絡預約。' }
  }
}
