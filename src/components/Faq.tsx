import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Can people tell the difference between our AI voices and real human voices?",
    answer: "In blind tests, our AI voices are consistently rated as authentic as human voices. They master natural speech elements like tone variations, breathing patterns, and emotional expressions that make them virtually identical to human conversations. Even when handling complex interactions, the quality remains indistinguishable from skilled human agents."
  },
  {
    question: "How well does your AI handle different regional accents and speaking styles?",
    answer: "Our AI system excels at understanding diverse speech patterns, from local dialects to international accents. Thanks to advanced machine learning, it continuously adapts and improves its comprehension, ensuring clear communication regardless of how your customers speak"
  },
  {
    question: "What's the timeline from signing up to having AI agents handling calls?",
    answer: "Most businesses are up and running within 1-2 weeks. We've streamlined our implementation process into three phases: initial setup (2-3 days), AI training with your business vocabulary and protocols (3-5 days), and system integration and testing (3-4 days). Complex integrations might take slightly longer, but we ensure a smooth transition throughout"
  },
  {
    question: "Will the AI voice agents work smoothly with our current business tools?",
    answer: "Absolutely! We've built our AI to be highly compatible with all major business platforms and CRM systems. Our technology seamlessly connects with your existing workflow and business tools. We handle all technical aspects of integration, ensuring your data flows effortlessly between your CRM and other systems."
  },
  {
    question: "How do we ensure every customer interaction ends successfully?",
    answer: "Our AI is designed with smart escalation protocols. While it handles most situations independently, it's also trained to recognize complex scenarios that need a human touch. In these cases, it smoothly transfers the conversation to your team with full context, ensuring your customers always receive the best possible support without any disruption in service."
  },
  {
    question: "How do we keep the AI system consistently generating results?",
    answer: "Think of leads as the fuel that powers our AI voice agents - the more quality leads, the better the results. That's why we handle both crucial aspects: generating high-quality leads through AI-optimized Facebook ad campaigns that continuously learn and improve, and ensuring our AI agents convert these leads efficiently. By mastering both the fuel supply (AI-driven lead generation) and the engine (AI calls), we create a powerful system where artificial intelligence works at every step to consistently book appointments and drive business growth."
  }
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-dark text-white noise-bg section-gradient">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            FAQ
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get answers to common questions about our AI voice agent technology and services.
          </motion.p>
        </div>

        <div 
          ref={ref}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/80 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none group hover:bg-gray-700/80 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-xl font-medium text-white/95 group-hover:text-primary transition-colors">{faq.question}</span>
                <span className="flex-shrink-0 ml-4">
                  {activeIndex === index ? (
                    <Minus className="h-5 w-5 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary" />
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-gray-800/30"
                  >
                    <p className="p-6 text-white/70">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;