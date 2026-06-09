'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Banner from '@/components/Banner';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import ProductCard from '@/components/ProductCard';
import NewsCard from '@/components/NewsCard';
import CaseCard from '@/components/CaseCard';
import { initialProducts, initialNews, initialCases, initialBanners, productCategories, siteConfig } from '@/data/siteData';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

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
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="section-kicker">ABOUT PANTING</span>
              <h2 className="text-3xl font-bold text-surface-800 mt-2">
                关于{siteConfig.shortName}
              </h2>
              <div className="heading-underline" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
            <ScrollReveal direction="left" delay={0.1}>
              <div>
                <p className="text-surface-600 leading-relaxed mb-6 text-lg">
                  {siteConfig.name}是一家专注于新型建筑材料研发、生产、销售的高新技术企业。
                  公司主营产品包括灌浆料系列、建筑砂浆系列、特种结构系列、防水堵漏系列、
                  装配式墙面砂浆系列等，广泛应用于工业厂房、桥梁隧道、民用建筑等领域。
                </p>
                <p className="text-surface-600 leading-relaxed mb-6">
                  公司始终坚持&ldquo;质量第一、用户至上&rdquo;的经营理念，以科技创新为动力，
                  以优质产品和服务赢得市场认可。产品性能稳定可靠，售后服务完善，
                  深受广大客户信赖。
                </p>
                <Link href="/about" className="btn-primary inline-block">
                  了解更多
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="metric-card text-center"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <div className="text-surface-500 font-medium">年行业经验</div>
                </motion.div>
                <motion.div
                  className="metric-card text-center"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-surface-500 font-medium">产品种类</div>
                </motion.div>
                <motion.div
                  className="metric-card text-center"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-surface-500 font-medium">服务客户</div>
                </motion.div>
                <motion.div
                  className="metric-card text-center"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <div className="text-surface-500 font-medium">质量保障</div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="dark-tech-band-premium py-20">
        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="section-kicker border-cyan-300/25 bg-white/10 text-cyan-100">PRODUCT SYSTEM</span>
              <h2 className="text-3xl font-bold text-white mt-4">产品中心</h2>
              <div className="heading-underline" />
              <p className="text-cyan-50/70 mt-4">围绕加固、修复、防护、连接四类工程场景构建材料方案</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {productCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products#${cat.id}`}
                  className="rounded-lg border border-cyan-200/20 bg-white/10 px-5 py-2.5 font-medium text-cyan-50 backdrop-blur-md transition-all duration-300 hover:border-teal-200/50 hover:bg-white/20 hover:shadow-[0_0_28px_rgba(18,199,181,0.16)]"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={staggerItem}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-8">
              <Link href="/products" className="inline-flex rounded-lg border border-cyan-200/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                查看全部产品
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 新闻资讯 */}
      <section className="py-20 section-dot-pattern">
        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="section-kicker">NEWSROOM</span>
              <h2 className="text-3xl font-bold text-surface-800 mt-2">新闻资讯</h2>
              <div className="heading-underline" />
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {latestNews.map((news) => (
              <motion.div key={news.id} variants={staggerItem}>
                <NewsCard news={news} />
              </motion.div>
            ))}
          </motion.div>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-8">
              <Link href="/news" className="btn-outline">
                查看全部新闻
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 成功案例 */}
      <section className="py-20 section-dot-pattern">
        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="section-kicker">PROJECT CASES</span>
              <h2 className="text-3xl font-bold text-surface-800 mt-2">成功案例</h2>
              <div className="heading-underline" />
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {featuredCases.map((caseItem) => (
              <motion.div key={caseItem.id} variants={staggerItem}>
                <CaseCard caseItem={caseItem} />
              </motion.div>
            ))}
          </motion.div>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-8">
              <Link href="/cases" className="btn-outline">
                查看全部案例
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 联系我们 CTA */}
      <section className="dark-tech-band-premium relative py-28 overflow-hidden" style={{ backgroundImage: `url('/images/banners/xybz.jpg')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-surface-950/95 via-brand-900/80 to-surface-900/70" />
        <div className="scan-line" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">需要我们的帮助？</h2>
            <p className="text-blue-100/80 mb-8 max-w-2xl mx-auto text-lg">
              如果您对我们的产品感兴趣，或者有任何问题需要咨询，请随时联系我们。
              我们的专业团队将为您提供最优质的服务。
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="glow-btn-intense px-8 py-3.5 rounded-lg text-base inline-flex items-center gap-2"
              >
                <span>联系我们</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <motion.a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                电话咨询
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
