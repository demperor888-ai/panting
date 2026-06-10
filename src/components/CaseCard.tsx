'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Case } from '@/data/siteData';

interface CaseCardProps {
  caseItem: Case;
}

export default function CaseCard({ caseItem }: CaseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <Link
        href={`/cases/${caseItem.id}`}
        className="glass-card block overflow-hidden h-full card-border-glow"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={caseItem.image}
            alt={caseItem.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,26,43,0.72)] to-transparent" />
          <div className="absolute bottom-3 left-3">
            <span className="rounded-md bg-white/20 backdrop-blur-md px-2 py-0.5 text-xs font-semibold text-white">
              {caseItem.client}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-surface-800 leading-snug line-clamp-1 group-hover:text-brand-600 transition-colors duration-200">
            {caseItem.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-surface-400 mt-1">
            <span>📍 {caseItem.location}</span>
            <span>📅 {caseItem.date}</span>
          </div>
          <p className="text-sm text-surface-500 mt-2 line-clamp-2">{caseItem.description}</p>
          <div className="flex flex-wrap gap-1 mt-3">
            {caseItem.products.map((product, index) => (
              <span key={index} className="rounded-md bg-teal-500/10 px-2 py-0.5 text-xs font-medium text-brand-700">
                {product}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
