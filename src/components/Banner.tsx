'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Banner as BannerType } from '@/data/siteData';
import Link from 'next/link';

interface BannerProps {
  banners: BannerType[];
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.96,
  }),
};

const bgVariants = {
  enter: { opacity: 0, scale: 1.08 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.92 },
};

export default function Banner({ banners }: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const stats = [
    ['50+', '材料品类'],
    ['500+', '工程客户'],
    ['24h', '响应支持'],
  ];

  return (
    <div className="relative min-h-[620px] overflow-hidden dark-band-premium">
      {/* 切换背景 */}
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banners[currentIndex].image})` }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'linear-gradient(105deg,rgba(16,26,43,0.92) 0%,rgba(30,45,67,0.72) 44%,rgba(16,26,43,0.32) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="scan-line" />

      {/* 科技几何装饰 */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.18] pointer-events-none" viewBox="0 0 1440 620" fill="none" preserveAspectRatio="none">
        <path d="M0 520 C240 470 360 575 590 505 C825 433 930 508 1120 438 C1260 386 1360 360 1440 374" stroke="url(#lineA)" strokeWidth="1.5" />
        <path d="M930 118 H1170 L1226 174 V314" stroke="url(#lineB)" strokeWidth="1.5" />
        <path d="M100 122 H336 L398 184 H580" stroke="url(#lineB)" strokeWidth="1" />
        <path d="M1050 410 L1104 378 L1160 410 L1160 474 L1104 506 L1050 474 Z" stroke="#39d5ff" strokeWidth="1.2" />
        <path d="M1140 282 L1180 258 L1220 282 L1220 330 L1180 354 L1140 330 Z" stroke="#f6c35f" strokeWidth="1" />
        <defs>
          <linearGradient id="lineA" x1="0" y1="510" x2="1440" y2="410" gradientUnits="userSpaceOnUse">
            <stop stopColor="#39d5ff" stopOpacity="0" />
            <stop offset="0.48" stopColor="#39d5ff" />
            <stop offset="1" stopColor="#12c7b5" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineB" x1="930" y1="118" x2="1226" y2="314" gradientUnits="userSpaceOnUse">
            <stop stopColor="#39d5ff" />
            <stop offset="1" stopColor="#f6c35f" />
          </linearGradient>
        </defs>
      </svg>

      {/* 内容 */}
      <div className="relative z-10 mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(45,212,191,0.9)]" />
                PANTING ADVANCED MATERIALS
              </div>

              <h2 className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-teal-200 bg-clip-text text-transparent">
                  {banners[currentIndex].title}
                </span>
              </h2>

              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-cyan-50/80 md:text-xl">
                {banners[currentIndex].subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={banners[currentIndex].link}
                  className="btn-glow inline-flex items-center gap-2 px-8 py-3.5"
                >
                  <span>查看产品体系</span>
                  <motion.svg
                    className="h-4 w-4"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </Link>
                <Link
                  href="/cases"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition hover:border-cyan-200/50 hover:bg-white/20"
                >
                  工程案例
                </Link>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                {stats.map(([value, label], i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md"
                  >
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="mt-1 text-xs text-cyan-100/70">{label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 右侧能力矩阵面板 */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="rounded-xl border border-white/20 bg-white/15 p-6 text-white backdrop-blur-2xl">
            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Material Matrix</p>
                  <h3 className="mt-2 text-2xl font-semibold">工程材料能力矩阵</h3>
                </div>
                <motion.span
                  className="rounded-md border border-teal-300/30 px-3 py-1 text-xs font-semibold text-teal-100"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ONLINE
                </motion.span>
              </div>
              <div className="space-y-4">
                {[
                  ['灌浆加固', '92%'],
                  ['结构修复', '86%'],
                  ['防水防腐', '88%'],
                  ['装配式连接', '84%'],
                ].map(([name, value]) => (
                  <div key={name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-cyan-50/80">{name}</span>
                      <span className="font-semibold text-amber-200">{value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-teal-300 to-amber-200"
                        initial={{ width: 0 }}
                        animate={{ width: value }}
                        transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-cyan-100/65">核心场景</p>
                  <p className="mt-2 font-semibold">桥梁 / 厂房 / 基建</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-cyan-100/65">服务模式</p>
                  <p className="mt-2 font-semibold">选型 / 施工 / 售后</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 指示器 */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-500 ${
              index === currentIndex
                ? 'bg-white w-8 h-2.5 shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                : 'bg-white/40 hover:bg-white/60 w-2.5 h-2.5'
            }`}
            aria-label={`切换到第 ${index + 1} 张`}
          />
        ))}
      </div>
    </div>
  );
}
