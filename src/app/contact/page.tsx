import { siteConfig } from '@/data/siteData';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* 顶部Banner */}
      <div className="page-banner" style={{ backgroundImage: `url('/images/banners/bg-1.jpg')` }}>
        <div className="page-banner-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">联系我们</h1>
          <p className="mt-2 text-dark-300">Contact Us</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* 联系信息 */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-dark-800 mb-6">联系方式</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <p className="text-sm text-dark-400">联系电话</p>
                  <p className="text-lg font-semibold text-dark-800">吴经理 {siteConfig.phone}</p>
                  <p className="text-sm text-dark-400 mt-1">{siteConfig.workingHours}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="text-sm text-dark-400">公司地址</p>
                  <p className="text-lg font-semibold text-dark-800">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <p className="text-sm text-dark-400">微信扫码联系</p>
                  <img src="/images/banners/wx.png" alt="微信二维码" className="w-28 h-28 rounded-lg mt-1" />
                </div>
              </div>
            </div>

            {/* 公司位置地图 */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-dark-800 mb-3">公司位置</h3>
              <iframe
                title="公司位置"
                width="100%"
                height="300"
                className="rounded-xl border-0"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=113.56,34.70,113.68,34.80&layer=mapnik&marker=34.7496,113.6201"
              />
              <p className="text-xs text-dark-400 mt-1 text-center">河南省郑州市高新技术产业开发区</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
