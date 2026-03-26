import { notFound } from 'next/navigation';
import Link from 'next/link';
import { initialNews } from '@/data/siteData';

// 生成静态参数
export function generateStaticParams() {
  return initialNews.map((news) => ({
    id: news.id,
  }));
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const news = initialNews.find(n => n.id === params.id);

  if (!news) {
    notFound();
  }

  const relatedNews = initialNews
    .filter(n => n.id !== news.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 面包屑 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-primary-600">新闻资讯</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 truncate max-w-xs">{news.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* 文章头部 */}
          <div className="p-8 border-b">
            <span className={`inline-block px-3 py-1 rounded text-sm mb-4 ${
              news.category === '公司动态' ? 'bg-blue-100 text-blue-600' :
              news.category === '行业资讯' ? 'bg-green-100 text-green-600' :
              'bg-purple-100 text-purple-600'
            }`}>
              {news.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{news.title}</h1>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <span>📅 {news.date}</span>
              <span>👁️ {news.views} 阅读</span>
            </div>
          </div>

          {/* 文章内容 */}
          <div className="p-8">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              {news.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </article>

        {/* 相关新闻 */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-6">相关新闻</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedNews.map((n) => (
              <Link key={n.id} href={`/news/${n.id}`} className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-800 line-clamp-2">{n.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{n.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
