import CaseCard from '@/components/CaseCard';
import { initialCases } from '@/data/siteData';

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部Banner */}
      <div className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">成功案例</h1>
          <p className="mt-2 text-primary-200">专业服务，品质见证</p>
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
