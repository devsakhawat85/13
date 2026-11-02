import React, { useState } from 'react';
import { MapPin, Phone, Mail, Check, ArrowRight } from 'lucide-react';
import { TERRITORIES, COMPANY_INFO } from '../data/wescoData';

interface TerritoriesSectionProps {
  onOpenContact: () => void;
}

export const TerritoriesSection: React.FC<TerritoriesSectionProps> = ({ onOpenContact }) => {
  const [selectedZone, setSelectedZone] = useState<number>(0);

  return (
    <section id="territories" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Section 05 · Regional Coverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Midwest Territory Network
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            Authorized regional representation across Missouri, Illinois, Kansas, and Iowa with dedicated local account leads.
          </p>
        </div>

        {/* 4-Zone Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TERRITORIES.map((zone, idx) => (
            <div
              key={zone.region}
              onClick={() => setSelectedZone(idx)}
              className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                selectedZone === idx
                  ? 'bg-blue-50/50 border-blue-500 shadow-sm ring-1 ring-blue-500'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-blue-600">
                    ZONE {idx + 1}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                    {zone.state}
                  </span>
                </div>

                <h3 className="font-bold font-display text-slate-900 text-base mb-2">
                  {zone.region}
                </h3>

                <p className="text-xs text-slate-500 mb-4">
                  {zone.status}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Metros
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {zone.cities.map((city, cIdx) => (
                      <span key={cIdx} className="text-xs text-slate-600">
                        {city}{cIdx < zone.cities.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-xs">
                <div className="text-slate-400 text-[11px]">Primary Contact:</div>
                <div className="font-semibold text-slate-800 mt-0.5">{zone.leadRep}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Territory Focus Detail Panel */}
        <div className="bg-slate-900 text-white rounded-xl p-8 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                Territory Spotlight · {TERRITORIES[selectedZone].region}
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Direct Wholesale &amp; Engineering Support for {TERRITORIES[selectedZone].region}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-body">
                Our representatives travel weekly between Webster Groves and key distributor branches, engineering offices, and active job sites throughout this territory to conduct sample reviews, verify submittals, and accelerate factory fulfillment.
              </p>

              <div className="flex flex-wrap gap-4 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-blue-400" />
                  <span>Wholesale Stocking Coordination</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-blue-400" />
                  <span>On-Site Factory Field Inspections</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-blue-400" />
                  <span>Regional Code Compliance Checks</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800/80 p-6 rounded-lg border border-slate-700/80 flex flex-col gap-4">
              <div>
                <div className="text-xs text-slate-400">Assigned Territory Rep:</div>
                <div className="text-base font-bold text-white mt-0.5">
                  {TERRITORIES[selectedZone].leadRep}
                </div>
                <div className="text-xs text-blue-400 mt-1 font-mono">
                  {COMPANY_INFO.contacts.mainOffice}
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors cursor-pointer"
              >
                <span>Connect With {TERRITORIES[selectedZone].leadRep.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
