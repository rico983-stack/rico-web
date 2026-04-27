'use client'
import Link from 'next/link'
import { Search, TrendingUp, MousePointerClick, Palette, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'
import PageCTA from '@/components/PageCTA'

const mainServices = [
  {
    id: 'seo',
    icon: <Search size={26} />,
    tag: 'SEO / GEO 搜尋優化',
    headline: '讓客戶主動找到你',
    pain: '你有網站，但搜尋不到你的人根本找不到你。',
    solution: '從技術架構、關鍵字佈局到 AI 搜尋優化（GEO），讓你在 Google 和 AI 搜尋引擎中都能出現。',
    outcomes: [
      '年度網站流量提升 850%',
      '開放 AI 搜尋架構（GEO）',
      '測試 ChatGPT、Gemini、Perplexity 等平台的推薦結果',
      '每項產品頁面優化 Title、Description、結構化資料',
      '關鍵字文章內容行銷佈局',
    ],
    tags: ['技術 SEO', '關鍵字策略', 'GEO 優化', '內容行銷', 'GA4 / GSC 監測'],
    color: 'from-[#C084FC] to-[#818CF8]',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-700',
    suitable: ['有網站但流量很少的品牌', '想提高自然排名的企業', '想在 AI 搜尋被推薦的品牌'],
  },
  {
    id: 'ads',
    icon: <TrendingUp size={26} />,
    tag: 'Google Ads 廣告投放',
    headline: '精準觸及，不浪費預算',
    pain: '廣告費燒了很多，但詢問換算成本太高，ROI 說不清楚。',
    solution: '自行操作七位數廣告預算，從關鍵字策略、廣告架構到出價邏輯全面優化，每一分錢都花在目標客戶身上。',
    outcomes: [
      '台灣 B2B 市場 Search CTR 13.84%',
      '台灣 B2B 轉換率 56.61%',
      '美國市場 CTR 4.64%，轉換率 25%',
      'LinkedIn 廣告 CTR 1.24%',
      '每年省下 20% 代操費用（自行操作）',
      '海外市場多語系廣告投放',
    ],
    tags: ['Google Ads', 'B2B 廣告', '跨國投放', 'LinkedIn 廣告', '轉換追蹤'],
    color: 'from-[#818CF8] to-[#93C5FD]',
    bgLight: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    suitable: ['廣告效益不佳想優化的品牌', '想自主操作廣告的企業', 'B2B 市場拓展需求'],
  },
  {
    id: 'conversion',
    icon: <MousePointerClick size={26} />,
    tag: '網站轉換設計',
    headline: '讓流量真正變成詢問',
    pain: '分析工具顯示有人來，但沒有人留下聯絡、也沒有詢問進來。',
    solution: '從頁面架構、CTA 設計到使用者流程重新規劃，讓每個進站的訪客都有清楚的「下一步」。',
    outcomes: [
      'WordPress 網站從零規劃架構',
      '頁面加入策略性 CTA 設計',
      '安裝效能優化外掛、多語系轉換',
      '海外詢問信增加 60+ 筆',
      '結合廣告 Landing Page 優化',
    ],
    tags: ['WordPress', 'CTA 設計', 'UX 架構', 'Landing Page', '多語系網站'],
    color: 'from-[#93C5FD] to-[#C084FC]',
    bgLight: 'bg-sky-50',
    textColor: 'text-sky-700',
    suitable: ['有流量但詢問率很低的網站', '想重新設計網站架構的品牌', '需要多語系網站的企業'],
  },
  {
    id: 'design',
    icon: <Palette size={26} />,
    tag: '品牌設計（附加）',
    headline: '讓人記住你、相信你',
    pain: '設計風格不一致，或是找不到能同時理解品牌和行銷的設計師。',
    solution: '以行銷邏輯主導設計決策，不只做漂亮，而是讓視覺幫助轉換。通常作為主要服務的附加項目。',
    outcomes: [
      'Logo、品牌視覺識別系統',
      'DM、海報、名片、包裝設計',
      'LINE 官方帳號圖文設計',
      '社群素材、廣告圖設計',
      '展覽視覺物料',
    ],
    tags: ['Logo 設計', 'DM / 海報', 'LINE 圖文', '包裝設計', '展覽物料'],
    color: 'from-[#C084FC] to-[#93C5FD]',
    bgLight: 'bg-rose-50',
    textColor: 'text-rose-700',
    suitable: ['需要設計支援但缺少設計師的小品牌', '想統一品牌視覺的創業者', '配合行銷執行需要素材的企業'],
  },
]

const collabModels = [
  {
    type: '月費長期合作',
    badge: '推薦',
    badgeColor: 'gradient-bg text-white',
    desc: '按月執行、持續優化、定期報告。SEO、廣告、網站維護三位一體，是我最推薦的合作模式。',
    includes: ['SEO 持續優化', 'Google Ads 管理', '網站維護與調整', '每月數據報告'],
    cta: '詢問月費方案',
  },
  {
    type: '專案型合作',
    badge: '彈性',
    badgeColor: 'bg-gray-100 text-gray-700',
    desc: '一次性的網站建置、品牌設計或廣告帳戶健檢，適合剛起步或預算有限的品牌。',
    includes: ['WordPress 網站建置', '品牌視覺設計', '廣告帳戶健檢', 'SEO 健檢報告'],
    cta: '詢問專案報價',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-gradient-to-bl from-[#7C3AED] to-[#93C5FD] opacity-[0.08] blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
              Services
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">服務方案</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              不是賣技能，是幫你帶來客戶。每個服務都圍繞一個核心目標：讓你的品牌被找到、被信任、被詢問。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {mainServices.map((s, i) => (
            <AnimatedCard key={s.id} delay={i * 0.06}>
              <div id={s.id} className="bg-white rounded-3xl overflow-hidden shadow-sm scroll-mt-24">
                {/* Top bar */}
                <div className={`bg-gradient-to-r ${s.color} px-8 py-6`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                        {s.icon}
                      </div>
                      <div>
                        <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">{s.tag}</span>
                        <h2 className="font-heading text-2xl font-bold text-white">{s.headline}</h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 sm:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="mb-5">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">問題</p>
                        <p className="text-gray-700 leading-relaxed italic">&ldquo;{s.pain}&rdquo;</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">我的做法</p>
                        <p className="text-gray-600 leading-relaxed text-sm">{s.solution}</p>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {s.tags.map((tag) => (
                          <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium ${s.bgLight} ${s.textColor}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">具體成果</p>
                      <ul className="space-y-2 mb-6">
                        {s.outcomes.map((o, oi) => (
                          <li key={oi} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <CheckCircle size={14} className="text-brand-purple mt-0.5 shrink-0" />
                            {o}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">適合對象</p>
                      <ul className="space-y-1.5">
                        {s.suitable.map((item, si) => (
                          <li key={si} className="flex items-center gap-2 text-xs text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-violet inline-block shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle title="合作方式" subtitle="根據你的需求選擇最適合的模式" tag="Pricing Model" />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {collabModels.map((m, i) => (
              <AnimatedCard key={i} delay={i * 0.1} hoverLift>
                <div className={`rounded-3xl p-7 h-full flex flex-col ${i === 0 ? 'gradient-bg text-white' : 'bg-surface'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`font-heading font-bold text-xl ${i === 0 ? 'text-white' : 'text-gray-900'}`}>{m.type}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${m.badgeColor}`}>{m.badge}</span>
                  </div>
                  <p className={`text-sm leading-relaxed mb-5 ${i === 0 ? 'text-white/80' : 'text-gray-600'}`}>{m.desc}</p>
                  <ul className="space-y-2 mb-7 flex-1">
                    {m.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle size={13} className={i === 0 ? 'text-white/80' : 'text-brand-purple'} />
                        <span className={i === 0 ? 'text-white/90' : 'text-gray-700'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/project-inquiry"
                    className={`inline-flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 ${
                      i === 0
                        ? 'bg-white text-brand-purple hover:shadow-lg'
                        : 'gradient-bg text-white hover:opacity-90 hover:shadow-md'
                    }`}
                  >
                    {m.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="不確定需要哪個方案？"
        subtitle="告訴我你目前的問題，我幫你分析最有效的切入點。"
        primaryLabel="填寫需求，免費諮詢"
        secondaryLabel="加 LINE 聊聊"
      />
    </div>
  )
}
