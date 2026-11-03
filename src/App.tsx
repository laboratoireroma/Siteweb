import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import HomeSamplingSection from './components/HomeSamplingSection';
import FastingChecker from './components/FastingChecker';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import GeoFaqSection from './components/GeoFaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';
import PrescriptionModal from './components/PrescriptionModal';
import ResultsModal from './components/ResultsModal';

export default function App() {
  const [currentSection, setCurrentSection] = useState('accueil');
  const [isPrescriptionOpen, setIsPrescriptionOpen] = useState(false);
  const [prescriptionTopic, setPrescriptionTopic] = useState('');
  const [isResultsOpen, setIsResultsOpen] = useState(false);

  // Smooth scroll handler
  const handleNavigateTo = (sectionId: string) => {
    setCurrentSection(sectionId);
    if (sectionId === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenPrescription = (topic?: string) => {
    setPrescriptionTopic(topic || 'Prélèvement à Domicile Casablanca');
    setIsPrescriptionOpen(true);
  };

  const handleOpenResults = () => {
    setIsResultsOpen(true);
  };

  // Observe scroll for active section indication
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'services', 'domicile', 'guide-jeun', 'a-propos', 'faq-geo', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        if (sectionId === 'accueil') {
          if (window.scrollY < 300) {
            setCurrentSection('accueil');
            break;
          }
        } else {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setCurrentSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased">
      
      {/* Primary Header */}
      <Header
        currentSection={currentSection}
        onNavigateTo={handleNavigateTo}
        onOpenPrescription={() => handleOpenPrescription()}
        onOpenResults={handleOpenResults}
      />

      <main className="flex-1">
        {/* 1. Hero Section (Conversion Funnel & 4 Medical Portals) */}
        <section id="accueil">
          <Hero
            onOpenPrescription={() => handleOpenPrescription('Devis et ordonnance')}
            onOpenResults={handleOpenResults}
            onNavigateTo={handleNavigateTo}
          />
        </section>

        {/* 2. Services & Analyses & Bilans Personnalisés */}
        <ServicesSection
          onOpenPrescription={(testName) => handleOpenPrescription(testName ? `Information sur l'analyse : ${testName}` : undefined)}
          onNavigateToDomicile={() => handleNavigateTo('domicile')}
        />

        {/* 3. Prélèvements à Domicile Casablanca */}
        <HomeSamplingSection
          onOpenPrescription={(note) => handleOpenPrescription(note)}
        />

        {/* 4. Guide Patient : Faut-il être à jeun ? */}
        <FastingChecker
          onOpenPrescription={(test) => handleOpenPrescription(test ? `Question à jeun pour : ${test}` : undefined)}
        />

        {/* 5. À Propos : Biologistes, Équipements de pointe & Qualité */}
        <AboutSection />

        {/* 6. Témoignages & Avis Patients Casablanca */}
        <TestimonialsSection />

        {/* 7. Stratégie GEO (Generative Engine Optimization) & FAQ IA */}
        <GeoFaqSection
          onOpenPrescription={(q) => handleOpenPrescription(q)}
        />

        {/* 8. Contact, Carte Interactive Google Maps & Formulaire Ordonnance */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigateTo={handleNavigateTo}
        onOpenPrescription={() => handleOpenPrescription()}
        onOpenResults={handleOpenResults}
      />

      {/* Sticky Quick-Action Conversion Widgets (WhatsApp Popover & Mobile Bottom Bar) */}
      <StickyActions
        onOpenPrescription={() => handleOpenPrescription()}
        onOpenResults={handleOpenResults}
      />

      {/* Modals */}
      <PrescriptionModal
        isOpen={isPrescriptionOpen}
        onClose={() => setIsPrescriptionOpen(false)}
        initialTopic={prescriptionTopic}
      />

      <ResultsModal
        isOpen={isResultsOpen}
        onClose={() => setIsResultsOpen(false)}
      />

    </div>
  );
}
