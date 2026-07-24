import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/coffeeData';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Building2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState<number>(0);

  const active = TESTIMONIALS[activeTestimonialIndex];

  return (
    <section id="depoimentos" className="py-24 bg-[#f4efe6] relative overflow-hidden border-t border-[#e2d5c3]">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#8c5a2b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8ded0] border border-[#d8c7b3] text-[#8c5a2b] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Depoimentos & Reputação</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-light text-[#2c1d11] leading-tight mb-4">
            Empresas e pessoas que <span className="italic font-normal gold-gradient-text">confiam na DR. COFFEE</span>
          </h2>

          <p className="font-sans-body text-sm sm:text-base text-[#5c4a3a] font-normal leading-relaxed">
            Ao longo dos anos construímos parcerias sólidas entregando experiências inesquecíveis através do café.
          </p>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#e2d5c3] p-8 sm:p-12 shadow-xl relative mb-16">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-[#8c5a2b]/15 pointer-events-none" />

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(active.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#8c5a2b] text-[#8c5a2b]" />
            ))}
          </div>

          {/* Testimonial Quote Body */}
          <blockquote className="font-serif-display text-xl sm:text-2xl text-[#2c1d11] font-light italic leading-relaxed mb-8">
            "{active.text}"
          </blockquote>

          {/* Author Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#f2e8db]">
            <div className="flex items-center gap-4">
              <img
                src={active.avatar}
                alt={active.author}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#8c5a2b]"
              />
              <div>
                <p className="text-sm font-bold text-[#2c1d11]">{active.author}</p>
                <p className="text-xs text-[#8c5a2b] font-semibold">{active.role} • <span className="text-[#6b5847]">{active.company}</span></p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#f4efe6] border border-[#e2d5c3] text-[#3d2716]">
                {active.eventType}
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-[#f2e8db]">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonialIndex === idx ? 'bg-[#8c5a2b] w-8' : 'bg-[#e2d5c3] hover:bg-[#c2b3a0]'
                  }`}
                  aria-label={`Ver depoimento ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTestimonialIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                className="p-2.5 rounded-full bg-[#f4efe6] hover:bg-[#3d2716] text-[#3d2716] hover:text-[#ffffff] border border-[#e2d5c3] transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveTestimonialIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
                className="p-2.5 rounded-full bg-[#f4efe6] hover:bg-[#3d2716] text-[#3d2716] hover:text-[#ffffff] border border-[#e2d5c3] transition-all"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
