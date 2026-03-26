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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">关于{siteConfig.shortName}</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {siteConfig.name}是一家专注于新型建筑材料研发、生产、销售的高新技术企业。
                公司主营产品包括灌浆料系列、建筑砂浆系列、特种结构系列、防水堵漏系列、
                装配式墙面砂浆系列等，广泛应用于工业厂房、桥梁隧道、民用建筑等领域。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                公司始终坚持"质量第一、用户至上"的经营理念，以科技创新为动力，
                以优质产品和服务赢得市场认可。产品性能稳定可靠，售后服务完善，
                深受广大客户信赖。
              </p>
              <Link href="/about" className="btn-primary inline-block">
                了解更多
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600">年行业经验</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">产品种类</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">服务客户</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">质量保障</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">产品中心</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-4" />
            <p className="text-gray-500 mt-4">专注新型建筑材料研发与生产</p>
          </div>

          {/* 产品分类 */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {productCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products#${cat.id}`}
                className="px-4 py-2 border border-primary-600 text-primary-600 rounded-full hover:bg-primary-600 hover:text-white transition"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">新闻资讯</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-4" />
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">成功案例</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-4" />
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

      {/* 联系我们 */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">需要我们的帮助？</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            如果您对我们的产品感兴趣，或者有任何问题需要咨询，请随时联系我们。
            我们的专业团队将为您提供最优质的服务。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition">
              联系我们
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition">
              电话咨询
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
