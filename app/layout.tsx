import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Rico Lin | 品牌設計 × 數位行銷 × 療癒預約',
    template: '%s | Rico Lin',
  },
  description:
    '我結合設計、行銷、SEO 與內容策略，打造兼具美感與轉換力的品牌表現。15年跨領域工作經驗，橫跨設計、影像、電商、B2B行銷與療癒服務。',
  keywords: ['Rico Lin', '品牌設計', '數位行銷', 'SEO', 'Google Ads', '療癒預約', '頌缽', 'WordPress'],
  authors: [{ name: 'Rico Lin' }],
  openGraph: {
    title: 'Rico Lin | 品牌設計 × 數位行銷 × 療癒預約',
    description: '我結合設計、行銷、SEO 與內容策略，打造兼具美感與轉換力的品牌表現。',
    type: 'website',
    locale: 'zh_TW',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
