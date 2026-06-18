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
  metadataBase: new URL('https://rico-web.vercel.app'),
  title: {
    default: '瑞虎商行｜網站、SEO 與廣告整合顧問',
    template: '%s｜瑞虎商行',
  },
  description:
    '協助台灣中小品牌整理網站、SEO、GEO 與 Google Ads，打造能帶來詢問的接案與行銷系統。',
  keywords: ['瑞虎商行', '網站規劃', 'SEO', 'GEO', 'Google Ads', '中小企業行銷', '品牌網站', '網站轉換率優化', '台灣接案顧問'],
  authors: [{ name: '瑞虎商行' }],
  creator: '瑞虎商行',
  publisher: '瑞虎商行',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: '瑞虎商行｜網站、SEO 與廣告整合顧問',
    description: '協助台灣中小品牌整理網站、SEO、GEO 與 Google Ads，打造能帶來詢問的接案與行銷系統。',
    type: 'website',
    locale: 'zh_TW',
  },
  twitter: {
    card: 'summary_large_image',
    title: '瑞虎商行｜網站、SEO 與廣告整合顧問',
    description: '協助台灣中小品牌整理網站、SEO、GEO 與 Google Ads，打造能帶來詢問的接案與行銷系統。',
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
