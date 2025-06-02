import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Circle, Zap, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-scroll';
import VictorySystem from './VictorySystem';

const AiHuman: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-start">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-primary bg-primary/10 mb-4 md:mb-6">
              Growth Formula
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-[2.75rem] font-bold mb-6 md:mb-8 leading-tight text-gray-900">
              Human <span className="text-primary">+</span> AI <span className="text-primary">=</span> Winning Machine
            </h2>
            
            <p className="text-gray-600 text-sm sm:text-base lg:text-[1.05rem] mb-10 md:mb-12 leading-relaxed max-w-2xl">
              Just as a high-performance engine needs premium fuel to reach its full 
              potential, AI voice agents need quality leads to work and maximize results. 
              The best fuel comes from combining human expertise with AI technology - 
              expert media buyers working alongside intelligent algorithms to generate 
              and refine the highest-quality leads. This premium fuel is available with us 
              as an optional power boost to supercharge your growth.
            </p>

            <div className="space-y-10">
              {/* Premium Fuel */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Circle className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-900">The Power of Premium Fuel</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Quality leads are the essential fuel that powers AI voice agents to 
                    realize calls. The better the leads, the more appointments booked - 
                    it's a direct relationship that drives business growth.
                  </p>
                </div>
              </div>

              {/* Human-AI Production */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-900">Human-AI Fuel Production</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    The finest leads come from the synergy of human media buying 
                    expertise and AI optimization. This combination fine-tunes ad 
                    campaigns to attract the most promising prospects.
                  </p>
                </div>
              </div>

              {/* Turbo Boost */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-900">Optional Turbo Boost</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    While AI voice agents work with any lead source, adding this 
                    premium lead generation service creates an unstoppable growth 
                    engine - transforming good performance into exceptional results.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start mt-8 md:mt-12 gap-8">
              <Link
                to="calendar"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary px-8 transform hover:scale-105 transition-transform duration-300"
              >
                Supercharge Your Business
              </Link>
            </div>
          </div>
          {/* Right Content - Visualization Box */}
          <div className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[520px] h-[400px] sm:h-[450px] lg:h-[540px] mx-auto lg:ml-16 relative shadow-sm mt-6 md:mt-8 lg:mt-48 flex flex-col items-center bg-black rounded-2xl p-4 sm:p-6 lg:p-14">
            {/* Title Section */}
            <div className="text-center mb-3 sm:mb-2 -mt-2 sm:-mt-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">Victory System</h3>
              <p 
                className="text-primary text-sm font-medium tracking-wide animate-pulse-slow relative" 
                style={{ 
                  textShadow: `
                    0 0 5px rgba(255, 107, 0, 0.8),
                    0 0 10px rgba(255, 107, 0, 0.6),
                    0 0 15px rgba(255, 107, 0, 0.4),
                    0 0 20px rgba(255, 107, 0, 0.2)
                  `,
                  filter: 'brightness(1.2)'
                }}
              >
                Human + AI Powered
              </p>
            </div>

            {/* Victory System Visualization */}
            <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 mt-6 sm:mt-8 lg:mt-12">
              <div className="w-[60%] sm:w-[55%] lg:w-[50%] h-[60%] sm:h-[55%] lg:h-[50%] z-10">
                <VictorySystem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiHuman; 