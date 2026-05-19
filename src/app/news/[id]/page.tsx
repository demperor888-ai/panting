import { notFound } from 'next/navigation';
import Link from 'next/link';
import { initialNews } from '@/data/siteData';

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

  const categoryStyle =
    news.category === '公司动态'
      ? 'bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-700 border-blue-200/50'
      : news.category === '行业资讯'
        ? 'bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 text-emerald-700 border-emerald-200/50'
        : 'bg-gradient-to-r from-violet-500/10 to-purple-600/10 text-purple-700 border-purple-200/50';

  return (
    <div className="min-h-screen">
      {/* 面包屑 */}
      <div className="bg-white/60 backdrop-blur-lg border-b border-dark-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-dark-400">
            <Link href="/" className="hover:text-primary-600 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-primary-600 transition-colors">新闻资讯</Link>
            <span className="mx-2">/</span>
            <span className="text-dark-700 truncate max-w-xs">{news.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="glass-card overflow-hidden">
          {/* 文章头部 */}
          <div className="p-8 border-b border-dark-100">
            <span className={`inline-block px-3 py-1 rounded-full text-sm mb-4 border font-medium ${categoryStyle}`}>
              {news.category}
            </span>
            <h1 className="text-3xl font-bold text-dark-800 mb-4">{news.title}</h1>
            <div className="flex items-center text-sm text-dark-400 space-x-4">
              <span>{news.date}</span>
              <span>{news.views} 阅读</span>
            </div>
          </div>

          {/* 文章内容 */}
          <div className="p-8">
            <div className="prose prose-lg max-w-none text-dark-600 leading-relaxed">
              {news.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </article>

        {/* 相关新闻 */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-dark-800 mb-6">相关新闻</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedNews.map((n) => (
              <Link key={n.id} href={`/news/${n.id}`} className="glass-card p-4 group">
                <h3 className="font-semibold text-dark-700 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {n.title}
                </h3>
                <p className="text-sm text-dark-400 mt-2">{n.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
