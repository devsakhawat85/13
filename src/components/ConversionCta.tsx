import React from 'react';
import { Phone, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/wescoData';

interface ConversionCtaProps {
  onOpenContact: () => void;
  onOpenLineCard: () => void;
}

export const ConversionCta: React.FC<ConversionCtaProps> = ({ onOpenContact, onOpenLineCard }) => {
  return (
    <section className="relative py-20 bg-blue-700 text-white overflow-hidden">
      {/* Decorative architectural grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-200 mb-3">
          <span>Accelerate Your Project Specifications</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight max-w-3xl mx-auto leading-tight mb-6">
          Ready to Specify or Source Premier Plumbing Systems in the Midwest?
        </h2>

        <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
          Whether you need BIM fixture schedules for a commercial tower, wholesale stocking allocation for your supply branch, or rapid on-site troubleshooting—our Webster Groves sales engineers are ready to assist.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-md shadow-md transition-all cursor-pointer"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </button>

          <button
            onClick={onOpenLineCard}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-900/60 hover:bg-blue-900/80 border border-blue-400/40 rounded-md transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-amber-300" />
            <span>Download Master Line Card</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200 border-t border-blue-600/60 pt-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Direct St. Louis Office: (314) 220-1546</span>
          </div>
          <span aria-hidden="true" className="hidden sm:inline text-blue-400">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Factory-Direct Warranty &amp; Pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
};
