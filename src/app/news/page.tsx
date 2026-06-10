'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import NewsCard from '@/components/NewsCard';
import { initialNews } from '@/data/siteData';

const categories = ['全部', '公司动态', '行业资讯', '技术文章'];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredNews = activeCategory === '全部'
    ? initialNews
    : initialNews.filter(n => n.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* 顶部Banner */}
      <div className="dark-band-premium relative py-24 overflow-hidden">
        <div className="scan-line" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="section-kicker section-kicker-light">NEWSROOM</span>
            <h1 className="text-4xl font-bold text-white mt-4">新闻资讯</h1>
            <p className="mt-2 text-white/60">了解行业动态，掌握最新资讯</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 分类筛选 */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-brand text-white shadow-glow'
                    : 'glass-card text-surface-500 hover:text-brand-600 hover:border-brand-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* 新闻列表 */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filteredNews.map((news) => (
            <motion.div key={news.id} variants={staggerItem}>
              <NewsCard news={news} />
            </motion.div>
          ))}
        </motion.div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12 text-surface-400">
            暂无该分类新闻
          </div>
        )}
      </div>
    </div>
  );
}
