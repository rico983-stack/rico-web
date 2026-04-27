'use client'
import { CheckCircle, Clock, MessageCircle, ArrowRight } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'
import ProjectInquiryForm from '@/components/ProjectInquiryForm'

const whyMe = [
  '15 年跨領域執行經驗，不只出策略，能親自執行',
  '自行操作七位數廣告預算，了解 B2B 市場節奏',
  'SEO + 廣告 + 網站三位一體，不需要再協調多個外包',
  '長期合作為主，不是做完就走',
  '定期報告 + 數據追蹤，成效透明',
]

const process = [
  { step: '01', title: '填寫需求', desc: '說明你的目標、現況與大概預算，越詳細越好。' },
  { step: '02', title: '免費諮詢', desc: '我會在 24 小時內聯絡，安排 30 分鐘線上或電話討論。' },
  { step: '03', title: '提供方案', desc: '根據你的狀況，提供最適合的服務範圍與月費報價。' },
  { step: '04', title: '確認合作', desc: '雙方確認後，制定執行計畫，正式啟動。' },
  { step: '05', title: '持續執行', desc: '按月執行、定期報告，數據持續優化。' },
]

export default function ProjectInquiryPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative overflow-hidden gradient-bg py-20 lg:py-28">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white opacity-[0.05] blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-white/20 text-white">
              Start Here
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              開始合作
            </h1>
            <p className="text-white/75 text-lg max-w-xl leading-relaxed mb-7">
              告訴我你的目標。不管是 SEO、廣告投放、還是網站優化，我幫你找到最有效的切入點。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://lin.ee/Th8VXd1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-purple font-bold rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm"
              >
                <MessageCircle size={15} />
                先加 LINE 聊聊
              </a>
              <a
                href="mailto:reihoo75@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-full hover:border-white hover:bg-white/10 transition-all text-sm"
              >
                寄 Email
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why me + Process */}
      <section className="py-14 lg:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Why me */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl p-8 shadow-sm h-full">
                <h2 className="font-heading font-bold text-xl text-gray-900 mb-5">為什麼找我？</h2>
                <ul className="space-y-3">
                  {whyMe.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-surface">
                      <CheckCircle size={15} className="text-brand-purple mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Process */}
            <ScrollReveal direction="right">
              <div className="bg-white rounded-3xl p-8 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-5">
                  <Clock size={20} className="text-brand-purple" />
                  <h2 className="font-heading font-bold text-xl text-gray-900">合作流程</h2>
                </div>
                <div className="space-y-4">
                  {process.map((p, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full gradient-bg-soft flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {p.step}
                      </div>
                      <div className="pt-1">
                        <div className="font-semibold text-gray-900 text-sm">{p.title}</div>
                        <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                填寫合作需求
              </h2>
              <p className="text-gray-500">送出後我會在 24 小時內回覆。不確定需求？直接加 LINE 聊聊也可以。</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-surface rounded-3xl p-7 sm:p-10">
              <ProjectInquiryForm />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
              <span>或直接聯絡：</span>
              <a href="https://lin.ee/Th8VXd1" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-purple font-semibold hover:underline">
                <MessageCircle size={14} /> LINE：@Th8VXd1
              </a>
              <a href="mailto:reihoo75@gmail.com"
                className="inline-flex items-center gap-1.5 text-brand-purple font-semibold hover:underline">
                <ArrowRight size={14} /> reihoo75@gmail.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
