import React from 'react';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4 pb-8 md:pt-16 md:pb-12 noise-bg"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_var(--tw-gradient-to)_100%)] from-primary/30 to-transparent" style={{ transform: 'translateY(20%)' }}></div>
      </div>

      {/* Blur elements */}
      <motion.div 
        className="absolute top-1/4 right-[15%] w-20 h-20 rounded-full bg-primary/20 blur-xl"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.6, 0.4, 0.6]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />

      <motion.div 
        className="absolute bottom-1/3 left-[10%] w-32 h-32 rounded-full bg-accent/20 blur-xl"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 mt-2 md:mt-8 md:mb-8"
          >
            <div className="hero-label-container flex justify-center">
              <motion.span 
                className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm md:text-base font-medium bg-gray-800/60 text-white mb-4 border border-primary whitespace-nowrap relative"
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
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 mt-4 md:mb-8"
          >
            <span className="block mb-2 md:mb-4">Cutting-Edge</span>
            <div className="flex justify-center">
              <span className="text-white whitespace-nowrap block mb-2 md:mb-4">AI Voice Agents That</span>
            </div>
            <span className="text-primary block">Accelerate Deals</span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Our AI voice agents work 24/7 to answer every call, qualify leads, and follow up instantly — freeing you up to focus on real projects, not repetitive conversations.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-primary"
            >
              Book a Consultation
            </Link>
            
            <Link
              to="case-studies"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-secondary group"
            >
              Hear AI in Action
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
