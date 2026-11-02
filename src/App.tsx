import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PartnerStrip } from './components/PartnerStrip';
import { AboutSection } from './components/AboutSection';
import { ManufacturersSection } from './components/ManufacturersSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { SectorsSection } from './components/SectorsSection';
import { TerritoriesSection } from './components/TerritoriesSection';
import { ConversionCta } from './components/ConversionCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ManufacturerModal } from './components/ManufacturerModal';
import { LineCardModal } from './components/LineCardModal';
import { MANUFACTURERS, Manufacturer } from './data/wescoData';

export default function App() {
  const [selectedManufacturer, setSelectedManufacturer] = useState<Manufacturer | null>(null);
  const [lineCardOpen, setLineCardOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string>('Product Specification / BIM Submittal');
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = (subject?: string) => {
    if (subject) {
      setContactSubject(subject);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToManufacturers = () => {
    const el = document.getElementById('manufacturers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectManufacturerById = (id: string) => {
    const found = MANUFACTURERS.find((m) => m.id === id);
    if (found) {
      setSelectedManufacturer(found);
    }
  };

  const handleRequestQuoteForBrand = (brandName: string) => {
    scrollToContact(`Inquiry regarding ${brandName} specifications & pricing`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Header
        onOpenLineCard={() => setLineCardOpen(true)}
        onOpenContact={() => scrollToContact()}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenLineCard={() => setLineCardOpen(true)}
          onExploreLines={scrollToManufacturers}
        />

        {/* Partner Strip */}
        <PartnerStrip
          onSelectManufacturer={(m) => setSelectedManufacturer(m)}
        />

        {/* Section 01: About Donahue-Wesco Group */}
        <AboutSection />

        {/* Section 02: Represented Manufacturers & Product Portfolio */}
        <ManufacturersSection
          onSelectManufacturer={(m) => setSelectedManufacturer(m)}
          onOpenLineCard={() => setLineCardOpen(true)}
        />

        {/* Section 03: Agency Capabilities & Value Proposition */}
        <CapabilitiesSection
          onOpenContact={() => scrollToContact('Engineering Plan Takeoff / Drawing Review')}
        />

        {/* Section 04: Industry & Market Solutions */}
        <SectorsSection
          onOpenContact={() => scrollToContact('Sector-Specific Solution Inquiry')}
        />

        {/* Section 05: Territory Coverage & Regional Network */}
        <TerritoriesSection
          onOpenContact={() => scrollToContact('Territory Account Representative Inquiry')}
        />

        {/* Section 06: Conversion Call To Action */}
        <ConversionCta
          onOpenContact={() => scrollToContact()}
          onOpenLineCard={() => setLineCardOpen(true)}
        />

        {/* Section 07: Official Contact Section & Validated Form */}
        <ContactSection
          ref={contactRef}
          initialSubject={contactSubject}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenLineCard={() => setLineCardOpen(true)}
        onSelectManufacturer={handleSelectManufacturerById}
      />

      {/* Interactive Manufacturer Spec Sheet Modal */}
      <ManufacturerModal
        manufacturer={selectedManufacturer}
        onClose={() => setSelectedManufacturer(null)}
        onRequestQuote={handleRequestQuoteForBrand}
      />

      {/* Interactive 2026 Master Line Card Modal */}
      <LineCardModal
        isOpen={lineCardOpen}
        onClose={() => setLineCardOpen(false)}
        onRequestQuote={handleRequestQuoteForBrand}
      />
    </div>
  );
}
