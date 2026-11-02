import React from 'react';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, MapPin, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/wescoData';

interface HeroProps {
  onOpenLineCard: () => void;
  onExploreLines: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLineCard, onExploreLines }) => {
  return (
    <section className="relative bg-[#0A1628] text-white overflow-hidden border-b border-slate-800">
      {/* Subtle architectural grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-24 relative z-10">
        {/* Editorial Eyebrow & Kicker - Zero Pill Discipline */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-5">
          <span>St. Louis, MO Agency</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Commercial & Industrial Plumbing</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300">Est. Webster Groves</span>
        </div>

        {/* 2-Column Split: Editorial Value Prop + High-Fidelity Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Editorial Headline & Value Prop */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1
              className="font-display font-bold tracking-tight text-white leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Connecting Premier Plumbing Manufacturers with the Midwest&apos;s Leading Builders &amp; Distributors.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-body">
              Donahue-Wesco Group (WESCO STL) is the trusted manufacturer&apos;s representative for elite commercial plumbing, industrial valves, and water conservation systems. We bridge engineers, architects, mechanical contractors, and wholesale distributors with unmatched local technical expertise.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onExploreLines}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md shadow-sm transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Explore Represented Lines</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenLineCard}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-md transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View 2026 Line Card</span>
              </button>
            </div>

            {/* Direct Channel Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Direct Factory Representation</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>ASPE / AIA Spec Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Wholesale Stocking Alignment</span>
              </div>
            </div>
          </div>

          {/* Column 2: High-Fidelity Architectural Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
              <img
                src="/images/wesco_hero_commercial_mechanical.jpg"
                alt="Commercial mechanical piping and valve installation engineered with Donahue-Wesco Group partner equipment"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-black/20" />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-slate-950/90 via-slate-950/70 to-transparent">
                <p className="text-xs font-semibold text-white tracking-wide">
                  Midwest Commercial &amp; Industrial Infrastructure
                </p>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Specification engineering for hospitals, hospitality, schools &amp; municipal facilities.
                </p>
              </div>
            </div>

            {/* Subtle decorative geometry */}
            <div className="absolute -top-3 -right-3 w-24 h-24 border border-blue-500/20 rounded-xl pointer-events-none -z-10" />
          </div>
        </div>

        {/* Full-width 4-Column KPI / Territory Strip below hero split */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="border-l border-slate-800 pl-4">
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
              4 States
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Regional Territory: MO, IL, KS &amp; IA
            </div>
          </div>

          <div className="border-l border-slate-800 pl-4">
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
              4 Tier-1 Lines
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Niagara, Legend, Speakman &amp; Diamond
            </div>
          </div>

          <div className="border-l border-slate-800 pl-4">
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
              0.8 GPF
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Ultra-Efficiency Water Conservation Leaders
            </div>
          </div>

          <div className="border-l border-slate-800 pl-4">
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
              100% Local
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Webster Groves / St. Louis Headquarters
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
