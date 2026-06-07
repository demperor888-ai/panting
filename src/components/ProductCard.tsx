'use client';

import Link from 'next/link';
import { Product } from '@/data/siteData';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="tech-panel group block overflow-hidden"
    >
      {/* 图片区 + 渐变遮罩 */}
      <div className="relative h-48 overflow-hidden bg-dark-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-dark-900/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-md border border-cyan-100/30 bg-dark-950/60 px-2.5 py-1 text-xs font-semibold text-cyan-50 backdrop-blur-md">
          MATERIAL
        </div>
      </div>
      <div className="relative z-10 p-5">
        <h3 className="text-lg font-semibold text-dark-800 group-hover:text-primary-600 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-sm text-dark-500 mt-2 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {product.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="rounded-md bg-teal-500/10 px-2 py-0.5 text-xs font-medium text-primary-700 ring-1 ring-teal-400/20">
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-dark-900/10 pt-4 text-xs font-semibold text-primary-700">
          <span>查看技术参数</span>
          <span className="h-6 w-6 rounded-md border border-primary-200/70 text-center leading-6 transition group-hover:border-teal-300 group-hover:bg-teal-50">→</span>
        </div>
      </div>
    </Link>
  );
}
