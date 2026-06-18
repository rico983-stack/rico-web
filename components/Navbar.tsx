'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sparkles } from 'lucide-react'

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
          ? 'bg-white/96 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <Sparkles size={14} className="text-white" />
            </span>
            <span className="font-heading font-bold text-lg gradient-text-purple">
              Rico Lin
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
                    ? 'text-brand-purple bg-purple-50'
                    : 'text-gray-600 hover:text-brand-purple hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="w-px h-4 bg-gray-200 mx-2" />

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
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-brand-purple hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-purple bg-purple-50'
                    : 'text-gray-700 hover:text-brand-purple hover:bg-gray-50'
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
