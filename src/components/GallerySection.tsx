import React, { useState, useMemo } from 'react';
import { GALLERY_CASES } from '../data/coffeeData';
import { GalleryItem } from '../types';
import { Filter, Search, X, Users, Coffee, MapPin, Calendar, Quote, Sparkles, ChevronLeft, ChevronRight, Eye, SlidersHorizontal } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('all');
  const [selectedExtraction, setSelectedExtraction] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Lightbox modal state
  const [activeCase, setActiveCase] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Advanced Filtering Logic
  const filteredCases = useMemo(() => {
    return GALLERY_CASES.filter((item) => {
      // Category Filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Capacity Filter
      if (selectedCapacity !== 'all') {
        if (selectedCapacity === 'small' && item.guestCount > 200) return false;
        if (selectedCapacity === 'medium' && (item.guestCount <= 200 || item.guestCount > 1000)) return false;
        if (selectedCapacity === 'large' && item.guestCount <= 1000) return false;
      }
      // Extraction Type Filter
      if (selectedExtraction !== 'all' && item.extractionType !== selectedExtraction) {
        return false;
      }
      // Search Query Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesClient = item.clientName.toLowerCase().includes(query);
        const matchesLocation = item.location.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesClient && !matchesLocation && !matchesDesc) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedCapacity, selectedExtraction, searchQuery]);

  const hasActiveFilters = selectedCategory !== 'all' || selectedCapacity !== 'all' || selectedExtraction !== 'all' || searchQuery !== '';

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedCapacity('all');
    setSelectedExtraction('all');
    setSearchQuery('');
  };

  const openCaseModal = (item: GalleryItem) => {
    setActiveCase(item);
    setCurrentImageIndex(0);
  };

  return (
    <section id="galeria" className="py-24 bg-[#faf7f2] relative overflow-hidden border-t border-[#e2d5c3]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8c5a2b]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8ded0] border border-[#d8c7b3] text-[#8c5a2b] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfólio de Eventos</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-light text-[#2c1d11] leading-tight mb-4">
            <span className="italic font-normal gold-gradient-text">Nossos Trabalhos</span>
          </h2>

          <p className="font-sans-body text-sm sm:text-base text-[#5c4a3a] font-normal leading-relaxed">
            Navegue pelos cases mais marcantes produzidos pela nossa equipe em feiras e congressos
          </p>
        </div>

        {/* ADVANCED FILTER CONTROL PANEL */}
        <div className="bg-[#f4efe6] p-6 rounded-2xl border border-[#e2d5c3] shadow-md mb-12 space-y-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#e2d5c3] pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8c5a2b]">
              <SlidersHorizontal className="w-4 h-4 text-[#8c5a2b]" />
              <span>Filtro Avançado de Projetos</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-[#3d2716] font-semibold border border-[#e2d5c3]">
                {filteredCases.length} {filteredCases.length === 1 ? 'resultado' : 'resultados'}
              </span>
            </div>

            {/* Quick Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#8c5a2b] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por cliente, local..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-white border border-[#e2d5c3] text-xs text-[#2c1d11] placeholder-[#8c7a6a] focus:outline-none focus:border-[#8c5a2b]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8c7a6a] hover:text-[#2c1d11]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Dropdowns & Category Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Category Select */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#8c5a2b] font-bold mb-1.5">Tipo de Evento</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#e2d5c3] text-xs text-[#2c1d11] focus:outline-none focus:border-[#8c5a2b]"
              >
                <option value="all">Todas as Categorias</option>
                <option value="feiras">Feiras & Estandes</option>
                <option value="corporativo">Eventos Corporativos</option>
                <option value="congressos">Congressos & Simpósios</option>
                <option value="social">Casamentos & Festas VIP</option>
              </select>
            </div>

            {/* Capacity Select */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#8c5a2b] font-bold mb-1.5">Capacidade / Convidados</label>
              <select
                value={selectedCapacity}
                onChange={(e) => setSelectedCapacity(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#e2d5c3] text-xs text-[#2c1d11] focus:outline-none focus:border-[#8c5a2b]"
              >
                <option value="all">Todos os Portes</option>
                <option value="small">Até 200 pessoas</option>
                <option value="medium">200 a 1.000 pessoas</option>
                <option value="large">Acima de 1.000 pessoas</option>
              </select>
            </div>

            {/* Extraction Type Select */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#8c5a2b] font-bold mb-1.5">Método de Extração Dominante</label>
              <select
                value={selectedExtraction}
                onChange={(e) => setSelectedExtraction(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#e2d5c3] text-xs text-[#2c1d11] focus:outline-none focus:border-[#8c5a2b]"
              >
                <option value="all">Todos os Métodos</option>
                <option value="espresso">Bar de Espresso Italiano</option>
                <option value="filtrados">Métodos Filtrados (V60/Chemex)</option>
                <option value="drinks">Drinks Autorais & Cold Brew</option>
              </select>
            </div>

            {/* Clear Button */}
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                disabled={!hasActiveFilters}
                className={`w-full py-2 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border ${
                  hasActiveFilters
                    ? 'bg-[#3d2716] text-white border-[#3d2716] hover:bg-[#593920]'
                    : 'bg-[#e8ded0] text-[#8c7a6a] border-[#e2d5c3] cursor-not-allowed'
                }`}
              >
                <X className="w-3.5 h-3.5" />
                <span>Limpar Filtros</span>
              </button>
            </div>
          </div>
        </div>

        {/* Case Cards Grid */}
        {filteredCases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((item) => (
              <div
                key={item.id}
                onClick={() => openCaseModal(item)}
                className="group bg-white rounded-2xl border border-[#e2d5c3] hover:border-[#8c5a2b] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-60 overflow-hidden bg-[#e8ded0]">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />

                    {/* Category Label */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#e2d5c3] text-[10px] uppercase font-bold text-[#8c5a2b] tracking-wider shadow-sm">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Guest Count Pill */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 text-[10px] text-[#2c1d11] font-bold border border-[#e2d5c3] shadow-sm">
                      <Users className="w-3 h-3 text-[#8c5a2b]" />
                      <span>{item.guestCount.toLocaleString('pt-BR')} pessoas</span>
                    </div>

                    {/* Coffees Count Pill */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 text-[10px] text-[#2c1d11] font-bold border border-[#e2d5c3] shadow-sm">
                      <Coffee className="w-3 h-3 text-[#8c5a2b]" />
                      <span>{item.coffeesServed.toLocaleString('pt-BR')} cafés</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-[#7d6b5b]">
                      <span className="flex items-center gap-1 font-bold text-[#8c5a2b]">
                        {item.clientName}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-xl font-bold text-[#2c1d11] group-hover:text-[#8c5a2b] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#5c4a3a] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Extraction Tags */}
                    <div className="pt-2 border-t border-[#f2e8db] flex flex-wrap gap-1">
                      {item.extractionMethodsUsed.map((m, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-[#f4efe6] border border-[#e2d5c3] text-[#3d2716] font-medium">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <div className="w-full py-2.5 rounded-xl bg-[#f4efe6] group-hover:bg-[#3d2716] text-[#3d2716] group-hover:text-[#ffffff] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-[#e2d5c3] group-hover:border-[#3d2716]">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver Galeria & Detalhes do Case</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 p-8 bg-white rounded-2xl border border-[#e2d5c3] max-w-lg mx-auto shadow-sm">
            <Search className="w-10 h-10 text-[#8c5a2b] mx-auto mb-3" />
            <h3 className="font-serif-display text-2xl text-[#2c1d11] font-bold">Nenhum projeto encontrado</h3>
            <p className="text-xs text-[#6b5847] mt-1 mb-6">Nenhum resultado corresponde aos filtros selecionados.</p>
            <button
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-full bg-[#3d2716] text-white font-bold text-xs uppercase tracking-wider"
            >
              Resetar Filtros
            </button>
          </div>
        )}

      </div>

      {/* CASE LIGHTBOX MODAL */}
      {activeCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-[#faf7f2] border border-[#e2d5c3] rounded-2xl overflow-hidden shadow-2xl text-[#2c1d11] max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[#e2d5c3] bg-[#f4efe6] flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-[#3d2716] text-white">
                  {activeCase.categoryLabel} • {activeCase.year}
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-[#2c1d11] mt-1">
                  {activeCase.title}
                </h3>
                <p className="text-xs text-[#6b5847]">{activeCase.clientName} — {activeCase.location}</p>
              </div>

              <button
                onClick={() => setActiveCase(null)}
                className="p-2.5 rounded-full bg-white text-[#2c1d11] hover:text-[#8c5a2b] border border-[#e2d5c3] shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Scrollable */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Photo Slider */}
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden bg-black border border-[#e2d5c3]">
                <img
                  src={activeCase.images[currentImageIndex] || activeCase.coverImage}
                  alt={activeCase.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {activeCase.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? activeCase.images.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:text-[#d4a974]"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === activeCase.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:text-[#d4a974]"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Dots Indicator */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {activeCase.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            currentImageIndex === idx ? 'bg-[#d4a974] w-5' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white border border-[#e2d5c3] text-center shadow-sm">
                <div>
                  <span className="text-[10px] text-[#7d6b5b] font-bold uppercase block">Convidados</span>
                  <span className="text-base font-bold text-[#2c1d11]">{activeCase.guestCount.toLocaleString('pt-BR')}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#8c5a2b] font-bold uppercase block">Cafés Servidos</span>
                  <span className="text-base font-bold text-[#8c5a2b]">{activeCase.coffeesServed.toLocaleString('pt-BR')}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#7d6b5b] font-bold uppercase block">Ano</span>
                  <span className="text-base font-bold text-[#2c1d11]">{activeCase.year}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#7d6b5b] font-bold uppercase block">Localização</span>
                  <span className="text-xs font-bold text-[#2c1d11] block truncate">{activeCase.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8c5a2b]">Resumo da Operação</h4>
                <p className="text-sm text-[#5c4a3a] leading-relaxed font-normal">
                  {activeCase.description}
                </p>
              </div>

              {/* Testimonial Quote if available */}
              {activeCase.testimonialQuote && (
                <div className="p-5 rounded-xl bg-white border-l-4 border-[#8c5a2b] text-[#3d2716] italic relative border border-[#e2d5c3] shadow-sm">
                  <Quote className="w-8 h-8 text-[#8c5a2b]/20 absolute top-2 right-2" />
                  <p className="text-sm">"{activeCase.testimonialQuote}"</p>
                  <p className="text-xs font-bold not-italic text-[#8c5a2b] mt-2">— {activeCase.clientRole || activeCase.clientName}</p>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#e2d5c3] bg-[#f4efe6] flex items-center justify-between shrink-0">
              <span className="text-xs text-[#6b5847]">Interessado em um projeto similar?</span>
              <button
                onClick={() => setActiveCase(null)}
                className="px-5 py-2.5 rounded-xl bg-[#3d2716] text-white font-bold text-xs uppercase tracking-wider"
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
