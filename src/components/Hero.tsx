import React from 'react';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20 noise-bg section-gradient"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_var(--tw-gradient-to)_100%)] from-primary/50 to-transparent" style={{ height: '85%' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 mt-8"
          >
            <div className="hero-label-container flex justify-center">
              <motion.span 
                className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm md:text-base font-medium bg-gray-800/60 text-white mb-4 border border-primary whitespace-nowrap relative animate-pulse-slow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 rounded-full border-2 border-primary animate-glow"></span>
                <span className="relative z-10 tracking-wide">
                  Revolutionizing Business Communication & Sales
                </span>
              </motion.span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 mt-4"
          >
            <span className="block mb-2">Cutting-Edge</span>
            <div className="flex justify-center">
              <span className="text-white whitespace-nowrap block mb-2">AI Voice Agents That</span>
            </div>
            <span className="text-primary block">Accelerate Deals</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            Our AI voice agents work 24/7 to answer every call, qualify leads, and follow up instantly — freeing you up to focus on real projects, not repetitive conversations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8 mt-2"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-primary transform hover:scale-105 transition-transform duration-300"
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
              className="btn-secondary transform hover:scale-105 transition-transform duration-300"
            >
              Hear AI in Action
              <ArrowRight className="ml-2 inline-block" size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
