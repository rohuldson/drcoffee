import React from 'react';
import { CheckCircle2, Award, Flame, Globe2, Sparkles, Coffee } from 'lucide-react';
import { COFFEE_IMAGES } from '../data/coffeeData';

export const EssenceSection: React.FC = () => {
  return (
    <section id="essencia" className="py-24 bg-[#faf7f2] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#8c5a2b]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Overlapping Image Gallery Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Background Image */}
              <div className="relative rounded-2xl overflow-hidden border border-[#e5dac9] shadow-xl group bg-white">
                <img
                  src={COFFEE_IMAGES.baristaExtraction}
                  alt="Barista extraindo café artesanal"
                  referrerPolicy="no-referrer"
                  className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#e5dac9] shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#f2e8db] text-[#8c5a2b]">
                      <Coffee className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#2c1d11]">Métodos Artesanais de Extração</p>
                      <p className="text-[11px] text-[#6b5847]">V60, Chemex, Aeropress & Espresso 93°C</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inset Secondary Image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-60 rounded-xl overflow-hidden border-4 border-white shadow-2xl hidden sm:block">
                <img
                  src={COFFEE_IMAGES.espressoMachine}
                  alt="Equipamentos de Espresso Premium"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>

              {/* Decorative Accent Frame */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#8c5a2b]/40 pointer-events-none rounded-tl-xl" />
            </div>
          </div>

          {/* Text & Philosophy Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2e8db] border border-[#d8c7b3] text-[#8c5a2b] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nossa Filosofia</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-5xl font-light text-[#2c1d11] leading-[1.15]">
              Muito mais do que servir café. <span className="italic font-normal gold-gradient-text">Criamos experiências.</span>
            </h2>

            <p className="font-sans-body text-sm sm:text-base text-[#5c4a3a] font-normal leading-relaxed">
              Há mais de uma década transformamos cafés especiais em experiências memoráveis para empresas, feiras, congressos e eventos corporativos. Cada detalhe é planejado para fortalecer marcas, aproximar pessoas e surpreender convidados através do aroma inconfundível dos melhores microlotes do Brasil.
            </p>

            {/* Core Value Pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#e5dac9] shadow-sm hover:border-[#8c5a2b]/50 transition-colors">
                <div className="p-2.5 rounded-lg bg-[#f4efe6] text-[#8c5a2b] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2c1d11] mb-1">Baristas Especializados</h4>
                  <p className="text-xs text-[#6b5847]">Profissionais diplomados e uniformizados, prontos para encantar os convidados com cordialidade e storytelling de cada café.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#e5dac9] shadow-sm hover:border-[#8c5a2b]/50 transition-colors">
                <div className="p-2.5 rounded-lg bg-[#f4efe6] text-[#8c5a2b] shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2c1d11] mb-1">Equipamentos Premium</h4>
                  <p className="text-xs text-[#6b5847]">Máquinas italianas de alta rotação (La Cimbali, Nuova Simonelli, La Marzocco) que garantem extração constante em eventos de qualquer porte.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#e5dac9] shadow-sm hover:border-[#8c5a2b]/50 transition-colors">
                <div className="p-2.5 rounded-lg bg-[#f4efe6] text-[#8c5a2b] shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2c1d11] mb-1">Atendimento em Todo o Brasil</h4>
                  <p className="text-xs text-[#6b5847]">Estrutura móvel completa e autônoma, preparada para atuar em centros de convenções, pavilhões de feiras e espaços abertos.</p>
                </div>
              </div>
            </div>

            {/* Link to Cases */}
            <div className="pt-2">
              <a
                href="#galeria"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#8c5a2b] hover:text-[#593819] transition-colors group"
              >
                <span>Conheça nossos casos de sucesso</span>
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
