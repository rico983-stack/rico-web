'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight, Sparkles, Palette, TrendingUp, Globe, Bot,
  Star, MapPin, Calendar, Briefcase, GraduationCap, PawPrint,
  Brain, Target, Users, MessageSquare, ChevronRight,
} from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import ScrollReveal from '@/components/ScrollReveal'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function heroAnim(delay = 0): Record<string, any> {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay },
  }
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
        {/* Glow orbs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#C084FC] via-[#818CF8] to-[#93C5FD] opacity-[0.12] blur-[100px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-0 left-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#93C5FD] to-[#C084FC] opacity-[0.10] blur-[90px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          {/* Badge */}
          <motion.div
            {...heroAnim(0)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-violet/30 bg-purple-50 text-sm text-brand-purple font-medium mb-7"
          >
            <Sparkles size={13} className="text-brand-violet" />
            品牌設計師 × 數位行銷人 × 療癒師
          </motion.div>

          {/* Name */}
          <motion.h1
            {...heroAnim(0.1)}
            className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-5"
          >
            Rico Lin
          </motion.h1>

          {/* Tagline */}
          <motion.p
            {...heroAnim(0.2)}
            className="text-xl sm:text-2xl font-medium text-gray-800 leading-relaxed mb-4 max-w-2xl"
          >
            我結合設計、行銷、SEO 與內容策略，<br className="hidden sm:block" />
            打造兼具美感與轉換力的品牌表現。
          </motion.p>

          {/* Subtitle */}
          <motion.p
            {...heroAnim(0.3)}
            className="text-base sm:text-lg text-gray-500 leading-relaxed mb-10 max-w-xl"
          >
            從設計、影音、網站到 B2B 數位行銷，我擅長把想法整理成能被看見、被理解、被轉換的內容與品牌體驗。
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...heroAnim(0.4)}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-7 py-3 gradient-bg text-white font-semibold rounded-full hover:opacity-90 hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              查看職涯與實戰
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/project-inquiry"
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-brand-purple text-brand-purple font-semibold rounded-full hover:bg-brand-purple hover:text-white transition-all duration-200"
            >
              合作需求
            </Link>
            <Link
              href="/healing-booking"
              className="inline-flex items-center gap-2 px-7 py-3 bg-gray-50 text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              療癒預約
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...heroAnim(0.55)}
            className="mt-16 flex flex-wrap gap-x-10 gap-y-6"
          >
            {[
              { value: '15年', label: '跨領域工作經驗' },
              { value: '850%', label: '年度流量提升' },
              { value: '60+', label: '海外詢問增加' },
              { value: '7位數', label: '廣告預算操作' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-heading text-3xl sm:text-4xl font-bold gradient-text leading-none">{s.value}</span>
                <span className="text-sm text-gray-400 mt-1.5">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400"
        >
          <span className="text-xs tracking-wider">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-px h-7 bg-gradient-to-b from-gray-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────── */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title="關於我"
              subtitle="一個喜歡整合、思考與創作的數位品牌人"
              tag="About"
            />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { icon: <Star size={18} />, label: '星座', value: '天蠍座' },
              { icon: <MapPin size={18} />, label: '居住地', value: '台北市' },
              { icon: <Calendar size={18} />, label: '年齡', value: '39 歲' },
              { icon: <Briefcase size={18} />, label: '工作年資', value: '15 年' },
              { icon: <GraduationCap size={18} />, label: '學歷', value: '資訊管理系' },
              { icon: <PawPrint size={18} />, label: '毛孩', value: '14歲馬爾濟斯' },
            ].map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.06} hoverLift>
                <div className="bg-white rounded-2xl p-4 lg:p-5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5 leading-snug">{item.value}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSONALITY ───────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title="性格與思維"
              subtitle="理性驅動，直覺感知，深度交流"
              tag="Personality"
            />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* MBTI Card */}
            <AnimatedCard delay={0.05} hoverLift className="lg:col-span-1">
              <div className="gradient-bg rounded-2xl p-8 text-white h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest opacity-70">MBTI</span>
                  <div className="text-5xl font-heading font-bold mt-2 mb-1">ENTJ</div>
                  <div className="text-lg font-medium opacity-90">指揮官</div>
                </div>
                <p className="mt-6 text-sm opacity-80 leading-relaxed">
                  天生的領導者，擅長長期規劃與系統化思考，致力於將資源整合後推動實現。
                </p>
              </div>
            </AnimatedCard>

            {/* Trait cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Target size={18} />, title: '長期規劃', desc: '擅長制定長期目標，並將大局分解為可執行的計畫與步驟。' },
                { icon: <Brain size={18} />, title: '系統化思考', desc: '從整體架構出發，理解各環節的關聯，找到最有效的介入點。' },
                { icon: <Users size={18} />, title: '整合資源', desc: '善於協調不同角色與資源，讓各方力量集中在同一個目標上。' },
                { icon: <MessageSquare size={18} />, title: '深度交流', desc: '雖然外表安靜，但非常重視觀察與理解，偏好有深度的對話。' },
              ].map((t, i) => (
                <AnimatedCard key={i} delay={0.1 + i * 0.07} hoverLift>
                  <div className="bg-surface border border-gray-100 rounded-2xl p-5 h-full">
                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-brand-purple mb-3">
                      {t.icon}
                    </div>
                    <h4 className="font-heading font-semibold text-gray-900 mb-1.5">{t.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS PREVIEW ────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionTitle
              title="能力與技能"
              subtitle="多元整合，設計到行銷一手包辦"
              tag="Skills"
            />
            <Link
              href="/skills"
              className="inline-flex items-center gap-1 text-sm text-brand-purple font-medium hover:gap-2 transition-all"
            >
              查看完整技能 <ChevronRight size={15} />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Palette size={22} />,
                category: '設計能力',
                skills: ['Logo 設計', 'DM 設計', '海報設計', '名片設計', '產品包裝設計'],
                color: 'from-[#C084FC] to-[#818CF8]',
              },
              {
                icon: <TrendingUp size={22} />,
                category: '數位行銷',
                skills: ['Google Ads', 'SEO / GEO', 'EDM 行銷', '社群內容規劃'],
                color: 'from-[#818CF8] to-[#93C5FD]',
              },
              {
                icon: <Globe size={22} />,
                category: '網站工具',
                skills: ['WordPress', 'LINE 官方帳號', '基本 SEO 架構', '頁面內容編排'],
                color: 'from-[#93C5FD] to-[#818CF8]',
              },
              {
                icon: <Bot size={22} />,
                category: 'AI 工具應用',
                skills: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
                color: 'from-[#C084FC] to-[#93C5FD]',
              },
            ].map((cat, i) => (
              <AnimatedCard key={i} delay={i * 0.08} hoverLift>
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mb-4`}>
                    {cat.icon}
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 mb-3">{cat.category}</h4>
                  <ul className="space-y-1.5">
                    {cat.skills.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full gradient-bg-soft inline-block shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE PREVIEW ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionTitle
              title="職涯與實戰"
              subtitle="15 年跨領域，從設計到 B2B 行銷策略"
              tag="Experience"
            />
            <Link
              href="/experience"
              className="inline-flex items-center gap-1 text-sm text-brand-purple font-medium hover:gap-2 transition-all"
            >
              查看完整職涯 <ChevronRight size={15} />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {[
              { value: '15', unit: '年', label: '跨領域工作' },
              { value: '850', unit: '%', label: '流量年度提升' },
              { value: '60', unit: '+', label: '海外詢問增加' },
              { value: '7', unit: '位數', label: '廣告預算操作' },
              { value: '3', unit: '名', label: '行銷人員管理' },
            ].map((s, i) => (
              <AnimatedCard key={i} delay={i * 0.07}>
                <div className="bg-surface rounded-2xl p-5 text-center">
                  <div className="font-heading text-3xl font-bold text-gray-900">
                    {s.value}<span className="text-brand-purple text-xl">{s.unit}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5">{s.label}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="bg-surface rounded-2xl p-6 sm:p-8">
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                橫跨教學、設計、影像、電商、B2B 行銷與傳統製造業品牌經營，每段經歷都在強化我對「如何讓品牌被看見」的理解與執行力。
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['教學與培訓', '平面設計', '影音剪輯', '電商經營', 'B2B 行銷', 'SEO/GEO', '展覽企劃', '廣告投放', '跨國市場'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-200 text-xs text-gray-600 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="gradient-bg py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
                準備好開始了嗎？
              </h2>
              <p className="text-white/70 text-lg">選擇你需要的服務，讓我們一起創造價值</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                href: '/project-inquiry',
                title: '合作需求',
                desc: '品牌設計、SEO、廣告投放、WordPress 建站',
                cta: '填寫需求',
                light: true,
              },
              {
                href: '/healing-booking',
                title: '療癒預約',
                desc: '頌缽療癒 + 精油按摩，到府服務限雙北',
                cta: '立即預約',
                light: false,
              },
              {
                href: '/contact',
                title: '聯絡我',
                desc: '有想法想聊聊？歡迎任何交流與提問',
                cta: '取得聯絡',
                light: true,
              },
            ].map((card, i) => (
              <AnimatedCard key={i} delay={i * 0.1} hoverLift>
                <div className={`rounded-2xl p-7 h-full flex flex-col ${
                  card.light ? 'bg-white/15 backdrop-blur-sm' : 'bg-white'
                }`}>
                  <h3 className={`font-heading text-xl font-bold mb-2 ${card.light ? 'text-white' : 'text-gray-900'}`}>
                    {card.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 flex-1 ${card.light ? 'text-white/75' : 'text-gray-500'}`}>
                    {card.desc}
                  </p>
                  <Link
                    href={card.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5 ${
                      card.light ? 'text-white' : 'text-brand-purple'
                    }`}
                  >
                    {card.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
