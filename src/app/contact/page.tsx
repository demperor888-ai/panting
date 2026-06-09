'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import { siteConfig } from '@/data/siteData';

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const MessageIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
  </svg>
);

const iconVariants = {
  initial: { rotate: -4, scale: 0.92 },
  hover: {
    rotate: 0,
    scale: 1.08,
    transition: { type: 'spring', stiffness: 250, damping: 12 },
  },
};

export default function ContactPage() {
  const contacts = [
    {
      Icon: PhoneIcon,
      label: '联系电话',
      value: `吴经理 ${siteConfig.phone}`,
      extra: siteConfig.workingHours,
    },
    {
      Icon: LocationIcon,
      label: '公司地址',
      value: siteConfig.address,
    },
    {
      Icon: MessageIcon,
      label: '微信扫码联系',
      isWechat: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 顶部Banner */}
      <div className="dark-tech-band-premium relative py-24 overflow-hidden">
        <div className="scan-line" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="section-kicker border-brand-300/25 bg-white/10 text-brand-50">CONTACT</span>
            <h1 className="text-4xl font-bold text-white mt-4">联系我们</h1>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* 联系信息 */}
          <ScrollReveal>
            <div className="tech-panel p-8">
              <div className="relative z-10">
                <span className="section-kicker">GET IN TOUCH</span>
                <h2 className="text-2xl font-bold text-surface-800 mt-2 mb-6">联系方式</h2>

                <div className="space-y-6">
                  {contacts.map(({ Icon, label, value, extra, isWechat }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.12 }}
                      className="flex items-start space-x-5 group"
                    >
                      {/* Icon container */}
                      <motion.div
                        className="relative w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-white overflow-hidden"
                        initial={{ rotate: -3, scale: 0.94 }}
                        whileHover={{ rotate: 0, scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 250, damping: 14 }}
                      >
                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600" />
                        {/* Subtle inner glow ring */}
                        <div className="absolute inset-[3px] rounded-[10px] border border-white/15" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                        <span className="relative z-10">
                          <Icon />
                        </span>
                      </motion.div>

                      <div className="flex-1 min-w-0 pt-1.5">
                        <p className="text-xs font-medium text-surface-400 uppercase tracking-wider mb-1">{label}</p>
                        {isWechat ? (
                          <motion.img
                            src="/images/banners/wx.png"
                            alt="微信二维码"
                            className="w-28 h-28 rounded-xl mt-1 border border-surface-200 shadow-sm"
                            whileHover={{ scale: 1.06 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                          />
                        ) : (
                          <>
                            <p className="text-lg font-semibold text-surface-800 group-hover:text-brand-700 transition-colors">{value}</p>
                            {extra && (
                              <p className="text-sm text-surface-400 mt-0.5 flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-accent-400" />
                                {extra}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 公司位置地图 */}
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-surface-800 mb-3">公司位置</h3>
                  <iframe
                    title="公司位置"
                    width="100%"
                    height="300"
                    className="rounded-xl border-0 shadow-sm"
                    loading="lazy"
                    src="/map.html"
                  />
                  <p className="text-xs text-surface-400 mt-1 text-center">河南省郑州市高新技术产业开发区</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
