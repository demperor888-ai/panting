'use client';

import Link from 'next/link';
import { Case } from '@/data/siteData';

interface CaseCardProps {
  caseItem: Case;
}

export default function CaseCard({ caseItem }: CaseCardProps) {
  return (
    <Link href={`/cases/${caseItem.id}`} className="tech-panel group block overflow-hidden">
      {/* 图片区 + 渐变遮罩 */}
      <div className="h-48 bg-dark-100 flex items-center justify-center overflow-hidden relative">
        <img
          src={caseItem.image}
          alt={caseItem.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-dark-900/10 to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-md border border-white/20 bg-dark-950/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
          PROJECT
        </div>
      </div>
      <div className="relative z-10 p-5">
        <h3 className="text-lg font-semibold text-dark-800 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
          {caseItem.title}
        </h3>
        <div className="mt-2 text-sm text-dark-500 space-y-1">
          <p className="flex items-center">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-400" />
            {caseItem.client}
          </p>
          <p className="flex items-center">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
            {caseItem.location}
          </p>
        </div>
        <p className="text-sm text-dark-400 mt-2">{caseItem.date}</p>
      </div>
    </Link>
  );
}
