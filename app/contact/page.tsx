'use client'
import Link from 'next/link'
import { Mail, MessageCircle, Globe, ArrowRight, ExternalLink } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'

const contactMethods = [
  {
    icon: <Mail size={22} />,
    title: 'Email',
    value: 'your@email.com',
    desc: '適合詳細需求說明、正式合作洽談',
    href: 'mailto:your@email.com',
    color: 'from-[#C084FC] to-[#818CF8]',
    cta: '寄信給我',
  },
  {
    icon: <MessageCircle size={22} />,
    title: 'LINE',
    value: '@your_line_id',
    desc: '最快速的聯絡方式，療癒預約優先推薦',
    href: 'https://line.me/ti/p/~your_line_id',
    color: 'from-[#818CF8] to-[#93C5FD]',
    cta: '加入 LINE',
  },
  {
    icon: <Globe size={22} />,
    title: 'LinkedIn',
    value: 'Rico Lin',
    desc: '職涯背景、B2B 合作、專業交流',
    href: 'https://linkedin.com/in/your-profile',
    color: 'from-[#93C5FD] to-[#C084FC]',
    cta: '查看 LinkedIn',
  },
]

const quickLinks = [
  { href: '/project-inquiry', label: '合作需求', desc: '品牌設計 · SEO · 廣告投放' },
  { href: '/healing-booking', label: '療癒預約', desc: '頌缽療癒 · 到府服務 · 雙北' },
  { href: '/experience', label: '職涯與實戰', desc: '15 年跨領域工作經驗' },
  { href: '/skills', label: '能力與技能', desc: '設計 · 行銷 · 網站 · AI 工具' },
]

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-gradient-to-bl from-[#C084FC] to-[#93C5FD] opacity-[0.1] blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
              Contact
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">聯絡我</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              歡迎合作洽談、行銷設計專案、網站架設、SEO 文章、療癒預約，以及任何想聊聊的交流。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-14 lg:py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {contactMethods.map((method, i) => (
              <AnimatedCard key={i} delay={i * 0.1} hoverLift>
                <div className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white mb-5`}>
                    {method.icon}
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 text-lg mb-1">{method.title}</h3>
                  <p className="text-brand-purple font-medium text-sm mb-2">{method.value}</p>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{method.desc}</p>
                  <a
                    href={method.href}
                    target={method.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:gap-2.5 transition-all"
                  >
                    {method.cta}
                    <ExternalLink size={13} />
                  </a>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Open to topics */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="gradient-bg rounded-3xl p-10 sm:p-12 text-white">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">可以找我聊什麼？</h2>
              <p className="text-white/80 leading-relaxed mb-7 text-base sm:text-lg">
                不限於正式合作，任何關於品牌、行銷、設計、療癒或生活的話題，都歡迎交流。
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  '品牌識別設計',
                  '數位行銷策略',
                  'SEO / GEO 優化',
                  'Google Ads 操作',
                  'WordPress 建站',
                  'B2B 行銷規劃',
                  '頌缽療癒體驗',
                  '精油按摩',
                  '任何你想聊的事',
                ].map((topic) => (
                  <div key={topic} className="bg-white/15 rounded-xl px-4 py-2.5 text-sm backdrop-blur-sm">
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-14 lg:py-18 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle title="快速導覽" subtitle="探索更多關於我的內容" tag="Explore" />
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickLinks.map((link, i) => (
              <AnimatedCard key={i} delay={i * 0.07} hoverLift>
                <Link
                  href={link.href}
                  className="block bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-heading font-bold text-gray-900 mb-1">{link.label}</div>
                      <div className="text-gray-500 text-sm">{link.desc}</div>
                    </div>
                    <ArrowRight size={18} className="text-gray-300 group-hover:text-brand-purple group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
