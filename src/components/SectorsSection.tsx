import React, { useState } from 'react';
import { Building2, Hospital, Home, Hotel, Check, ArrowRight } from 'lucide-react';
import { SECTORS } from '../data/wescoData';

interface SectorsSectionProps {
  onOpenContact: () => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onOpenContact }) => {
  const [activeSectorId, setActiveSectorId] = useState<string>(SECTORS[0].id);

  const icons: Record<string, React.ReactNode> = {
    commercial: <Building2 className="w-4 h-4" />,
    healthcare: <Hospital className="w-4 h-4" />,
    multifamily: <Home className="w-4 h-4" />,
    hospitality: <Hotel className="w-4 h-4" />,
  };

  const activeSector = SECTORS.find((s) => s.id === activeSectorId) || SECTORS[0];

  return (
    <section id="sectors" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-200">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Section 04 · Market Applications
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Sectors &amp; Solutions
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            Tailored manufacturer line pairing for high-stakes Midwest construction and retrofit environments.
          </p>
        </div>

        {/* Sector Navigation Tabs (Functional interactive button tabs) */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-200/80 rounded-lg max-w-full overflow-x-auto mb-10">
          {SECTORS.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setActiveSectorId(sector.id)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                activeSectorId === sector.id
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {icons[sector.id]}
              <span>{sector.title}</span>
            </button>
          ))}
        </div>

        {/* Active Sector Showcase Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                {icons[activeSector.id]}
                <span>Targeted Engineering Solution</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mb-4">
                {activeSector.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6 font-body">
                {activeSector.description}
              </p>

              {/* Recommended Lines */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Recommended Factory Lines
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeSector.recommendedBrands.map((brand, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 text-slate-800 rounded text-xs font-medium border border-slate-200"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantitative Impact / Claim-to-Proof Adjacency */}
              <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-lg text-xs text-blue-900 font-medium flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{activeSector.kpi}</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-xl border border-slate-200/80 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Engineering Consultation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Have a project in this sector? Get spec sheets, flow calculations, and local distributor inventory confirmations from our team.
                </p>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#0A1628] hover:bg-blue-700 rounded-md transition-colors cursor-pointer"
              >
                <span>Request Sector Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
