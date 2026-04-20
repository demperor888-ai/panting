'use client';

import Link from 'next/link';
import { Product } from '@/data/siteData';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="card group block overflow-hidden">
      <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary-600 transition">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {product.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="px-2 py-0.5 bg-primary-50 text-primary-600 rounded text-xs">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
