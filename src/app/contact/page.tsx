import { siteConfig } from '@/data/siteData';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* 顶部Banner — dark tech band */}
      <div className="dark-tech-band relative py-24 overflow-hidden">
        <div className="scan-line" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-kicker border-cyan-300/25 bg-white/10 text-cyan-100">CONTACT</span>
          <h1 className="text-4xl font-bold text-white mt-4">联系我们</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* 联系信息 */}
          <div className="tech-panel p-8">
            <div className="relative z-10">
              <span className="section-kicker">GET IN TOUCH</span>
              <h2 className="text-2xl font-bold text-dark-800 mt-2 mb-6">联系方式</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow bg-gradient-tech">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-dark-400">联系电话</p>
                    <p className="text-lg font-semibold text-dark-800">吴经理 {siteConfig.phone}</p>
                    <p className="text-sm text-dark-400 mt-1">{siteConfig.workingHours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow bg-gradient-tech">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-dark-400">公司地址</p>
                    <p className="text-lg font-semibold text-dark-800">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow bg-gradient-tech">
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
                  src="/map.html"
                />
                <p className="text-xs text-dark-400 mt-1 text-center">河南省郑州市高新技术产业开发区</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
