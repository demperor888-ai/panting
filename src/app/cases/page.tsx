import CaseCard from '@/components/CaseCard';
import { initialCases } from '@/data/siteData';

export default function CasesPage() {
  return (
    <div className="min-h-screen">
      {/* 顶部Banner — dark tech band */}
      <div className="dark-tech-band relative py-24 overflow-hidden">
        <div className="scan-line" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-kicker border-cyan-300/25 bg-white/10 text-cyan-100">PROJECT CASES</span>
          <h1 className="text-4xl font-bold text-white mt-4">成功案例</h1>
          <p className="mt-2 text-cyan-50/60">专业服务，品质见证</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialCases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      </div>
    </div>
  );
}
