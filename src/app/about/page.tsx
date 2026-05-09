import { siteConfig, productCategories } from '@/data/siteData';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部Banner */}
      <div className="relative text-white py-24 bg-cover bg-center" style={{ backgroundImage: `url('/images/banners/bg-1.jpg')` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">关于我们</h1>
          <p className="mt-2 text-gray-200">About Us</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 公司简介 */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">公司简介</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-600 leading-relaxed space-y-4">
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
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">企业文化</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">企业愿景</h3>
              <p className="text-gray-600">成为新型建筑材料行业的领军企业</p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">企业使命</h3>
              <p className="text-gray-600">为客户创造价值，为社会贡献力量</p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">核心价值观</h3>
              <p className="text-gray-600">诚信、创新、品质、服务</p>
            </div>
          </div>
        </section>

        {/* 主营产品 */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">主营产品</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {productCategories.map((cat) => (
              <div key={cat.id} className="text-center p-4 border rounded-xl hover:border-primary-600 transition">
                <div className="text-3xl mb-2">📦</div>
                <p className="font-medium text-gray-800">{cat.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 资质荣誉 */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">资质荣誉</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['高新技术企业', 'ISO9001认证', '质量信得过单位', '诚信企业'].map((honor, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏆</span>
                </div>
                <p className="font-medium text-gray-800">{honor}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
