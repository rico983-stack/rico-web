'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Globe, BarChart2, ShoppingCart } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'
import PageCTA from '@/components/PageCTA'

const bigNumbers = [
  { value: '850%', label: '年度網站流量提升', sub: 'SEO + GEO 優化', color: 'gradient-text' },
  { value: '60+', label: '海外市場詢問增加', sub: '多語系廣告 + SEO', color: 'gradient-text' },
  { value: '13.84%', label: 'Google Ads CTR', sub: '台灣 B2B 搜尋廣告', color: 'gradient-text' },
  { value: '56.61%', label: '廣告轉換率', sub: '台灣 B2B 市場', color: 'gradient-text' },
  { value: '7位數', label: '年度廣告預算', sub: '自行操作，省 20% 代操費', color: 'gradient-text' },
  { value: '3國', label: '商標權保護', sub: '台灣 · 美國 · 中國', color: 'gradient-text' },
]

const cases = [
  {
    icon: <TrendingUp size={22} />,
    tag: 'SEO / GEO',
    problem: '網站流量幾乎掛零，客戶根本找不到你。',
    approach: [
      '從零規劃網站技術架構（WordPress）',
      '開放 AI 搜尋架構（GEO），測試六大 AI 平台推薦結果',
      '關鍵字佈局產品類別，撰寫針對高詢問產品的文章',
      '每項產品頁面撰寫獨立 Title、Description、結構化資料',
      '安裝效能優化、多語系、結構化資料外掛',
    ],
    result: '年度網站流量提升 850%，開始出現 AI 搜尋推薦結果',
    metric: '+850% 流量',
    color: 'from-[#C084FC] to-[#818CF8]',
  },
  {
    icon: <BarChart2 size={22} />,
    tag: 'Google Ads',
    problem: '廣告代操公司每年收 20%+ 費用，但成效不透明。',
    approach: [
      '接手廣告帳戶，自行操作七位數廣告預算',
      '重新規劃關鍵字架構、廣告群組與出價策略',
      '台灣市場：Search 廣告 CTR 13.84%，轉換率 56.61%',
      '美國市場：CTR 4.64%，轉換率 25%',
      'LinkedIn 廣告測試，CTR 1.24%',
      '日文、英文跨國廣告投放（與外貿協會合作）',
    ],
    result: '每年省下 20% 代操費，數據更透明，詢問更穩定',
    metric: '省 20% + CTR 13.84%',
    color: 'from-[#818CF8] to-[#93C5FD]',
  },
  {
    icon: <Globe size={22} />,
    tag: '海外市場開拓',
    problem: '只有台灣市場，想打進日本、美國、東南亞。',
    approach: [
      '台灣經貿網建立產品資訊，增加 14 個語系版本',
      '建立虛擬展間，參與線上採購洽談會',
      '日英語關鍵字廣告投放（外貿協會合作專案）',
      'Amazon 北美站從零建立，產品上架優化',
      '越南市場開發，參展國際醫療展',
      'AI 影音製作，YouTube 廣告觸及海外廠商',
    ],
    result: '海外市場詢問信增加 60+ 筆，建立多個海外銷售渠道',
    metric: '+60 詢問 · 14 語系',
    color: 'from-[#93C5FD] to-[#C084FC]',
  },
  {
    icon: <ShoppingCart size={22} />,
    tag: '電商 & 多平台',
    problem: '只有實體銷售，想打開線上通路但不知從哪開始。',
    approach: [
      'PChome、Yahoo 商城、蝦皮、91APP、Shopline 多平台建立',
      'Amazon 北美站產品頁面 SEO 優化',
      '建立台灣經貿網 B2B 採購資訊',
      '電子化邀請卡與 QR Code 電子型錄',
      '展覽 EDM 行銷規劃與分析',
    ],
    result: '建立完整線上銷售通路，提升品牌在國際採購平台的曝光',
    metric: '5+ 平台 · B2B+B2C',
    color: 'from-[#C084FC] to-[#93C5FD]',
  },
]

const expos = [
  '台北國際自動化展',
  '半導體展',
  '國際醫療展',
  '工具機展',
  '木工機械展',
]

export default function ExperiencePage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-gradient-to-bl from-[#818CF8] to-[#93C5FD] opacity-[0.1] blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-indigo-50 text-brand-indigo">
              Results
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">從問題到成果</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              先看成果，再看瑞虎商行如何拆解問題、執行策略與驗證成效。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Big Numbers */}
      <section className="py-10 sm:py-14 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {bigNumbers.map((n, i) => (
              <AnimatedCard key={i} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                  <div className={`font-heading text-2xl sm:text-3xl font-bold ${n.color} leading-none mb-1`}>{n.value}</div>
                  <div className="text-xs font-semibold text-gray-800 mt-2 leading-snug">{n.label}</div>
                  <div className="text-xs text-gray-400 mt-1 leading-snug">{n.sub}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
              怎麼做到的？
            </h2>
            <p className="text-gray-500 mb-10">每個數字背後的問題、做法與結果</p>
          </ScrollReveal>

          <div className="space-y-6">
            {cases.map((c, i) => (
              <AnimatedCard key={i} delay={i * 0.07} hoverLift>
                <div className="bg-surface rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${c.color} px-7 py-5 flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                        {c.icon}
                      </div>
                      <span className="font-heading font-bold text-white">{c.tag}</span>
                    </div>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold">
                      {c.metric}
                    </span>
                  </div>

                  {/* Body: 3 columns */}
                  <div className="p-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <p className="text-xs font-bold text-brand-purple uppercase tracking-wider mb-2">問題</p>
                      <p className="text-gray-700 text-sm leading-relaxed italic">&ldquo;{c.problem}&rdquo;</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-indigo uppercase tracking-wider mb-2">做法</p>
                      <ul className="space-y-1.5">
                        {c.approach.map((a, ai) => (
                          <li key={ai} className="flex items-start gap-2 text-xs text-gray-600">
                            <CheckCircle size={11} className="text-brand-purple mt-0.5 shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2">結果</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Expos */}
      <section className="py-12 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-xl text-gray-900 mb-2">展覽行銷企劃執行</h2>
            <p className="text-gray-500 text-sm mb-6">展前、展中、展後的完整行銷規劃</p>
            <div className="flex flex-wrap gap-3">
              {expos.map((expo) => (
                <span key={expo} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm">
                  🏛 {expo}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team + Brand */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="gradient-bg rounded-2xl p-7 text-white">
                <h3 className="font-heading font-bold text-xl mb-3">管理經驗</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  管理過 3 名行銷員工，規劃全年度行銷活動與展覽行程，跨部門協作業務與外部廠商。
                </p>
                <div className="text-3xl font-heading font-bold">3 名行銷人員</div>
              </div>
              <div className="bg-surface rounded-2xl p-7">
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">商標保護</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  完成品牌商標設計與申請，建立品牌知識產權保護。
                </p>
                <div className="flex gap-3">
                  {['🇹🇼 台灣', '🇺🇸 美國', '🇨🇳 中國'].map((c) => (
                    <span key={c} className="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="我也想要這樣的成果"
        subtitle="告訴我你現在的瓶頸，讓我們找到突破點。"
        primaryLabel="填寫合作需求"
        secondaryLabel="加 LINE 諮詢"
        secondaryHref="https://lin.ee/Th8VXd1"
      />
    </div>
  )
}
