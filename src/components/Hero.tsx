import React from 'react';
import { Sparkles, ArrowDown, ChevronRight, Award, Coffee, Star } from 'lucide-react';
import { HERO_VIDEO_OPTIONS, COFFEE_IMAGES } from '../data/coffeeData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const primaryVideo = HERO_VIDEO_OPTIONS[0];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#160f0a]">
      {/* Background Video Layer - Juan Valdez Style */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={HERO_VIDEO_OPTIONS.coffee_pour}
          className="w-full h-full object-cover scale-105 filter brightness-[0.45] contrast-105"
        >
          <source src={primaryVideo.url} type="video/mp4" />
        </video>
        {/* Rich espresso vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#160f0a] via-[#160f0a]/50 to-[#160f0a]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#160f0a]/40 to-[#160f0a]/90" />
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Category Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#24170e]/80 border border-[#4d321d] backdrop-blur-md mb-6 shadow-xl animate-in fade-in slide-in-from-bottom-3 duration-700">
          <Coffee className="w-3.5 h-3.5 text-[#d4a974]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#f2e6d8] font-semibold">
            CAFÉ ESPECIAL PARA EVENTOS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a974]" />
          <span className="text-[10px] uppercase tracking-wider text-[#d1beab] hidden sm:inline">
            GRÃOS 86+ PONTOS BSCA
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-light text-[#ffffff] tracking-tight leading-[1.08] max-w-4xl mb-6">
          Experiências <span className="italic font-normal gold-gradient-text-light">memoráveis</span> em cada xícara.
        </h1>

        {/* Subtitle */}
        <p className="font-sans-body text-base sm:text-xl text-[#e3d7c7] max-w-2xl font-light leading-relaxed mb-10">
          Transformamos o café em momentos inesquecíveis que geram conexão, criando experiências únicas entre sua marca e seus clientes.</p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={onOpenQuoteModal}
            id="hero-primary-cta"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#d4a974] via-[#e5bd8b] to-[#b88c52] text-[#24170e] font-bold text-xs uppercase tracking-widest shadow-2xl hover:shadow-[#d4a974]/30 hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Sparkles className="w-4 h-4 text-[#24170e] group-hover:rotate-45 transition-transform" />
            <span>Solicitar Orçamento</span>
          </button>

          <a
            href="#galeria"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#24170e]/80 hover:bg-[#382417] border border-[#523822] hover:border-[#d4a974] text-[#ffffff] font-semibold text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Conheça Nosso Trabalho</span>
            <ChevronRight className="w-4 h-4 text-[#d4a974] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Hero Features Strip Badge */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl pt-6 border-t border-[#3d2a1b]/80 text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#21160d]/70 border border-[#3b2718]/80 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#382417] text-[#d4a974]">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#ffffff]">Métodos Artesanais</p>
              <p className="text-[10px] text-[#c4b5a3]">Espresso, V60, Chemex</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#21160d]/70 border border-[#3b2718]/80 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#382417] text-[#d4a974]">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#ffffff]">Grãos Selecionados</p>
              <p className="text-[10px] text-[#c4b5a3]">100% Arábica 86+ Pts</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#21160d]/70 border border-[#3b2718]/80 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#382417] text-[#d4a974]">
              <Star className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#ffffff]">Baristas Experientes</p>
              <p className="text-[10px] text-[#c4b5a3]">Serviço impecável</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#21160d]/70 border border-[#3b2718]/80 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#382417] text-[#d4a974]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#ffffff]">Drinks Autorais</p>
              <p className="text-[10px] text-[#c4b5a3]">Cold Brew & Tonics</p>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#d1c1af]">
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium">Role para descobrir</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#d4a974]" />
      </div>
    </section>
  );
};
