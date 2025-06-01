import React from 'react';
import { Circle, Zap, TrendingUp } from 'lucide-react';

const AiHuman: React.FC = () => {
  return (
    <section className="relative py-24 bg-white">
      {/* Overlay to block background animations */}
      <div className="absolute inset-0 bg-white opacity-95"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-primary bg-primary/10 mb-4 mt-0 md:mt-4">
              Growth Formula
            </span>
            
            <h2 className="text-3xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-8 leading-tight text-gray-900">
              Human <span className="text-primary">+</span> AI <span className="text-primary">=</span> Winning Machine
            </h2>
            
            <p className="text-gray-600 text-base lg:text-[1.05rem] mb-10 leading-relaxed mt-2 md:mt-0">
              Just as a high-performance engine needs premium fuel to reach its full 
              potential, AI voice agents need quality leads to work and maximize results. 
              The best fuel comes from combining human expertise with AI technology - 
              expert media buyers working alongside intelligent algorithms to generate 
              and refine the highest-quality leads. This premium fuel is available with us 
              as an optional power boost to supercharge your growth.
            </p>

            <div className="space-y-8">
              {/* Premium Fuel */}
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Circle className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">The Power of Premium Fuel</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Quality leads are the essential fuel that powers AI voice agents to 
                    realize calls. The better the leads, the more appointments booked - 
                    it's a direct relationship that drives business growth.
                  </p>
                </div>
              </div>

              {/* Human-AI Production */}
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Human-AI Fuel Production</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    The finest leads come from the synergy of human media buying 
                    expertise and AI optimization. This combination fine-tunes ad 
                    campaigns to attract the most promising prospects.
                  </p>
                </div>
              </div>

              {/* Turbo Boost */}
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Optional Turbo Boost</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    While AI voice agents work with any lead source, adding this 
                    premium lead generation service creates an unstoppable growth 
                    engine - transforming good performance into exceptional results.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start mt-10 gap-8">
              <a href="#calendar" className="btn-primary px-8">
                Supercharge Your Business
              </a>
            </div>
          </div>
          {/* Right Visualization (separate column for desktop) */}
          <div className="w-full max-w-[520px] lg:max-w-[540px] h-[540px] lg:h-[580px] mx-auto lg:ml-16 relative shadow-sm mt-8 lg:mt-[-80px] flex flex-col justify-center items-center bg-primary/10 rounded-2xl p-6 lg:p-14 self-end">
            {/* Labels */}
            <div className="absolute top-6 left-6">
              <span className="px-4 py-1 bg-white rounded-md text-sm font-medium text-gray-700 shadow-sm">Human</span>
            </div>
            <div className="absolute top-6 right-6">
              <span className="px-4 py-1 bg-white rounded-md text-sm font-medium text-gray-700 shadow-sm">AI</span>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 bg-white rounded-md text-sm font-medium text-gray-700 shadow-sm">Growth</span>
            </div>

            {/* Circle Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-72 h-72">
                {/* Left Half Circle */}
                <div className="absolute left-0 top-0 w-36 h-72 bg-primary/20 rounded-l-full"></div>
                {/* Right Half Circle */}
                <div className="absolute right-0 top-0 w-36 h-72 bg-primary/20 rounded-r-full"></div>
                {/* Growth Arrow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <TrendingUp className="w-8 h-8 text-primary transform rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiHuman; 