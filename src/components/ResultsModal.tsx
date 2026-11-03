import { useState } from 'react';
import { 
  X, 
  FileCheck, 
  Lock, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  KeyRound, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { LAB_INFO } from '../data/labData';

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResultsModal({ isOpen, onClose }: ResultsModalProps) {
  const [fileNumber, setFileNumber] = useState('');
  const [secretCode, setSecretCode] = useState('');
  const [checked, setChecked] = useState(false);

  if (!isOpen) return null;

  const handleSimulateCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setChecked(true);
  };

  const handleWhatsAppHelp = () => {
    const text = `Bonjour Laboratoire Roma, je souhaite connaître la disponibilité de mes résultats d'analyses (Dossier N° : ${fileNumber || 'à préciser'}).`;
    window.open(`https://wa.me/${LAB_INFO.whatsappClean}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-sky-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-['Outfit']">
                Espace Résultats d'Analyses Sécurisé
              </h3>
              <p className="text-[11px] text-sky-200">
                Laboratoire Roma Casablanca · Accès Patient
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          {/* Quick Informational Notice */}
          <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-4 text-xs text-slate-700 space-y-2">
            <p className="font-bold text-sky-900 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>Délais de mise à disposition :</span>
            </p>
            <p>
              • <strong>Le jour même dès 15h00</strong> pour les analyses de routine (NFS, biochimie, glycémie, coagulation, hormones).
            </p>
            <p>
              • <strong>24h à 48h</strong> pour les examens de microbiologie (ECBU, antibiogramme) et cultures.
            </p>
          </div>

          {/* Secure Access Form */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-3">
              <Lock className="w-4 h-4 text-sky-600" />
              <span>Consulter avec vos identifiants de quittance</span>
            </div>

            {checked ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-2">
                <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
                <p className="text-xs font-bold text-slate-900">
                  Dossier identifié : {fileNumber}
                </p>
                <p className="text-[11px] text-slate-600">
                  Un lien sécurisé de téléchargement de vos résultats chiffrés PDF a été transmis sur le numéro de téléphone associé à votre dossier.
                </p>
                <button
                  onClick={() => setChecked(false)}
                  className="mt-2 text-xs text-sky-700 underline font-semibold"
                >
                  Vérifier un autre numéro
                </button>
              </div>
            ) : (
              <form onSubmit={handleSimulateCheck} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    N° de Dossier / Quittance
                  </label>
                  <input
                    type="text"
                    required
                    value={fileNumber}
                    onChange={(e) => setFileNumber(e.target.value)}
                    placeholder="Ex: ROMA-2026-84912"
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Code d'accès secret (indiqué sur votre reçu)
                  </label>
                  <input
                    type="password"
                    required
                    value={secretCode}
                    onChange={(e) => setSecretCode(e.target.value)}
                    placeholder="••••••"
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Accéder à mes comptes-rendus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Alternative: Ask via WhatsApp */}
          <div className="pt-2 text-center space-y-2">
            <p className="text-xs text-slate-500">
              Vous avez égaré votre ticket ou préférez recevoir vos résultats par WhatsApp ?
            </p>
            <button
              onClick={handleWhatsAppHelp}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Demander mes résultats sur WhatsApp</span>
            </button>
            <a
              href={`tel:${LAB_INFO.phoneClean}`}
              className="inline-block text-[11px] text-slate-600 hover:text-sky-700 font-medium"
            >
              Ou contactez le standard au {LAB_INFO.phone}
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
