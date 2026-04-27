import Link from 'next/link'
import { Mail, MessageCircle, Globe, Sparkles } from 'lucide-react'

const footerLinks = [
  {
    title: '服務',
    links: [
      { href: '/services', label: '服務方案' },
      { href: '/project-inquiry', label: '開始合作' },
      { href: '/experience', label: '成果案例' },
      { href: '/healing-booking', label: '療癒預約' },
    ],
  },
  {
    title: '關於',
    links: [
      { href: '/about', label: '關於我' },
      { href: '/contact', label: '聯絡我' },
      { href: '/skills', label: '能力與技能' },
      { href: '/lifestyle', label: '興趣與生活' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Sparkles size={14} className="text-white" />
              </span>
              <span className="font-heading font-bold text-lg gradient-text">Rico Lin</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-2 max-w-xs">
              行銷導向的個人品牌接案者
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mb-5 max-w-xs">
              專注 SEO · Google Ads · 網站轉換設計<br />
              幫創業者打造能帶來客戶的行銷系統
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:reihoo75@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
              <a
                href="https://lin.ee/Th8VXd1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LINE"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/rico1986/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Globe size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Rico Lin. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            SEO · Google Ads · 網站轉換 · 頌缽療癒 · 台北
          </p>
        </div>
      </div>
    </footer>
  )
}
