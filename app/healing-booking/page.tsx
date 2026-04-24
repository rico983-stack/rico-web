'use client'
import { MapPin, Clock, DollarSign, Heart, Shield, Droplets } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'
import HealingBookingForm from '@/components/HealingBookingForm'

const serviceInfo = [
  { icon: <MapPin size={18} />, label: '服務地區', value: '雙北市（到府服務）' },
  { icon: <Clock size={18} />, label: '服務時間', value: '1 小時' },
  { icon: <DollarSign size={18} />, label: '服務費用', value: 'NT$ 1,500' },
  { icon: <Heart size={18} />, label: '加贈服務', value: '10 分鐘精油按摩' },
]

const targets = [
  { emoji: '😮‍💨', text: '壓力大、身心緊繃' },
  { emoji: '😴', text: '睡眠品質不佳' },
  { emoji: '🧘', text: '想深度放鬆' },
  { emoji: '💻', text: '長時間工作疲勞' },
  { emoji: '✨', text: '想體驗頌缽療癒' },
  { emoji: '🌸', text: '身心靈探索中' },
]

const flowSteps = [
  { step: '01', title: '填寫預約', desc: '填寫預約表單，告知希望的日期、時段與地區。' },
  { step: '02', title: '確認時間與地點', desc: '我會在 24 小時內回覆確認，並與您溝通到府地址。' },
  { step: '03', title: '到府體驗', desc: '攜帶頌缽設備準時到達，為您佈置舒適的療癒環境。' },
  { step: '04', title: '頌缽放鬆', desc: '約 50 分鐘的頌缽療癒，透過音頻振動讓身心深度放鬆。' },
  { step: '05', title: '精油按摩加贈', desc: '加贈 10 分鐘精油按摩（手、肩頸、腿），完整放鬆體驗。' },
]

const notices = [
  { icon: <MapPin size={16} />, text: '服務地區限定雙北市，超出範圍恕無法提供服務' },
  { icon: <Clock size={16} />, text: '請提前至少 3 天預約，以利安排時程' },
  { icon: <Shield size={16} />, text: '到府空間需保持安靜，建議在臥房或客廳進行' },
  { icon: <Droplets size={16} />, text: '服務前後建議補充適量水分，協助身體代謝' },
  { icon: <Heart size={16} />, text: '懷孕、心臟疾病、體內有金屬植入物者，請提前說明' },
]

export default function HealingBookingPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full bg-gradient-to-bl from-[#C084FC] via-[#818CF8] to-[#93C5FD] opacity-[0.1] blur-[100px] pointer-events-none animate-pulse-glow" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-violet-50 text-brand-purple">
              Healing Service
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">頌缽療癒預約</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              透過頌缽的聲音振動，讓身心回到平靜的頻率。到府服務，在熟悉的空間深度放鬆。
            </p>
          </ScrollReveal>

          {/* Service info cards */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {serviceInfo.map((info, i) => (
              <AnimatedCard key={i} delay={i * 0.07} hoverLift>
                <div className="bg-surface rounded-2xl p-4 text-center shadow-sm">
                  <div className="w-9 h-9 rounded-full gradient-bg-soft flex items-center justify-center text-white mx-auto mb-2">
                    {info.icon}
                  </div>
                  <div className="text-xs text-gray-400 mb-0.5">{info.label}</div>
                  <div className="text-sm font-semibold text-gray-800 leading-snug">{info.value}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* About + Targets */}
      <section className="py-14 lg:py-18 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Service intro */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm h-full">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  什麼是頌缽療癒？
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  頌缽（Singing Bowl）是源自喜馬拉雅地區的療癒工具。透過敲擊或摩擦金屬缽邊，
                  產生豐富的泛音與振動頻率，這些聲波能深入身體，幫助神經系統放鬆、
                  降低焦慮感，進入深度休息狀態。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  配合加贈的精油按摩（手、肩頸、腿），讓每一次體驗都是對身心的全面呵護。
                </p>
                <div className="mt-6 p-4 rounded-xl gradient-bg text-white">
                  <div className="font-semibold text-sm mb-1">🎁 本次服務包含</div>
                  <div className="text-white/80 text-sm">1 小時頌缽療癒 + 加贈 10 分鐘精油按摩（手、肩頸、腿）</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Target audience */}
            <ScrollReveal direction="right">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm h-full">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-5">
                  適合哪些人？
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {targets.map((t, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-surface">
                      <span className="text-2xl">{t.emoji}</span>
                      <span className="text-sm text-gray-700 font-medium">{t.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle title="服務流程" tag="Process" centered />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-5 gap-4">
            {flowSteps.map((step, i) => (
              <AnimatedCard key={i} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl gradient-bg-soft flex items-center justify-center text-white font-bold text-sm mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 text-sm mb-1.5">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Notices */}
      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-xl text-gray-900 mb-5">預約須知</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm space-y-3">
              {notices.map((n, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-brand-violet mt-0.5 shrink-0">{n.icon}</div>
                  <span className="text-sm text-gray-600">{n.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-surface rounded-3xl p-8 sm:p-10">
              <div className="mb-8">
                <SectionTitle
                  title="填寫預約申請"
                  subtitle="我會在 24 小時內確認您的預約時間"
                  tag="Booking Form"
                />
              </div>
              <HealingBookingForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
