import React, { useState } from 'react';
import { SPECIALTY_DRINKS } from '../data/coffeeData';
import { Drink, DrinkCategory } from '../types';
import { Coffee, Flame, Droplets, Thermometer, Clock, Sparkles, X, ChevronRight, Award, Layers } from 'lucide-react';

export const SensoryMenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  const categories = [
    { id: 'all', label: 'Todas as Bebidas' },
    { id: 'espresso', label: 'Espresso & Clássicos' },
    { id: 'cappuccino', label: 'Cappuccinos & Cremosos' },
    { id: 'filtrados', label: 'Filtrados Artesanais' },
    { id: 'drinks_autorais', label: 'Drinks Autorais Gelados' },
  ];

  const filteredDrinks = activeTab === 'all'
    ? SPECIALTY_DRINKS
    : SPECIALTY_DRINKS.filter(d => d.category === activeTab);

  return (
    <section id="cardapio" className="py-24 bg-[#f4efe6] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#8c5a2b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8ded0] border border-[#d8c7b3] text-[#8c5a2b] text-xs font-semibold uppercase tracking-widest mb-4">
            <Coffee className="w-3.5 h-3.5" />
            <span>Cardápio & Experiência Sensorial</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-light text-[#2c1d11] leading-tight mb-4">
            Grãos Selecionados & <span className="italic font-normal gold-gradient-text">Extração de Precisão</span>
          </h2>

          <p className="font-sans-body text-sm sm:text-base text-[#5c4a3a] font-normal leading-relaxed">
            Nossas bebidas utilizam grãos 100% Arábica de alta altitude com pontuação acima de 86 pontos BSCA, moídos no momento do preparo para revelar um buquê aromático inesquecível.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-[#3d2716] via-[#593920] to-[#2b1b0f] text-[#ffffff] border-[#3d2716] shadow-md scale-105'
                  : 'bg-white text-[#5c4a3a] border-[#e2d5c3] hover:text-[#2c1d11] hover:border-[#8c5a2b]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Drinks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDrinks.map((drink) => (
            <div
              key={drink.id}
              onClick={() => setSelectedDrink(drink)}
              className="group bg-white rounded-2xl border border-[#e2d5c3] hover:border-[#8c5a2b] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-[#e8ded0]">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />

                  {/* Temperature & Category Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#e2d5c3] text-[10px] uppercase font-bold text-[#2c1d11] tracking-wider shadow-sm">
                      {drink.categoryLabel}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full backdrop-blur-md text-[10px] uppercase font-bold tracking-wider shadow-sm ${
                      drink.temperature === 'Gelado'
                        ? 'bg-cyan-50 border border-cyan-300 text-cyan-800'
                        : 'bg-amber-50 border border-amber-300 text-amber-900'
                    }`}>
                      {drink.temperature}
                    </span>
                  </div>

                  {/* Preparation Time */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-white/90 text-[10px] text-[#5c4a3a] font-semibold flex items-center gap-1 border border-[#e2d5c3] shadow-sm">
                    <Clock className="w-3 h-3 text-[#8c5a2b]" />
                    <span>{drink.prepTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-serif-display text-xl font-bold text-[#2c1d11] group-hover:text-[#8c5a2b] transition-colors leading-snug">
                      {drink.name}
                    </h3>
                    <p className="text-[11px] text-[#7d6b5b] font-medium mt-0.5">{drink.subtitle}</p>
                  </div>

                  <p className="text-xs text-[#5c4a3a] line-clamp-2 leading-relaxed">
                    {drink.description}
                  </p>

                  {/* Sensory Tags */}
                  <div className="pt-2 border-t border-[#f2e8db]">
                    <p className="text-[10px] uppercase tracking-wider text-[#8c5a2b] font-bold mb-1.5">Notas Sensoriais:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {drink.sensory.notes.map((note, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#f4efe6] border border-[#e2d5c3] text-[#3d2716] font-medium">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDrink(drink);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#f4efe6] group-hover:bg-[#3d2716] text-[#3d2716] group-hover:text-[#ffffff] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-[#e2d5c3] group-hover:border-[#3d2716]"
                >
                  <span>Ver Perfil Sensorial</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Drink Sensory Profile Modal */}
      {selectedDrink && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-[#faf7f2] border border-[#e2d5c3] rounded-2xl overflow-hidden shadow-2xl text-[#2c1d11]">
            
            {/* Modal Header */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedDrink.image}
                alt={selectedDrink.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2] via-[#faf7f2]/50 to-transparent" />
              
              <button
                onClick={() => setSelectedDrink(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-[#2c1d11] hover:text-[#8c5a2b] border border-[#e2d5c3] shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded bg-[#3d2716] text-white font-bold">
                  {selectedDrink.categoryLabel}
                </span>
                <h3 className="font-serif-display text-3xl font-bold text-[#2c1d11] mt-2">
                  {selectedDrink.name}
                </h3>
                <p className="text-xs text-[#6b5847]">{selectedDrink.subtitle}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
              
              {/* Origin & Method */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-white border border-[#e2d5c3]">
                  <p className="text-[10px] uppercase text-[#8c5a2b] font-bold">Origem do Grão</p>
                  <p className="text-xs font-bold text-[#2c1d11] mt-1">{selectedDrink.beanOrigin}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#e2d5c3]">
                  <p className="text-[10px] uppercase text-[#8c5a2b] font-bold">Método de Extração</p>
                  <p className="text-xs font-bold text-[#2c1d11] mt-1">{selectedDrink.extractionMethod}</p>
                </div>
              </div>

              {/* Sensory Radar / Metrics */}
              <div className="space-y-3 p-4 rounded-xl bg-white border border-[#e2d5c3]">
                <p className="text-xs uppercase tracking-widest text-[#8c5a2b] font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Perfil Sensorial Mapeado</span>
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center pt-2">
                  <div className="p-2 rounded bg-[#f4efe6] border border-[#e2d5c3]">
                    <span className="text-[10px] text-[#7d6b5b] block">Acidez</span>
                    <span className="text-xs font-bold text-[#2c1d11]">{selectedDrink.sensory.acidity}</span>
                  </div>
                  <div className="p-2 rounded bg-[#f4efe6] border border-[#e2d5c3]">
                    <span className="text-[10px] text-[#7d6b5b] block">Corpo</span>
                    <span className="text-xs font-bold text-[#2c1d11]">{selectedDrink.sensory.body}</span>
                  </div>
                  <div className="p-2 rounded bg-[#f4efe6] border border-[#e2d5c3]">
                    <span className="text-[10px] text-[#7d6b5b] block">Doçura</span>
                    <span className="text-xs font-bold text-[#2c1d11]">{selectedDrink.sensory.sweetness}</span>
                  </div>
                  <div className="p-2 rounded bg-[#f4efe6] border border-[#e2d5c3]">
                    <span className="text-[10px] text-[#7d6b5b] block">Temperatura</span>
                    <span className="text-xs font-bold text-[#2c1d11]">{selectedDrink.temperature}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] text-[#7d6b5b] font-bold block mb-1">Aromas Predominantes:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDrink.sensory.aroma.map((a, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-0.5 rounded-full bg-[#f4efe6] text-[#3d2716] border border-[#e2d5c3] font-medium">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <p className="text-xs uppercase tracking-wider text-[#8c5a2b] font-bold mb-2">Destaques do Serviço:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedDrink.highlights.map((item, idx) => (
                    <li key={idx} className="text-xs p-2 rounded bg-white border border-[#e2d5c3] text-[#3d2716] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8c5a2b]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#e2d5c3] bg-[#f4efe6] flex items-center justify-between">
              <span className="text-xs text-[#6b5847]">Disponível para montagem de cardápio personalizado</span>
              <button
                onClick={() => setSelectedDrink(null)}
                className="px-5 py-2 rounded-xl bg-[#3d2716] text-white font-bold text-xs uppercase tracking-wider"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
