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
      variants={sectionBgVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="section bg-dark text-white relative noise-bg section-gradient overflow-hidden pt-8 md:pt-12"
    >
      {/* Geometric Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
          variants={geometricShapeVariant}
          animate="animate"
        />
        
        <motion.div 
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"
          variants={geometricShapeVariant}
          animate="animate"
        />
        
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full"
          variants={floatingDotVariant}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/20 rounded-full"
          variants={floatingDotVariant}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_var(--tw-gradient-to)_100%)] from-primary/40 to-transparent"></div>
      </div>

      {/* Services */}
      <motion.div 
        className="container-custom relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="text-center mb-16">
          <motion.span 
            variants={badgeVariant}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#FF6B00]/10 text-[#FF6B00] mb-4"
          >
            Our Services
          </motion.span>

          <motion.h2 
            variants={fadeUpVariant}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            AI-Powered <span className="text-[#FF6B00]">Voice Solutions</span>
          </motion.h2>

          <motion.p 
            variants={fadeUpVariant}
            className="text-white/70 max-w-2xl mx-auto"
          >
            Our AI voice agents deliver personalized, efficient communication that drives business growth while reducing operational costs.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="group bg-[#FFF7F0] rounded-xl p-6 hover:shadow-md hover:ring-2 hover:ring-[#FF6B00]/40 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Geometric background pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6B00]/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#FF6B00]/5 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
              </div>

              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-lg bg-[#FF6B00]/10 group-hover:bg-[#FF6B00]/20 transition-all duration-300 relative overflow-hidden flex items-center justify-center min-w-[48px] min-h-[48px]">
                  {/* Icon background animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>
                  </div>
                  <service.icon className="w-6 h-6 text-[#FF6B00] transition-colors duration-300 relative z-10" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-black group-hover:text-[#FF6B00] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B7280]">{service.description}</p>
                </div>
              </div>

              {/* Hover border animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent"></div>
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF6B00]/30 to-transparent"></div>
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF6B00]/30 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Delivery Process */}
      <motion.div 
        className="container-custom relative z-10 mt-32"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="text-center mb-16 relative">
          {/* Additional geometric elements for the delivery process section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl"
              variants={geometricShapeVariant}
              animate="animate"
            />
            <motion.div 
              className="absolute top-1/2 left-0 w-2 h-2 bg-primary/40 rounded-full"
              variants={floatingDotVariant}
              animate="animate"
              style={{ animationDelay: '1.5s' }}
            />
            <motion.div 
              className="absolute top-1/3 right-0 w-2 h-2 bg-primary/40 rounded-full"
              variants={floatingDotVariant}
              animate="animate"
              style={{ animationDelay: '2.5s' }}
            />
          </div>

          <motion.span 
            variants={badgeVariant}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#FF6B00] bg-[#FF6B00]/10 mb-4"
          >
            How We Deliver
          </motion.span>

          {/* Heading with decorative lines */}
          <div className="flex items-center justify-center gap-8 mb-4 max-w-[1200px] mx-auto">
            <motion.div 
              variants={lineVariant}
              className="hidden md:block w-full max-w-[300px] h-[2px] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#FF6B00]/20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent animate-shine"></div>
            </motion.div>

            <motion.h2 
              variants={fadeUpVariant}
              className="text-3xl md:text-4xl font-bold whitespace-nowrap"
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

            <motion.div 
              variants={lineVariant}
              className="hidden md:block w-full max-w-[300px] h-[2px] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#FF6B00]/20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent animate-shine"></div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          variants={staggerContainer}
        >
          {deliveryProcess.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="relative text-center rounded-xl p-6 pt-12 border border-[#FF6B00] transition-all duration-300 cursor-pointer group bg-dark/50 backdrop-blur-sm"
            >
              <motion.div 
                className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-lg z-10"
                variants={badgeVariant}
              >
                {step.number}
              </motion.div>

              <motion.div 
                className="w-16 h-16 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mx-auto mb-4"
                variants={iconContainerVariant}
                animate="animate"
              >
                <step.icon className="w-8 h-8 text-[#FF6B00]" />
              </motion.div>

              <motion.h3 
                variants={fadeUpVariant}
                className="text-xl font-bold mb-2 text-white"
              >
                {step.title}
              </motion.h3>
              <motion.p 
                variants={fadeUpVariant}
                className="text-sm text-white/70"
              >
                {step.description}
              </motion.p>

              {/* Always visible glow effect */}
              <div className="absolute inset-0 rounded-xl pointer-events-none">
                <div className="absolute inset-0 bg-[#FF6B00]/5 rounded-xl"></div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-[#FF6B00]/40"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
