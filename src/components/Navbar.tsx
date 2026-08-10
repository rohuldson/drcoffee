import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react'; // Removi o 'Coffee' pois não será mais usado
import { COMPANY_INFO } from '../data/coffeeData';
import LogoImg from '../images/logotipo.png'; // Atualize o caminho para o logo conforme necessário

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Cardápio', href: '#cardapio' },
    { name: 'Sobre', href: '#essencia' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#depoimentos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#21160d]/95 backdrop-blur-md border-b border-[#3d2a1b] py-2 shadow-lg text-white'
          : 'bg-black/40 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - ATUALIZADO AQUI */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <img 
              src={LogoImg} 
              alt="Logo Dr. Coffe" 
              className="h-22 sm:h-22 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-white/90 hover:text-[#d4a974] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4a974] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              id="nav-cta-button"
              className="px-6 py-2.5 rounded-full bg-[#c89242] hover:bg-[#d8a04f] text-white font-bold text-sm tracking-wide shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>Solicitar orçamento</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4a974]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#24170d] border-b border-[#3d2a1b] px-6 py-5 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl text-white">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-white/90 hover:text-[#d4a974] py-2 border-b border-[#3b2819]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-full bg-[#c89242] text-white font-bold text-sm tracking-wide text-center shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Solicitar orçamento</span>
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-full border border-[#593920] text-[#d4a974] text-xs uppercase tracking-wider font-semibold text-center flex items-center justify-center gap-2 bg-[#1a110a]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Direto</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};