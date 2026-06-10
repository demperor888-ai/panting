'use client';

import Link from 'next/link';
import { siteConfig, productCategories } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="dark-band text-white">
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-brand shadow-glow overflow-hidden">
                <span className="absolute inset-x-1 top-1 h-px bg-cyan-200/70" />
                <span className="text-white font-bold text-sm tracking-tight">PTSK</span>
              </div>
              <span className="text-lg font-bold">{siteConfig.shortName}</span>
            </div>
            <p className="text-surface-300 text-sm leading-relaxed">{siteConfig.description}</p>
          </div>

          {/* 产品分类 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              产品中心
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full" />
            </h3>
            <ul className="space-y-2">
              {productCategories.map((cat) => (
                <li key={cat.id}>
                  <Link href="/products" className="text-surface-300 hover:text-white transition-colors text-sm flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-cyan-300/50 group-hover:bg-teal-300 transition-colors" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              快速链接
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full" />
            </h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-surface-300 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"><span className="w-1 h-1 rounded-full bg-cyan-300/50 group-hover:bg-teal-300 transition-colors" />关于我们</Link></li>
              <li><Link href="/cases" className="text-surface-300 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"><span className="w-1 h-1 rounded-full bg-cyan-300/50 group-hover:bg-teal-300 transition-colors" />成功案例</Link></li>
              <li><Link href="/news" className="text-surface-300 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"><span className="w-1 h-1 rounded-full bg-cyan-300/50 group-hover:bg-teal-300 transition-colors" />新闻资讯</Link></li>
              <li><Link href="/contact" className="text-surface-300 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"><span className="w-1 h-1 rounded-full bg-cyan-300/50 group-hover:bg-teal-300 transition-colors" />联系我们</Link></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              联系我们
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full" />
            </h3>
            <ul className="space-y-2 text-sm text-surface-300">
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                <span>吴经理 {siteConfig.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                <span>微信扫码联系</span>
              </li>
              <li>
                <img src="/images/banners/wx.png" alt="微信二维码" className="w-24 h-24 rounded-lg mt-2 border border-cyan-200/20" />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-200/10 mt-8 pt-8 text-center text-surface-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name} 版权所有</p>
          <p className="mt-2">技术支持: 河南磐霆速科</p>
        </div>
      </div>
    </footer>
  );
}
