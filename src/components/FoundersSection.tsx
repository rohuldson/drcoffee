import React from 'react';
import { FOUNDERS } from '../data/coffeeData';
import { Award, Heart, Sparkles, Quote, Coffee } from 'lucide-react';

export const FoundersSection: React.FC = () => {
  const founder = FOUNDERS[0];

  return (
    <section id="fundadores" className="py-24 bg-[#faf7f2] relative overflow-hidden border-t border-[#e2d5c3]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#8c5a2b]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8ded0] border border-[#d8c7b3] text-[#8c5a2b] text-xs font-semibold uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5 text-[#8c5a2b]" />
            <span>Nossa História</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-light text-[#2c1d11] leading-tight mb-4">
            Dois amigos unidos pelo <span className="italic font-normal gold-gradient-text">amor ao café</span>.
          </h2>

          <p className="font-sans-body text-sm sm:text-base text-[#5c4a3a] font-normal leading-relaxed">
            Uma amizade nascida nos balcões de gastronomia que se transformou em referência nacional no mercado de cafés especiais para eventos de alto padrão.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-[#e2d5c3] shadow-xl group bg-white">
                <img
                  src={founder.image}
                  alt={founder.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlaid Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#e2d5c3] shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#3d2716] text-white font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2c1d11]">{founder.name}</p>
                      <p className="text-[11px] text-[#8c5a2b] font-semibold">{founder.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative framing element */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-[#8c5a2b]/30 pointer-events-none rounded-bl-xl" />
            </div>
          </div>

          {/* Text & Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Story Text */}
            <div className="space-y-4">
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2c1d11] font-normal leading-snug">
                "Nos recusamos a aceitar que eventos importantes servissem cafés genéricos."
              </h3>

              <p className="font-sans-body text-sm sm:text-base text-[#5c4a3a] font-normal leading-relaxed">
                {founder.bio}
              </p>

              <p className="font-sans-body text-sm sm:text-base text-[#5c4a3a] font-normal leading-relaxed">
                Cada grão servido pela DR. COFFEE passa pessoalmente pela avaliação sensorial de Lucas e Gabriel em microlotes de produtores parceiros do Cerrado Mineiro, Mantiqueira e Chapada Diamantina.
              </p>
            </div>

            {/* Inspirational Quote Card */}
            <div className="p-6 rounded-2xl bg-[#f4efe6] border border-[#e2d5c3] shadow-md relative overflow-hidden">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-[#8c5a2b]/15 pointer-events-none" />
              
              <p className="font-serif-display text-lg sm:text-xl italic text-[#2c1d11] leading-relaxed mb-4">
                "{founder.quote}"
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[#e2d5c3]">
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-[#8c5a2b]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8c5a2b]">Lucas & Gabriel</span>
                </div>
                <span className="text-[11px] text-[#6b5847] italic font-serif font-medium">Q-Graders CQI Certified</span>
              </div>
            </div>

            {/* Core Specialties Pills */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-[#8c5a2b] font-bold mb-3">Pilares da Curadoria dos Fundadores:</p>
              <div className="flex flex-wrap gap-2">
                {founder.specialties.map((spec, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-white border border-[#e2d5c3] text-[#3d2716] font-medium flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8c5a2b]" />
                    <span>{spec}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
