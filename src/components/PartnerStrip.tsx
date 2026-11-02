import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { MANUFACTURERS, Manufacturer } from '../data/wescoData';

interface PartnerStripProps {
  onSelectManufacturer: (m: Manufacturer) => void;
}

export const PartnerStrip: React.FC<PartnerStripProps> = ({ onSelectManufacturer }) => {
  return (
    <div className="bg-slate-900 border-b border-slate-800 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Authorized Regional Factory Representation</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {MANUFACTURERS.map((m) => (
            <button
              key={m.id}
              onClick={() => onSelectManufacturer(m)}
              className="p-4 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/70 hover:border-blue-500/50 transition-all text-left group cursor-pointer"
            >
              <div className="text-sm font-bold font-display text-white group-hover:text-blue-400 transition-colors">
                {m.name}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                {m.categoryLabel}
              </div>
              <div className="text-[10px] text-blue-400 font-mono mt-2 flex items-center gap-1 opacity-80 group-hover:opacity-100">
                <span>View Line Specs</span>
                <span className="font-bold">›</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
