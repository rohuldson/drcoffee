import React, { useState, useEffect } from 'react';
import { X, Sparkles, Coffee, Users, Calendar, Clock, MapPin, Send, CheckCircle2, Phone, Mail, Building, Calculator } from 'lucide-react';
import { COMPANY_INFO, SPECIALTY_DRINKS } from '../data/coffeeData';
import { QuoteFormState } from '../types';

interface InteractiveQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
}

export const InteractiveQuoteModal: React.FC<InteractiveQuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedCategory,
}) => {
  const [formData, setFormData] = useState<QuoteFormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: preselectedCategory || 'feiras',
    guestCount: 200,
    eventDate: '',
    durationHours: 8,
    location: '',
    selectedDrinks: ['espresso-doppio', 'cappuccino-artisan', 'cold-brew-citrus'],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedCategory) {
      setFormData((prev) => ({ ...prev, eventType: preselectedCategory }));
    }
  }, [preselectedCategory]);

  if (!isOpen) return null;

  // Real-time calculation heuristics
  const estimatedCoffeeCups = Math.round(formData.guestCount * (formData.durationHours > 6 ? 2.5 : 1.8));
  const recommendedBaristas = Math.max(1, Math.ceil(estimatedCoffeeCups / (formData.durationHours * 60)));
  const recommendedMachines = recommendedBaristas > 2 ? '2x Estações La Cimbali Dual' : '1x Estação Italiana La Cimbali 2 Grupos';

  const handleDrinkToggle = (drinkId: string) => {
    setFormData((prev) => {
      const exists = prev.selectedDrinks.includes(drinkId);
      if (exists) {
        return { ...prev, selectedDrinks: prev.selectedDrinks.filter((id) => id !== drinkId) };
      } else {
        return { ...prev, selectedDrinks: [...prev.selectedDrinks, drinkId] };
      }
    });
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*SOLICITAÇÃO DE ORÇAMENTO - DR. COFFEE*
----------------------------------------
👤 *Nome:* ${formData.name}
🏢 *Empresa/Local:* ${formData.company || 'Particular'}
📧 *Email:* ${formData.email}
📱 *WhatsApp:* ${formData.phone}

📌 *Tipo de Evento:* ${formData.eventType.toUpperCase()}
👥 *Nº de Convidados:* ${formData.guestCount} pessoas
⏱️ *Duração:* ${formData.durationHours} horas
📅 *Data Estimada:* ${formData.eventDate || 'A definir'}
📍 *Localização:* ${formData.location || 'Não especificada'}

☕ *Estimativa da Operação:*
• Cafés Previstos: ~${estimatedCoffeeCups} xícaras
• Baristas Recomendados: ${recommendedBaristas} profissionais
• Estrutura: ${recommendedMachines}

📝 *Observações:* ${formData.notes || 'Nenhuma'}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl bg-[#faf7f2] border border-[#e2d5c3] rounded-2xl overflow-hidden shadow-2xl text-[#2c1d11] max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-[#e2d5c3] bg-[#f4efe6] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#3d2716] text-white">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-display text-2xl font-bold text-[#2c1d11]">
                Simulador & Solicitação de Orçamento
              </h3>
              <p className="text-xs text-[#6b5847]">Calcule a estimativa da estrutura e solicite sua proposta customizada</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white text-[#2c1d11] hover:text-[#8c5a2b] border border-[#e2d5c3] shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body Scrollable */}
        {submitted ? (
          <div className="p-12 text-center space-y-6">
            <CheckCircle2 className="w-16 h-16 text-[#8c5a2b] mx-auto animate-bounce" />
            <h3 className="font-serif-display text-3xl font-bold text-[#2c1d11]">Proposta Solicitada com Sucesso!</h3>
            <p className="text-sm text-[#5c4a3a] max-w-md mx-auto font-medium">
              Sua solicitação foi redirecionada para nossa equipe de baristas no WhatsApp. Em breve responderemos com a proposta detalhada.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-3 rounded-full bg-[#3d2716] text-white font-bold text-xs uppercase tracking-wider shadow-md"
            >
              Concluir
            </button>
          </div>
        ) : (
          <form onSubmit={handleSendWhatsApp} className="p-6 overflow-y-auto space-y-6">
            
            {/* Realtime Estimate Panel */}
            <div className="p-4 rounded-xl bg-[#f4efe6] border border-[#e2d5c3] space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#e2d5c3] pb-2">
                <span className="text-xs uppercase font-bold text-[#8c5a2b] tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Estimativa Recomendada para seu Evento
                </span>
                <span className="text-[10px] text-[#6b5847] font-semibold">Cálculo em Tempo Real</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="p-2.5 rounded bg-white border border-[#e2d5c3]">
                  <span className="text-[10px] text-[#7d6b5b] font-bold block uppercase">Volume Estimado</span>
                  <span className="text-base font-bold text-[#2c1d11]">~{estimatedCoffeeCups} xícaras</span>
                </div>
                <div className="p-2.5 rounded bg-white border border-[#e2d5c3]">
                  <span className="text-[10px] text-[#8c5a2b] font-bold block uppercase">Equipe Recomendada</span>
                  <span className="text-base font-bold text-[#8c5a2b]">{recommendedBaristas} Baristas</span>
                </div>
                <div className="p-2.5 rounded bg-white border border-[#e2d5c3]">
                  <span className="text-[10px] text-[#7d6b5b] font-bold block uppercase">Estrutura Técnica</span>
                  <span className="text-xs font-bold text-[#2c1d11] block truncate">{recommendedMachines}</span>
                </div>
              </div>
            </div>

            {/* Event Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Event Type */}
              <div>
                <label className="block text-xs uppercase font-bold text-[#8c5a2b] mb-1.5">Tipo de Evento</label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e2d5c3] text-xs text-[#2c1d11] focus:outline-none focus:border-[#8c5a2b]"
                >
                  <option value="feiras">Feira / Estande de Negócios</option>
                  <option value="corporativo">Evento Corporativo / Reunião VIP</option>
                  <option value="congressos">Congresso / Simpósio</option>
                  <option value="social">Casamento / Festa Social VIP</option>
                </select>
              </div>

              {/* Guest Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs uppercase font-bold text-[#8c5a2b]">Nº de Convidados</label>
                  <span className="text-xs font-bold text-[#3d2716]">{formData.guestCount} pessoas</span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={2000}
                  step={10}
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                  className="w-full accent-[#8c5a2b] bg-[#e2d5c3] h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block text-xs uppercase font-bold text-[#8c5a2b] mb-1.5">Duração do Evento (Horas)</label>
                <input
                  type="number"
                  min={2}
                  max={24}
                  value={formData.durationHours}
                  onChange={(e) => setFormData({ ...formData, durationHours: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e2d5c3] text-xs text-[#2c1d11] focus:outline-none focus:border-[#8c5a2b]"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs uppercase font-bold text-[#8c5a2b] mb-1.5">Data Prevista</label>
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e2d5c3] text-xs text-[#2c1d11] focus:outline-none focus:border-[#8c5a2b]"
                />
              </div>

            </div>

            {/* Preferred Drinks Selection */}
            <div>
              <label className="block text-xs uppercase font-bold text-[#8c5a2b] mb-2">
                Bebidas Preferidas para o Cardápio:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SPECIALTY_DRINKS.slice(0, 8).map((drink) => {
                  const isChecked = formData.selectedDrinks.includes(drink.id);
                  return (
                    <button
                      type="button"
                      key={drink.id}
                      onClick={() => handleDrinkToggle(drink.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all text-xs flex items-center justify-between ${
                        isChecked
                          ? 'bg-[#3d2716] border-[#3d2716] text-white font-bold shadow-sm'
                          : 'bg-white border-[#e2d5c3] text-[#5c4a3a] hover:border-[#8c5a2b]'
                      }`}
                    >
                      <span className="truncate">{drink.name}</span>
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-4 border-t border-[#e2d5c3]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8c5a2b]">Seus Dados para Envio do Orçamento</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Seu Nome Completo *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e2d5c3] text-xs text-[#2c1d11] placeholder-[#8c7a6a] focus:outline-none focus:border-[#8c5a2b]"
                />

                <input
                  type="text"
                  placeholder="Empresa / Razão Social"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e2d5c3] text-xs text-[#2c1d11] placeholder-[#8c7a6a] focus:outline-none focus:border-[#8c5a2b]"
                />

                <input
                  type="email"
                  required
                  placeholder="Seu E-mail Profissional *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e2d5c3] text-xs text-[#2c1d11] placeholder-[#8c7a6a] focus:outline-none focus:border-[#8c5a2b]"
                />

                <input
                  type="tel"
                  required
                  placeholder="WhatsApp / Telefone *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e2d5c3] text-xs text-[#2c1d11] placeholder-[#8c7a6a] focus:outline-none focus:border-[#8c5a2b]"
                />
              </div>

              <input
                type="text"
                placeholder="Cidade / Local do Evento (ex: São Paulo - Expo Center Norte)"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e2d5c3] text-xs text-[#2c1d11] placeholder-[#8c7a6a] focus:outline-none focus:border-[#8c5a2b]"
              />

              <textarea
                rows={3}
                placeholder="Detalhes adicionais ou necessidades especiais..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e2d5c3] text-xs text-[#2c1d11] placeholder-[#8c7a6a] focus:outline-none focus:border-[#8c5a2b]"
              />
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-[#e2d5c3] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-[#6b5847] font-medium">Atendimento rápido das 08h às 20h</span>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#3d2716] hover:bg-[#593920] text-white font-bold text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Orçamento via WhatsApp</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
