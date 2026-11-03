import { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  FileText, 
  Menu, 
  X, 
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import { LAB_INFO } from '../data/labData';

interface HeaderProps {
  onOpenResults: () => void;
  onOpenPrescription: () => void;
  onNavigateTo: (sectionId: string) => void;
  currentSection: string;
}

export default function Header({ 
  onOpenResults, 
  onOpenPrescription, 
  onNavigateTo,
  currentSection 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'services', label: 'Analyses & Bilans' },
    { id: 'domicile', label: 'Prélèvement Domicile' },
    { id: 'guide-jeun', label: 'Guide À Jeun ?' },
    { id: 'a-propos', label: 'À Propos' },
    { id: 'faq-geo', label: 'Questions Fréquentes' },
    { id: 'contact', label: 'Contact & Horaires' },
  ];

  const handleNavClick = (id: string) => {
    onNavigateTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
      {/* Top announcement bar harmonized with brand colors */}
      <div className="bg-[#0d242e] text-white text-xs py-2 px-4 border-b border-[#1a4454]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-slate-300 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              Casablanca, Maroc
            </span>
            <span className="hidden sm:inline-block text-slate-500">·</span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <Clock className="w-3.5 h-3.5 text-[#42a8c0]" />
              <span>Lun - Ven : 07h30 – 18h30 | Sam : 08h00 – 13h00</span>
            </span>
            <span className="hidden lg:inline-block text-slate-500">·</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <CalendarCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Jours fériés : 08h00 – 14h00 (sur contact préalable)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`tel:${LAB_INFO.phoneClean}`}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-red-300 transition-colors"
              title="Appeler le Laboratoire Roma"
            >
              <Phone className="w-3.5 h-3.5 text-[#e52b2b]" />
              <span>{LAB_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <button
              onClick={onOpenResults}
              className="flex items-center gap-1 text-[#42a8c0] hover:text-white font-medium transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Espace Résultats</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Real Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('accueil')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Logo Image */}
            <div className="h-14 w-14 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
              <img 
                src={LAB_INFO.logoUrl} 
                alt="Logo Laboratoire Roma" 
                className="h-14 w-auto max-h-14 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight font-['Outfit']">
                  <span className="text-[#257287]">LABORATOIRE</span>{' '}
                  <span className="text-[#dc2626]">ROMA</span>
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Analyses Médicales & Biologie Clinique · Casablanca
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  currentSection === item.id
                    ? 'text-[#257287] bg-[#eef7f9] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons (Conversion Focused) */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={LAB_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#257287]" />
              <span>Itinéraire GPS</span>
            </a>

            <a
              href={`tel:${LAB_INFO.phoneClean}`}
              className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-[#257287] hover:bg-[#1a5464] rounded-lg shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{LAB_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenPrescription}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Ordonnance</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`https://wa.me/${LAB_INFO.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-600 bg-emerald-50 rounded-lg"
              title="WhatsApp Laboratoire Roma"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  currentSection === item.id
                    ? 'text-[#257287] bg-[#eef7f9] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrescription();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 text-white font-semibold text-sm rounded-lg shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct ({LAB_INFO.whatsappNumber})</span>
            </button>

            <a
              href={`tel:${LAB_INFO.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#257287] text-white font-semibold text-sm rounded-lg shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Appeler le Laboratoire ({LAB_INFO.phone})</span>
            </a>

            <a
              href={LAB_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 text-slate-800 font-medium text-sm rounded-lg"
            >
              <MapPin className="w-4 h-4 text-[#257287]" />
              <span>Obtenir l'itinéraire Google Maps</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResults();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 text-slate-700 font-medium text-sm rounded-lg hover:bg-slate-50"
            >
              <FileText className="w-4 h-4 text-[#257287]" />
              <span>Consulter mes résultats d'analyses</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
