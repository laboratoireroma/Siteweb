import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Mail, 
  ShieldCheck, 
  ChevronRight,
  CalendarCheck
} from 'lucide-react';
import { LAB_INFO } from '../data/labData';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
  onOpenPrescription: () => void;
  onOpenResults: () => void;
}

export default function Footer({ 
  onNavigateTo, 
  onOpenPrescription, 
  onOpenResults 
}: FooterProps) {
  return (
    <footer className="bg-[#0a1b23] text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-[#1a4454]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Direct Conversion Ribbon with Brand Colors */}
        <div className="bg-gradient-to-r from-[#0d242e] via-[#123644] to-[#0d242e] rounded-2xl p-6 sm:p-8 mb-14 border border-[#257287]/50 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-xs uppercase font-bold text-[#42a8c0] tracking-wider">
              Assistance & Prise en Charge à Casablanca
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
              Besoin d'un prélèvement à domicile ou d'un bilan d'analyses ?
            </h3>
            <p className="text-xs text-slate-300">
              Ouvert du Lundi au Vendredi (07h30–18h30) et Samedi (08h00–13h00).
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenPrescription}
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp : {LAB_INFO.whatsappNumber}</span>
            </button>

            <a
              href={`tel:${LAB_INFO.phoneClean}`}
              className="px-5 py-3 bg-[#257287] hover:bg-[#1a5464] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Fixe : {LAB_INFO.phone}</span>
            </a>

            <a
              href={LAB_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs rounded-xl transition-all flex items-center gap-2"
            >
              <Navigation className="w-4 h-4 text-[#42a8c0]" />
              <span>Itinéraire GPS</span>
            </a>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Identity & Real Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={LAB_INFO.logoUrl} 
                alt="Logo Laboratoire Roma" 
                className="h-12 w-auto object-contain bg-white/10 rounded-lg p-1"
              />
              <span className="text-lg font-bold font-['Outfit']">
                <span className="text-[#42a8c0]">LABORATOIRE</span> <span className="text-[#dc2626]">ROMA</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Laboratoire d'analyses médicales et de biologie clinique à Casablanca. 
              Prélèvements à domicile, bilans de routine, microbiologie et dépistage de qualité.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Secret Médical Garanti & Accrédité</span>
            </div>
          </div>

          {/* Col 2: Navigation Rapide */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation & Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigateTo('services')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#42a8c0]" />
                  <span>Analyses de Routine & Biochimie</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('domicile')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#42a8c0]" />
                  <span>Prélèvements à Domicile Casablanca</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('services')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#42a8c0]" />
                  <span>Bilans de Santé Personnalisés</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('guide-jeun')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#42a8c0]" />
                  <span>Guide : Faut-il être à jeun ?</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenResults} className="hover:text-white transition-colors flex items-center gap-1.5 text-[#42a8c0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#42a8c0]" />
                  <span>Accès Sécurisé aux Résultats</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordonnées & Horaires Exacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Coordonnées & Horaires
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#42a8c0] shrink-0 mt-0.5" />
                <span>{LAB_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#dc2626] shrink-0" />
                <a href={`tel:${LAB_INFO.phoneClean}`} className="hover:text-white font-medium">{LAB_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp : {LAB_INFO.whatsappNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${LAB_INFO.email}`} className="hover:text-white truncate">{LAB_INFO.email}</a>
              </div>
              <div className="pt-2 border-t border-slate-800 space-y-1">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Lun - Ven : 07h30 – 18h30</p>
                    <p className="text-white font-medium">Samedi : 08h00 – 13h00</p>
                    <p className="text-slate-400">Dimanche : Fermé</p>
                  </div>
                </div>
                <p className="text-[11px] text-amber-300 pl-6">
                  Jours fériés : Ouverture 08h00–14h00 sur contact préalable.
                </p>
                <p className="text-[10px] text-slate-500 pl-6 italic">
                  (Pas de garde de nuit)
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: GEO & Local Search Optimization Keywords */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Référencement GEO & Mots-clés
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Zones desservies à Casablanca pour les prélèvements et bilans :
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px]">
              {LAB_INFO.coverageZones.map((zone, i) => (
                <span key={i} className="px-2 py-0.5 bg-[#0d242e] border border-[#1a4454] rounded-sm text-slate-300">
                  {zone}
                </span>
              ))}
            </div>
            <div className="pt-2 text-[11px] text-slate-500">
              <p>Mots-clés : Laboratoire Roma Casablanca · Boulevard Roma · Prise de sang à domicile · Analyse NFS glycémie bilan lipidique · +212 522 28 51 60</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Laboratoire d'Analyses Médicales Roma. Tous droits réservés.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Biologie Médicale Certifiée</span>
            <span>·</span>
            <span>Secret Médical</span>
            <span>·</span>
            <span>Casablanca, Maroc</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
