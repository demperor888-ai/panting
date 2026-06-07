'use client';

import Link from 'next/link';
import { News } from '@/data/siteData';

interface NewsCardProps {
  news: News;
  compact?: boolean;
}

export default function NewsCard({ news, compact }: NewsCardProps) {
  if (compact) {
    return (
      <Link href={`/news/${news.id}`} className="flex items-start space-x-3 p-3 hover:bg-dark-50 rounded-lg transition group">
        <div className="w-16 h-16 bg-dark-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-dark-700 group-hover:text-primary-600 transition-colors line-clamp-2">
            {news.title}
          </h4>
          <p className="text-xs text-dark-400 mt-1">{news.date}</p>
        </div>
      </Link>
    );
  }

  const categoryStyle =
    news.category === '公司动态'
      ? 'bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-700 border-blue-200/50'
      : news.category === '行业资讯'
        ? 'bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 text-emerald-700 border-emerald-200/50'
        : 'bg-gradient-to-r from-violet-500/10 to-purple-600/10 text-purple-700 border-purple-200/50';

  return (
    <Link href={`/news/${news.id}`} className="tech-panel group block overflow-hidden">
      {/* 图片区 + 渐变遮罩 */}
      <div className="h-40 bg-dark-100 flex items-center justify-center overflow-hidden relative">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 p-5">
        <span className={`text-xs px-2 py-1 rounded-md border font-medium ${categoryStyle}`}>
          {news.category}
        </span>
        <h3 className="text-lg font-semibold text-dark-800 mt-2 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
          {news.title}
        </h3>
        <p className="text-sm text-dark-500 mt-2 line-clamp-2">{news.summary}</p>
        <div className="flex items-center justify-between mt-3 text-xs text-dark-400">
          <span>{news.date}</span>
          <span>{news.views} views</span>
        </div>
      </div>
    </Link>
  );
}
