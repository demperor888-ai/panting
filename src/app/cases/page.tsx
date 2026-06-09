'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import CaseCard from '@/components/CaseCard';
import { initialCases } from '@/data/siteData';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export default function CasesPage() {
  return (
    <div className="min-h-screen">
      {/* 顶部Banner */}
      <div className="dark-tech-band-premium relative py-24 overflow-hidden">
        <div className="scan-line" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="section-kicker border-cyan-300/25 bg-white/10 text-cyan-100">PROJECT CASES</span>
            <h1 className="text-4xl font-bold text-white mt-4">成功案例</h1>
            <p className="mt-2 text-cyan-50/60">专业服务，品质见证</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {initialCases.map((caseItem) => (
            <motion.div key={caseItem.id} variants={staggerItem}>
              <CaseCard caseItem={caseItem} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
