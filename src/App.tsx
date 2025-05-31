import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AiHuman from './components/AiHuman';
import CaseStudies from './components/CaseStudies';
import Faq from './components/Faq'; // ✅ Fixed casing here
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ui/ParticleBackground';

const App: React.FC = () => {
  return (
    <div className="relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <AiHuman />
      <Faq /> {/* ✅ Uses the correctly imported component */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
