'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '@/data/siteData';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <Link
        href={`/products/${product.id}`}
        className="tech-panel group block overflow-hidden card-border-glow"
      >
        {/* 图片区 + 渐变遮罩 */}
        <div className="relative h-48 overflow-hidden bg-surface-100">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-950/60 via-surface-900/10 to-transparent" />
          <div className="absolute left-4 top-4 rounded-md border border-cyan-100/30 bg-surface-950/60 px-2.5 py-1 text-xs font-semibold text-cyan-50 backdrop-blur-md">
            MATERIAL
          </div>
          {/* 悬停装饰光晕 */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-teal-400/10 via-transparent to-cyan-400/10" />
        </div>
        <div className="relative z-10 p-5">
          <h3 className="text-lg font-semibold text-surface-800 group-hover:text-brand-600 transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-sm text-surface-500 mt-2 line-clamp-2">{product.description}</p>
          <div className="flex flex-wrap gap-1 mt-3">
            {product.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="rounded-md bg-teal-500/10 px-2 py-0.5 text-xs font-medium text-brand-700 ring-1 ring-teal-400/20">
                {feature}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-surface-900/10 pt-4 text-xs font-semibold text-brand-700">
            <span>查看技术参数</span>
            <motion.span
              className="h-6 w-6 rounded-md border border-brand-200/70 text-center leading-6 transition group-hover:border-teal-300 group-hover:bg-teal-50 inline-flex items-center justify-center"
              whileHover={{ x: 2 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
