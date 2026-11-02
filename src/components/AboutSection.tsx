import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Building, Award, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data/wescoData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Section 01 · Corporate Background
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              About Donahue-Wesco Group
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            The dedicated bridge between elite manufacturing facilities and the Midwest&apos;s commercial, residential, and institutional plumbing channels.
          </p>
        </div>

        {/* 2-Column Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed font-body">
            <p className="text-lg text-slate-900 font-medium">
              Headquartered in Webster Groves, Missouri, <strong>Donahue-Wesco Group LLC (WESCO STL)</strong> operates as an independent sales, marketing, and engineering representative agency for premier plumbing and fluid-handling manufacturers.
            </p>

            <p>
              In modern construction, specification errors and delayed supply chains cost contractors and developers thousands in rework and downtime. We operate on the ground across Missouri, Illinois, Kansas, and Iowa—ensuring engineers have accurate BIM/CAD specs, wholesale distribution branches maintain the right stocking levels, and mechanical contractors receive swift technical answers directly from factory engineers.
            </p>

            <p>
              Rather than representing dozens of overlapping or competing brands, Donahue-Wesco intentionally maintains a focused, high-conviction line card. Every product we represent—from Niagara&apos;s pioneering 0.8 GPF toilets to Legend&apos;s 9,000+ precision valves, Speakman&apos;s architectural fixtures, and Diamond&apos;s American-made acrylic bathware—is an undisputed benchmark in its category.
            </p>

            {/* Direct Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-display font-semibold text-slate-900 text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Spec Integrity &amp; Compliance</span>
                </div>
                <p className="text-xs text-slate-600">
                  Comprehensive assistance with WaterSense, ADA, and ANSI Z358.1 emergency fixture codes.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-display font-semibold text-slate-900 text-sm mb-1">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Field Rep Presence</span>
                </div>
                <p className="text-xs text-slate-600">
                  Direct jobsite inspections, branch counter trainings, and contractor demo support.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership & Local St. Louis Office */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-xl bg-slate-900 text-white shadow-sm border border-slate-800">
              <div className="mb-5 pb-4 border-b border-slate-800">
                <img
                  src="/src/assets/images/wesco_logo.png"
                  alt="Donahue-Wesco Group"
                  className="h-7 sm:h-8 w-auto object-contain brightness-0 invert opacity-95"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Headquarters &amp; Contact</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Webster Groves Office
              </h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                <br />
                Serving Greater St. Louis, Mid-Missouri, and the Midwest Corridor.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                {COMPANY_INFO.leadership.map((person) => (
                  <div key={person.name} className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700/80">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-sm text-white">{person.name}</div>
                      <span className="text-[11px] text-blue-400 font-mono">{person.phone}</span>
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">{person.title}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{person.territory}</div>
                    <div className="mt-2 pt-2 border-t border-slate-700 flex items-center gap-3 text-xs">
                      <a
                        href={`mailto:${person.email}`}
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                      >
                        <Mail className="w-3 h-3" />
                        <span>{person.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Fact Banner */}
            <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200/70 text-slate-800">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                    Wholesale Distributor Stewardship
                  </h4>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    We maintain daily inventory coordination and pricing support with regional commercial plumbing supply houses across Missouri, Illinois, Kansas, and Iowa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
