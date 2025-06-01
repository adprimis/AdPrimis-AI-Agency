import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MessageSquare, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-accent/5 to-transparent"></div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="lg:pr-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-black text-white mb-4">
              Let's Connect
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">Book a Strategy Call</span>
            </h2>
            
            <p className="text-gray-600 mb-8">
              Discover how our AI voice agents can transform your business operations and boost your revenue. Schedule a personalized consultation with our team if you feel ready for evolution.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Calendar className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Personalized Strategy</h3>
                  <p className="text-gray-500">Custom solutions tailored to your business needs</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <MessageSquare className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">No-Pressure Consultation</h3>
                  <p className="text-gray-500">Learn about the technology with zero obligation</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Phone className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Live Demonstration</h3>
                  <p className="text-gray-500">Hear our AI voice agents in action</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            id="calendar"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 relative lg:sticky lg:top-24"
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/Hc79fppD1agT3g9IbbQS"
              style={{ width: '100%', height: '600px', border: 'none' }}
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;