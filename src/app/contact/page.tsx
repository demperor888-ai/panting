'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
        <div className="grid lg:grid-cols-2 gap-8">
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

            {/* 腾讯地图静态图 */}
            <a href="https://map.qq.com/?type=marker&isopeninfowin=1&markertype=1&pointx=113.6201&pointy=34.7496&name=河南磐霆速科新材料科技有限公司&ref=WeChat" target="_blank" rel="noopener noreferrer" className="block mt-8 rounded-xl overflow-hidden group">
              <img
                src="https://apis.map.qq.com/ws/staticmap/v2/?center=113.6201,34.7496&zoom=14&size=600*300&markers=color:red|label:A|113.6201,34.7496&key=UGMBZ-CINWR-6DRW5-WXM6J-5F5K2-UXB2T"
                alt="公司位置 - 河南省郑州市高新技术产业开发区"
                className="w-full h-72 object-cover group-hover:opacity-90 transition"
              />
              <p className="text-xs text-dark-400 mt-1 text-center">河南省郑州市高新技术产业开发区</p>
              <p className="text-xs text-primary-500 mt-0.5 text-center group-hover:underline">点击查看导航 →</p>
            </a>
          </div>

          {/* 在线留言 */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-dark-800 mb-6">在线留言</h2>

            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-dark-800 mb-2">提交成功！</h3>
                  <p className="text-dark-500">我们会尽快与您联系，感谢您的关注！</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-600 mb-1">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-dark-50 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 text-dark-700 placeholder:text-dark-400"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-600 mb-1">
                      电话 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-dark-50 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 text-dark-700 placeholder:text-dark-400"
                      placeholder="请输入您的电话"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-600 mb-1">邮箱</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-dark-50 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 text-dark-700 placeholder:text-dark-400"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-600 mb-1">公司</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 bg-dark-50 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 text-dark-700 placeholder:text-dark-400"
                      placeholder="请输入您的公司"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-600 mb-1">
                    留言内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-dark-50 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 resize-none text-dark-700 placeholder:text-dark-400"
                    placeholder="请输入您的留言内容..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full glow-btn py-3 rounded-lg font-semibold"
                >
                  提交留言
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
