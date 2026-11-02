import React, { useState } from 'react';
import { ArrowUpRight, Check, MapPin, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import { MANUFACTURERS, Manufacturer } from '../data/wescoData';

interface ManufacturersSectionProps {
  onSelectManufacturer: (m: Manufacturer) => void;
  onOpenLineCard: () => void;
}

export const ManufacturersSection: React.FC<ManufacturersSectionProps> = ({
  onSelectManufacturer,
  onOpenLineCard,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Represented Lines' },
    { id: 'water-conservation', label: 'Water Conservation' },
    { id: 'valves-fittings', label: 'Valves & Fittings' },
    { id: 'commercial-safety', label: 'Safety & Commercial' },
    { id: 'bathware', label: 'Architectural Bathware' },
  ];

  const filtered = activeCategory === 'all'
    ? MANUFACTURERS
    : MANUFACTURERS.filter((m) => m.category === activeCategory);

  return (
    <section id="manufacturers" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-200">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Section 02 · Represented Lines
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Manufacturer Portfolio
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenLineCard}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md shadow-xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span>Full 2026 Line Card</span>
            </button>
          </div>
        </div>

        {/* Interactive Filter Tabs - Segmented Control (Allowed by Zero-Pill) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-lg max-w-fit overflow-x-auto mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2x2 Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col group hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              {/* Product Visual Container */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                {/* Overlaid Brand Identification */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="text-[11px] font-semibold tracking-wider text-blue-300 uppercase">
                      {item.categoryLabel}
                    </div>
                    <h3 className="text-xl font-bold font-display text-white mt-0.5">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-300 font-mono hidden sm:inline-block">
                    {item.territories[0]}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">
                    {item.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-body">
                    {item.description}
                  </p>

                  {/* Key Product Bullet Points */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Featured Solutions
                    </div>
                    {item.keyProducts.slice(0, 3).map((prod, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{prod}</span>
                      </div>
                    ))}
                  </div>

                  {/* Spec Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-slate-100 text-xs mb-6">
                    {item.specHighlights.slice(0, 2).map((sh, idx) => (
                      <div key={idx}>
                        <span className="text-slate-400 block text-[11px]">{sh.label}</span>
                        <span className="font-semibold text-slate-800">{sh.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions & Rep Contact */}
                <div className="pt-2 flex items-center justify-between gap-4 border-t border-slate-100">
                  <div className="text-xs text-slate-500">
                    <span className="font-medium text-slate-700">Territory Lead:</span>{' '}
                    <span>{item.repContact.name}</span>
                  </div>

                  <button
                    onClick={() => onSelectManufacturer(item)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0A1628] hover:bg-blue-700 rounded-md transition-colors cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
