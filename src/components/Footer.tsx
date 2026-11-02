import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, ShieldCheck, Printer } from 'lucide-react';
import { COMPANY_INFO, MANUFACTURERS } from '../data/wescoData';

interface FooterProps {
  onOpenLineCard: () => void;
  onSelectManufacturer: (name: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLineCard, onSelectManufacturer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="py-1">
              <img
                src="/src/assets/images/wesco_logo.png"
                alt="Donahue-Wesco Group (WESCO STL)"
                className="h-10 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-body">
              Manufacturer&apos;s representative agency based in Webster Groves, Missouri. Serving wholesale supply channels, mechanical engineers, and contractors throughout Missouri, Illinois, Kansas, and Iowa with tier-1 plumbing, conservation, and valve systems.
            </p>

            <div className="space-y-1.5 pt-2 text-slate-400 text-xs font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>108 Roseacre Ln, Webster Groves, MO 63119</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Office: {COMPANY_INFO.contacts.mainOffice}</span>
              </div>
              <div className="flex items-center gap-2">
                <Printer className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Fax: {COMPANY_INFO.contacts.fax}</span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Agency Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Donahue-Wesco</a>
              </li>
              <li>
                <a href="#manufacturers" className="hover:text-white transition-colors">Represented Lines</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">Engineering &amp; Spec Services</a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">Market Applications</a>
              </li>
              <li>
                <a href="#territories" className="hover:text-white transition-colors">Midwest Territory Network</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Our Team</a>
              </li>
            </ul>
          </div>

          {/* Represented Brands Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Partner Manufacturers
            </h4>
            <ul className="space-y-2">
              {MANUFACTURERS.map((m) => (
                <li key={m.id}>
                  <button
                    onClick={() => onSelectManufacturer(m.id)}
                    className="hover:text-white text-left transition-colors cursor-pointer"
                  >
                    {m.name}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={onOpenLineCard}
                  className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                >
                  Download 2026 Line Card ›
                </button>
              </li>
            </ul>
          </div>

          {/* Coverage & Direct Contacts */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Regional Representatives
            </h4>
            <div className="space-y-3">
              <div>
                <div className="font-semibold text-white">Dan Donahue</div>
                <div className="text-[11px] text-slate-500">Sales &amp; Specifications</div>
                <div className="text-blue-400 font-mono text-[11px]">(314) 406-2443</div>
              </div>
              <div>
                <div className="font-semibold text-white">Norm Halliday</div>
                <div className="text-[11px] text-slate-500">St. Louis Operations</div>
                <div className="text-blue-400 font-mono text-[11px]">(314) 220-1546</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Donahue-Wesco Group LLC (WESCO STL). All rights reserved.
            Official domain: <span className="text-slate-300 font-mono">wescostl.com</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Webster Groves, MO · Serving the Midwest</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
