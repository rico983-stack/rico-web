'use client'
import { CheckCircle, Clock, MessageCircle, ArrowRight, Search, TrendingUp, MousePointerClick, Palette, Globe, Package } from 'lucide-react'
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

const serviceCategories = [
  {
    icon: <Search size={20} />,
    title: 'SEO / GEO 優化',
    color: 'from-[#C084FC] to-[#818CF8]',
    items: [
      { name: 'SEO 月費（持續優化）', price: 'NT$15,000 / 月起' },
      { name: 'SEO 健檢報告', price: 'NT$5,000 ~ 12,000' },
      { name: 'GEO 開放架構設定', price: '詢價' },
      { name: '關鍵字策略規劃', price: 'NT$8,000 起' },
    ],
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Google Ads 廣告',
    color: 'from-[#818CF8] to-[#93C5FD]',
    items: [
      { name: 'Google Ads 月費代操', price: 'NT$12,000 / 月起 + 預算' },
      { name: '帳戶健檢報告', price: 'NT$5,000 ~ 10,000' },
      { name: 'LinkedIn 廣告操作', price: '詢價' },
      { name: '跨國多語系廣告', price: '詢價' },
    ],
  },
  {
    icon: <MousePointerClick size={20} />,
    title: '網站設計 & 建置',
    color: 'from-[#93C5FD] to-[#C084FC]',
    items: [
      { name: 'WordPress 形象網站（5頁）', price: 'NT$25,000 ~ 45,000' },
      { name: 'WordPress 網站（10頁+）', price: 'NT$45,000 ~ 80,000' },
      { name: 'Landing Page 設計建置', price: 'NT$12,000 ~ 25,000' },
      { name: '多語系網站建置', price: '詢價' },
    ],
  },
  {
    icon: <Palette size={20} />,
    title: 'Logo & 品牌設計',
    color: 'from-[#C084FC] to-[#93C5FD]',
    items: [
      { name: 'Logo 設計', price: 'NT$8,000 ~ 35,000' },
      { name: '完整品牌識別系統', price: 'NT$18,000 ~ 35,000' },
      { name: 'DM / 傳單設計', price: 'NT$2,500 ~ 8,000' },
      { name: '名片設計', price: 'NT$1,800 ~ 4,500' },
    ],
  },
  {
    icon: <Globe size={20} />,
    title: '社群 & 素材設計',
    color: 'from-[#818CF8] to-[#C084FC]',
    items: [
      { name: '社群素材（10 張）', price: 'NT$4,500 ~ 9,000' },
      { name: '海報設計（A2 以下）', price: 'NT$3,500 ~ 10,000' },
      { name: 'LINE 圖文選單設計', price: 'NT$2,000 ~ 4,000' },
      { name: '展覽視覺物料', price: '詢價' },
    ],
  },
  {
    icon: <Package size={20} />,
    title: '整合月費方案',
    color: 'from-[#7C3AED] to-[#4F46E5]',
    highlight: true,
    items: [
      { name: 'SEO + 廣告 + 網站維護', price: '詢價（最推薦）' },
      { name: 'SEO + 內容行銷月費', price: 'NT$20,000 / 月起' },
      { name: '廣告 + Landing Page 優化', price: '詢價' },
      { name: '品牌設計 + 行銷素材月費', price: '詢價' },
    ],
  },
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

      {/* Service Pricing Cards */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
              Pricing
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              服務項目 & 報價參考
            </h2>
            <p className="text-gray-500 mb-10 max-w-xl">
              以下為參考範圍。實際報價依需求複雜度、修改次數與交期調整，歡迎填表後詳談。
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.map((cat, i) => (
              <AnimatedCard key={i} delay={i * 0.07} hoverLift>
                <div className={`rounded-2xl overflow-hidden shadow-sm h-full flex flex-col ${cat.highlight ? 'ring-2 ring-brand-violet/40' : ''}`}>
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${cat.color} px-5 py-4 flex items-center gap-3`}>
                    <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white">
                      {cat.icon}
                    </div>
                    <span className="font-heading font-bold text-white text-sm">{cat.title}</span>
                    {cat.highlight && (
                      <span className="ml-auto text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">推薦</span>
                    )}
                  </div>
                  {/* Items */}
                  <div className="bg-white flex-1 divide-y divide-gray-50">
                    {cat.items.map((item, j) => (
                      <div key={j} className="flex items-center justify-between px-5 py-3 hover:bg-purple-50/40 transition-colors">
                        <span className="text-sm text-gray-700 flex-1">{item.name}</span>
                        <span className="text-xs font-bold text-brand-purple ml-3 whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <p className="text-center text-xs text-gray-400 mt-8">
              * 以上報價不含印刷費用。月費方案依服務組合客製化報價，歡迎直接詢問。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 lg:py-20 bg-surface">
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
            <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm">
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
