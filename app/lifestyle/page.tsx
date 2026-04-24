'use client'
import SectionTitle from '@/components/SectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'
import { UtensilsCrossed, Hand, BookOpen, PawPrint, Heart, ShoppingBag } from 'lucide-react'

const categories = [
  {
    icon: <UtensilsCrossed size={20} />,
    title: '生活與飲食',
    color: 'from-[#C084FC] to-[#818CF8]',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    items: [
      { name: '逛菜市場買菜料理', emoji: '🥬', desc: '喜歡自己採買食材，感受食材從產地到餐桌的過程。' },
      { name: '吃美食', emoji: '🍜', desc: '探索各種風味，從街邊小吃到精緻料理，都值得細細品味。' },
      { name: '研究健康飲食', emoji: '🥗', desc: '關注身體的回饋，用食物照顧自己的健康與能量。' },
    ],
  },
  {
    icon: <Hand size={20} />,
    title: '手作與品味',
    color: 'from-[#818CF8] to-[#93C5FD]',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    items: [
      { name: '拉胚 4 年', emoji: '🏺', desc: '持續進行中。用雙手在旋轉的陶土上找到靜心的節奏，每件作品都是獨一無二的。' },
      { name: '烘咖啡豆', emoji: '☕', desc: '從生豆到熟豆，掌握火候與時間，體驗咖啡最原始的香氣變化。' },
      { name: '手沖咖啡', emoji: '☕', desc: '每一杯都是一種儀式感，讓自己在忙碌中停下來感受當下。' },
      { name: '炭火喝茶聊天', emoji: '🍵', desc: '用炭火煮水、泡茶、聊天，這是最喜歡的慢生活方式之一。' },
    ],
  },
  {
    icon: <BookOpen size={20} />,
    title: '學習與觀察',
    color: 'from-[#93C5FD] to-[#818CF8]',
    bgColor: 'bg-sky-50',
    textColor: 'text-sky-700',
    items: [
      { name: '研究機車保養', emoji: '🔧', desc: '自己動手維護機車，從排氣管到輪胎，實際了解機械原理。' },
      { name: '閱讀投資理財文章', emoji: '📈', desc: '長期追蹤財務知識，建立自己對金錢的理解與規劃習慣。' },
      { name: '看商周和各類電子報', emoji: '📰', desc: '持續吸收商業、科技、行銷等領域的最新洞見。' },
    ],
  },
  {
    icon: <PawPrint size={20} />,
    title: '毛孩',
    color: 'from-[#C084FC] to-[#93C5FD]',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-700',
    items: [
      { name: '自己修剪毛孩', emoji: '🐶', desc: '親手為 14 歲的馬爾濟斯毛孩修剪毛髮，是陪伴與愛的一種表達。' },
    ],
  },
  {
    icon: <Heart size={20} />,
    title: '療癒與志工',
    color: 'from-[#818CF8] to-[#C084FC]',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-700',
    items: [
      { name: '頌缽療癒', emoji: '🪘', desc: '學習頌缽的療癒藝術，以聲音與振動幫助身心回到平靜狀態。' },
      { name: '已持有正式志工證', emoji: '📜', desc: '通過培訓，取得正式認證，以更規範的方式服務需要幫助的人。' },
      { name: '芳療按摩志工', emoji: '🌿', desc: '幫助弱勢老人舒緩身體，用雙手傳遞溫暖與關懷。' },
      { name: '頌缽志工', emoji: '🙏', desc: '針對精障者進行頌缽療癒安撫，讓音頻振動帶來平靜與放鬆。' },
    ],
  },
  {
    icon: <ShoppingBag size={20} />,
    title: '小小生意',
    color: 'from-[#93C5FD] to-[#C084FC]',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    items: [
      { name: '假日咖啡販售', emoji: '☕', desc: '在假日市集賣過自己烘焙的手沖咖啡，感受直接與人交流的樂趣。' },
      { name: '小咖啡店經營', emoji: '🏪', desc: '短暫經營小咖啡店，體驗從採購、製作到服務的完整商業流程。' },
      { name: '手工甜點製作', emoji: '🍰', desc: '布朗尼、瑪德蓮、檸檬老奶奶蛋糕、提拉米蘇、烤布蕾——每道都是認真研究的成果。' },
      { name: '手工肥皂 · 水果醋 · 精油蠟燭', emoji: '🧴', desc: '把對天然手作的熱情，轉化成可以與人分享的產品。' },
    ],
  },
]

export default function LifestylePage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-gradient-to-bl from-[#C084FC] to-[#818CF8] opacity-[0.08] blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
              Lifestyle
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">興趣與生活</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              工作之外，我是一個熱愛手作、喜歡慢生活、也在療癒他人的人。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {categories.map((cat, ci) => (
            <ScrollReveal key={ci} delay={ci * 0.05}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white`}>
                    {cat.icon}
                  </div>
                  <h2 className="font-heading font-bold text-xl text-gray-900">{cat.title}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item, ii) => (
                    <AnimatedCard key={ii} delay={ii * 0.07} hoverLift>
                      <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-3xl mb-3">{item.emoji}</div>
                        <h3 className={`font-heading font-semibold text-sm mb-2 ${cat.textColor}`}>{item.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Highlight: Healing volunteer */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="gradient-bg rounded-3xl p-10 sm:p-12 text-white">
              <div className="text-4xl mb-5">🙏</div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
                療癒，是一種生活方式
              </h2>
              <p className="text-white/80 leading-relaxed text-base sm:text-lg mb-6">
                頌缽療癒不只是一項技能，更是我對生活態度的體現。
                持有正式志工證，定期到機構服務弱勢老人與精障者，
                用聲音振動帶來平靜，是我認為最有意義的事之一。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: '頌缽療癒', value: '正式志工' },
                  { label: '芳療按摩', value: '弱勢老人服務' },
                  { label: '個人服務', value: '到府頌缽預約' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/15 rounded-xl p-4 text-center backdrop-blur-sm">
                    <div className="font-heading font-bold text-lg">{s.value}</div>
                    <div className="text-white/70 text-xs mt-1">{s.label}</div>
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
