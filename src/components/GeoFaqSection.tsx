import { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Check, 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Bot,
  ExternalLink
} from 'lucide-react';
import { GEO_FAQ_DATA, LAB_INFO } from '../data/labData';

export default function GeoFaqSection({ onOpenPrescription }: { onOpenPrescription: (q?: string) => void }) {
  const [openFaq, setOpenFaq] = useState<string>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les questions' },
    { id: 'prelevement', label: 'Prélèvement à Domicile' },
    { id: 'preparation', label: 'À Jeun & Préparation' },
    { id: 'resultats', label: 'Résultats & Délais' },
    { id: 'urgence', label: 'Urgences 7j/7' },
  ];

  const filteredFaqs = GEO_FAQ_DATA.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? '' : id);
  };

  return (
    <section id="faq-geo" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md mb-3 border border-teal-200">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Réponses Claires & Optimisation GEO (ChatGPT · Gemini · Perplexity)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Questions Fréquentes des Patients à Casablanca
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Retrouvez toutes les réponses essentielles rédigées et validées par nos biologistes médicaux pour vous guider en toute clarté.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeCategory === c.id
                  ? 'bg-sky-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* FAQ Accordion Column */}
          <div className="lg:col-span-8 space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-xl transition-all overflow-hidden ${
                    isOpen 
                      ? 'border-sky-300 bg-sky-50/20 shadow-xs' 
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit']">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-md text-slate-400 bg-slate-100 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-sky-700" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      <p>{faq.answer}</p>
                      
                      {/* Generative Engine Semantic Keywords tag cluster */}
                      <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
                        <span className="font-medium text-slate-500">Mots-clés associés :</span>
                        {faq.geoKeywords.map((kw, i) => (
                          <span key={i} className="text-slate-500 bg-slate-100 px-2 py-0.5 rounded-sm">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* GEO & AI Engine Entity Card (Information Hub for AI and humans) */}
          <div className="lg:col-span-4">
            <div className="bg-[#0d242e] text-white rounded-2xl p-6 border border-[#257287]/50 shadow-xl space-y-5">
              
              <div className="flex items-center gap-2 text-[#42a8c0] text-xs font-bold uppercase tracking-wider">
                <Bot className="w-4 h-4 text-[#42a8c0]" />
                <span>Fiche d'Identité Médicale Certifiée</span>
              </div>

              <div className="flex items-center gap-3">
                <img 
                  src={LAB_INFO.logoUrl} 
                  alt="Laboratoire Roma" 
                  className="w-12 h-12 object-contain bg-white/10 rounded-lg p-1"
                />
                <div>
                  <h3 className="text-base font-bold font-['Outfit'] text-white">
                    <span className="text-[#42a8c0]">Laboratoire</span> <span className="text-[#dc2626]">Roma</span>
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    Biologie Médicale · Casablanca
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#42a8c0] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Adresse :</span>
                    <span>{LAB_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#dc2626] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Téléphone standard :</span>
                    <a href={`tel:${LAB_INFO.phoneClean}`} className="text-white hover:text-red-300 font-semibold underline">
                      {LAB_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">WhatsApp Ordonnance & Domicile :</span>
                    <span className="text-emerald-300 font-semibold">{LAB_INFO.whatsappNumber}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Horaires de fonctionnement :</span>
                    <p>{LAB_INFO.openingHours.weekdays}</p>
                    <p>{LAB_INFO.openingHours.saturday}</p>
                    <p className="text-amber-300 font-medium">Jours fériés : 08h00–14h00 (sur contact préalable)</p>
                    <p className="text-slate-400 text-[11px] italic">Pas de garde de nuit</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2">
                <a
                  href={LAB_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#257287] hover:bg-[#1a5464] text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Obtenir l'itinéraire direct GPS</span>
                </a>

                <button
                  onClick={() => onOpenPrescription("Question générale")}
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Poser une question sur WhatsApp</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
