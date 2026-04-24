'use client'
import SectionTitle from '@/components/SectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'
import { TrendingUp, Globe, Megaphone, ShoppingCart, Play, Users, BarChart2 } from 'lucide-react'

const timeline = [
  {
    period: '早期 · 教學與行政',
    icon: <Play size={16} />,
    items: [
      {
        title: '微軟軟體教學講師',
        tags: ['教學', '培訓'],
        points: [
          '對象為大學教師，協助推廣微軟辦公套件應用',
          '學習行政工作流程，培養跨部門溝通能力',
          '錄製影音教學課程，建立線上學習資源',
          '動態網站建立與維護',
        ],
      },
      {
        title: '補習班輔導老師',
        tags: ['教育', '管理'],
        points: [
          '國小三年級課業輔導，管理 30 位學生的學習進度',
          '培養課堂管理、親師溝通與耐心應對能力',
        ],
      },
    ],
  },
  {
    period: '設計與內容製作',
    icon: <Globe size={16} />,
    items: [
      {
        title: '珠寶製造商 · 行銷美編',
        tags: ['平面設計', '電商', '攝影'],
        points: [
          '平面設計：燈箱廣告、人形立牌、DM、手冊、海報、布條',
          '產品拍攝與修圖，維護官方網站',
          'PChome 電商平台經營，FB 粉絲專頁內容管理',
        ],
      },
      {
        title: '傳播公司 · 剪輯員',
        tags: ['影音剪輯', '後製'],
        points: [
          '公關活動影片、企業形象影片、觀光導覽影片剪輯',
          '產品發布會剪輯，片頭片尾設計',
          '配音、旁白音、字幕製作',
          '大型花燈製作協作',
        ],
      },
      {
        title: '淨水過濾器代理商 · 美編',
        tags: ['設計', '包裝'],
        points: [
          '產品拍攝與 DM 製作',
          '化妝品包裝設計與生產製作',
          '網站管理更新，產品說明書製作',
        ],
      },
    ],
  },
  {
    period: '傳統製造業 · 行銷管理',
    icon: <Megaphone size={16} />,
    items: [
      {
        title: '行銷專案管理',
        tags: ['專案管理', '海外行銷'],
        points: [
          '2025 年操作 5 大行銷專案',
          '與經濟部外貿協會合作，投放日文、英文關鍵字廣告',
          '海外市場詢問信增加 60+ 筆',
          '與影片團隊拍攝形象影片並投放 YouTube 廣告',
          '越南市場開發及國際醫療展參展，AI 影音製作',
          '管理海外市場開發專案全流程',
        ],
      },
    ],
  },
  {
    period: 'SEO / GEO · 自然流量',
    icon: <TrendingUp size={16} />,
    items: [
      {
        title: 'SEO 與 GEO 全面優化',
        tags: ['SEO', 'GEO', '技術優化'],
        highlight: '年度流量提升 850%',
        points: [
          '從零規劃網站架構，技術面與 AI 優先策略',
          '測試 Gemini、ChatGPT、Perplexity、Claude、Grok、Copilot 關鍵字推薦',
          '頁面加入 CTA 設計，優化使用者轉換路徑',
          '安裝效能優化外掛、多語系轉換外掛、結構化資料',
          '關鍵字架構佈局產品類別，各產品撰寫獨立 Title、Description',
          '針對高詢問度產品與客戶案例建立文章，監測 GA4、GTM、GSC 數據',
        ],
      },
    ],
  },
  {
    period: '廣告與年度策略',
    icon: <BarChart2 size={16} />,
    items: [
      {
        title: 'Google Ads 自行操作',
        tags: ['廣告投放', 'B2B', '策略'],
        highlight: '年省 20% 代操費用',
        points: [
          'B2B 產業年度行銷策略擬定，操作七位數廣告預算',
          '由代操公司轉為自行操作，每年節省 20% 代操費',
          '台灣 B2B 市場：Search CTR 13.84%，轉換率 56.61%',
          '美國 B2B 市場：CTR 4.64%，轉換率 25%',
          'LinkedIn 廣告投放，CTR 1.24%',
          '年度展覽企劃：台北國際自動化展、半導體展、工具機展、木工機械展',
          '展前展中展後網路及媒體行銷，EDM 行銷規劃與分析',
          '電子化邀請卡、QR Code 電子型錄製作',
        ],
      },
    ],
  },
  {
    period: '電商與通路',
    icon: <ShoppingCart size={16} />,
    items: [
      {
        title: '多平台電商經營',
        tags: ['電商', '跨境', 'Amazon'],
        points: [
          '台灣經貿網：建立產品資訊，增加 14 個語系做跨境貿易',
          '建立虛擬展間，參與線上採購洽談會',
          'Amazon 北美站從零開始，產品上架優化',
          'PChome 商店街、Yahoo 商城、蝦皮、91APP、Shopline',
        ],
      },
    ],
  },
  {
    period: '社群與影音',
    icon: <Play size={16} />,
    items: [
      {
        title: '社群經營與影音製作',
        tags: ['社群', 'YouTube', '內容行銷'],
        points: [
          'Facebook、Twitter、LinkedIn 最新消息及活動分享',
          'YouTube 影片腳本設計、拍攝剪接、字幕、SEO 優化',
          '影片帶來廠商詢價，驗證影音內容的 B2B 轉換效益',
        ],
      },
    ],
  },
  {
    period: '管理與其他',
    icon: <Users size={16} />,
    items: [
      {
        title: '行銷團隊管理',
        tags: ['管理', '策略'],
        points: [
          '管理過 3 名行銷員工，規劃全年度行銷活動與展覽行程',
          '主力 SEO 自然排序曝光，多面向品牌曝光策略',
          '市場產業分析與競業調查',
          '商標設計與申請，已取得台灣、美國、中國商標權',
        ],
      },
    ],
  },
]

const stats = [
  { value: '15', unit: '年', label: '跨領域工作' },
  { value: '850', unit: '%', label: '年度流量提升' },
  { value: '60', unit: '+', label: '海外詢問增加' },
  { value: '7', unit: '位數', label: '廣告預算' },
  { value: '3', unit: '名', label: '團隊管理' },
  { value: '5', unit: '項', label: '年度專案' },
]

export default function ExperiencePage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-gradient-to-bl from-[#818CF8] to-[#93C5FD] opacity-[0.1] blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-indigo-50 text-brand-indigo">
              Experience
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">職涯與實戰</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              15 年跨領域工作經驗，每段歷程都在強化對品牌行銷的理解與執行深度。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {stats.map((s, i) => (
              <AnimatedCard key={i} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">
                    {s.value}<span className="text-brand-purple text-base sm:text-lg">{s.unit}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {timeline.map((period, pi) => (
              <ScrollReveal key={pi} delay={pi * 0.05}>
                <div>
                  {/* Period header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
                      {period.icon}
                    </div>
                    <h2 className="font-heading font-bold text-lg text-gray-900">{period.period}</h2>
                  </div>

                  {/* Items */}
                  <div className="space-y-4 ml-12">
                    {period.items.map((item, ii) => (
                      <AnimatedCard key={ii} delay={0.05 + ii * 0.06} hoverLift>
                        <div className="bg-surface rounded-2xl p-6 border border-gray-100">
                          <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-4">
                            <div className="flex-1">
                              <h3 className="font-heading font-bold text-gray-900 text-base">{item.title}</h3>
                              {'highlight' in item && item.highlight && (
                                <span className="inline-block mt-1.5 px-3 py-0.5 rounded-full text-xs font-semibold gradient-bg text-white">
                                  {item.highlight}
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {item.tags.map((tag) => (
                                <span key={tag} className="px-2.5 py-0.5 rounded-full bg-purple-50 text-brand-purple text-xs font-medium">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {item.points.map((pt, pti) => (
                              <li key={pti} className="flex items-start gap-2.5 text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-violet mt-1.5 shrink-0" />
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </AnimatedCard>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
