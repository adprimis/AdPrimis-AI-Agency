import React from 'react';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20 noise-bg section-gradient"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_var(--tw-gradient-to)_100%)] from-primary/50 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title Badge */}
          <div className="mb-6 mt-16">
            <div className="hero-label-container">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gray-800/60 text-white mb-4 border border-primary">
                <span className="relative z-10 tracking-wide">
                  Revolutionizing Business Communication & Sales
                </span>
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Cutting-Edge<br />
            <span className="text-white">AI Voice Agents That</span><br />
            <span className="text-primary">Accelerate Deals</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our AI voice agents work 24/7 to answer every call, qualify leads, and follow up instantly — freeing you up to focus on real projects, not repetitive conversations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-32">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-primary"
              aria-label="Schedule a consultation"
            >
              Book a Consultation
            </Link>
            
            <Link
              to="case-studies"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-secondary"
            >
              Hear AI in Action
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;