'use client'
import { CheckCircle, Users, Clock, ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'
import ProjectInquiryForm from '@/components/ProjectInquiryForm'

const services = [
  { emoji: '🎨', name: 'Logo 設計', desc: '品牌識別設計，建立獨特形象' },
  { emoji: '📄', name: 'DM / 海報設計', desc: '促銷文宣、活動宣傳印刷品' },
  { emoji: '📦', name: '包裝 / 名片設計', desc: '產品包裝視覺與名片設計' },
  { emoji: '🌐', name: 'WordPress 網站', desc: '企業官網、品牌網站架設' },
  { emoji: '📈', name: 'Google Ads', desc: 'B2B / B2C 搜尋廣告投放' },
  { emoji: '🔍', name: 'SEO 文章撰寫', desc: '關鍵字佈局與內容行銷' },
  { emoji: '💬', name: 'LINE 官方帳號', desc: '帳號設置與圖文選單設計' },
  { emoji: '📌', name: '貼紙設計', desc: '各式貼紙、包裝貼紙設計' },
]

const targets = [
  '想要建立或重塑品牌形象的創業者',
  '需要設計支援但沒有設計師的小型企業',
  '想自己操盤廣告但缺乏策略的品牌',
  '需要提升網站流量或 SEO 成效的企業',
  '剛起步、需要完整品牌物料的新品牌',
]

const process = [
  { step: '01', title: '填寫需求', desc: '透過表單說明您的需求、預算與時程，越詳細越好。' },
  { step: '02', title: '初步了解', desc: '我會在 1-2 個工作天內與您聯絡，進一步了解需求。' },
  { step: '03', title: '提供建議或報價', desc: '根據您的需求，提供合適的執行方案與報價說明。' },
  { step: '04', title: '確認合作與排程', desc: '雙方確認後，簽訂合作說明並安排執行時程。' },
  { step: '05', title: '開始執行', desc: '進入設計或行銷的執行階段，定期更新進度。' },
]

export default function ProjectInquiryPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-gradient-to-bl from-[#7C3AED] to-[#93C5FD] opacity-[0.08] blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
              Collaboration
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">合作需求</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              告訴我你的挑戰，讓我們一起找到最適合的方案。從設計到行銷，一人可以搞定的事，就不需要複雜的流程。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle title="我可以協助的項目" tag="Services" />
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {services.map((s, i) => (
              <AnimatedCard key={i} delay={i * 0.05} hoverLift>
                <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="text-2xl mb-3">{s.emoji}</div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{s.name}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{s.desc}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Target clients + Process */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Target clients */}
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white">
                    <Users size={18} />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-gray-900">適合合作的對象</h2>
                </div>
                <div className="space-y-3">
                  {targets.map((target, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-surface rounded-xl">
                      <CheckCircle size={16} className="text-brand-purple mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{target}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Process */}
            <ScrollReveal direction="right">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white">
                    <Clock size={18} />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-gray-900">合作流程</h2>
                </div>
                <div className="space-y-3">
                  {process.map((p, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full gradient-bg-soft flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {p.step}
                      </div>
                      <div className="pt-1.5">
                        <div className="font-semibold text-gray-900 text-sm">{p.title}</div>
                        <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{p.desc}</div>
                      </div>
                      {i < process.length - 1 && (
                        <ArrowRight size={14} className="text-gray-300 mt-2.5 ml-auto shrink-0 hidden sm:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 lg:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-3xl shadow-sm p-8 sm:p-10">
              <div className="mb-8">
                <SectionTitle
                  title="填寫合作需求"
                  subtitle="填寫後我會在 1–2 個工作天內與您聯絡"
                  tag="Inquiry Form"
                />
              </div>
              <ProjectInquiryForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
