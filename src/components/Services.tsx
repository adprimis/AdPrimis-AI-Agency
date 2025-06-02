import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  PhoneCall,
  UserPlus,
  BarChart3,
  HeadphonesIcon,
  BriefcaseIcon,
  Users,
  Target,
  Wrench,
  Rocket
} from 'lucide-react';
import {
  fadeUpVariant,
  staggerContainer,
  cardVariant,
  geometricShapeVariant,
  floatingDotVariant,
  lineVariant,
  iconContainerVariant,
  badgeVariant,
  sectionBgVariant,
  scrollTransitionSettings
} from '../utils/animations';

const serviceItems = [
  {
    icon: PhoneCall,
    title: 'Inbound Calls',
    description:
      'Our AI voice agents manage customer inquiries, appointments, and support with natural human-like conversations.'
  },
  {
    icon: UserPlus,
    title: 'Outbound Calls',
    description:
      'Generate qualified leads and appointments with personalized outreach that scales your business effortlessly.'
  },
  {
    icon: BarChart3,
    title: 'Sales Acceleration',
    description:
      'Convert more leads with persistent follow-ups and data-driven conversation techniques.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Customer Support',
    description:
      'Provide 24/7 customer support with zero wait times and consistent quality.'
  },
  {
    icon: BriefcaseIcon,
    title: 'Appointment Setting',
    description:
      'Streamline scheduling with AI voice agents, fueled by AI-optimized ad campaigns that deliver a constant flow of high-quality leads.'
  },
  {
    icon: Users,
    title: 'Custom Solutions',
    description:
      'Tailored AI voice agent implementations designed specifically for your unique business needs.'
  }
];

const deliveryProcess = [
  {
    number: '1',
    icon: Target,
    title: 'Discovery & Planning',
    description:
      'We analyze your business needs, define goals, and create a customized implementation strategy.'
  },
  {
    number: '2',
    icon: Wrench,
    title: 'Implementation & Training',
    description:
      'Our team configures the AI voice agents and trains them with your business-specific knowledge.'
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Launch & Optimization',
    description:
      'We deploy your AI voice agents and continuously optimize their performance based on real-world interactions.'
  }
];

const Services: React.FC = () => {
  const [ref, inView] = useInView(scrollTransitionSettings);

  return (
    <motion.section
      ref={ref}
      className="section relative overflow-hidden pt-8 md:pt-12"
    >
      {/* Services content */}
      <motion.div 
        className="container-custom relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="text-center mb-12">
          <motion.span 
            variants={badgeVariant}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#FF6B00]/10 text-[#FF6B00] mb-4"
          >
            Our Services
          </motion.span>

          <motion.h2 
            variants={fadeUpVariant}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
          >
            AI-Powered <span className="text-[#FF6B00]">Voice Solutions</span>
          </motion.h2>

          <motion.p 
            variants={fadeUpVariant}
            className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto px-4 sm:px-0"
          >
            Our AI voice agents deliver personalized, efficient communication that drives business growth while reducing operational costs.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={staggerContainer}
        >
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="group bg-[#FFF7F0]/95 rounded-xl p-4 sm:p-6 hover:shadow-md hover:ring-2 hover:ring-[#FF6B00]/40 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Geometric background pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6B00]/15 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#FF6B00]/10 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
              </div>

              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-lg bg-[#FF6B00]/15 group-hover:bg-[#FF6B00]/25 transition-all duration-300 relative overflow-hidden flex items-center justify-center min-w-[48px] min-h-[48px]">
                  {/* Icon background animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                  </div>
                  <service.icon className="w-6 h-6 text-[#FF6B00] transition-colors duration-300 relative z-10" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 text-black group-hover:text-[#FF6B00] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* Hover border animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent"></div>
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF6B00]/30 to-transparent"></div>
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF6B00]/30 to-transparent"></div>
              </div>

              {/* Always visible glow effect */}
              <div className="absolute inset-0 rounded-xl pointer-events-none z-10">
                <div className="absolute inset-0 bg-[#FF6B00]/5 rounded-xl animate-pulse-slow"></div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-[#FF6B00]/40 animate-pulse-slow"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF6B00]/10 via-[#FF6B00]/5 to-[#FF6B00]/10 animate-pulse-slow"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Delivery Process */}
      <motion.div 
        className="container-custom relative z-10 mt-24"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="text-center mb-12">
          <motion.span 
            variants={badgeVariant}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#FF6B00] bg-[#FF6B00]/10 mb-4"
          >
            How We Deliver
          </motion.span>

          <motion.h2 
            variants={fadeUpVariant}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
          >
            <span className="text-white">Our </span>
            <span
              style={{
                background: 'linear-gradient(to right, #FF6B00, #FF3C00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Delivery Process
            </span>
          </motion.h2>

        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 relative z-10"
          variants={staggerContainer}
        >
          {deliveryProcess.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="relative text-center rounded-xl p-4 sm:p-6 pt-10 sm:pt-12 border border-[#FF6B00] transition-all duration-300 cursor-pointer group bg-dark/50 backdrop-blur-sm"
            >
              {/* Connecting lines - between boxes 1-2 and 2-3 */}
              {index === 0 && (
                <div className="hidden md:block absolute top-1/2 left-[100%] w-8 h-[3px] bg-[#FF6B00]/60 overflow-hidden z-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/60 to-[#FF6B00]/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent animate-shine"></div>
                </div>
              )}
              {index === 1 && (
                <div className="hidden md:block absolute top-1/2 left-[100%] w-8 h-[3px] bg-[#FF6B00]/60 overflow-hidden z-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/60 to-[#FF6B00]/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent animate-shine"></div>
                </div>
              )}

              <motion.div 
                className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-lg z-30"
                variants={badgeVariant}
              >
                {step.number}
              </motion.div>

              <motion.div 
                className="w-16 h-16 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mx-auto mb-4 relative z-30"
                variants={iconContainerVariant}
                animate="animate"
              >
                <step.icon className="w-8 h-8 text-[#FF6B00]" />
              </motion.div>

              <motion.h3 
                variants={fadeUpVariant}
                className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-white relative z-30"
              >
                {step.title}
              </motion.h3>
              <motion.p 
                variants={fadeUpVariant}
                className="text-xs sm:text-sm text-white/70 relative z-30 leading-relaxed"
              >
                {step.description}
              </motion.p>

              {/* Always visible glow effect */}
              <div className="absolute inset-0 rounded-xl pointer-events-none z-10">
                <div className="absolute inset-0 bg-[#FF6B00]/5 rounded-xl animate-pulse-slow"></div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-[#FF6B00]/40 animate-pulse-slow"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF6B00]/10 via-[#FF6B00]/5 to-[#FF6B00]/10 animate-pulse-slow"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
