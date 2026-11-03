import { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Navigation, 
  FileText, 
  X, 
  Home, 
  HelpCircle,
  Clock
} from 'lucide-react';
import { LAB_INFO } from '../data/labData';

interface StickyActionsProps {
  onOpenPrescription: () => void;
  onOpenResults: () => void;
}

export default function StickyActions({ onOpenPrescription, onOpenResults }: StickyActionsProps) {
  const [isBubbleOpen, setIsBubbleOpen] = useState(false);

  const quickMessages = [
    {
      label: 'Envoyer une ordonnance (Photo)',
      icon: FileText,
      text: "Bonjour Laboratoire Roma, je vous envoie mon ordonnance médicale pour connaître les modalités et le tarif.",
    },
    {
      label: 'Réserver un prélèvement à domicile',
      icon: Home,
      text: "Bonjour Laboratoire Roma, je souhaite réserver un prélèvement à domicile à Casablanca. Voici mon adresse et mon ordonnance :",
    },
    {
      label: 'Faut-il être à jeun ?',
      icon: HelpCircle,
      text: "Bonjour, j'ai une analyse prévue au Laboratoire Roma et je souhaite savoir si je dois être à jeun.",
    },
    {
      label: 'Suivi de mes résultats d\'analyses',
      icon: Clock,
      text: "Bonjour Laboratoire Roma, je souhaite faire le suivi de mes résultats d'analyses (Nom / Dossier N° :)",
    },
  ];

  const handleSendQuickMessage = (text: string) => {
    const url = `https://wa.me/${LAB_INFO.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsBubbleOpen(false);
  };

  return (
    <>
      {/* 1. Desktop & Tablet Floating Sticky WhatsApp Widget (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
        {/* Expandable Quick Action Panel */}
        {isBubbleOpen && (
          <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-['Outfit']">WhatsApp Laboratoire Roma</h4>
                  <p className="text-[10px] text-emerald-600 font-medium">Réponse rapide · Casablanca</p>
                </div>
              </div>
              <button
                onClick={() => setIsBubbleOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-3 space-y-1.5">
              <p className="text-[11px] font-semibold text-slate-500 mb-1">
                Choisissez votre demande :
              </p>
              {quickMessages.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSendQuickMessage(item.text)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50/80 border border-transparent hover:border-emerald-200 text-xs font-medium text-slate-700 hover:text-emerald-900 transition-colors flex items-center gap-2.5"
                  >
                    <Icon className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>Fixe : {LAB_INFO.phone}</span>
              <span className="text-[#257287] font-semibold">07h30 – 18h30</span>
            </div>
          </div>
        )}

        {/* Floating Trigger Button */}
        <button
          onClick={() => setIsBubbleOpen(!isBubbleOpen)}
          className="group relative flex items-center gap-2.5 pl-4 pr-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-xl shadow-emerald-700/30 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Contacter sur WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white animate-pulse" />
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs font-bold font-['Outfit'] tracking-wide">
            {isBubbleOpen ? 'Fermer' : 'WhatsApp Direct'}
          </span>
        </button>
      </div>

      {/* 2. Mobile Bottom Sticky Conversion Bar (Mobile-First UX) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-4 gap-2">
          
          {/* Appel */}
          <a
            href={`tel:${LAB_INFO.phoneClean}`}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-700 hover:bg-sky-50 active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5 text-sky-700" />
            <span className="text-[10px] font-semibold mt-0.5">Appeler</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${LAB_INFO.whatsappClean}?text=${encodeURIComponent(
              "Bonjour Laboratoire Roma, je souhaite des informations pour des analyses médicales à Casablanca."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-emerald-600 text-white shadow-xs active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
          </a>

          {/* GPS Itinéraire */}
          <a
            href={LAB_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-700 hover:bg-slate-100 active:scale-95 transition-all"
          >
            <Navigation className="w-5 h-5 text-sky-600" />
            <span className="text-[10px] font-semibold mt-0.5">Itinéraire</span>
          </a>

          {/* Ordonnance */}
          <button
            onClick={onOpenPrescription}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-700 hover:bg-slate-100 active:scale-95 transition-all"
          >
            <FileText className="w-5 h-5 text-teal-600" />
            <span className="text-[10px] font-semibold mt-0.5">Ordonnance</span>
          </button>

        </div>
      </div>
    </>
  );
}
