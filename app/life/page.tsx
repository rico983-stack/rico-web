'use client'
import SectionTitle from '@/components/SectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'
import { MapPin, Coffee, Plane, Sprout } from 'lucide-react'

const journeyItems = [
  {
    icon: <Coffee size={18} />,
    period: '學生時代',
    title: '打工養自己的各種嘗試',
    location: '台灣各地',
    color: 'from-[#C084FC] to-[#818CF8]',
    desc: '學生時代為了生活費和體驗，嘗試各種不同性質的工作，每一份都留下了不同的生命印記。',
    experiences: [
      { name: '火鍋店員工', note: '高壓環境，學習快速應變與團隊配合' },
      { name: '家樂福收銀', note: '學習與各種顧客互動的耐心與應對' },
      { name: '冰店員工', note: '夏日高峰工作節奏，手速與記憶力的訓練' },
      { name: '市調公司 QC 複查人員', note: '嚴謹的資料品質把關，培養細節敏感度' },
      { name: '酒吧店長', note: '獨自負責店面運營，學習管理與業務的現實面' },
    ],
  },
  {
    icon: <MapPin size={18} />,
    period: '南漂 4 年',
    title: '高雄生活：工作與進修並行',
    location: '高雄市',
    color: 'from-[#818CF8] to-[#93C5FD]',
    desc: '離開熟悉的台北，在高雄展開 4 年的生活，工作的同時也持續進修，讓自己有更多時間重新認識自己。',
    experiences: [
      { name: '在地生活', note: '體驗南台灣的生活步調與人情味' },
      { name: '工作磨練', note: '在設計與行銷領域持續累積實戰經驗' },
      { name: '持續進修', note: '利用課後時間學習新技能，充實自己' },
    ],
  },
  {
    icon: <Sprout size={18} />,
    period: '澎湖打工換宿',
    title: '澎湖一個月，放慢腳步的生活實驗',
    location: '澎湖',
    color: 'from-[#93C5FD] to-[#C084FC]',
    desc: '以勞動換取食宿，在離島體驗截然不同的生活節奏，發現生活可以比想像中更簡單，也更豐富。',
    experiences: [
      { name: '房務打掃', note: '早起工作，用雙手維持環境整潔的踏實感' },
      { name: '背包客接待', note: '接待來自各地的旅人，聽見不同的生命故事' },
      { name: '平面設計支援', note: '以設計技能回饋換宿，創造雙贏' },
    ],
  },
  {
    icon: <Plane size={18} />,
    period: '澳洲打工度假',
    title: '澳洲一個半月，短暫的菜農生活',
    location: '澳洲',
    color: 'from-[#C084FC] to-[#93C5FD]',
    desc: '用最短的時間，體驗了海外生活的真實樣貌。烈日下的農場工作，讓我對「勞動的意義」有了全新的理解。',
    experiences: [
      { name: '菜農生活', note: '農場採收工作，體驗台灣人在海外的生存智慧' },
      { name: '多元文化接觸', note: '與來自各國的背包客共事，打開國際視野' },
      { name: '獨立生活', note: '在語言不通的環境中自力更生，強化問題解決能力' },
    ],
  },
]

export default function LifePage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-gradient-to-tr from-[#93C5FD] to-[#C084FC] opacity-[0.08] blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-sky-50 text-sky-700">
              Life Journey
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">人生與體驗</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              人生的豐富不只來自工作，每一段不同的體驗，都在塑造我看待世界的方式。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {journeyItems.map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.1} hoverLift>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${item.color} p-6 sm:p-8`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-white/20 p-1.5 rounded-lg text-white">{item.icon}</span>
                          <span className="text-white/80 text-sm font-medium">{item.period}</span>
                        </div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">{item.title}</h2>
                      </div>
                      <div className="flex items-center gap-1 bg-white/20 px-3 py-1.5 rounded-full shrink-0">
                        <MapPin size={12} className="text-white" />
                        <span className="text-white text-xs font-medium">{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 sm:p-8">
                    <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.experiences.map((exp, ei) => (
                        <div key={ei} className="bg-surface rounded-xl p-4">
                          <div className="font-semibold text-gray-900 text-sm mb-1">{exp.name}</div>
                          <div className="text-gray-500 text-xs leading-relaxed">{exp.note}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="gradient-bg rounded-3xl p-10 sm:p-14 text-white text-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-5">
                每段經歷，都是品牌故事的一部分
              </h2>
              <p className="text-white/80 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
                從酒吧店長到菜農，從影片剪輯到 B2B 行銷策略，
                這些看似跳躍的人生經歷，讓我能夠用更多元的視角，
                理解每個品牌背後真實的人與故事。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
