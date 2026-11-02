import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/wescoData';

interface HeaderProps {
  onOpenLineCard: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLineCard, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Manufacturers', href: '#manufacturers' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Territories', href: '#territories' },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#0A1322] text-slate-300 border-b border-slate-800 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-blue-400 font-medium">St. Louis Regional Agency</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Serving MO, IL, KS & IA</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.contacts.mainOffice.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Office: {COMPANY_INFO.contacts.mainOffice}</span>
            </a>
            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">|</span>
            <button
              onClick={onOpenLineCard}
              className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Download 2026 Line Card</span>
              <ArrowUpRight className="w-3 h-3 text-amber-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar — Top Bar Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-sm py-3.5'
            : 'bg-white border-slate-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Official Brand Logo */}
          <a href="#" className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded py-1">
            <img
              src="/src/assets/images/wesco_logo.png"
              alt="Donahue-Wesco Group - WESCO STL"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#0A1628] hover:bg-blue-700 rounded-md shadow-xs transition-colors whitespace-nowrap cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              Contact Our Team
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[97px] bg-white border-b border-slate-200 shadow-xl z-30 px-6 py-6 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLineCard();
                }}
                className="w-full text-center px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
              >
                View 2026 Line Card
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-[#0A1628] hover:bg-blue-700 rounded-md transition-colors cursor-pointer"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
