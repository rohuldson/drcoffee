import React from 'react';
import { Coffee, Phone, Mail, MapPin, Instagram, FileText, ArrowUp, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/coffeeData';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadCatalog = () => {
    alert('O Catálogo de Eventos DR. COFFEE 2026 (PDF) foi enviado para download!');
  };

  return (
    <footer className="bg-[#2c1d11] text-[#e8ded0] pt-20 pb-12 border-t border-[#4a3625] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout Box */}
        <div className="bg-[#3d2716] rounded-3xl border border-[#593920] p-8 sm:p-12 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4a974]">Pronto para transformar seu evento?</span>
            <h3 className="font-serif-display text-3xl sm:text-4xl text-[#ffffff] font-light">
              Proporcione uma experiência de café inesquecível.
            </h3>
            <p className="text-xs text-[#d8c7b3] max-w-xl font-normal">
              Entre em contato conosco e receba um orçamento personalizado com base na capacidade e perfil dos seus convidados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-full bg-[#d4a974] hover:bg-[#e2bd8e] text-[#2c1d11] font-bold text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Solicitar Orçamento</span>
            </button>

            <button
              onClick={handleDownloadCatalog}
              className="px-6 py-4 rounded-full bg-[#2c1d11] border border-[#593920] text-[#ffffff] hover:border-[#d4a974] font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#d4a974]" />
              <span>Baixar Catálogo PDF</span>
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#4a3625]">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#d4a974] p-0.5">
                <div className="w-full h-full bg-[#2c1d11] rounded-full flex items-center justify-center">
                  <Coffee className="w-4 h-4 text-[#d4a974]" />
                </div>
              </div>
              <span className="font-serif-display text-2xl font-bold tracking-widest text-[#ffffff]">
                DR. COFFEE
              </span>
            </div>

            <p className="text-xs text-[#d8c7b3] leading-relaxed max-w-sm font-normal">
              Empresa especializada em cafés especiais e experiências sensoriais para eventos corporativos, feiras de negócios, congressos e casamentos VIP em todo o Brasil.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://instagram.com`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#3d2716] border border-[#593920] hover:border-[#d4a974] text-[#d4a974] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#3d2716] border border-[#593920] hover:border-[#d4a974] text-[#d4a974] transition-all"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-2.5 rounded-full bg-[#3d2716] border border-[#593920] hover:border-[#d4a974] text-[#d4a974] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4a974] mb-4">Navegação</h4>
            <ul className="space-y-2.5 text-xs text-[#d8c7b3]">
              <li><a href="#hero" className="hover:text-[#d4a974] transition-colors">Início</a></li>
              <li><a href="#essencia" className="hover:text-[#d4a974] transition-colors">Nossa Essência</a></li>
              <li><a href="#cardapio" className="hover:text-[#d4a974] transition-colors">Cardápio Sensorial</a></li>
              <li><a href="#fundadores" className="hover:text-[#d4a974] transition-colors">Os Fundadores</a></li>
              <li><a href="#eventos" className="hover:text-[#d4a974] transition-colors">Formatos de Eventos</a></li>
              <li><a href="#galeria" className="hover:text-[#d4a974] transition-colors">Galeria de Trabalhos</a></li>
              <li><a href="#depoimentos" className="hover:text-[#d4a974] transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Column 3: Bebidas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4a974] mb-4">Especialidades</h4>
            <ul className="space-y-2.5 text-xs text-[#d8c7b3]">
              <li>Espresso Doppio Italiano</li>
              <li>Macchiato Velvet</li>
              <li>Cappuccino com Arte Latte</li>
              <li>Filtrado V60 Origami</li>
              <li>Chemex Reserve</li>
              <li>Cold Brew Citrus & Tonic</li>
              <li>Affogato de Baunilha</li>
            </ul>
          </div>

          {/* Column 4: Contato */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4a974] mb-4">Atendimento</h4>
            <ul className="space-y-3 text-xs text-[#d8c7b3]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4a974] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4a974] shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4a974] shrink-0" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#b09e8b]">
          <p>© 2026 DR. COFFEE - Cafés Especiais para Eventos. Todos os direitos reservados.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#d4a974] hover:text-[#ffffff] transition-colors font-bold"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
