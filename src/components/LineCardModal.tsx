import React, { useState } from 'react';
import { X, Download, Printer, Check, Copy, ExternalLink, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO, MANUFACTURERS } from '../data/wescoData';

interface LineCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (brand: string) => void;
}

export const LineCardModal: React.FC<LineCardModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyInfo = () => {
    const text = `WESCO STL / Donahue-Wesco Group LLC - 2026 Line Card
Office: ${COMPANY_INFO.contacts.mainOffice} | Fax: ${COMPANY_INFO.contacts.fax}
Address: ${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state} ${COMPANY_INFO.address.zip}

Represented Lines:
1. Niagara Conservation (Stealth 0.8 GPF Toilets, High-Efficiency Fixtures)
2. Legend Valve (9,000+ Ball Valves, PressConnect, Hydronics, Commercial Fittings)
3. Speakman Company (Hospitality Showers, Emergency Eyewashes & Deluge Showers)
4. Diamond Tub & Showers (American Cast Acrylic Tubs, ADA Sectional Showers)

Territory: Missouri, Illinois, Kansas, Iowa`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div
        className="bg-white rounded-xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="p-6 bg-[#0A1628] text-white flex items-start justify-between gap-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              <span>Official Agency Document</span>
              <span aria-hidden="true">·</span>
              <span>2026 Reference Edition</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              Donahue-Wesco Group LLC — Master Line Card
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Territory: Missouri · Southern &amp; Central Illinois · Kansas · Iowa
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              title="Print Line Card"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-slate-50 font-sans print:p-0 print:bg-white">
          {/* Agency Header Banner */}
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-3">
              <img
                src="/images/wesco_logo.png"
                alt="Donahue-Wesco Group (WESCO STL)"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="text-xs text-slate-600">
                {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-mono">
                <span>Phone: {COMPANY_INFO.contacts.mainOffice}</span>
                <span>Fax: {COMPANY_INFO.contacts.fax}</span>
                <span>Web: wescostl.com</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 shrink-0">
              <button
                onClick={handleCopyInfo}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded border border-slate-200 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Agency Details'}</span>
              </button>
            </div>
          </div>

          {/* Line Card Table */}
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider">
                Represented Manufacturers &amp; Scope of Supply
              </span>
              <span className="text-[11px] font-mono text-blue-400">
                Current as of November 2026
              </span>
            </div>

            <div className="divide-y divide-slate-200">
              {MANUFACTURERS.map((m) => (
                <div key={m.id} className="p-6 hover:bg-slate-50/60 transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-4">
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                        {m.categoryLabel}
                      </div>
                      <h4 className="text-lg font-bold font-display text-slate-900 mt-0.5">
                        {m.name}
                      </h4>
                      <div className="text-xs text-slate-500 mt-1">
                        {m.tagline}
                      </div>
                      <div className="mt-3 text-xs text-slate-600">
                        <span className="font-semibold text-slate-800">Authorized Territory:</span>
                        <div className="text-slate-500 mt-0.5">{m.territories.join(', ')}</div>
                      </div>
                    </div>

                    <div className="md:col-span-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Product Lines &amp; Systems
                      </div>
                      <ul className="space-y-1.5">
                        {m.keyProducts.map((p, idx) => (
                          <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                            <span className="text-blue-600 font-bold">›</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-3 flex flex-col justify-between h-full bg-slate-50 p-3.5 rounded border border-slate-200/80">
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Territory Rep
                        </div>
                        <div className="text-xs font-bold text-slate-900 mt-0.5">{m.repContact.name}</div>
                        <div className="text-[11px] text-slate-500">{m.repContact.role}</div>
                        <div className="text-xs text-blue-600 font-mono mt-1">{m.repContact.phone}</div>
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onRequestQuote(m.name);
                        }}
                        className="mt-3 w-full py-1.5 px-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-[11px] font-semibold transition-colors cursor-pointer text-center"
                      >
                        Request Quote / Submittal
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Rep Contacts Roster */}
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Direct Sales &amp; Operations Roster
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMPANY_INFO.leadership.map((l) => (
                <div key={l.name} className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-slate-900 text-sm">{l.name}</div>
                  <div className="text-xs text-blue-600 font-medium">{l.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{l.territory}</div>
                  <div className="mt-3 pt-2 border-t border-slate-200 flex flex-wrap items-center gap-3 text-xs">
                    <a href={`tel:${l.phone.replace(/[^0-9]/g, '')}`} className="text-slate-700 hover:text-blue-600 font-mono flex items-center gap-1">
                      <Phone className="w-3 h-3 text-blue-500" />
                      <span>{l.phone}</span>
                    </a>
                    <span className="text-slate-300">|</span>
                    <a href={`mailto:${l.email}`} className="text-slate-700 hover:text-blue-600 flex items-center gap-1">
                      <Mail className="w-3 h-3 text-blue-500" />
                      <span>{l.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-mono">
            Direct Office: (314) 220-1546 · Webster Groves, MO
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
