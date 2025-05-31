import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AiHuman from './components/AiHuman';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
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
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;