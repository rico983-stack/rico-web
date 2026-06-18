'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/services', label: '服務' },
  { href: '/experience', label: '案例' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: '關於' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-gray-950'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0" aria-label="瑞虎商行首頁">
            <span className="relative w-10 h-10 overflow-hidden shrink-0" aria-hidden="true">
              <Image src="/rei-hoo-logo.png" alt="" width={1920} height={1080} priority className="absolute left-1/2 top-1/2 w-[360px] max-w-none -translate-x-1/2 -translate-y-1/2" />
            </span>
            <span className="font-heading font-bold text-base sm:text-lg tracking-wide text-white">
              瑞虎商行
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-white bg-white/12'
                    : 'text-gray-300 hover:text-white hover:bg-white/8'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="w-px h-4 bg-white/20 mx-2" />

            <Link
              href="/project-inquiry"
              className="px-5 py-2 rounded-full text-sm font-semibold gradient-bg text-white hover:opacity-90 hover:shadow-md hover:shadow-purple-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              開始合作 →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden min-w-11 min-h-11 p-2 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? '關閉選單' : '開啟選單'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden py-3 border-t border-white/10 space-y-1 max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-white bg-white/12'
                    : 'text-gray-200 hover:text-white hover:bg-white/8'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link
                href="/project-inquiry"
                className="block text-center px-4 py-3 rounded-full gradient-bg text-white text-sm font-bold hover:opacity-90 transition-opacity"
              >
                開始合作 →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
