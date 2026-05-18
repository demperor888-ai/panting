'use client';

import { useState } from 'react';
import NewsCard from '@/components/NewsCard';
import { initialNews } from '@/data/siteData';

const categories = ['全部', '公司动态', '行业资讯', '技术文章'];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredNews = activeCategory === '全部'
    ? initialNews
    : initialNews.filter(n => n.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* 顶部Banner */}
      <div className="page-banner" style={{ backgroundImage: `url('/images/banners/bg-1.jpg')` }}>
        <div className="page-banner-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">新闻资讯</h1>
          <p className="mt-2 text-dark-300">了解行业动态，掌握最新资讯</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 分类筛选 */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-tech text-white shadow-glow'
                  : 'glass-card text-dark-500 hover:text-primary-600 hover:border-primary-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 新闻列表 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12 text-dark-400">
            暂无该分类新闻
          </div>
        )}
      </div>
    </div>
  );
}
