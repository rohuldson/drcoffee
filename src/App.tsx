import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { EssenceSection } from './components/EssenceSection';
import { SensoryMenuSection } from './components/SensoryMenuSection';
import { FoundersSection } from './components/FoundersSection';
import { EventTypesSection } from './components/EventTypesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { InteractiveQuoteModal } from './components/InteractiveQuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedCategory, setPreselectedCategory] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (category?: string) => {
    setPreselectedCategory(category);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setPreselectedCategory(undefined);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2c1d11] font-sans-body selection:bg-[#8c5a2b] selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Hero Section */}
      <Hero
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Impact Stats Strip */}
      <StatsBar />

      {/* Brand Essence & Extraction Methods */}
      <EssenceSection />

      {/* Sensory Menu & Specialty Drinks */}
      <SensoryMenuSection />

      {/* Founders Section (Two Friends United by Coffee) */}
      <FoundersSection />

      {/* Event Formats & Capacity */}
      <EventTypesSection
        onOpenQuoteModalWithCategory={(category) => handleOpenQuoteModal(category)}
      />

      {/* Elegant Gallery with Advanced Category Filtering & Case Lightbox */}
      <GallerySection />

      {/* Client Testimonials & Trusted Brand Cloud */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Interactive Event Quote Calculator Modal */}
      <InteractiveQuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedCategory={preselectedCategory}
      />

    </div>
  );
}
