import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { CORE_CAPABILITIES } from '../data/wescoData';

interface CapabilitiesSectionProps {
  onOpenContact: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Section 03 · Agency Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Why Work With Donahue-Wesco
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            Hands-on technical advocacy tailored to mechanical engineers, plumbing contractors, and wholesale supply branches.
          </p>
        </div>

        {/* Asymmetric 4-Card Grid with Natural Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_CAPABILITIES.map((cap) => (
            <div
              key={cap.number}
              className="p-8 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Natural Editorial Numbering (Rule 1.B: No mechanical code-slashes //) */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold text-blue-600 tabular-nums">
                    {cap.number}.
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Agency Discipline
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-slate-900 mb-3">
                  {cap.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-body">
                  {cap.summary}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-200/80 space-y-2">
                {cap.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contractor & Engineer Callout Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#0A1628] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold font-display text-white">
              Need Plan Takeoffs or Specification Review?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Send your project mechanical drawings or fixture schedule. Our Webster Groves engineering team will review valve sizing, low-consumption fixtures, and ADA compliance.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Submit Drawing For Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
