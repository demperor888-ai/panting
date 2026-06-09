import { notFound } from 'next/navigation';
import Link from 'next/link';
import { initialProducts, productCategories } from '@/data/siteData';

export function generateStaticParams() {
  return initialProducts.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = initialProducts.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  const category = productCategories.find(c => c.id === product.category);
  const relatedProducts = initialProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen page-enter">
      {/* 面包屑 */}
      <div className="bg-white/60 backdrop-blur-lg border-b border-cyan-900/8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-surface-400">
            <Link href="/" className="hover:text-brand-600 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-brand-600 transition-colors">产品中心</Link>
            <span className="mx-2">/</span>
            <span className="text-surface-700">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="tech-panel overflow-hidden card-border-glow">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8">
            {/* 产品图片 */}
            <div className="h-80 bg-surface-100 rounded-xl flex items-center justify-center overflow-hidden shadow-inner transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 产品信息 */}
            <div>
              <span className="inline-block rounded-md bg-teal-500/10 px-3 py-1 text-sm font-medium text-brand-700 border border-teal-300/30 mb-4">
                {category?.name}
              </span>
              <h1 className="text-3xl font-bold text-surface-800 mb-4">{product.name}</h1>
              <p className="text-surface-600 leading-relaxed mb-6">{product.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-surface-800 mb-3">产品特点</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span key={index} className="rounded-lg bg-teal-500/8 px-4 py-2 text-brand-700 text-sm border border-teal-200/30">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="glow-btn-intense px-8 py-3 inline-flex items-center gap-2 rounded-lg">
                咨询报价
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* 相关产品 */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-kicker">RELATED</span>
              <h2 className="text-2xl font-bold text-surface-800">相关产品</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/products/${p.id}`} className="tech-panel block overflow-hidden group card-border-glow hover:-translate-y-1 transition-transform duration-300">
                  <div className="relative z-10">
                    <div className="h-40 bg-surface-100 flex items-center justify-center overflow-hidden rounded-lg">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-surface-700 group-hover:text-brand-600 transition-colors">{p.name}</h3>
                      <p className="text-sm text-surface-500 mt-1 line-clamp-1">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
