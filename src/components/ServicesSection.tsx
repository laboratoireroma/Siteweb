import { useState } from 'react';
import { 
  Search, 
  Clock, 
  AlertCircle, 
  Check, 
  MessageCircle, 
  Dna, 
  Microscope, 
  FlaskConical, 
  HeartPulse, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ANALYSES_DATA, HEALTH_PACKAGES, LAB_INFO, AnalysisItem } from '../data/labData';

interface ServicesSectionProps {
  onOpenPrescription: (testName?: string) => void;
  onNavigateToDomicile: () => void;
}

export default function ServicesSection({ 
  onOpenPrescription,
  onNavigateToDomicile 
}: ServicesSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les analyses' },
    { id: 'routine', label: 'Routine & Biochimie' },
    { id: 'hormono', label: 'Hormonologie & Immunologie' },
    { id: 'microbio', label: 'Microbiologie & ECBU' },
    { id: 'genetique', label: 'Biologie Moléculaire (PCR)' },
    { id: 'bilans', label: 'Bilans de Santé Personnalisés' },
  ];

  const filteredAnalyses = ANALYSES_DATA.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleAskTest = (testName: string) => {
    onOpenPrescription(testName);
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase font-bold tracking-wider text-sky-700 mb-2">
            Plateau Technique & Analyses Cliniques
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Une gamme complète d'analyses médicales à Casablanca
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Du bilan préventif de routine aux examens de biologie moléculaire de haute précision, 
            le Laboratoire Roma garantit fiabilité scientifique et délais optimisés.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une analyse (ex: glycémie, NFS, TSH, cholestérol, ECBU, PCR...)"
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#257287] focus:bg-white transition-all shadow-xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 hover:text-slate-600 px-2 py-1"
              >
                Effacer
              </button>
            )}
          </div>

          {/* Clean Segmented Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#257287] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Section 1: Health Packages Bilans (Shown if "all" or "bilans" selected) */}
        {(selectedCategory === 'all' || selectedCategory === 'bilans') && !searchQuery && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
                  Bilans de Santé Personnalisés
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Des profils biologiques complets conçus selon votre âge, votre profil de santé et vos objectifs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HEALTH_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all border ${
                    pkg.highlight
                      ? 'bg-gradient-to-b from-sky-900 to-slate-900 text-white border-sky-600 shadow-xl'
                      : 'bg-slate-50 hover:bg-white text-slate-900 border-slate-200/90 hover:border-sky-300 shadow-xs hover:shadow-md'
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[11px] font-bold rounded-full shadow-xs uppercase tracking-wider">
                      Recommandé 50+
                    </div>
                  )}

                  <div>
                    <h4 className={`text-lg font-bold font-['Outfit'] mb-1 ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>
                      {pkg.name}
                    </h4>
                    <p className={`text-xs mb-4 ${pkg.highlight ? 'text-sky-200' : 'text-slate-500'}`}>
                      {pkg.subtitle}
                    </p>

                    {/* Metadata indicators */}
                    <div className="space-y-2 mb-5 text-xs">
                      <div className="flex items-center gap-2">
                        <Clock className={`w-3.5 h-3.5 ${pkg.highlight ? 'text-sky-400' : 'text-sky-600'}`} />
                        <span className={pkg.highlight ? 'text-slate-300' : 'text-slate-600'}>
                          {pkg.turnaroundTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className={`w-3.5 h-3.5 ${pkg.highlight ? 'text-amber-400' : 'text-amber-600'}`} />
                        <span className={pkg.highlight ? 'text-slate-300' : 'text-slate-600'}>
                          {pkg.isFasting ? 'À jeun de 10 à 12h recommandé' : 'Sans jeûne obligatoire'}
                        </span>
                      </div>
                    </div>

                    {/* Included tests sample */}
                    <div className="border-t border-slate-200/40 pt-4 mb-6">
                      <p className={`text-xs font-semibold mb-2 ${pkg.highlight ? 'text-sky-300' : 'text-slate-700'}`}>
                        Comprend {pkg.testsCount} paramètres clés :
                      </p>
                      <ul className="space-y-1.5 text-xs">
                        {pkg.testsList.slice(0, 5).map((t, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${pkg.highlight ? 'text-emerald-400' : 'text-emerald-600'}`} />
                            <span className={pkg.highlight ? 'text-slate-300' : 'text-slate-600'}>{t}</span>
                          </li>
                        ))}
                        {pkg.testsList.length > 5 && (
                          <li className={`text-[11px] italic pt-1 ${pkg.highlight ? 'text-sky-300' : 'text-slate-400'}`}>
                            + {pkg.testsList.length - 5} autres marqueurs...
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* CTA button */}
                  <button
                    onClick={() => handleAskTest(pkg.name)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      pkg.highlight
                        ? 'bg-sky-500 hover:bg-sky-400 text-white'
                        : 'bg-sky-700 hover:bg-sky-800 text-white'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Demander ce bilan sur WhatsApp</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Detailed Individual Analyses Grid */}
        {selectedCategory !== 'bilans' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
                  Catalogue des Examens de Biologie Médicale
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {filteredAnalyses.length} analyses répertoriées avec conditions de prélèvement.
                </p>
              </div>
            </div>

            {filteredAnalyses.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
                <FlaskConical className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-700 font-medium">Aucune analyse ne correspond à votre recherche "{searchQuery}"</p>
                <p className="text-slate-500 text-xs mt-1">
                  Le laboratoire réalise des centaines d'autres dosages spécialisés non listés ici.
                </p>
                <button
                  onClick={() => onOpenPrescription(searchQuery)}
                  className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Demander confirmation sur WhatsApp</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredAnalyses.map((test) => (
                  <div
                    key={test.id}
                    className="bg-white rounded-xl p-5 border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Quiet Category Kicker */}
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                        <span className="font-medium text-sky-700">{test.categoryLabel}</span>
                        <span>{test.specimenType}</span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                        {test.name}
                      </h4>

                      <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                        {test.description}
                      </p>

                      {/* Fasting & Turnaround Info */}
                      <div className="p-3 bg-slate-50 rounded-lg space-y-2 mb-4 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            Délai :
                          </span>
                          <span className="font-semibold text-slate-800">{test.turnaroundTime}</span>
                        </div>
                        
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-slate-500 flex items-center gap-1 shrink-0">
                            <AlertCircle className={`w-3.5 h-3.5 ${test.isFastingRequired ? 'text-amber-500' : 'text-emerald-500'}`} />
                            À jeun :
                          </span>
                          <span className={`text-right font-medium ${test.isFastingRequired ? 'text-amber-700' : 'text-emerald-700'}`}>
                            {test.isFastingRequired ? 'Oui (10-12h)' : 'Non requis'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-2">
                      <button
                        onClick={() => handleAskTest(test.name)}
                        className="flex-1 py-2 px-3 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Demander par WhatsApp</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Specialized Focus Banner for Home Sampling */}
        <div className="mt-14 bg-gradient-to-r from-sky-50 via-teal-50 to-sky-50 border border-sky-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-teal-800">
              Service Exclusif Grand Casablanca
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
              Impossibilité de vous déplacer ? Nous venons chez vous.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Prélèvements sanguins et bactériologiques à domicile pour seniors, femmes enceintes et convalescents 
              dans tout Casablanca.
            </p>
          </div>
          <button
            onClick={onNavigateToDomicile}
            className="shrink-0 px-6 py-3.5 bg-[#257287] hover:bg-[#1a5464] text-white font-semibold text-sm rounded-xl shadow-xs transition-colors flex items-center gap-2"
          >
            <span>Découvrir le service à domicile</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
