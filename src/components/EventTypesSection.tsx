import React from 'react';
import { EVENT_CATEGORIES } from '../data/coffeeData';
import { Sparkles, Users, Check, ChevronRight, ArrowRight } from 'lucide-react';

interface EventTypesSectionProps {
  onOpenQuoteModalWithCategory: (categoryId: string) => void;
}

export const EventTypesSection: React.FC<EventTypesSectionProps> = ({ onOpenQuoteModalWithCategory }) => {
  return (
    <section id="eventos" className="py-24 bg-[#f4efe6] relative overflow-hidden border-t border-[#e2d5c3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8ded0] border border-[#d8c7b3] text-[#8c5a2b] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formatos de Atendimento</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-light text-[#2c1d11] leading-tight mb-4">
            Cada evento merece uma <span className="italic font-normal gold-gradient-text">experiência única</span>.
          </h2>

          <p className="font-sans-body text-sm sm:text-base text-[#5c4a3a] font-normal leading-relaxed">
            Não levamos apenas máquinas de café. Levamos estrutura, atendimento e uma experiência completa para encantar convidados e fortalecer sua marca.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EVENT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-2xl border border-[#e2d5c3] hover:border-[#8c5a2b] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden bg-[#e8ded0]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />

                  {/* Capacity Pill */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#e2d5c3] text-xs text-[#2c1d11] font-bold shadow-md">
                    <Users className="w-3.5 h-3.5 text-[#8c5a2b]" />
                    <span>{cat.capacityText}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif-display text-2xl font-bold text-[#2c1d11] group-hover:text-[#8c5a2b] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#8c5a2b] font-bold mt-1">{cat.subtitle}</p>
                  </div>

                  <p className="text-xs text-[#5c4a3a] leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Features List */}
                  <div className="pt-2 border-t border-[#f2e8db] space-y-2">
                    {cat.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#3d2716] font-medium">
                        <Check className="w-4 h-4 text-[#8c5a2b] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuoteModalWithCategory(cat.id)}
                  className="w-full py-3 rounded-xl bg-[#f4efe6] hover:bg-[#3d2716] text-[#3d2716] hover:text-[#ffffff] font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 border border-[#e2d5c3] hover:border-[#3d2716]"
                >
                  <span>Solicitar Orçamento para este Formato</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
