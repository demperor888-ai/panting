'use client';

import { useState, useEffect, useCallback } from 'react';
import { Banner as BannerType } from '@/data/siteData';
import Link from 'next/link';

interface BannerProps {
  banners: BannerType[];
}

export default function Banner({ banners }: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${banners[currentIndex].image})` }}
      >
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/60 to-transparent" />
      </div>

      {/* 科技几何装饰 — SVG 六边形与线条 */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
        {/* 六边形网格 */}
        <path d="M100 100 L130 80 L160 100 L160 140 L130 160 L100 140 Z" stroke="white" strokeWidth="2" />
        <path d="M160 100 L190 80 L220 100 L220 140 L190 160 L160 140 Z" stroke="white" strokeWidth="2" />
        <path d="M130 160 L160 140 L190 160 L190 200 L160 220 L130 200 Z" stroke="white" strokeWidth="2" />
        {/* 科技线条 */}
        <line x1="1300" y1="120" x2="1400" y2="120" stroke="white" strokeWidth="1" />
        <line x1="1300" y1="140" x2="1380" y2="140" stroke="white" strokeWidth="1" />
        <line x1="1320" y1="160" x2="1400" y2="160" stroke="white" strokeWidth="1" />
        <circle cx="1390" cy="120" r="3" fill="white" />
        <circle cx="1370" cy="140" r="3" fill="white" />
        <circle cx="1390" cy="160" r="3" fill="white" />
        {/* 右下角大六边形 */}
        <path d="M1320 420 L1360 400 L1400 420 L1400 470 L1360 490 L1320 470 Z" stroke="white" strokeWidth="1.5" />
        <path d="M1360 310 L1390 295 L1420 310 L1420 345 L1390 360 L1360 345 Z" stroke="white" strokeWidth="1.5" />
      </svg>

      {/* 光晕装饰 */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '-4s' }} />

      {/* 内容 */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div key={currentIndex} className="max-w-2xl animate-slideUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              {banners[currentIndex].title}
            </span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100/80 max-w-lg">
            {banners[currentIndex].subtitle}
          </p>
          <Link
            href={banners[currentIndex].link}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            了解更多
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* 指示器 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-500 ${
              index === currentIndex
                ? 'bg-white w-8 h-2.5 shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                : 'bg-white/40 hover:bg-white/60 w-2.5 h-2.5'
            }`}
            aria-label={`切换到第 ${index + 1} 张`}
          />
        ))}
      </div>
    </div>
  );
}
