'use client'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Target, Brain, Users, TrendingUp } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'
import PageCTA from '@/components/PageCTA'

const approaches = [
  {
    icon: <Target size={18} />,
    title: '策略先於設計',
    desc: '我不會先問「想要什麼風格」，而是先問「你的客戶是誰、他們怎麼找到你」。每個設計決策都要服務轉換目標。',
  },
  {
    icon: <TrendingUp size={18} />,
    title: '數據驅動決策',
    desc: '用 GA4、GSC、Google Ads 的數據說話，不靠感覺調整，每次優化都有依據。',
  },
  {
    icon: <Brain size={18} />,
    title: '系統化思考',
    desc: '從整體架構出發，SEO、廣告、網站設計不是獨立工作，而是互相配合的系統。',
  },
  {
    icon: <Users size={18} />,
    title: '長期合作思維',
    desc: '我不做完就走。行銷需要時間累積，我喜歡和客戶建立長期夥伴關係，一起成長。',
  },
]

const experiences = [
  { year: '早期', desc: '微軟軟體教學、補習班老師，建立溝通與教學能力' },
  { year: '設計期', desc: '珠寶商美編、傳播公司剪輯員，從平面到影音全面磨練' },
  { year: '行銷轉型', desc: '進入 B2B 製造業，開始接觸 SEO、Google Ads、展覽行銷' },
  { year: '現在', desc: '整合設計 × 行銷 × SEO，以接案方式服務創業者與品牌' },
]

const personal = [
  {
    emoji: '🏺',
    title: '拉胚 4 年',
    desc: '在旋轉的陶土上找到靜心的節奏，持續進行中。',
    img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&auto=format&fit=crop&q=80',
    imgAlt: 'pottery throwing on wheel',
  },
  {
    emoji: '☕',
    title: '烘豆 × 手沖',
    desc: '從生豆到一杯咖啡，享受過程中的控制感。',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&auto=format&fit=crop&q=80',
    imgAlt: 'pour over coffee brewing',
  },
  {
    emoji: '🪘',
    title: '頌缽療癒',
    desc: '每週以志工身份服務弱勢長者與精障者，也提供個人預約。',
    img: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&auto=format&fit=crop&q=80',
    imgAlt: 'singing bowl meditation',
  },
  {
    emoji: '🥬',
    title: '逛菜市場',
    desc: '喜歡自己採買食材，感受生活最原始的節奏。',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop&q=80',
    imgAlt: 'fresh produce at market',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-gradient-to-bl from-[#C084FC] to-[#93C5FD] opacity-[0.09] blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
              About
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">關於我</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              Rico Lin — 行銷接案者，也是一個有溫度的人。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 lg:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Story */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm h-full">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-5 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
                  My Story
                </span>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  為什麼是我？
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    我不是科班出身的行銷人。我從平面設計、影音剪輯出發，然後才進入行銷世界 —
                    這讓我比很多人更理解「創作的過程」和「商業的目的」之間的張力。
                  </p>
                  <p>
                    在 B2B 製造業工作的那段時間，我從零開始建立 SEO 系統、自學 Google Ads、
                    打開海外市場，把年度流量提升 850%、讓海外詢問增加 60 筆以上。
                    這些不是案例，是我每天工作的真實數字。
                  </p>
                  <p>
                    現在我想把這些能力，用在更多想成長但不知道從哪開始的創業者身上。
                  </p>
                </div>

                <div className="mt-7 p-5 bg-surface rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'MBTI', value: 'ENTJ 指揮官' },
                      { label: '星座', value: '天蠍座' },
                      { label: '總工作年資', value: '15 年' },
                      { label: '所在地', value: '台北市' },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col">
                        <span className="text-xs text-gray-400">{item.label}</span>
                        <span className="text-sm font-semibold text-gray-800 mt-0.5">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Career timeline */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-sm h-full">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-5 px-3 py-1 rounded-full bg-indigo-50 text-brand-indigo">
                  Career Path
                </span>
                <h2 className="font-heading text-xl font-bold text-gray-900 mb-6">職涯軌跡</h2>
                <div className="space-y-5">
                  {experiences.map((e, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full gradient-bg mt-2 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-brand-purple">{e.year}</span>
                        <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{e.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-7">
                  <Link
                    href="/experience"
                    className="inline-flex items-center gap-1.5 text-sm text-brand-purple font-semibold hover:gap-2.5 transition-all"
                  >
                    查看完整成果案例 <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              <span className="gradient-text">我的工作方式</span>
            </h2>
            <p className="text-gray-500 mb-10">這些是驅動我做每個決策的核心原則</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {approaches.map((ap, i) => (
              <AnimatedCard key={i} delay={i * 0.08} hoverLift>
                <div className="bg-surface rounded-2xl p-6 h-full">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-brand-purple mb-4">
                    {ap.icon}
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 mb-2">{ap.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{ap.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Personal side */}
      <section className="py-14 lg:py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              工作以外的我
            </h2>
            <p className="text-gray-500 mb-10">這些讓我不只是一個「行銷工具人」</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {personal.map((p, i) => (
              <AnimatedCard key={i} delay={i * 0.07} hoverLift>
                <div className="bg-white rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.imgAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-2 left-3 text-2xl drop-shadow-lg">{p.emoji}</span>
                  </div>
                  <div className="p-4">
                    <div className="font-heading font-bold text-gray-900 text-sm mb-1.5">{p.title}</div>
                    <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Healing note */}
          <ScrollReveal delay={0.2} className="mt-6">
            <div className="gradient-bg rounded-2xl p-7 text-white flex flex-col sm:flex-row items-start gap-5">
              <div className="text-4xl">🙏</div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-2">頌缽療癒 — 我的另一個身份</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  我有正式的志工證，每週固定到機構為弱勢長者、精障者做頌缽療癒與芳療按摩。
                  同時也提供個人到府預約服務（限雙北市）。
                  這讓我在做行銷工作時，保有對「人」的敏感度與同理心。
                </p>
                <Link
                  href="/healing-booking"
                  className="inline-flex items-center gap-1.5 text-sm text-white font-semibold hover:gap-2.5 transition-all"
                >
                  了解頌缽預約 <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="想知道我能幫到你什麼？"
        subtitle="30 分鐘的免費諮詢，我告訴你你的品牌現在最需要做什麼。"
        primaryLabel="填寫合作需求"
        secondaryLabel="加 LINE 聊聊"
        secondaryHref="https://lin.ee/Th8VXd1"
      />
    </div>
  )
}
