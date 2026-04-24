'use client'
import { Palette, TrendingUp, Globe, Bot, Check } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'

const skillGroups = [
  {
    icon: <Palette size={22} />,
    title: '設計能力',
    color: 'from-[#C084FC] to-[#818CF8]',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-700',
    skills: [
      'Logo 設計',
      'DM 設計',
      '海報設計',
      '名片設計',
      '產品包裝設計',
      '貼紙設計',
      '官方 LINE 圖文設計',
    ],
    desc: '從品牌識別到各式印刷物料，掌握商業設計的美感與溝通邏輯。',
  },
  {
    icon: <TrendingUp size={22} />,
    title: '數位行銷能力',
    color: 'from-[#818CF8] to-[#93C5FD]',
    bgLight: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    skills: [
      'Google Ads 廣告投放',
      'SEO 文章規劃與撰寫',
      'GEO / AI 搜尋優化',
      '社群內容規劃',
      'EDM 行銷',
    ],
    desc: '從搜尋廣告到自然流量，制定完整的數位行銷策略並自行執行。',
  },
  {
    icon: <Globe size={22} />,
    title: '網站與工具能力',
    color: 'from-[#93C5FD] to-[#818CF8]',
    bgLight: 'bg-sky-50',
    textColor: 'text-sky-700',
    skills: [
      'WordPress 網站架設',
      '網頁內容編排',
      '基本 SEO 架構設定',
      'AI 工具應用',
      'LINE 官方帳號設置',
    ],
    desc: '從零到上線，能獨力完成網站架設、內容優化與功能設定。',
  },
]

const toolGroups = [
  {
    title: '設計工具',
    tools: ['Canva', 'Illustrator', 'Photoshop', 'Premiere', '剪映'],
  },
  {
    title: 'SEO & 行銷工具',
    tools: ['Ubersuggest', 'Google Analytics 4', 'Google Search Console', 'Benchmark Email'],
  },
  {
    title: 'AI 工具',
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Google NoteLM'],
  },
]

export default function SkillsPage() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-gradient-to-bl from-[#C084FC] to-[#93C5FD] opacity-[0.1] blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
              Skills
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">能力與技能</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              多元的技能組合，讓我能夠跨領域整合，為品牌提供從設計到行銷的完整服務。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Skill Groups */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {skillGroups.map((group, gi) => (
            <AnimatedCard key={gi} delay={gi * 0.1}>
              <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm">
                <div className="flex items-start gap-5 mb-7">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white shrink-0`}>
                    {group.icon}
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-gray-900">{group.title}</h2>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{group.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl ${group.bgLight}`}
                    >
                      <Check size={14} className={group.textColor + ' shrink-0'} />
                      <span className={`text-sm font-medium ${group.textColor}`}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title="工具與平台"
              subtitle="熟練運用各類工具，提升工作效率與成果品質"
              tag="Tools"
            />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {toolGroups.map((group, i) => (
              <AnimatedCard key={i} delay={i * 0.1} hoverLift>
                <div className="bg-surface rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-gray-900 mb-5 text-base">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-brand-violet hover:text-brand-purple transition-colors cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools highlight */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="gradient-bg rounded-3xl p-10 sm:p-12 text-white">
              <div className="flex items-center gap-3 mb-5">
                <Bot size={28} />
                <h2 className="font-heading text-2xl font-bold">AI 工具應用</h2>
              </div>
              <p className="text-white/80 leading-relaxed max-w-2xl mb-8 text-base sm:text-lg">
                積極擁抱 AI 工具作為工作加速器，從內容創作、SEO 策略到數據分析，
                善用 AI 提升工作效率的同時，保持對品牌語調與策略的人為判斷與把關。
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { tool: 'ChatGPT', use: '內容撰寫 · 策略發想' },
                  { tool: 'Claude', use: '長文分析 · 結構規劃' },
                  { tool: 'Gemini', use: '搜尋整合 · 資料整理' },
                  { tool: 'Perplexity', use: 'AI 搜尋優化測試' },
                  { tool: 'Google NoteLM', use: '文件摘要 · 知識庫' },
                  { tool: 'GEO 概念', use: 'AI 搜尋引擎優化' },
                ].map((item) => (
                  <div key={item.tool} className="bg-white/15 rounded-xl p-4 backdrop-blur-sm">
                    <div className="font-semibold text-sm">{item.tool}</div>
                    <div className="text-white/70 text-xs mt-1">{item.use}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
