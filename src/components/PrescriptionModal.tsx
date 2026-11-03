import { useState, useRef } from 'react';
import { 
  X, 
  MessageCircle, 
  Upload, 
  FileText, 
  ShieldCheck, 
  CheckCircle, 
  Phone 
} from 'lucide-react';
import { LAB_INFO } from '../data/labData';

interface PrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export default function PrescriptionModal({ 
  isOpen, 
  onClose, 
  initialTopic = '' 
}: PrescriptionModalProps) {
  const [selectedTopic, setSelectedTopic] = useState(
    initialTopic || 'Prélèvement à Domicile Casablanca'
  );
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [details, setDetails] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSend = () => {
    const textLines = [
      `*Demande Laboratoire Roma Casablanca*`,
      patientName ? `*Patient :* ${patientName}` : null,
      patientPhone ? `*Tél :* ${patientPhone}` : null,
      `*Objet :* ${selectedTopic}`,
      details ? `*Détails :* ${details}` : null,
      fileName ? `*(Photo ordonnance "${fileName}" prête)*` : null,
      `\nMerci de m'indiquer la marche à suivre.`
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/${LAB_INFO.whatsappClean}?text=${encodeURIComponent(textLines)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              Rx
            </div>
            <div>
              <h3 className="text-base font-bold font-['Outfit']">
                Transmettre une Ordonnance
              </h3>
              <p className="text-[11px] text-sky-200">
                Laboratoire Roma Casablanca · WhatsApp Sécurisé
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

        {/* Content */}
        <div className="p-6 space-y-4 overflow-y-auto">
          
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Motif de votre prise de contact
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
            >
              <option value="Prélèvement à Domicile Casablanca">Réserver un Prélèvement à Domicile</option>
              <option value="Devis & Informations Ordonnance">Devis et préparation pour ordonnance</option>
              <option value="Bilan de Santé Préventif">Bilan de santé complet</option>
              <option value="Demande d'Urgences 7j/7">Examen urgent / Bilan préopératoire</option>
              <option value="Autre demande">Autre renseignement</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Votre Nom (Optionnel)
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Ex: Mme Benjelloun"
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                placeholder="Ex: 06 61 XX XX XX"
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Photo Ordonnance */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Joindre la photo de l'ordonnance
            </label>
            {!fileName ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 hover:border-emerald-500 bg-slate-50 hover:bg-emerald-50/30 rounded-xl p-4 text-center cursor-pointer transition-all"
              >
                <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                <p className="text-xs font-semibold text-slate-700">Sélectionner ou photographier l'ordonnance</p>
                <p className="text-[11px] text-slate-400">JPG, PNG, PDF</p>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                <div className="flex items-center gap-2 truncate">
                  <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800 truncate">{fileName}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setFileName('')}
                  className="text-xs text-rose-600 hover:underline shrink-0 ml-2"
                >
                  Retirer
                </button>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,.pdf"
              onChange={handleFile}
              className="hidden"
            />
          </div>

          {/* Note */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Précisions (Quartier à Casablanca, heure souhaitée...)
            </label>
            <textarea
              rows={2}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Ex: Prélèvement à domicile à Racine, vers 8h00 du matin..."
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-hidden resize-none"
            />
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Votre ordonnance est directement transmise à notre biologiste sous le sceau du secret médical.</span>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-800"
          >
            Annuler
          </button>
          <button
            onClick={handleSend}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ouvrir WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
}
