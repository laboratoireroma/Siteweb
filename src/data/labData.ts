export interface AnalysisItem {
  id: string;
  name: string;
  category: 'routine' | 'microbio' | 'genetique' | 'hormono' | 'bilan';
  categoryLabel: string;
  turnaroundTime: string;
  isFastingRequired: boolean;
  fastingNote: string;
  description: string;
  specimenType: string;
}

export interface HealthPackage {
  id: string;
  name: string;
  subtitle: string;
  recommendedFor: string;
  testsCount: number;
  testsList: string[];
  turnaroundTime: string;
  isFasting: boolean;
  highlight?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'prelevement' | 'preparation' | 'resultats' | 'urgence';
  geoKeywords: string[];
}

export const LAB_INFO = {
  name: "Laboratoire d'Analyses Médicales Roma",
  shortName: "Laboratoire Roma",
  baseline: "Biologie Médicale & Analyses Cliniques de Pointe à Casablanca",
  city: "Casablanca",
  country: "Maroc",
  address: "117, Angle Boulevard 2 Mars et Rue de Rome, Quartier des Hôpitaux / Mers Sultan, Casablanca 20250",
  landmark: "Angle Boulevard 2 Mars et Rue de Rome, 1er étage – Stationnement disponible",
  logoUrl: "/assets/aistudio/logo_roma_transparent_b60a769e.png",
  coordinates: {
    lat: 33.5746,
    lng: -7.6189,
  },
  googleMapsUrl: "https://share.google/iJgpZK5giQyD4qahc",
  phone: "+212 522 28 51 60",
  phoneClean: "+212522285160",
  whatsappNumber: "+212 610 27 57 85",
  whatsappClean: "212610275785",
  email: "contact@laboratoireroma.ma",
  secondaryEmail: "secretariat.laboratoireroma@gmail.com",
  openingHours: {
    weekdays: "Du Lundi au Vendredi : 07h30 – 18h30",
    saturday: "Samedi : 08h00 – 13h00",
    sunday: "Dimanche : Fermé",
    holidays: "Jours fériés : Ouverture possible de 08h00 à 14h00 (contact par WhatsApp ou tél. avant)",
    nightNotice: "Le laboratoire ne fait pas de garde de nuit",
    homeSampling: "Prélèvements à domicile : Du Lundi au Samedi dès 07h30 sur rendez-vous",
  },
  coverageZones: [
    "Maârif",
    "Gauthier",
    "Racine",
    "Anfa & Bourgogne",
    "Quartier des Hôpitaux",
    "Oasis & Polo",
    "Ain Diab & Corniche",
    "Sidi Maârouf & CFC",
    "Grand Casablanca et périphérie sur demande",
  ]
};

export const ANALYSES_DATA: AnalysisItem[] = [
  {
    id: "nfs",
    name: "Numération Formule Sanguine (NFS / Hémogramme)",
    category: "routine",
    categoryLabel: "Hématologie",
    turnaroundTime: "2 à 4 heures (Même jour)",
    isFastingRequired: false,
    fastingNote: "Non obligatoire. Il est toutefois recommandé de privilégier un repas léger.",
    description: "Évaluation globale des globules rouges, globules blancs et plaquettes pour dépister anémie, infection ou troubles hématologiques.",
    specimenType: "Sang total veineux (Tube EDTA)"
  },
  {
    id: "glycemie",
    name: "Glycémie à jeun & Hémoglobine Glyquée (HbA1c)",
    category: "routine",
    categoryLabel: "Biochimie & Diabétologie",
    turnaroundTime: "3 heures",
    isFastingRequired: true,
    fastingNote: "Jeûne strict de 8 à 12 heures requis pour la glycémie. Eau plate autorisée.",
    description: "Dépistage et surveillance précise du diabète de type 1 et 2, régulation du glucose sanguin.",
    specimenType: "Sérum / Sang total"
  },
  {
    id: "lipidique",
    name: "Bilan Lipidique complet (Cholestérol Total, HDL, LDL, Triglycérides)",
    category: "routine",
    categoryLabel: "Biochimie Cardiovasculaire",
    turnaroundTime: "Même jour (vers 14h)",
    isFastingRequired: true,
    fastingNote: "Jeûne strict de 12 heures impératif. Pas d'alcool ni de repas gras la veille.",
    description: "Évaluation du risque athérogène et cardiovasculaire pour un suivi préventif ou thérapeutique.",
    specimenType: "Sérum"
  },
  {
    id: "crp",
    name: "Protéine C-Réactive Ultra-Sensible (CRP / VS)",
    category: "routine",
    categoryLabel: "Biochimie Inflammatoire",
    turnaroundTime: "2 heures",
    isFastingRequired: false,
    fastingNote: "Jeûne non requis.",
    description: "Marqueur rapide d'inflammation aiguë, infection bactérienne ou surveillance rhumatologique.",
    specimenType: "Sérum"
  },
  {
    id: "renale",
    name: "Bilan Rénal (Créatinine, Clairance DFG, Urée, Ionogramme)",
    category: "routine",
    categoryLabel: "Biochimie Rénale",
    turnaroundTime: "3 heures",
    isFastingRequired: false,
    fastingNote: "Recommandé à jeun de 6h mais faisable sans jeûne en cas d'urgence.",
    description: "Exploration de la fonction de filtration rénale et de l'équilibre électrolytique corporel.",
    specimenType: "Sérum"
  },
  {
    id: "hepatique",
    name: "Bilan Hépatique (Transaminases ASAT/ALAT, Gamma-GT, Bilirubine)",
    category: "routine",
    categoryLabel: "Biochimie Hépatique",
    turnaroundTime: "Même jour",
    isFastingRequired: true,
    fastingNote: "Jeûne de 8h conseillé pour des dosages enzymatiques optimaux.",
    description: "Bilan de la santé du foie, détection d'hépatites, toxicité médicamenteuse ou stéatose.",
    specimenType: "Sérum"
  },
  {
    id: "tsh",
    name: "Bilan Thyroïdien (TSH ultra-sensible, T3L, T4L, Anticorps anti-TPO)",
    category: "hormono",
    categoryLabel: "Hormonologie & Endocrinologie",
    turnaroundTime: "Même jour",
    isFastingRequired: false,
    fastingNote: "Jeûne non obligatoire. Prendre son traitement thyroïdien après la prise de sang.",
    description: "Diagnostic des dysfonctionnements thyroïdiens (hypothyroïdie, hyperthyroïdie, thyroïdite de Hashimoto).",
    specimenType: "Sérum"
  },
  {
    id: "ecbu",
    name: "Examen Cyto-Bactériologique des Urines (ECBU) & Antibiogramme",
    category: "microbio",
    categoryLabel: "Microbiologie & Infectiologie",
    turnaroundTime: "24h à 48h (résultat cytologique en 2h)",
    isFastingRequired: false,
    fastingNote: "Urines du matin ou après 3 heures de rétention minimum. Toilette intime soigneuse avec lingette stérile.",
    description: "Identification de germes pathogènes urinaires et choix de l'antibiotique le plus efficace.",
    specimenType: "Flacon d'urines stérile"
  },
  {
    id: "pcr_respiratoire",
    name: "PCR Multiplex Infectieuse & Virologique (COVID-19, Grippe A/B, VRS)",
    category: "genetique",
    categoryLabel: "Biologie Moléculaire",
    turnaroundTime: "4 à 6 heures",
    isFastingRequired: false,
    fastingNote: "Aucune préparation particulière requise.",
    description: "Détection génétique ultra-précise de virus respiratoires par amplification en temps réel.",
    specimenType: "Écouvillon nasopharyngé stérile"
  },
  {
    id: "vitamines",
    name: "Dosage de la Vitamine D (25-OH) & Vitamine B12 / Ferritine",
    category: "routine",
    categoryLabel: "Biochimie Spécialisée",
    turnaroundTime: "Même jour",
    isFastingRequired: false,
    fastingNote: "Jeûne non requis.",
    description: "Évaluation des carences nutritionnelles, fatigue chronique, santé osseuse et statut en fer.",
    specimenType: "Sérum"
  },
  {
    id: "coagulation",
    name: "Bilan d'Hémostase & Coagulation (TP / INR, TCA, Fibrinogène, D-Dimères)",
    category: "routine",
    categoryLabel: "Hémostase & Analyses",
    turnaroundTime: "1 à 2 heures",
    isFastingRequired: false,
    fastingNote: "Pas de jeûne nécessaire. Mentionner impérativement les traitements anticoagulants.",
    description: "Bilan pré-opératoire, suivi des anticoagulants (AVK) et détection de thrombose.",
    specimenType: "Plasma citraté"
  },
  {
    id: "serologie",
    name: "Sérologies Infectieuses (VIH, Hépatites B et C, Syphilis, Rubéole, Toxoplasmose)",
    category: "hormono",
    categoryLabel: "Sérologie & Immunologie",
    turnaroundTime: "Même jour (résultats confidentiels)",
    isFastingRequired: false,
    fastingNote: "Aucun jeûne nécessaire.",
    description: "Dépistage immunologique par immuno-analyse chimiluminescente de haute sensibilité.",
    specimenType: "Sérum"
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: "bilan-vital",
    name: "Bilan Vitalité & Prévention Générale",
    subtitle: "Check-up essentiel annuel pour adultes",
    recommendedFor: "Tout adulte souhaitant faire le point sur sa santé métabolique et hématologique.",
    testsCount: 14,
    testsList: [
      "Numération Formule Sanguine (NFS)",
      "Vitesse de Sédimentation (VS) & CRP",
      "Glycémie à jeun",
      "Bilan Lipidique (Cholestérol Total, HDL, LDL, Triglycérides)",
      "Bilan Rénal (Urée, Créatinine)",
      "Bilan Hépatique (Transaminases ALAT/ASAT)",
      "Acide Urique",
      "Analyse d'urines bandelette"
    ],
    turnaroundTime: "Disponible le jour même dès 16h",
    isFasting: true,
    highlight: false
  },
  {
    id: "bilan-senior",
    name: "Bilan Santé Senior & Cardiovasculaire",
    subtitle: "Dépistage approfondi à partir de 50 ans",
    recommendedFor: "Séniors, personnes hypertendues, diabétiques ou avec antécédents cardiovasculaires.",
    testsCount: 22,
    testsList: [
      "Hémogramme complet (NFS)",
      "Glycémie à jeun + HbA1c",
      "Profil lipidique complet de risque athérogène",
      "Bilan hépatique complet (ALAT, ASAT, GGT, Phosphatases alcalines)",
      "Bilan rénal complet (Créatinine avec calcul du DFG, Ionogramme)",
      "TSH ultra-sensible (Thyroïde)",
      "Vitamine D (25-OH) et B12",
      "Bilan du fer (Ferritine)",
      "PSA Total (pour hommes de >50 ans)",
      "ECBU de dépistage"
    ],
    turnaroundTime: "Le jour même (service domicile disponible)",
    isFasting: true,
    highlight: true
  },
  {
    id: "bilan-prenatal",
    name: "Bilan Prénatal & Maternité",
    subtitle: "Accompagnement de la grossesse et fertilité",
    recommendedFor: "Femmes enceintes ou en projet de conception, sur prescription gynécologique.",
    testsCount: 16,
    testsList: [
      "Groupe sanguin ABO-Rhésus + Recherche d'Agglutinines Irrégulières (RAI)",
      "Sérologie Toxoplasmose (IgG, IgM)",
      "Sérologie Rubéole (IgG, IgM)",
      "Sérologies VIH 1 & 2, VHB (Ag HBs), VHC et Syphilis (TPHA-VDRL)",
      "NFS + Bilan de coagulation (TP / TCA)",
      "Glycémie à jeun / Test HGPO si prescrit",
      "Albuminurie et glycosurie"
    ],
    turnaroundTime: "Même jour avec transmission rapide à l'obstétricien",
    isFasting: true,
    highlight: false
  },
  {
    id: "bilan-sport",
    name: "Bilan Sportif & Optimisation Métabolique",
    subtitle: "Performance, récupération et prévention du surentraînement",
    recommendedFor: "Sportifs amateurs et compétiteurs, athlètes préparant une épreuve.",
    testsCount: 18,
    testsList: [
      "Hémogramme & statut martial (Ferritine, fer sérique)",
      "Ionogramme sanguin (Sodium, Potassium, Chlore, Magnésium)",
      "Créatine Phosphokinase (CPK) - marqueur de fatigue musculaire",
      "Bilan rénal et hydrique",
      "Vitamine D & Bilan inflammatoire",
      "Bilan hépatique et hormonal de base (Testostérone, Cortisol sur demande)"
    ],
    turnaroundTime: "Même jour",
    isFasting: true,
    highlight: false
  }
];

export const GEO_FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Comment organiser un prélèvement à domicile à Casablanca avec le Laboratoire Roma ?",
    answer: "Pour bénéficier du service de prélèvement à domicile à Casablanca, il vous suffit de nous contacter au +212 522 28 51 60 ou d'envoyer votre ordonnance via WhatsApp au +212 610 27 57 85. Notre secrétariat médical fixe avec vous l'heure de passage souhaitée dès 7h30 du matin. Un infirmier préleveur diplômé se présente à votre domicile muni de matériel stérile à usage unique. Le service couvre l'ensemble des quartiers de Casablanca (Maârif, Gauthier, Racine, Anfa, Bourgogne, Oasis, Ain Diab, Sidi Maârouf).",
    category: "prelevement",
    geoKeywords: ["prélèvement à domicile casablanca", "prise de sang à domicile casablanca", "laboratoire domicile casablanca", "infirmier prélèvement"]
  },
  {
    id: "faq-2",
    question: "Quelles sont les analyses nécessitant d'être strictement à jeun ?",
    answer: "Le jeûne strict (10 à 12 heures sans alimentation solide ni jus/café sucré) est impératif pour : la glycémie à jeun, le bilan lipidique (cholestérol total, LDL, HDL, triglycérides), le bilan martial complet et l'acide urique. L'eau plate en quantité raisonnable est parfaitement autorisée et même conseillée pour faciliter le prélèvement. En revanche, la NFS, les groupes sanguins, la CRP et les sérologies peuvent être réalisés sans être à jeun.",
    category: "preparation",
    geoKeywords: ["prise de sang à jeun", "analyse glycémie casablanca", "bilan lipidique à jeun", "préparation analyse sang"]
  },
  {
    id: "faq-3",
    question: "Dans quel délai mes résultats d'analyses sont-ils disponibles ?",
    answer: "Plus de 85% des examens de biologie médicale de routine (NFS, biochimie, hémostase, hormonologie courante) sont délivrés le jour même dès 15h00. Les examens de microbiologie (ECBU, frottis, cultures) nécessitent 24h à 48h pour respecter la pousse bactérienne et réaliser l'antibiogramme. Vous recevez un SMS/WhatsApp dès validation biologique de vos résultats, également consultables sur notre plateforme sécurisée.",
    category: "resultats",
    geoKeywords: ["délais résultats laboratoire casablanca", "résultat analyse même jour", "résultats prise de sang en ligne"]
  },
  {
    id: "faq-4",
    question: "Quels sont les horaires d'ouverture et le laboratoire fait-il des gardes de nuit ?",
    answer: "Le Laboratoire Roma est ouvert du Lundi au Vendredi de 07h30 à 18h30 et le Samedi de 08h00 à 13h00. Le laboratoire ne fait pas de garde de nuit. Pour les jours fériés, une ouverture est possible de 08h00 à 14h00 sur contact préalable par WhatsApp (+212 610 27 57 85) ou par téléphone (+212 522 28 51 60).",
    category: "urgence",
    geoKeywords: ["horaires laboratoire roma casablanca", "garde jours fériés laboratoire casablanca", "téléphone laboratoire roma"]
  },
  {
    id: "faq-5",
    question: "Où se situe exactement le Laboratoire Roma et comment s'y rendre ?",
    answer: "Le laboratoire est idéalement situé au 117, Angle Boulevard 2 Mars et Rue de Rome (Quartier des Hôpitaux / Mers Sultan, 1er étage), Casablanca 20250. Un parking et des facilités de stationnement facilitent l'accès des patients. Vous pouvez lancer le guidage GPS en un clic sur le lien officiel Google Maps (https://share.google/iJgpZK5giQyD4qahc) disponible sur notre site.",
    category: "prelevement",
    geoKeywords: ["adresse laboratoire roma", "laboratoire 117 boulevard 2 mars casablanca", "angle boulevard 2 mars rue de rome", "itinéraire laboratoire roma"]
  },
  {
    id: "faq-6",
    question: "Puis-je envoyer mon ordonnance par WhatsApp pour obtenir un devis ou une confirmation ?",
    answer: "Absolument. Vous pouvez photographier votre ordonnance médicale et l'adresser directement à notre équipe via WhatsApp au +212 610 27 57 85. Notre équipe vous répond dans les plus brefs délais pour vous indiquer le montant, les conditions de préparation (à jeun ou non) et convenir d'un rendez-vous si nécessaire.",
    category: "preparation",
    geoKeywords: ["devis analyse médicale whatsapp casablanca", "envoyer ordonnance laboratoire casablanca"]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Karim B.",
    role: "Médecin Généraliste - Casablanca",
    content: "Je collabore quotidiennement avec le Laboratoire Roma pour mes patients. La rigueur des dosages biochimiques, la réactivité pour les examens et la disponibilité des biologistes pour discuter des cas en font un partenaire médical de référence.",
    rating: 5,
    tag: "Confrère Prescripteur"
  },
  {
    id: 2,
    name: "Mme Leila E.",
    role: "Patiente - Quartier Racine, Casablanca",
    content: "Un service de prélèvement à domicile exceptionnel pour ma maman de 82 ans. L'infirmière était d'une douceur remarquable, ponctuelle le matin, et nous avons reçu les résultats par WhatsApp dans l'après-midi. Une tranquillité d'esprit inestimable !",
    rating: 5,
    tag: "Prélèvement à Domicile"
  },
  {
    id: 3,
    name: "M. Youssef T.",
    role: "Patient Bilan Annuel - Maârif",
    content: "Laboratoire ultra-propre, accueil chaleureux et aucune attente. Prise de sang totalement indolore. Le compte-rendu est clair avec des courbes comparatives. Je recommande les yeux fermés à Casablanca.",
    rating: 5,
    tag: "Bilan de Santé"
  }
];
