import { 
  ShieldCheck, 
  Award, 
  Microscope, 
  Lock, 
  Zap, 
  HeartHandshake, 
  CheckCircle,
  Stethoscope,
  Sparkles
} from 'lucide-react';
import { LAB_INFO } from '../data/labData';

export default function AboutSection() {
  const values = [
    {
      title: "Fiabilité & Rigueur Scientifique",
      description: "Contrôles de qualité internes quotidiens et participation continue aux Évaluations Externes de la Qualité (EEQ) internationales.",
      icon: ShieldCheck,
      color: "text-[#257287] bg-[#eef7f9]"
    },
    {
      title: "Confidentialité & Secret Médical",
      description: "Système informatique sécurisé et conforme aux normes les plus strictes de protection des données de santé personnelles.",
      icon: Lock,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      title: "Réactivité & Délais Optimisés",
      description: "85% des résultats délivrés le jour même. Transmission immédiate au médecin prescripteur en cas de valeur critique.",
      icon: Zap,
      color: "text-amber-600 bg-amber-50"
    },
    {
      title: "Empathie & Écoute Humaine",
      description: "Accueil bienveillant de chaque patient, prise en charge douce des enfants et seniors, conseils personnalisés des biologistes.",
      icon: HeartHandshake,
      color: "text-[#dc2626] bg-red-50"
    }
  ];

  const team = [
    {
      name: "Dr. Meriem R.",
      role: "Pharmacienne Biologiste - Directrice du Laboratoire",
      desc: "Ancienne interne des hôpitaux, spécialiste en hématologie et biochimie clinique. Plus de 15 ans d'expertise diagnostique à Casablanca.",
      specialty: "Hématologie & Biochimie"
    },
    {
      name: "Dr. Amine K.",
      role: "Médecin Biologiste Médical",
      desc: "Diplômé en microbiologie médicale, parasitologie et biologie moléculaire. Responsable de la gestion des analyses et de l'antibiothérapie.",
      specialty: "Microbiologie & PCR"
    },
    {
      name: "Équipe Soignante & Préleveurs",
      role: "Infirmiers Diplômés d'État",
      desc: "Une équipe expérimentée, dédiée à la ponction veineuse indolore au laboratoire et en déplacement à domicile du lundi au samedi.",
      specialty: "Soins & Domicile"
    }
  ];

  return (
    <section id="a-propos" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase font-bold tracking-wider text-sky-700 mb-2">
            Excellence Médicale & Éthique
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            À Propos du Laboratoire Roma
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Implanté au cœur de Casablanca, le Laboratoire d'Analyses Médicales Roma allie 
            technologie d'automatisation de dernière génération et dévouement humain pour apporter 
            des réponses biologiques claires et rapides aux cliniciens et aux patients.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div 
                key={i} 
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-sky-300 shadow-xs hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-5`}>
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold font-['Outfit'] text-slate-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* High Tech Equipment & Quality Infrastructure */}
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-2xl p-8 lg:p-12 text-white shadow-xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-sky-400">
                Plateau Technique Automatisé
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
                Technologies de pointe et automates de référence mondiale
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Notre laboratoire est équipé des automates leaders de la biologie clinique internationale 
                (Roche Diagnostics, Beckman Coulter, bioMérieux), garantissant des calibrations certifiées, 
                une traçabilité intégrale par code-barres et une élimination rigoureuse de tout risque d'erreur d'identification.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Traçabilité codes-barres 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>PCR Temps Réel Multiplex</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Automates bidirectionnels connectés</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chambre froide régulée 24h/24</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xs space-y-4">
              <div className="flex items-center gap-3">
                <Microscope className="w-8 h-8 text-sky-400" />
                <div>
                  <h4 className="font-bold text-white text-sm">Contrôle Qualité Continu</h4>
                  <p className="text-xs text-slate-300">Audits réguliers et standards ISO 15189</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Chaque série d'analyses est validée par des sérums de contrôle avant toute libération des résultats patients par nos biologistes.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section (inspired by the medical specialists in reference design) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900">
              Notre Équipe Médicale & Scientifique
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Des biologistes médicaux et préleveurs qualifiés au service de votre santé à Casablanca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xl mb-4 font-['Outfit']">
                    {member.name.split(' ')[1]?.[0] || 'D'}
                  </div>
                  <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                    {member.specialty}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold text-slate-700 mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
