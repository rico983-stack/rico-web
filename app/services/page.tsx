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
    textColor: 'text-brand-purple',
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
    textColor: 'text-brand-indigo',
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
    bgLight: 'bg-purple-50',
    textColor: 'text-brand-purple',
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
    bgLight: 'bg-indigo-50',
    textColor: 'text-brand-indigo',
    suitable: ['需要設計支援但缺少設計師的小品牌', '想統一品牌視覺的創業者', '配合行銷執行需要素材的企業'],
  },
]

// SVG/CSS portfolio mockup components
function LogoMockup() {
  return (
    <div className="w-full aspect-[4/3] bg-white rounded-xl flex flex-col items-center justify-center gap-3 shadow-inner border border-gray-100">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C084FC] to-[#818CF8] flex items-center justify-center shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L28 26H4L16 4Z" fill="white" opacity="0.9"/>
          <circle cx="16" cy="20" r="4" fill="white" opacity="0.6"/>
        </svg>
      </div>
      <div className="text-center">
        <div className="font-bold text-gray-800 text-sm tracking-wider">BRAND NAME</div>
        <div className="text-gray-400 text-[10px] tracking-widest uppercase mt-0.5">Tagline Here</div>
      </div>
      <div className="flex gap-2 mt-1">
        {['#C084FC','#818CF8','#93C5FD','#1e1e2e'].map(c => (
          <div key={c} className="w-4 h-4 rounded-full border border-white shadow-sm" style={{background: c}} />
        ))}
      </div>
    </div>
  )
}

function DMMockup() {
  return (
    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-gray-100 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED] to-[#4F46E5]" />
      <div className="relative z-10 p-4 h-full flex flex-col">
        <div className="text-white/60 text-[9px] uppercase tracking-widest font-semibold mb-1">SPECIAL OFFER</div>
        <div className="text-white font-bold text-lg leading-tight mb-1">限時優惠<br/>活動名稱</div>
        <div className="flex gap-1 mb-3">
          {[60,45,70].map((w,i) => (
            <div key={i} className="h-1.5 rounded-full bg-white/30" style={{width: `${w}%`}} />
          ))}
        </div>
        <div className="mt-auto">
          <div className="bg-white rounded-lg px-3 py-1.5 inline-block">
            <span className="text-[#7C3AED] font-bold text-xs">立即了解 →</span>
          </div>
        </div>
        <div className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5" opacity="0.6"/>
            <path d="M7 10h6M10 7l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

function BusinessCardMockup() {
  return (
    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-gray-100 bg-white relative flex items-center justify-center p-4">
      <div className="w-full max-w-[200px] h-[110px] rounded-lg shadow-md overflow-hidden relative bg-white border border-gray-100">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C084FC] to-[#818CF8]" />
        <div className="pl-4 pt-3 pr-3 pb-3 h-full flex flex-col justify-between">
          <div>
            <div className="font-bold text-gray-800 text-xs">瑞虎商行</div>
            <div className="text-[9px] text-brand-purple font-medium mt-0.5">Brand & Marketing</div>
          </div>
          <div className="space-y-0.5">
            {['reihoo75@gmail.com', 'LINE: @Th8VXd1', 'taipei, Taiwan'].map((t,i) => (
              <div key={i} className="text-[8px] text-gray-400">{t}</div>
            ))}
          </div>
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-br from-[#C084FC] to-[#818CF8] flex items-center justify-center">
          <span className="text-white font-bold text-[10px]">R</span>
        </div>
      </div>
    </div>
  )
}

function SocialMockup() {
  return (
    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-gray-100 bg-gray-50 flex items-center justify-center">
      <div className="w-[120px] h-[120px] rounded-xl overflow-hidden shadow-md relative bg-white">
        {/* image area */}
        <div className="h-[72px] bg-gradient-to-br from-[#C084FC]/30 to-[#93C5FD]/30 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect x="4" y="4" width="22" height="16" rx="2" fill="none" stroke="#C084FC" strokeWidth="1.5"/>
              <circle cx="10" cy="9" r="2" fill="#C084FC" opacity="0.5"/>
              <path d="M4 16l6-5 5 4 4-3 7 5" stroke="#818CF8" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </div>
        {/* caption area */}
        <div className="p-2">
          <div className="h-1.5 rounded-full bg-gray-200 w-3/4 mb-1" />
          <div className="h-1.5 rounded-full bg-gray-100 w-1/2" />
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#C084FC] to-[#818CF8]" />
            <div className="h-1 rounded-full bg-gray-100 w-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

function PosterMockup() {
  return (
    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-gray-100 bg-gray-50 flex items-center justify-center">
      <div className="w-[80px] h-[110px] rounded-lg overflow-hidden shadow-md relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e1035] to-[#3730a3]" />
        <div className="relative z-10 p-2 h-full flex flex-col">
          <div className="h-1 rounded-full bg-white/40 w-8 mb-0.5" />
          <div className="h-2 rounded-full bg-white w-12 mb-3" />
          <div className="flex-1 rounded-md bg-white/10 mb-2 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="5" fill="none" stroke="#C084FC" strokeWidth="1.5"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <div className="h-1 rounded-full bg-white/30 w-10 mb-0.5" />
          <div className="h-1 rounded-full bg-white/20 w-8" />
          <div className="mt-1.5 bg-[#C084FC] rounded px-1 py-0.5 text-[6px] text-white font-bold text-center">
            立即報名
          </div>
        </div>
      </div>
    </div>
  )
}

function WebMockup() {
  return (
    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-gray-100 bg-white">
      {/* browser chrome */}
      <div className="bg-gray-100 px-3 py-1.5 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1">
          {['bg-red-400','bg-yellow-400','bg-green-400'].map(c => (
            <div key={c} className={`w-2 h-2 rounded-full ${c}`} />
          ))}
        </div>
        <div className="flex-1 bg-white rounded h-3.5 mx-2 flex items-center px-2">
          <div className="h-1 rounded-full bg-gray-200 w-24" />
        </div>
      </div>
      {/* page content */}
      <div className="p-3">
        {/* nav */}
        <div className="flex items-center justify-between mb-2">
          <div className="h-2 w-10 rounded-full bg-gradient-to-r from-[#C084FC] to-[#818CF8]" />
          <div className="flex gap-2">
            {[14,14,14,20].map((w,i) => (
              <div key={i} className={`h-1 rounded-full ${i===3 ? 'bg-gradient-to-r from-[#C084FC] to-[#818CF8]' : 'bg-gray-200'}`} style={{width: `${w}px`}} />
            ))}
          </div>
        </div>
        {/* hero */}
        <div className="rounded-lg bg-gradient-to-r from-[#7C3AED]/10 to-[#93C5FD]/10 p-3 mb-2">
          <div className="h-2 rounded-full bg-gray-700 w-24 mb-1" />
          <div className="h-1.5 rounded-full bg-gray-400 w-32 mb-1" />
          <div className="h-1.5 rounded-full bg-gray-300 w-20 mb-2" />
          <div className="h-4 w-16 rounded-full bg-gradient-to-r from-[#C084FC] to-[#818CF8]" />
        </div>
        {/* cards row */}
        <div className="grid grid-cols-3 gap-1.5">
          {[0,1,2].map(i => (
            <div key={i} className="h-8 rounded-lg bg-gray-50 border border-gray-100 p-1.5">
              <div className="h-1 rounded-full bg-gray-200 w-full mb-0.5" />
              <div className="h-1 rounded-full bg-gray-100 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const portfolioItems = [
  {
    title: 'Logo 設計',
    subtitle: '品牌識別 · 吉祥物 · 標準字',
    mockup: <LogoMockup />,
    desc: '從品牌定位出發，設計能傳遞價值的識別系統，而不只是「好看的圖」。',
    price: 'NT$8,000 起',
    tags: ['企業識別', 'Logo 系統', '色彩規範'],
  },
  {
    title: 'DM / 傳單設計',
    subtitle: '活動宣傳 · 促銷文宣 · 型錄',
    mockup: <DMMockup />,
    desc: '有效傳遞訊息、引發行動的印刷與數位文宣，不只是填滿版面。',
    price: 'NT$2,500 起',
    tags: ['印刷文宣', '電子文宣', '活動設計'],
  },
  {
    title: '名片設計',
    subtitle: '個人名片 · 企業名片 · 燙金特殊工藝',
    mockup: <BusinessCardMockup />,
    desc: '名片是最小面積的品牌展示，讓對方記住你的第一個設計關鍵。',
    price: 'NT$1,800 起',
    tags: ['名片設計', '印刷規格', '特殊工藝'],
  },
  {
    title: '社群素材',
    subtitle: 'Instagram · Facebook · LINE',
    mockup: <SocialMockup />,
    desc: '設計風格統一的社群版型，讓每次發文都是品牌印象的積累。',
    price: 'NT$4,500 起 / 10 張',
    tags: ['社群素材', '版型設計', '廣告圖'],
  },
  {
    title: '海報設計',
    subtitle: '活動海報 · 展覽視覺 · 大圖輸出',
    mockup: <PosterMockup />,
    desc: '在視覺噪音中抓住目光的海報設計，兼顧美感與資訊層次。',
    price: 'NT$3,500 起',
    tags: ['活動海報', '展覽物料', '大圖輸出'],
  },
  {
    title: '網站 UI 設計',
    subtitle: 'WordPress · 落地頁 · 形象網站',
    mockup: <WebMockup />,
    desc: '以轉換為目標的網站視覺設計，不只是好看，還要讓訪客採取行動。',
    price: 'NT$25,000 起',
    tags: ['WordPress', 'Landing Page', 'UI 規劃'],
  },
]

const pricingDesign = [
  { service: 'Logo 設計（單一檔案）', range: 'NT$8,000 ~ 15,000' },
  { service: 'Logo 設計（完整識別系統）', range: 'NT$18,000 ~ 35,000' },
  { service: 'DM / 傳單設計', range: 'NT$2,500 ~ 8,000' },
  { service: '名片設計', range: 'NT$1,800 ~ 4,500' },
  { service: '海報設計（A2 以下）', range: 'NT$3,500 ~ 10,000' },
  { service: '社群素材（10 張）', range: 'NT$4,500 ~ 9,000' },
  { service: '包裝設計', range: 'NT$6,000 ~ 18,000' },
  { service: 'LINE 圖文選單設計', range: 'NT$2,000 ~ 4,000' },
]

const pricingDigital = [
  { service: 'WordPress 網站建置（5 頁）', range: 'NT$25,000 ~ 45,000' },
  { service: 'WordPress 網站建置（10 頁+）', range: 'NT$45,000 ~ 80,000' },
  { service: 'SEO 月費（持續優化）', range: 'NT$15,000 / 月起' },
  { service: 'Google Ads 代操月費', range: 'NT$12,000 / 月起 + 廣告預算' },
  { service: 'SEO / 廣告健檢報告', range: 'NT$5,000 ~ 12,000' },
  { service: 'Landing Page 設計 + 建置', range: 'NT$12,000 ~ 25,000' },
  { service: '月費整合方案（SEO + 廣告 + 網站維護）', range: '詢價' },
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
      <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-gradient-to-bl from-[#7C3AED] to-[#93C5FD] opacity-[0.08] blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
              Services
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">服務方案</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              從「被找到」到「產生詢問」，依你的現況選擇最需要的成長環節。
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

      {/* Design Portfolio */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-indigo-50 text-brand-indigo">
              Portfolio
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              品牌設計作品
            </h2>
            <p className="text-gray-500 max-w-xl leading-relaxed">
              以行銷邏輯主導設計，每個視覺決策都服務於你的轉換目標。
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.07} hoverLift>
                <div className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  {/* Visual mockup */}
                  <div className="p-4 bg-gray-50 border-b border-gray-100">
                    {item.mockup}
                  </div>
                  {/* Text */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-heading font-bold text-gray-900">{item.title}</h3>
                      <span className="text-xs font-bold text-brand-purple whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-xs text-brand-purple font-medium mb-2">{item.subtitle}</p>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 bg-purple-50 text-brand-purple text-[10px] font-medium rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <div className="mt-8 text-center">
              <Link
                href="/project-inquiry"
                className="inline-flex items-center gap-2 px-8 py-3.5 gradient-bg text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5 transition-all text-sm"
              >
                詢問設計報價 <ArrowRight size={15} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Reference */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
              Pricing
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              報價參考
            </h2>
            <p className="text-gray-500 mb-10">
              以下為參考範圍，實際報價依需求複雜度、交件時間與修改次數調整。歡迎填單詳談。
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Design pricing */}
            <AnimatedCard delay={0.05}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 bg-gradient-to-r from-[#C084FC] to-[#818CF8] flex items-center gap-3">
                  <Palette size={18} className="text-white" />
                  <span className="font-heading font-bold text-white">品牌設計類</span>
                </div>
                <div className="divide-y divide-gray-50">
                  {pricingDesign.map((row, i) => (
                    <div key={i} className="flex items-center justify-between px-6 py-3.5 hover:bg-purple-50/50 transition-colors">
                      <span className="text-sm text-gray-700">{row.service}</span>
                      <span className="text-sm font-semibold text-brand-purple whitespace-nowrap ml-4">{row.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>

            {/* Digital marketing pricing */}
            <AnimatedCard delay={0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 bg-gradient-to-r from-[#818CF8] to-[#93C5FD] flex items-center gap-3">
                  <TrendingUp size={18} className="text-white" />
                  <span className="font-heading font-bold text-white">數位行銷類</span>
                </div>
                <div className="divide-y divide-gray-50">
                  {pricingDigital.map((row, i) => (
                    <div key={i} className="flex items-center justify-between px-6 py-3.5 hover:bg-indigo-50/50 transition-colors">
                      <span className="text-sm text-gray-700">{row.service}</span>
                      <span className="text-sm font-semibold text-brand-indigo whitespace-nowrap ml-4">{row.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </div>

          <ScrollReveal delay={0.15}>
            <p className="text-center text-xs text-gray-400 mt-6">
              * 以上報價不含印刷費用。月費方案請直接詢價，依服務範圍客製化報價。
            </p>
          </ScrollReveal>
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
