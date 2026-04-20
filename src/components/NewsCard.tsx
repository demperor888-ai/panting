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
      <Link href={`/news/${news.id}`} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-gray-800 line-clamp-2">{news.title}</h4>
          <p className="text-xs text-gray-500 mt-1">{news.date}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/news/${news.id}`} className="card group block overflow-hidden">
      <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <span className={`text-xs px-2 py-1 rounded ${
          news.category === '公司动态' ? 'bg-blue-100 text-blue-600' :
          news.category === '行业资讯' ? 'bg-green-100 text-green-600' :
          'bg-purple-100 text-purple-600'
        }`}>
          {news.category}
        </span>
        <h3 className="text-lg font-semibold text-gray-800 mt-2 group-hover:text-primary-600 transition line-clamp-2">
          {news.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{news.summary}</p>
        <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
          <span>{news.date}</span>
          <span>{news.views} 阅读</span>
        </div>
      </div>
    </Link>
  );
}
