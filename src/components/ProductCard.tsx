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
      className="glass-card group block overflow-hidden"
    >
      {/* 图片区 + 渐变遮罩 */}
      <div className="h-48 bg-dark-100 flex items-center justify-center overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-dark-800 group-hover:text-primary-600 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-sm text-dark-500 mt-2 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {product.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="px-2 py-0.5 bg-primary-50 text-primary-700 rounded text-xs font-medium">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
