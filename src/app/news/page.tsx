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
    <div className="min-h-screen bg-gray-50">
      {/* 顶部Banner */}
      <div className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">新闻资讯</h1>
          <p className="mt-2 text-primary-200">了解行业动态，掌握最新资讯</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 分类筛选 */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full transition ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
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
          <div className="text-center py-12 text-gray-500">
            暂无该分类新闻
          </div>
        )}
      </div>
    </div>
  );
}
