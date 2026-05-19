import { notFound } from 'next/navigation';
import Link from 'next/link';
import { initialCases } from '@/data/siteData';

export function generateStaticParams() {
  return initialCases.map((caseItem) => ({
    id: caseItem.id,
  }));
}

export default function CaseDetailPage({ params }: { params: { id: string } }) {
  const caseItem = initialCases.find(c => c.id === params.id);

  if (!caseItem) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* 面包屑 */}
      <div className="bg-white/60 backdrop-blur-lg border-b border-dark-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-dark-400">
            <Link href="/" className="hover:text-primary-600 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/cases" className="hover:text-primary-600 transition-colors">成功案例</Link>
            <span className="mx-2">/</span>
            <span className="text-dark-700 truncate max-w-xs">{caseItem.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="glass-card overflow-hidden">
          {/* 案例图片 */}
          <div className="h-80 bg-dark-100 flex items-center justify-center overflow-hidden">
            <img
              src={caseItem.image}
              alt={caseItem.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 案例信息 */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-dark-800 mb-6">{caseItem.title}</h1>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center">
                <span className="text-2xl mr-3">👤</span>
                <div>
                  <p className="text-sm text-dark-400">客户名称</p>
                  <p className="font-semibold text-dark-700">{caseItem.client}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📍</span>
                <div>
                  <p className="text-sm text-dark-400">项目地点</p>
                  <p className="font-semibold text-dark-700">{caseItem.location}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📅</span>
                <div>
                  <p className="text-sm text-dark-400">项目时间</p>
                  <p className="font-semibold text-dark-700">{caseItem.date}</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-dark-800 mb-3">项目描述</h3>
              <p className="text-dark-600 leading-relaxed">{caseItem.description}</p>
            </div>

            {/* 内容图集 */}
            {caseItem.contentImages && caseItem.contentImages.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-dark-800 mb-3">施工图集</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseItem.contentImages.map((img, index) => (
                    <div key={index} className="rounded-lg overflow-hidden bg-dark-100">
                      <img src={img} alt={`${caseItem.title} - 图${index + 1}`} className="w-full h-64 object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-dark-800 mb-3">使用产品</h3>
              <div className="flex flex-wrap gap-2">
                {caseItem.products.map((product, index) => (
                  <span key={index} className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium border border-primary-100">
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/cases" className="btn-outline">
            返回案例列表
          </Link>
        </div>
      </div>
    </div>
  );
}
