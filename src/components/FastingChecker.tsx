import { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Droplets, 
  Pill, 
  Coffee, 
  Clock, 
  MessageCircle,
  Search
} from 'lucide-react';
import { LAB_INFO } from '../data/labData';

interface TestRule {
  name: string;
  isFasting: boolean;
  hours: number;
  waterAllowed: boolean;
  notes: string;
  medsAdvice: string;
}

const FASTING_RULES: Record<string, TestRule> = {
  glycemie: {
    name: 'Glycémie à jeun & Bilan Diabète',
    isFasting: true,
    hours: 10,
    waterAllowed: true,
    notes: 'Ne consommer aucun aliment solide, jus de fruits, thé ou café sucré dans les 10 à 12 heures précédant la prise de sang.',
    medsAdvice: 'Prendre vos antidiabétiques oraux ou insuline uniquement après la prise de sang, selon consigne de votre médecin.'
  },
  cholesterol: {
    name: 'Bilan Lipidique (Cholestérol Total, HDL, LDL, Triglycérides)',
    isFasting: true,
    hours: 12,
    waterAllowed: true,
    notes: 'Jeûne strict de 12 heures nécessaire car les triglycérides augmentent fortement après le repas. Dîner léger et sans alcool la veille.',
    medsAdvice: 'Vous pouvez prendre vos médicaments habituels contre l\'hypertension avec un verre d\'eau.'
  },
  nfs: {
    name: 'Numération Formule Sanguine (NFS / Hémogramme)',
    isFasting: false,
    hours: 0,
    waterAllowed: true,
    notes: 'Le jeûne n\'est pas obligatoire pour la NFS seule. Il est toutefois recommandé de prendre un repas léger sans excès de matières grasses.',
    medsAdvice: 'Poursuivez vos traitements normaux.'
  },
  tsh: {
    name: 'Bilan Thyroïdien (TSH, T3L, T4L)',
    isFasting: false,
    hours: 0,
    waterAllowed: true,
    notes: 'Pas de jeûne obligatoire. Le prélèvement s\'effectue idéalement le matin.',
    medsAdvice: 'Si vous prenez du Lévothyrox ou équivalent, faites la prise de sang AVANT de prendre votre comprimé du matin.'
  },
  renal: {
    name: 'Bilan Rénal (Créatinine, Clairance, Urée)',
    isFasting: false,
    hours: 4,
    waterAllowed: true,
    notes: 'Un jeûne court (4h) ou repas léger est conseillé. Bien s\'hydrater en buvant de l\'eau plate pour ne pas fausser le débit de filtration glomérulaire.',
    medsAdvice: 'Traitements habituels autorisés.'
  },
  hepatique: {
    name: 'Bilan Hépatique (Transaminases ALAT/ASAT, Gamma-GT)',
    isFasting: true,
    hours: 8,
    waterAllowed: true,
    notes: 'Jeûne de 8 heures recommandé pour la précision des dosages enzymatiques. Éviter toute consommation d\'alcool 48h avant.',
    medsAdvice: 'Signaler tout traitement médical en cours au préleveur.'
  },
  ferritine: {
    name: 'Ferritine & Bilan Martial (Fer sérique)',
    isFasting: true,
    hours: 8,
    waterAllowed: true,
    notes: 'Le fer sérique varie au cours de la journée. Un prélèvement matinal à jeun de 8h est préconisé.',
    medsAdvice: 'Arrêter les compléments oraux en fer 48h avant sauf avis contraire de votre médecin.'
  },
  ecbu: {
    name: 'Examen des Urines (ECBU)',
    isFasting: false,
    hours: 0,
    waterAllowed: true,
    notes: 'Pas de jeûne alimentaire. Recueillir les urines du matin (ou après 3h de rétention). Toilette antiseptique soigneuse préalable obligatoire.',
    medsAdvice: 'Signaler impérativement tout traitement antibiotique débuté ou récent.'
  }
};

export default function FastingChecker({ onOpenPrescription }: { onOpenPrescription: (note?: string) => void }) {
  const [selectedKey, setSelectedKey] = useState<string>('glycemie');
  const activeRule = FASTING_RULES[selectedKey];

  return (
    <section id="guide-jeun" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase font-bold tracking-wider text-[#257287] mb-2">
            Guide Pratique Patient & Préparation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Faut-il être à jeun pour votre prise de sang ?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Une bonne préparation est la clé de résultats fiables et exploitables par votre médecin. 
            Sélectionnez votre examen ci-dessous pour consulter les consignes exactes.
          </p>
        </div>

        {/* Interactive Selector Chips */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(FASTING_RULES).map(([key, rule]) => (
              <button
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all border ${
                  selectedKey === key
                    ? 'bg-[#257287] text-white border-[#257287] shadow-xs scale-105'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#257287] hover:bg-[#eef7f9]/50'
                }`}
              >
                {rule.name.split('(')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Rule Display Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          
          {/* Card Head */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold font-['Outfit'] text-slate-900">
                {activeRule.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Protocole de prélèvement certifié - Laboratoire Roma Casablanca
              </p>
            </div>

            {/* Status indicator */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold ${
              activeRule.isFasting 
                ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
            }`}>
              {activeRule.isFasting ? (
                <>
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Strictement à jeun ({activeRule.hours}h)</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Sans jeûne obligatoire</span>
                </>
              )}
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-b border-slate-100 text-xs">
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-50 text-sky-700 rounded-lg">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Puis-je boire de l'eau ?</h4>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    <strong>Oui, absolument.</strong> Boire de l'eau plate est autorisé et même fortement conseillé pour faciliter le prélèvement veineux.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-rose-50 text-rose-700 rounded-lg">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Café, thé ou jus ?</h4>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    <strong>Interdits</strong> (même sans sucre) pour les analyses à jeun car la caféine et les polyphénols modifient la glycémie et le profil lipidique.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-50 text-indigo-700 rounded-lg">
                  <Pill className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Médicaments habituels</h4>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    {activeRule.medsAdvice}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-100 text-slate-700 rounded-lg">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Recommandation du biologiste</h4>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    {activeRule.notes}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom direct question CTA */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              Vous avez un doute sur une analyse spécifique non mentionnée ?
            </p>
            <button
              onClick={() => onOpenPrescription(activeRule.name)}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Demander confirmation sur WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
