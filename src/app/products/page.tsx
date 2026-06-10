'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import ProductCard from '@/components/ProductCard';
import { initialProducts, productCategories } from '@/data/siteData';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all'
    ? initialProducts
    : initialProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* 顶部Banner */}
      <div className="dark-band-premium relative py-24 overflow-hidden">
        <div className="scan-line" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="section-kicker section-kicker-light">PRODUCTS</span>
            <h1 className="text-4xl font-bold text-white mt-4">产品中心</h1>
            <p className="mt-2 text-white/60">专注新型建筑材料研发与生产</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 分类筛选 */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-brand text-white shadow-glow'
                  : 'glass-card text-surface-500 hover:text-brand-600 hover:border-brand-300'
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
                    ? 'bg-gradient-brand text-white shadow-glow'
                    : 'glass-card text-surface-500 hover:text-brand-600 hover:border-brand-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* 产品列表 */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={staggerItem}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-surface-400">
            暂无该分类产品
          </div>
        )}
      </div>
    </div>
  );
}
