'use client'
import Link from 'next/link'
import { Mail, MessageCircle, Globe, ArrowRight } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'
import PageCTA from '@/components/PageCTA'

const contactMethods = [
  {
    icon: <MessageCircle size={22} />,
    title: 'LINE',
    value: '@Th8VXd1',
    desc: '最快速。聊合作、聊想法、聊療癒，都歡迎。',
    href: 'https://lin.ee/Th8VXd1',
    color: 'from-[#4ade80] to-[#22c55e]',
    cta: '加入 LINE',
    ext: true,
    highlight: true,
  },
  {
    icon: <Mail size={22} />,
    title: 'Email',
    value: 'reihoo75@gmail.com',
    desc: '適合詳細需求說明、正式合作洽談、資料傳送。',
    href: 'mailto:reihoo75@gmail.com',
    color: 'from-[#C084FC] to-[#818CF8]',
    cta: '寄信給我',
    ext: false,
    highlight: false,
  },
  {
    icon: <Globe size={22} />,
    title: 'LinkedIn',
    value: 'Rico Lin',
    desc: '職涯背景、B2B 合作、專業交流，歡迎連結。',
    href: 'https://www.linkedin.com/in/rico1986/',
    color: 'from-[#818CF8] to-[#93C5FD]',
    cta: '查看 LinkedIn',
    ext: true,
    highlight: false,
  },
]

const topics = [
  { emoji: '📈', text: 'SEO 優化諮詢' },
  { emoji: '📢', text: 'Google Ads 廣告投放' },
  { emoji: '🌐', text: 'WordPress 網站建置' },
  { emoji: '🔍', text: '網站轉換設計' },
  { emoji: '🎨', text: '品牌設計合作' },
  { emoji: '🪘', text: '頌缽療癒預約' },
  { emoji: '☕', text: '隨便聊聊' },
]

const quickLinks = [
  { href: '/project-inquiry', label: '填寫合作需求', desc: '最完整的詢問管道' },
  { href: '/services', label: '查看服務方案', desc: 'SEO · 廣告 · 網站 · 設計' },
  { href: '/experience', label: '成果案例', desc: '真實數字，不是估算' },
  { href: '/healing-booking', label: '療癒預約', desc: '頌缽 · 到府 · 雙北' },
]

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-gradient-to-bl from-[#C084FC] to-[#93C5FD] opacity-[0.08] blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
              Contact
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">聯絡我</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              不管是合作詢問、還是只是想聊聊，我都很歡迎。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {contactMethods.map((m, i) => (
              <AnimatedCard key={i} delay={i * 0.09} hoverLift>
                <div className={`bg-white rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col ${
                  m.highlight ? 'ring-2 ring-brand-violet/30' : ''
                }`}>
                  {m.highlight && (
                    <div className="text-xs font-bold text-brand-purple bg-purple-50 px-3 py-1 rounded-full self-start mb-3">
                      最推薦
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white mb-4`}>
                    {m.icon}
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 text-lg mb-1">{m.title}</h3>
                  <p className="text-brand-purple font-semibold text-sm mb-2">{m.value}</p>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{m.desc}</p>
                  <a
                    href={m.href}
                    target={m.ext ? '_blank' : undefined}
                    rel={m.ext ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center justify-center gap-2 py-2.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 ${
                      m.highlight
                        ? 'gradient-bg text-white hover:shadow-md hover:shadow-purple-200'
                        : 'border border-gray-200 text-gray-700 hover:border-brand-purple hover:text-brand-purple'
                    }`}
                  >
                    {m.cta}
                  </a>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-5">可以聊的話題</h2>
            <div className="flex flex-wrap gap-3">
              {topics.map((t) => (
                <span key={t.text} className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-gray-100 rounded-full text-sm text-gray-700 hover:border-brand-violet hover:text-brand-purple transition-colors cursor-default">
                  {t.emoji} {t.text}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-xl text-gray-900 mb-5">快速前往</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickLinks.map((link, i) => (
              <AnimatedCard key={i} delay={i * 0.06} hoverLift>
                <Link href={link.href} className="block bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow group h-full">
                  <div className="font-heading font-bold text-gray-900 text-sm mb-1 group-hover:text-brand-purple transition-colors">{link.label}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{link.desc}</div>
                  <ArrowRight size={13} className="text-gray-300 group-hover:text-brand-purple group-hover:translate-x-1 transition-all mt-2" />
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="準備好開始了嗎？"
        subtitle="填寫需求表單，或直接加 LINE 聊聊你的目標。"
        primaryLabel="填寫合作需求"
        secondaryLabel="加 LINE"
        secondaryHref="https://lin.ee/Th8VXd1"
      />
    </div>
  )
}
