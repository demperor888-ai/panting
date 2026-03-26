'use client';

import Link from 'next/link';
import { Case } from '@/data/siteData';

interface CaseCardProps {
  caseItem: Case;
}

export default function CaseCard({ caseItem }: CaseCardProps) {
  return (
    <Link href={`/cases/${caseItem.id}`} className="card group block overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
        <span className="text-5xl opacity-50">🏗️</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary-600 transition line-clamp-2">
          {caseItem.title}
        </h3>
        <div className="mt-2 text-sm text-gray-500 space-y-1">
          <p className="flex items-center">
            <span className="mr-2">👤</span>
            {caseItem.client}
          </p>
          <p className="flex items-center">
            <span className="mr-2">📍</span>
            {caseItem.location}
          </p>
        </div>
        <p className="text-sm text-gray-400 mt-2">{caseItem.date}</p>
      </div>
    </Link>
  );
}
