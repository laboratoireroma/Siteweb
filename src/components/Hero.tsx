import { 
  MessageCircle, 
  Phone, 
  Navigation, 
  Home, 
  FileCheck, 
  HelpCircle, 
  Clock, 
  Check, 
  ArrowRight,
  MapPin,
  Award,
  AlertCircle,
  CalendarCheck
} from 'lucide-react';
import { LAB_INFO } from '../data/labData';

interface HeroProps {
  onOpenPrescription: () => void;
  onOpenResults: () => void;
  onNavigateTo: (sectionId: string) => void;
}

export default function Hero({ 
  onOpenPrescription, 
  onOpenResults, 
  onNavigateTo 
}: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#eef7f9]/80 via-white to-slate-50 border-b border-slate-200/60 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background soft glowing medical circles with brand teal and soft warm red */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#257287]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Kicker with Brand Colors */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 mb-4">
          <span className="flex items-center gap-1.5 font-bold text-[#257287]">
            <Award className="w-4 h-4 text-[#257287]" />
            Laboratoire de Biologie Médicale Agréé
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-[#dc2626] font-semibold">Casablanca</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Prélèvements à Domicile</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Résultats Sécurisés Même Jour</span>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Value Proposition & High Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-slate-900 tracking-tight leading-[1.18] font-['Outfit']">
              Votre santé, notre priorité :{' '}
              <span className="text-[#257287]">
                Analyses médicales précises
              </span>{' '}
              et rapides à{' '}
              <span className="text-[#dc2626]">Casablanca</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              Sous la direction d'une équipe de biologistes qualifiés, le <strong>Laboratoire Roma</strong> garantit 
              l'excellence diagnostique de vos bilans de santé, la stricte confidentialité du secret médical 
              et propose un service dédié de prélèvements à domicile.
            </p>

            {/* Crucial 3-Button Conversion Funnel */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5">
              
              {/* 1. WhatsApp Direct Button with Official Number */}
              <button
                onClick={onOpenPrescription}
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-white font-semibold text-base bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp : {LAB_INFO.whatsappNumber}</span>
              </button>

              {/* 2. Direct Call Button with Official Number */}
              <a
                href={`tel:${LAB_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-white font-semibold text-base bg-[#257287] hover:bg-[#1a5464] shadow-md shadow-[#257287]/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5" />
                <span>Appeler : {LAB_INFO.phone}</span>
              </a>

              {/* 3. Google Maps Itinerary Button */}
              <a
                href={LAB_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl text-slate-800 font-semibold text-base bg-white border border-slate-300 hover:bg-slate-50 shadow-xs transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Navigation className="w-5 h-5 text-[#257287]" />
                <span>Y Aller (GPS Maps)</span>
              </a>
            </div>

            {/* Quick Guarantees Checklist */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                <span>Prélèvement doux et indolore</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                <span>Prélèvements à domicile sur RDV</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                <span>Comptes-rendus sécurisés le jour même</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Trust Hero Card with Exact Opening Hours */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0d242e] text-white p-7 shadow-2xl overflow-hidden border border-[#1a5464]">
              
              {/* Subtle ambient medical glow inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#257287]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-5">
                
                {/* Header card info */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={LAB_INFO.logoUrl} 
                      alt="Laboratoire Roma Logo" 
                      className="w-12 h-12 object-contain bg-white/10 rounded-xl p-1"
                    />
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#42a8c0] font-bold">
                        Casablanca · 117 Angle Bd 2 Mars & Rue de Rome
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold font-['Outfit'] text-white">
                        Horaires d'Ouverture
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Accueil Patient</span>
                  </div>
                </div>

                {/* Practical Timetable & Exact Working Hours */}
                <div className="space-y-2.5 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-sm">
                  {/* Selector 1 target element: Lundi - Vendredi 07h30 à 18h30 */}
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-slate-300 font-medium">Lundi – Vendredi</span>
                    <span className="font-semibold text-white tracking-wide">07h30 – 18h30</span>
                  </div>

                  {/* Samedi 08h00 à 13h00 */}
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-slate-300 font-medium">Samedi</span>
                    <span className="font-semibold text-white tracking-wide">08h00 – 13h00</span>
                  </div>

                  {/* Dimanche & Jours fériés */}
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-slate-300 font-medium">Dimanche</span>
                    <span className="font-semibold text-slate-400">Fermé</span>
                  </div>

                  {/* Jours fériés condition */}
                  <div className="pt-1">
                    <div className="flex items-start gap-2 text-xs text-amber-300">
                      <CalendarCheck className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-400" />
                      <span>
                        <strong>Jours fériés :</strong> Ouverture possible de 08h00 à 14h00 (veuillez contacter au préalable par WhatsApp ou téléphone).
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 italic pl-5">
                      Note : Le laboratoire ne fait pas de garde de nuit.
                    </p>
                  </div>
                </div>

                {/* Quick Prescription Action inside Card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#173a48] to-[#122c36] border border-[#257287]/40 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                      Rx
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#42a8c0] uppercase">Besoin d'un devis rapide ?</p>
                      <p className="text-xs font-medium text-white">Transmettez votre ordonnance en photo</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={onOpenPrescription}
                    className="w-full py-2.5 px-4 bg-white text-slate-900 hover:bg-emerald-50 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Direct ({LAB_INFO.whatsappNumber})</span>
                  </button>
                </div>

                {/* Phone contact */}
                <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#42a8c0]" />
                    Grand Casablanca
                  </span>
                  <a 
                    href={`tel:${LAB_INFO.phoneClean}`}
                    className="text-white hover:text-red-300 font-semibold underline decoration-[#dc2626]"
                  >
                    Fixe : {LAB_INFO.phone}
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 4 Quick Access Cards Harmonized with Brand Palette */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Card 1: Prélèvement à Domicile */}
          <div 
            onClick={() => onNavigateTo('domicile')}
            className="group cursor-pointer bg-white hover:bg-[#eef7f9]/50 rounded-xl p-5 border border-slate-200/90 hover:border-[#257287] shadow-xs hover:shadow-md transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-lg bg-[#eef7f9] text-[#257287] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Home className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-['Outfit'] mb-1.5 group-hover:text-[#257287] transition-colors">
              Prélèvements à Domicile
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Déplacement rapide d'un infirmier qualifié chez vous à Casablanca du lundi au samedi dès 7h30 sur rendez-vous.
            </p>
            <div className="flex items-center gap-1 text-xs font-semibold text-[#257287] group-hover:text-[#1a5464]">
              <span>Réserver à domicile</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Espace Résultats */}
          <div 
            onClick={onOpenResults}
            className="group cursor-pointer bg-white hover:bg-[#eef7f9]/50 rounded-xl p-5 border border-slate-200/90 hover:border-[#257287] shadow-xs hover:shadow-md transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <FileCheck className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-['Outfit'] mb-1.5 group-hover:text-teal-700 transition-colors">
              Espace Résultats Sécurisé
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Accédez à vos comptes-rendus biologiques en ligne ou recevez-les par WhatsApp dès validation par le biologiste.
            </p>
            <div className="flex items-center gap-1 text-xs font-semibold text-teal-700 group-hover:text-teal-800">
              <span>Consulter mes résultats</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Guide À Jeun */}
          <div 
            onClick={() => onNavigateTo('guide-jeun')}
            className="group cursor-pointer bg-white hover:bg-[#eef7f9]/50 rounded-xl p-5 border border-slate-200/90 hover:border-[#257287] shadow-xs hover:shadow-md transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-lg bg-sky-50 text-[#257287] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <HelpCircle className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-['Outfit'] mb-1.5 group-hover:text-[#257287] transition-colors">
              Faut-il être à jeun ?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Testez notre outil interactif pour savoir si vos analyses (glycémie, bilan lipidique, bilan rénal) exigent un jeûne préalable.
            </p>
            <div className="flex items-center gap-1 text-xs font-semibold text-[#257287] group-hover:text-[#1a5464]">
              <span>Vérifier mon examen</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Horaires & Jours Fériés */}
          <div 
            onClick={() => onNavigateTo('contact')}
            className="group cursor-pointer bg-white hover:bg-red-50/40 rounded-xl p-5 border border-slate-200/90 hover:border-[#dc2626] shadow-xs hover:shadow-md transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Clock className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-['Outfit'] mb-1.5 group-hover:text-[#dc2626] transition-colors">
              Horaires & Jours Fériés
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Lun-Ven : 07h30–18h30. Sam : 08h00–13h00. Jours fériés : 08h00–14h00 sur contact préalable (pas de garde de nuit).
            </p>
            <div className="flex items-center gap-1 text-xs font-semibold text-[#dc2626] group-hover:text-red-700">
              <span>Voir les détails d'accès</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
