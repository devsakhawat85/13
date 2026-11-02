import React from 'react';
import { X, Check, ExternalLink, Download, Mail, Phone, MapPin, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { Manufacturer } from '../data/wescoData';

interface ManufacturerModalProps {
  manufacturer: Manufacturer | null;
  onClose: () => void;
  onRequestQuote: (brandName: string) => void;
}

export const ManufacturerModal: React.FC<ManufacturerModalProps> = ({
  manufacturer,
  onClose,
  onRequestQuote,
}) => {
  if (!manufacturer) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div
        className="bg-white rounded-xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-900 text-white flex items-start justify-between gap-4 border-b border-slate-800">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              {manufacturer.categoryLabel} · Factory Line Profile
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              {manufacturer.name}
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              {manufacturer.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Visual & Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 h-48 rounded-lg overflow-hidden border border-slate-200">
              <img
                src={manufacturer.image}
                alt={manufacturer.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="sm:col-span-7">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Agency Overview &amp; Representation Scope
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed font-body">
                {manufacturer.extendedDescription}
              </p>
            </div>
          </div>

          {/* Technical Spec Matrix */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Specification &amp; Engineering Benchmarks</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200/80">
              {manufacturer.specHighlights.map((sh, idx) => (
                <div key={idx} className="border-l-2 border-blue-600 pl-3">
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider">{sh.label}</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">{sh.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Featured Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Represented Product Families &amp; Components
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {manufacturer.keyProducts.map((prod, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded bg-white border border-slate-200 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{prod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Territory & Assigned Representative */}
          <div className="p-4 rounded-lg bg-blue-50/60 border border-blue-200/70 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-700" />
                <span>Territory Authorization</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {manufacturer.territories.join(', ')}
              </p>
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900 mb-1">
                Designated Sales Engineer
              </div>
              <div className="text-xs font-semibold text-slate-900">{manufacturer.repContact.name}</div>
              <div className="text-[11px] text-slate-600">{manufacturer.repContact.role}</div>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-blue-700">
                <a href={`tel:${manufacturer.repContact.phone.replace(/[^0-9]/g, '')}`} className="hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>{manufacturer.repContact.phone}</span>
                </a>
                <span>·</span>
                <a href={`mailto:${manufacturer.repContact.email}`} className="hover:underline flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  <span>{manufacturer.repContact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href={manufacturer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>Visit Factory Website ({manufacturer.name})</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onRequestQuote(manufacturer.name);
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors cursor-pointer"
            >
              Request Pricing / Spec Submittal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
