import { siteConfig, productCategories } from '@/data/siteData';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 顶部Banner 使用统一样式 */}
      <div className="page-banner" style={{ backgroundImage: `url('/images/banners/bg-1.jpg')` }}>
        <div className="page-banner-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">关于我们</h1>
          <p className="mt-2 text-dark-300">About Us</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 公司简介 */}
        <section className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-dark-800 mb-6">公司简介</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-dark-600 leading-relaxed space-y-4">
              <p>
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
            <div className="h-64 rounded-xl overflow-hidden">
              <img src="/images/cases/gywm.jpg" alt="公司简介" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* 企业文化 */}
        <section className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-dark-800 mb-6">企业文化</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl border border-primary-100/50">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-dark-800 mb-2">企业愿景</h3>
              <p className="text-dark-500">成为新型建筑材料行业的领军企业</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl border border-primary-100/50">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-dark-800 mb-2">企业使命</h3>
              <p className="text-dark-500">为客户创造价值，为社会贡献力量</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl border border-primary-100/50">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold text-dark-800 mb-2">核心价值观</h3>
              <p className="text-dark-500">诚信、创新、品质、服务</p>
            </div>
          </div>
        </section>

        {/* 主营产品 */}
        <section className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-dark-800 mb-6">主营产品</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {productCategories.map((cat) => (
              <div key={cat.id} className="text-center p-4 border border-dark-200 rounded-xl hover:border-primary-400 hover:shadow-glow transition-all duration-300 group cursor-pointer">
                <div className="w-full h-24 mb-2 rounded-lg overflow-hidden">
                  <img src="/images/products/products-2.jpg" alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="font-medium text-dark-700 group-hover:text-primary-600 transition-colors">{cat.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 资质荣誉 */}
        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold text-dark-800 mb-6">资质荣誉</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['高新技术企业', 'ISO9001认证', '质量信得过单位', '诚信企业'].map((honor, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-dark-50 to-dark-100 rounded-xl border border-dark-200/50">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-tech flex items-center justify-center shadow-glow">
                  <span className="text-2xl">🏆</span>
                </div>
                <p className="font-medium text-dark-700">{honor}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
