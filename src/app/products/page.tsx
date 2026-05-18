'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { initialProducts, productCategories } from '@/data/siteData';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all'
    ? initialProducts
    : initialProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* 顶部Banner */}
      <div className="page-banner" style={{ backgroundImage: `url('/images/banners/bg-1.jpg')` }}>
        <div className="page-banner-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">产品中心</h1>
          <p className="mt-2 text-dark-300">专注新型建筑材料研发与生产</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 分类筛选 */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-gradient-tech text-white shadow-glow'
                : 'glass-card text-dark-500 hover:text-primary-600 hover:border-primary-300'
            }`}
          >
            全部产品
          </button>
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              id={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-tech text-white shadow-glow'
                  : 'glass-card text-dark-500 hover:text-primary-600 hover:border-primary-300'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 产品列表 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-dark-400">
            暂无该分类产品
          </div>
        )}
      </div>
    </div>
  );
}
