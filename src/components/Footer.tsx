'use client';

import Link from 'next/link';
import { siteConfig, productCategories } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PTSK</span>
              </div>
              <span className="text-lg font-bold">{siteConfig.shortName}</span>
            </div>
            <p className="text-gray-400 text-sm">{siteConfig.description}</p>
          </div>

          {/* 产品分类 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">产品中心</h3>
            <ul className="space-y-2">
              {productCategories.map((cat) => (
                <li key={cat.id}>
                  <Link href="/products" className="text-gray-400 hover:text-white transition text-sm">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition text-sm">关于我们</Link></li>
              <li><Link href="/cases" className="text-gray-400 hover:text-white transition text-sm">成功案例</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white transition text-sm">新闻资讯</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition text-sm">联系我们</Link></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>吴经理 {siteConfig.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>💬</span>
                <span>微信扫码联系</span>
              </li>
              <li>
                <img src="/images/banners/wx.png" alt="微信二维码" className="w-24 h-24 rounded-lg mt-2" />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {siteConfig.name} 版权所有</p>
          <p className="mt-2">技术支持: 河南磐霆速科</p>
        </div>
      </div>
    </footer>
  );
}
