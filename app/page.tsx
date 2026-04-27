'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight, TrendingUp, Search, MousePointerClick, Palette,
  CheckCircle, MessageCircle, ChevronRight,
} from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function a(delay = 0): Record<string, any> {
  return { initial: { opacity: 0, y: 26 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } }
}

const painPoints = [
  { icon: '🌐', title: '有網站，但客戶找不到你', desc: '網站做完就沒人維護，Google 搜尋不到，流量掛零。' },
  { icon: '📢', title: '投了廣告，但詢問很少', desc: '每個月燒掉幾萬元廣告費，但實際詢問換算成本超高。' },
  { icon: '📉', title: '有流量，但轉換率很低', desc: '分析工具顯示有人來，但沒有人留下聯絡或詢問。' },
  { icon: '🎨', title: '有設計，但沒有策略', desc: '網站很漂亮，卻沒有清楚的CTA，訪客不知道下一步。' },
]

const services = [
  {
    icon: <Search size={22} />,
    tag: 'SEO / GEO',
    title: '讓客戶主動找到你',
    desc: '從技術架構到內容策略，讓你的網站在 Google 和 AI 搜尋中都能被看見。',
    metric: '年度流量 +850%',
    color: 'from-[#C084FC] to-[#818CF8]',
    href: '/services#seo',
  },
  {
    icon: <TrendingUp size={22} />,
    tag: 'Google Ads',
    title: '精準觸及，不浪費預算',
    desc: '自行操作七位數廣告預算，CTR 最高 13.84%，讓每一分錢都花在刀口上。',
    metric: 'CTR 13.84%（台灣 B2B）',
    color: 'from-[#818CF8] to-[#93C5FD]',
    href: '/services#ads',
  },
  {
    icon: <MousePointerClick size={22} />,
    tag: '網站轉換設計',
    title: '讓流量真正變成詢問',
    desc: '重新規劃頁面架構與 CTA 設計，讓每個訪客都有機會變成你的客戶。',
    metric: '轉換率 56.61%（台灣 B2B）',
    color: 'from-[#93C5FD] to-[#C084FC]',
    href: '/services#conversion',
  },
  {
    icon: <Palette size={22} />,
    tag: '品牌設計',
    title: '讓人記住你、相信你',
    desc: 'Logo、視覺系統、DM、社群素材，從視覺層面建立品牌信任感。',
    metric: '附加服務',
    color: 'from-[#C084FC] to-[#93C5FD]',
    href: '/services#design',
  },
]

const results = [
  { value: '850%', label: '年度網站流量提升', context: 'SEO + GEO 優化' },
  { value: '60+', label: '海外市場詢問增加', context: '多語系 + 廣告投放' },
  { value: '13.84%', label: 'B2B 搜尋廣告 CTR', context: '台灣市場 Google Ads' },
  { value: '56.61%', label: '廣告轉換率', context: '台灣 B2B 市場' },
]

const collabSteps = [
  { n: '01', title: '填寫需求', desc: '簡單說明你的目標、現況與預算' },
  { n: '02', title: '免費諮詢', desc: '30 分鐘了解問題，提供初步建議' },
  { n: '03', title: '確認方案', desc: '提供服務範圍與月費報價' },
  { n: '04', title: '長期合作', desc: '按月執行、定期報告、持續優化' },
]

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
        {/* Orbs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#C084FC] via-[#818CF8] to-[#93C5FD] opacity-[0.11] blur-[110px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-10 left-[-80px] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#93C5FD] to-[#C084FC] opacity-[0.09] blur-[90px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div {...a(0)} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-violet/30 bg-purple-50 text-xs text-brand-purple font-semibold mb-7 tracking-wide">
              SEO · Google Ads · 網站轉換設計 · 長期合作
            </motion.div>

            {/* Headline */}
            <motion.h1 {...a(0.1)} className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              我幫創業者打造<br />
              <span className="gradient-text">能帶來客戶</span>的<br />
              行銷系統
            </motion.h1>

            {/* Sub */}
            <motion.p {...a(0.22)} className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
              不只做設計 — 讓 SEO、廣告與網站設計整合運作，<br className="hidden sm:block" />
              把流量真正變成詢問與長期客戶。
            </motion.p>

            {/* CTA */}
            <motion.div {...a(0.34)} className="flex flex-wrap gap-3">
              <Link
                href="/project-inquiry"
                className="inline-flex items-center gap-2 px-7 py-3.5 gradient-bg text-white font-bold rounded-full hover:opacity-90 hover:shadow-xl hover:shadow-purple-200 hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                查看服務方案
                <ArrowRight size={15} />
              </Link>
              <a
                href="https://lin.ee/Th8VXd1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-brand-purple hover:text-brand-purple transition-all duration-200 text-sm"
              >
                <MessageCircle size={15} />
                免費諮詢 30 分鐘
              </a>
            </motion.div>
          </div>

          {/* Results strip */}
          <motion.div {...a(0.5)} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl">
            {results.map((r, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-heading text-3xl sm:text-4xl font-bold gradient-text leading-none">{r.value}</span>
                <span className="text-xs text-gray-400 mt-1.5 leading-snug">{r.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400"
        >
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
            className="w-px h-7 bg-gradient-to-b from-gray-400 to-transparent" />
        </motion.div>
      </section>

      {/* ── PAIN POINTS ──────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-red-50 text-red-500">
                你是否有這些困擾？
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
                很多品牌都卡在這裡
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {painPoints.map((p, i) => (
              <AnimatedCard key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 h-full border border-red-50 hover:border-red-100 hover:shadow-md transition-all">
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="font-heading font-bold text-gray-900 text-sm mb-2 leading-snug">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                這些問題我都遇過，也都解決過 →
                <Link href="/experience" className="text-brand-purple font-medium ml-1 hover:underline">
                  看成果案例
                </Link>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
                Services
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
                我能幫你解決的問題
              </h2>
              <p className="text-gray-500 mt-2">不是賣技能，是幫你帶來客戶</p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1 text-sm text-brand-purple font-medium hover:gap-2 transition-all shrink-0">
              查看完整方案 <ChevronRight size={15} />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <AnimatedCard key={i} delay={i * 0.07} hoverLift>
                <Link href={s.href} className="block bg-surface rounded-2xl p-6 h-full hover:shadow-md transition-shadow group">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-4`}>
                    {s.icon}
                  </div>
                  <span className="text-xs font-semibold text-gray-400 mb-1 block">{s.tag}</span>
                  <h3 className="font-heading font-bold text-gray-900 text-base mb-2 group-hover:text-brand-purple transition-colors">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs text-gray-700">
                    <CheckCircle size={11} className="text-brand-purple" />
                    {s.metric}
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-indigo-50 text-brand-indigo">
                Results
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
                數字說明一切
              </h2>
              <p className="text-gray-500 mt-2">真實的執行成果，不是估算數字</p>
            </div>
            <Link href="/experience" className="inline-flex items-center gap-1 text-sm text-brand-purple font-medium hover:gap-2 transition-all shrink-0">
              查看完整案例 <ChevronRight size={15} />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {results.map((r, i) => (
              <AnimatedCard key={i} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="font-heading text-3xl sm:text-4xl font-bold gradient-text leading-none mb-1">{r.value}</div>
                  <div className="text-sm font-semibold text-gray-800 mt-2">{r.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{r.context}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: '廣告預算操作', value: '七位數（自行操作）', note: '每年省下 20% 代操費用' },
                  { label: '海外市場開拓', value: '越南、美國、日本', note: '多語系 SEO + 國際廣告' },
                  { label: '商標註冊', value: '台灣、美國、中國', note: '品牌保護全面佈局' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xs text-gray-400 mb-1">{item.label}</span>
                    <span className="font-heading font-bold text-gray-900 text-lg">{item.value}</span>
                    <span className="text-xs text-gray-500 mt-1">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HOW I WORK ───────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-purple-50 text-brand-purple">
              How I work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              長期合作，不是一次性接案
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              行銷的成果需要時間累積。我不做一次性交付後就結束，而是持續優化、按月執行、讓數字持續成長。
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-10">
            {collabSteps.map((step, i) => (
              <AnimatedCard key={i} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center p-5">
                  <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center text-white font-bold text-sm mb-4">
                    {step.n}
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 text-sm mb-1.5">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="gradient-bg rounded-2xl p-7 sm:p-9 text-white">
              <h3 className="font-heading font-bold text-xl mb-4">月費合作方案包含</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { t: 'SEO 持續優化', d: '關鍵字監測、內容優化、技術維護' },
                  { t: 'Google Ads 管理', d: '廣告策略調整、出價優化、報告分析' },
                  { t: '網站維護與優化', d: 'CTA 調整、轉換追蹤、使用者體驗改善' },
                ].map((item) => (
                  <div key={item.t} className="bg-white/15 rounded-xl p-4 backdrop-blur-sm">
                    <div className="font-semibold text-sm mb-1">{item.t}</div>
                    <div className="text-white/70 text-xs leading-relaxed">{item.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PERSONAL TOUCH ───────────────────────────── */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-8 shadow-sm">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl gradient-bg-soft flex items-center justify-center text-3xl">
                  🪘
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">工作之外：頌缽療癒</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                  我不只是一個行銷顧問。每週我也以志工身份做頌缽療癒，幫助有需要的人放鬆、回到當下。
                  這讓我在做行銷時，也不忘保有「人味」與同理心 — 這正是很多品牌行銷缺少的東西。
                </p>
                <Link
                  href="/healing-booking"
                  className="inline-flex items-center gap-1.5 text-sm text-brand-purple font-semibold hover:gap-2.5 transition-all"
                >
                  了解頌缽療癒預約 <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="gradient-bg py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              你的網站<br />應該要帶來客戶
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              讓我告訴你，你的品牌缺少的那一塊是什麼。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/project-inquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-purple font-bold rounded-full hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                填寫合作需求 <ArrowRight size={15} />
              </Link>
              <a
                href="https://lin.ee/Th8VXd1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:border-white hover:bg-white/10 transition-all duration-200 text-sm"
              >
                <MessageCircle size={15} />
                加 LINE 諮詢
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
