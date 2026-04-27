import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

interface PageCTAProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  light?: boolean
}

export default function PageCTA({
  title = '準備好開始了嗎？',
  subtitle = '告訴我你的目標，讓我們一起找到最有效的方案。',
  primaryLabel = '填寫合作需求',
  primaryHref = '/project-inquiry',
  secondaryLabel = '加 LINE 聊聊',
  secondaryHref = 'https://lin.ee/Th8VXd1',
  light = false,
}: PageCTAProps) {
  return (
    <section className={`py-20 lg:py-24 ${light ? 'bg-white' : 'gradient-bg'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`font-heading text-3xl sm:text-4xl font-bold mb-3 ${light ? 'text-gray-900' : 'text-white'}`}>
          {title}
        </h2>
        <p className={`text-base sm:text-lg mb-8 leading-relaxed ${light ? 'text-gray-500' : 'text-white/75'}`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={primaryHref}
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
              light
                ? 'gradient-bg text-white hover:shadow-lg hover:shadow-purple-200'
                : 'bg-white text-brand-purple hover:shadow-lg hover:shadow-black/10'
            }`}
          >
            {primaryLabel}
            <ArrowRight size={15} />
          </Link>
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 ${
              light
                ? 'border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white'
                : 'border-2 border-white/40 text-white hover:border-white hover:bg-white/10'
            }`}
          >
            <MessageCircle size={15} />
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
