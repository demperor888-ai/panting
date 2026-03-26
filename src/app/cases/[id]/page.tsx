import { notFound } from 'next/navigation';
import Link from 'next/link';
import { initialCases } from '@/data/siteData';

// 生成静态参数
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
    <div className="min-h-screen bg-gray-50">
      {/* 面包屑 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/cases" className="hover:text-primary-600">成功案例</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 truncate max-w-xs">{caseItem.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* 案例图片 */}
          <div className="h-80 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <span className="text-8xl opacity-50">🏗️</span>
          </div>

          {/* 案例信息 */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{caseItem.title}</h1>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center">
                <span className="text-2xl mr-3">👤</span>
                <div>
                  <p className="text-sm text-gray-500">客户名称</p>
                  <p className="font-semibold text-gray-800">{caseItem.client}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📍</span>
                <div>
                  <p className="text-sm text-gray-500">项目地点</p>
                  <p className="font-semibold text-gray-800">{caseItem.location}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📅</span>
                <div>
                  <p className="text-sm text-gray-500">项目时间</p>
                  <p className="font-semibold text-gray-800">{caseItem.date}</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">项目描述</h3>
              <p className="text-gray-600 leading-relaxed">{caseItem.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">使用产品</h3>
              <div className="flex flex-wrap gap-2">
                {caseItem.products.map((product, index) => (
                  <span key={index} className="px-4 py-2 bg-primary-100 text-primary-600 rounded-lg">
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 返回按钮 */}
        <div className="mt-8 text-center">
          <Link href="/cases" className="btn-outline">
            返回案例列表
          </Link>
        </div>
      </div>
    </div>
  );
}
