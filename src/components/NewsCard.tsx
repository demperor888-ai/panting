'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { News } from '@/data/siteData';

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <Link
        href={`/news/${news.id}`}
        className="glass-card block overflow-hidden h-full card-border-glow"
      >
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-44 object-cover"
        />
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="rounded-md bg-brand-500/10 px-2 py-0.5 text-xs font-semibold text-brand-700">
              {news.category}
            </span>
            <span className="text-xs text-surface-400">{news.date}</span>
          </div>
          <h3 className="font-semibold text-surface-800 leading-snug line-clamp-2 group-hover:text-brand-600 transition-colors duration-200">
            {news.title}
          </h3>
          <p className="text-sm text-surface-500 mt-2 line-clamp-2">{news.summary}</p>
          <div className="mt-3 flex items-center gap-1 text-xs text-surface-400">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>{news.views} 次阅读</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
