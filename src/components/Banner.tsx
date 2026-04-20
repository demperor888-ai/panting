'use client';

import { useState, useEffect } from 'react';
import { Banner as BannerType } from '@/data/siteData';
import Link from 'next/link';

interface BannerProps {
  banners: BannerType[];
}

export default function Banner({ banners }: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${banners[currentIndex].image})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 装饰元素 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border-4 border-white rounded-full" />
        <div className="absolute bottom-20 right-40 w-60 h-60 border-4 border-white rounded-full" />
        <div className="absolute top-40 right-20 w-20 h-20 border-4 border-white" />
      </div>

      {/* 内容 */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-white animate-fadeIn">
          <h2 className="text-5xl font-bold mb-4">{banners[currentIndex].title}</h2>
          <p className="text-xl mb-8 text-primary-100">{banners[currentIndex].subtitle}</p>
          <Link
            href={banners[currentIndex].link}
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
          >
            了解更多
          </Link>
        </div>
      </div>

      {/* 指示器 */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
