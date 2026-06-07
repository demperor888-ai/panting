import Link from 'next/link';
import { siteConfig, productCategories } from '@/data/siteData';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 顶部Banner — dark tech band */}
      <div className="dark-tech-band relative py-24 overflow-hidden">
        <div className="scan-line" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-kicker border-cyan-300/25 bg-white/10 text-cyan-100">ABOUT US</span>
          <h1 className="text-4xl font-bold text-white mt-4">关于我们</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 公司简介 */}
        <section className="tech-panel p-8 mb-8">
          <div className="relative z-10">
            <span className="section-kicker">COMPANY PROFILE</span>
            <h2 className="text-2xl font-bold text-dark-800 mt-2 mb-6">公司简介</h2>
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8">
              <div className="text-dark-600 leading-relaxed space-y-4">
                <p className="text-lg">
                  {siteConfig.name}是一家专注于新型建筑材料研发、生产、销售的高新技术企业。
                  公司位于{siteConfig.address}，拥有现代化的生产车间和先进的检测设备。
                </p>
                <p>
                  公司主营产品包括灌浆料系列、建筑砂浆系列、特种结构系列、防水堵漏系列、
                  装配式墙面砂浆系列等五大类数十种产品，广泛应用于工业厂房、桥梁隧道、
                  民用建筑等领域。
                </p>
                <p>
                  公司始终坚持"质量第一、用户至上"的经营理念，以科技创新为动力，
                  以优质产品和服务赢得市场认可。产品性能稳定可靠，售后服务完善，
                  深受广大客户信赖。
                </p>
              </div>
              <div className="h-72 rounded-xl overflow-hidden shadow-glow">
                <img src="/images/cases/gywm.jpg" alt="公司简介" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 企业文化 */}
        <section className="dark-tech-band relative py-16 mb-8 rounded-xl overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="section-kicker border-cyan-300/25 bg-white/10 text-cyan-100">OUR CULTURE</span>
              <h2 className="text-2xl font-bold text-white mt-2">企业文化</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🎯', title: '企业愿景', desc: '成为新型建筑材料行业的领军企业' },
                { icon: '💡', title: '企业使命', desc: '为客户创造价值，为社会贡献力量' },
                { icon: '⭐', title: '核心价值观', desc: '诚信、创新、品质、服务' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-md p-6 text-center group hover:border-cyan-200/30 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-cyan-50/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 主营产品 */}
        <section className="tech-panel p-8 mb-8">
          <div className="relative z-10">
            <span className="section-kicker">PRODUCT CATEGORIES</span>
            <h2 className="text-2xl font-bold text-dark-800 mt-2 mb-6">主营产品</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {productCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products#${cat.id}`}
                  className="group relative overflow-hidden rounded-xl border border-dark-200 bg-gradient-to-br from-dark-50 to-white p-4 text-center transition-all duration-300 hover:border-teal-300/60 hover:shadow-glow"
                >
                  <div className="w-full h-20 mb-3 rounded-lg overflow-hidden bg-dark-100">
                    <img src="/images/products/products-2.jpg" alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="font-semibold text-dark-700 group-hover:text-primary-600 transition-colors text-sm">{cat.name}</p>
                  <div className="mt-2 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 资质荣誉 */}
        <section className="tech-panel p-8">
          <div className="relative z-10">
            <span className="section-kicker">QUALIFICATIONS</span>
            <h2 className="text-2xl font-bold text-dark-800 mt-2 mb-6">资质荣誉</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['高新技术企业', 'ISO9001认证', '质量信得过单位', '诚信企业'].map((honor, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl border border-dark-200 bg-gradient-to-br from-dark-50 to-white p-6 text-center transition-all duration-300 hover:border-teal-300/60 hover:shadow-glow group">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-cyan-400/20 to-teal-400/20 flex items-center justify-center border border-teal-200/50 group-hover:shadow-[0_0_20px_rgba(18,199,181,0.2)] transition-all duration-300">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🏆</span>
                  </div>
                  <p className="font-semibold text-dark-700">{honor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
