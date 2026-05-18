import Link from 'next/link';
import Banner from '@/components/Banner';
import ProductCard from '@/components/ProductCard';
import NewsCard from '@/components/NewsCard';
import CaseCard from '@/components/CaseCard';
import { initialProducts, initialNews, initialCases, initialBanners, productCategories, siteConfig } from '@/data/siteData';

export default function HomePage() {
  const featuredProducts = initialProducts.slice(0, 6);
  const latestNews = initialNews.slice(0, 4);
  const featuredCases = initialCases.slice(0, 3);

  return (
    <div>
      {/* Banner */}
      <Banner banners={initialBanners} />

      {/* 公司简介 */}
      <section className="py-20 section-dot-pattern">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-800">
              关于{siteConfig.shortName}
            </h2>
            <div className="heading-underline" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-dark-600 leading-relaxed mb-6">
                {siteConfig.name}是一家专注于新型建筑材料研发、生产、销售的高新技术企业。
                公司主营产品包括灌浆料系列、建筑砂浆系列、特种结构系列、防水堵漏系列、
                装配式墙面砂浆系列等，广泛应用于工业厂房、桥梁隧道、民用建筑等领域。
              </p>
              <p className="text-dark-600 leading-relaxed mb-6">
                公司始终坚持"质量第一、用户至上"的经营理念，以科技创新为动力，
                以优质产品和服务赢得市场认可。产品性能稳定可靠，售后服务完善，
                深受广大客户信赖。
              </p>
              <Link href="/about" className="btn-primary inline-block">
                了解更多
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-dark-500 font-medium">年行业经验</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-dark-500 font-medium">产品种类</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-dark-500 font-medium">服务客户</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-dark-500 font-medium">质量保障</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="py-20 section-dot-pattern">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-800">产品中心</h2>
            <div className="heading-underline" />
            <p className="text-dark-400 mt-4">专注新型建筑材料研发与生产</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {productCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products#${cat.id}`}
                className="px-5 py-2.5 border border-primary-300 text-primary-600 rounded-full font-medium hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300 hover:shadow-glow"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/products" className="btn-outline">
              查看全部产品
            </Link>
          </div>
        </div>
      </section>

      {/* 新闻资讯 */}
      <section className="py-20 section-dot-pattern">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-800">新闻资讯</h2>
            <div className="heading-underline" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/news" className="btn-outline">
              查看全部新闻
            </Link>
          </div>
        </div>
      </section>

      {/* 成功案例 */}
      <section className="py-20 section-dot-pattern">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-800">成功案例</h2>
            <div className="heading-underline" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCases.map((caseItem) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/cases" className="btn-outline">
              查看全部案例
            </Link>
          </div>
        </div>
      </section>

      {/* 联系我们 CTA */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundImage: `url('/images/banners/xybz.jpg')` }}>
        {/* 科技渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/70 to-dark-900/50" />
        {/* 光效装饰 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">需要我们的帮助？</h2>
          <p className="text-blue-100/80 mb-8 max-w-2xl mx-auto text-lg">
            如果您对我们的产品感兴趣，或者有任何问题需要咨询，请随时联系我们。
            我们的专业团队将为您提供最优质的服务。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="glow-btn px-8 py-3.5 rounded-lg text-base"
            >
              联系我们
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              电话咨询
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
