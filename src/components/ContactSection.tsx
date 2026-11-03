import { useState, useRef } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Navigation, 
  Send, 
  Upload, 
  CheckCircle2, 
  ShieldCheck, 
  X,
  FileText,
  CalendarCheck,
  AlertCircle
} from 'lucide-react';
import { LAB_INFO } from '../data/labData';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requestType, setRequestType] = useState('Prélèvement à Domicile');
  const [message, setMessage] = useState('');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [isSent, setIsSent] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPrescriptionFile(file);
    }
  };

  const removeFile = () => {
    setPrescriptionFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const textLines = [
      `*Nouveau message - Laboratoire Roma Casablanca*`,
      `*Nom:* ${name}`,
      `*Téléphone:* ${phone}`,
      `*Type de demande:* ${requestType}`,
      message ? `*Message:* ${message}` : null,
      prescriptionFile ? `*(Une ordonnance "${prescriptionFile.name}" est prête à être jointe)*` : null,
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${LAB_INFO.whatsappClean}?text=${encodeURIComponent(textLines)}`;
    
    setIsSent(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase font-bold tracking-wider text-[#257287] mb-2">
            Localisation & Prise de Rendez-vous
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Contact & Accès au <span className="text-[#257287]">Laboratoire</span> <span className="text-[#dc2626]">Roma</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Facilement accessible au cœur de Casablanca avec places réservées et service rapide d'accueil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Coordinates & Dynamic Interactive Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Fixe */}
              <a 
                href={`tel:${LAB_INFO.phoneClean}`}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-[#257287] shadow-xs hover:shadow-md transition-all group block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#eef7f9] text-[#257287] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Téléphone Fixe</span>
                </div>
                <p className="text-base font-bold text-slate-900 group-hover:text-[#257287] transition-colors">
                  {LAB_INFO.phone}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Ligne directe laboratoire</p>
              </a>

              {/* WhatsApp */}
              <a 
                href={`https://wa.me/${LAB_INFO.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all group block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">WhatsApp</span>
                </div>
                <p className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {LAB_INFO.whatsappNumber}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Ordonnances & Domicile</p>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${LAB_INFO.email}`}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all group block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors truncate">
                  {LAB_INFO.email}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Secrétariat médical</p>
              </a>

              {/* Jours Fériés Note */}
              <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-xs block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Jours Fériés</span>
                </div>
                <p className="text-xs font-bold text-slate-900">
                  Ouverture 08h00 – 14h00
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Sur contact préalable (pas de garde de nuit)</p>
              </div>

            </div>

            {/* Address & Hours Detail Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#257287] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-['Outfit']">Adresse du Laboratoire</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{LAB_INFO.address}</p>
                  <p className="text-[11px] text-[#257287] font-medium mt-1">{LAB_INFO.landmark}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#257287] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 space-y-1.5 w-full">
                  <h4 className="font-bold text-slate-900 text-sm font-['Outfit']">Horaires d'Ouverture</h4>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="font-medium text-slate-700">Lundi au Vendredi :</span>
                    <span className="font-bold text-slate-900">07h30 à 18h30</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="font-medium text-slate-700">Samedi :</span>
                    <span className="font-bold text-slate-900">08h00 à 13h00</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="font-medium text-slate-700">Dimanche :</span>
                    <span className="font-semibold text-slate-400">Fermé</span>
                  </div>
                  <div className="pt-1 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <p className="text-amber-800 font-semibold">
                      • Jours fériés : Ouverture possible de 08h00 à 14h00 (veuillez nous contacter par WhatsApp ou téléphone au préalable).
                    </p>
                    <p className="text-slate-600 mt-0.5">
                      • Le laboratoire ne fait pas de garde de nuit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Styled Map Embed + Direct Route Trigger */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="relative h-64 w-full bg-slate-100">
                <iframe
                  title="Carte Localisation Laboratoire Roma Casablanca"
                  src="https://maps.google.com/maps?q=Laboratoire+Roma+117+Angle+Boulevard+2+Mars+et+Rue+de+Rome+Casablanca&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating GPS Action Pill */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                  <a
                    href={LAB_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-5 bg-[#257287] hover:bg-[#1a5464] text-white font-bold text-xs rounded-xl shadow-lg shadow-[#0d242e]/30 flex items-center gap-2 transition-transform hover:scale-105"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Lancer le guidage Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Simplified Medical Contact & Prescription Upload Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              
              <div className="border-b border-slate-100 pb-5 mb-6">
                <span className="text-xs font-bold text-[#257287] uppercase tracking-wider">
                  Contact Rapide & Sécurisé
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-slate-900 mt-1">
                  Transmettre votre demande ou ordonnance
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Remplissez ce formulaire simplifié. Vos coordonnées sont traitées avec la plus stricte confidentialité médicale.
                </p>
              </div>

              {isSent ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 font-['Outfit']">
                    Demande transmise avec succès !
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Votre message a été redirigé vers WhatsApp pour un traitement direct par notre équipe. 
                    Vous pouvez également nous joindre au <strong>{LAB_INFO.phone}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setName('');
                      setPhone('');
                      setMessage('');
                      removeFile();
                    }}
                    className="px-4 py-2 text-xs font-semibold text-[#257287] bg-[#eef7f9] hover:bg-sky-100 rounded-lg transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Nom complet */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nom et Prénom <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Fatima Zahra El Amrani"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#257287] focus:bg-white transition-all text-slate-900"
                    />
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Numéro de Téléphone (WhatsApp de préférence) <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: 06 10 27 57 85"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#257287] focus:bg-white transition-all text-slate-900"
                    />
                  </div>

                  {/* Type de demande */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Objet de votre démarche
                    </label>
                    <select
                      value={requestType}
                      onChange={(e) => setRequestType(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#257287] focus:bg-white transition-all text-slate-900"
                    >
                      <option value="Prélèvement à Domicile">Demande de Prélèvement à Domicile</option>
                      <option value="Devis Ordonnance">Devis ou information sur une ordonnance</option>
                      <option value="Bilan de Santé">Bilan de santé préventif ou check-up</option>
                      <option value="Suivi des Résultats">Renseignement sur le suivi de résultats</option>
                      <option value="Autre demande">Autre renseignement médical</option>
                    </select>
                  </div>

                  {/* Upload Pièce jointe Ordonnance */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Photo ou fichier de l'ordonnance (Optionnel)
                    </label>
                    
                    {!prescriptionFile ? (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-slate-300 hover:border-[#257287] bg-slate-50 hover:bg-[#eef7f9]/50 rounded-xl p-4 text-center cursor-pointer transition-all"
                      >
                        <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                        <p className="text-xs font-semibold text-slate-700">
                          Cliquez pour joindre votre ordonnance
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Photos JPG, PNG ou PDF (max 10 Mo)
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <FileText className="w-5 h-5 text-emerald-600 shrink-0" />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-slate-800 truncate">
                              {prescriptionFile.name}
                            </p>
                            <p className="text-[10px] text-emerald-700">
                              Fichier prêt à être expédié
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="p-1 text-slate-400 hover:text-rose-600 rounded-md"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Précisions / Adresse à Casablanca
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Indiquez votre adresse, quartier, heure de disponibilité ou toute question particulière..."
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#257287] focus:bg-white transition-all text-slate-900 resize-none"
                    />
                  </div>

                  {/* Security Note */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Secret médical respecté à 100%. Aucune donnée cédée à des tiers.</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Envoyer la demande (WhatsApp / Direct)</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
