import { notFound } from 'next/navigation';
import Link from 'next/link';
import { initialProducts, productCategories } from '@/data/siteData';

// 生成静态参数
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
    <div className="min-h-screen bg-gray-50">
      {/* 面包屑 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-primary-600">产品中心</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* 产品图片 */}
            <div className="h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-8xl opacity-50">📦</span>
            </div>

            {/* 产品信息 */}
            <div>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm mb-4">
                {category?.name}
              </span>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">产品特点</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="btn-primary inline-block">
                咨询报价
              </Link>
            </div>
          </div>
        </div>

        {/* 相关产品 */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">相关产品</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/products/${p.id}`} className="card block overflow-hidden">
                  <div className="h-40 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <span className="text-4xl opacity-50">📦</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">{p.name}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">{p.description}</p>
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
