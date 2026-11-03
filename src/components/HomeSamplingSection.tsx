import { useState } from 'react';
import { 
  Home, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  Phone, 
  Calendar,
  Heart
} from 'lucide-react';
import { LAB_INFO } from '../data/labData';

interface HomeSamplingSectionProps {
  onOpenPrescription: (note?: string) => void;
}

export default function HomeSamplingSection({ onOpenPrescription }: HomeSamplingSectionProps) {
  const [selectedQuarter, setSelectedQuarter] = useState<string>('Maârif');
  const [timeSlot, setTimeSlot] = useState<string>('07h30 - 09h00 (À jeun)');

  const quarters = [
    'Maârif',
    'Gauthier & Racine',
    'Anfa & Bourgogne',
    'Quartier des Hôpitaux',
    'Oasis & Polo',
    'Ain Diab & Corniche',
    'Sidi Maârouf & CFC',
    'Californie & CIL',
    'Autre quartier de Casablanca'
  ];

  const timeSlots = [
    '07h30 - 09h00 (Idéal bilan à jeun)',
    '09h00 - 10h30',
    '10h30 - 12h30',
    'Après-midi (14h00 - 17h30)',
  ];

  const handleLaunchWhatsApp = () => {
    const text = `Bonjour Laboratoire Roma, je souhaite réserver un prélèvement à domicile à Casablanca.\nQuartier : ${selectedQuarter}\nCréneau souhaité : ${timeSlot}\nMerci de me recontacter pour confirmer.`;
    const url = `https://wa.me/${LAB_INFO.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="domicile" className="py-16 lg:py-24 bg-[#0d242e] text-white relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#257287]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#dc2626]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#42a8c0] mb-2">
            <Home className="w-4 h-4" />
            <span>Service Patient Grand Casablanca</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Outfit'] text-white">
            Prélèvement à Domicile :{' '}
            <span className="text-[#42a8c0]">
              Le laboratoire vient à vous
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Pour les personnes âgées, les patients convalescents, les femmes enceintes ou les personnes actives, 
            le <strong>Laboratoire Roma</strong> assure un service de prélèvement médical soigné directement chez vous ou à votre bureau à Casablanca.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs">
            <div className="w-10 h-10 rounded-xl bg-[#257287]/40 text-[#42a8c0] flex items-center justify-center font-bold text-lg mb-4">
              1
            </div>
            <h3 className="text-lg font-bold font-['Outfit'] mb-2 text-white">
              Demande WhatsApp ou Téléphone
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Transmettez votre ordonnance médicale et votre adresse à Casablanca via WhatsApp au {LAB_INFO.whatsappNumber} ou en appelant le {LAB_INFO.phone}.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs">
            <div className="w-10 h-10 rounded-xl bg-[#257287]/40 text-[#42a8c0] flex items-center justify-center font-bold text-lg mb-4">
              2
            </div>
            <h3 className="text-lg font-bold font-['Outfit'] mb-2 text-white">
              Confirmation du créneau horaire
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Notre équipe confirme l'horaire de passage (dès 7h30 du matin pour les bilans à jeun) et vous rappelle les consignes préparatoires.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs">
            <div className="w-10 h-10 rounded-xl bg-[#257287]/40 text-[#42a8c0] flex items-center justify-center font-bold text-lg mb-4">
              3
            </div>
            <h3 className="text-lg font-bold font-['Outfit'] mb-2 text-white">
              Prélèvement sécurisé & Résultats
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Un infirmier préleveur diplômé intervient avec matériel stérile. Vos résultats sont délivrés rapidement le jour même.
            </p>
          </div>
        </div>

        {/* Interactive Fast Reservation Box */}
        <div className="bg-gradient-to-br from-[#123644] to-[#0a1e26] border border-[#257287]/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                Réservez votre prélèvement à domicile en 30 secondes
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sélectionnez votre quartier et votre créneau, notre secrétariat reçoit directement votre demande sur WhatsApp.
              </p>

              {/* Form choices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#42a8c0] mb-1.5">
                    Quartier à Casablanca :
                  </label>
                  <select
                    value={selectedQuarter}
                    onChange={(e) => setSelectedQuarter(e.target.value)}
                    className="w-full bg-[#0d242e] border border-slate-700 text-white rounded-lg px-3 py-2.5 text-xs focus:ring-2 focus:ring-[#257287] focus:outline-hidden"
                  >
                    {quarters.map((q) => (
                      <option key={q} value={q}>{q}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#42a8c0] mb-1.5">
                    Créneau préféré :
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#0d242e] border border-slate-700 text-white rounded-lg px-3 py-2.5 text-xs focus:ring-2 focus:ring-[#257287] focus:outline-hidden"
                  >
                    {timeSlots.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Matériel stérile à usage unique
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#42a8c0]" />
                  Ponctualité garantie
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-red-400" />
                  Prise en charge douce
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <button
                onClick={handleLaunchWhatsApp}
                className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Réserver sur WhatsApp ({LAB_INFO.whatsappNumber})</span>
              </button>

              <a
                href={`tel:${LAB_INFO.phoneClean}`}
                className="w-full py-3.5 px-6 bg-[#0d242e] hover:bg-[#153b4b] border border-slate-600 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#42a8c0]" />
                <span>Ou appeler le standard : {LAB_INFO.phone}</span>
              </a>

              <p className="text-[11px] text-center text-slate-400">
                Service disponible du Lundi au Samedi dès 7h30 sur rendez-vous.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
