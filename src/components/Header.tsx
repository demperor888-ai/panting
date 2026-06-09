'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);
      setHidden(currentY > lastScrollY && currentY > 200);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: '首页', href: '/' },
    { name: '产品中心', href: '/products' },
    { name: '新闻资讯', href: '/news' },
    { name: '成功案例', href: '/cases' },
    { name: '关于我们', href: '/about' },
    { name: '联系我们', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-2xl shadow-glass border-b border-cyan-900/10'
          : 'bg-white/70 backdrop-blur-lg border-b border-white/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-brand shadow-glow transition-shadow duration-300 group-hover:shadow-glow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="absolute inset-x-1 top-1 h-px bg-cyan-200/70" />
              <span className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-200/70" />
              <span className="text-white font-bold text-sm tracking-tight">PTSK</span>
            </motion.div>
            <div>
              <h1 className="text-lg font-bold text-surface-800 leading-tight">{siteConfig.shortName}</h1>
              <p className="text-xs text-brand-600 font-medium">Advanced Materials</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-surface-600 hover:text-brand-700 transition-colors duration-200 font-medium text-sm group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-amber-300 rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </nav>

          <motion.a
            href={`tel:${siteConfig.phone}`}
            className="hidden lg:inline-flex items-center gap-2 rounded-lg border border-cyan-900/10 bg-surface-900 px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(6,17,31,0.18)] transition hover:bg-brand-800 hover:shadow-[0_14px_34px_rgba(18,199,181,0.22)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_12px_rgba(45,212,191,0.9)]" />
            技术咨询
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-surface-100 transition"
            aria-label="菜单"
          >
            <svg className="w-6 h-6 text-surface-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-surface-100"
            >
              <nav className="flex flex-col space-y-1 py-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="px-4 py-3 text-surface-600 hover:text-brand-600 hover:bg-brand-50/50 rounded-lg transition font-medium block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
