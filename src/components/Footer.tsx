import React from 'react';
import { Link } from 'react-scroll';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/20 blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/20 blur-3xl opacity-30"></div>

      <div className="container-custom py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img src="/Logo.png" alt="AdPrimis" className="h-10 w-auto" />
              <span className="text-xl font-display font-bold ml-2">AdPrimis</span>
            </div>
            <p className="text-white/70 mb-6">
              Revolutionizing business communication and sales with cutting-edge AI voice agent technology that sounds indistinguishable from humans.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="hero" spy={true} smooth={true} duration={500} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true} duration={500} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link to="case-studies" spy={true} smooth={true} duration={500} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="faq" spy={true} smooth={true} duration={500} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} duration={500} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:admin@adprimis.agency" className="text-white/70 hover:text-white transition-colors">
                  admin@adprimis.agency
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:admin@adprimis.online" className="text-white/70 hover:text-white transition-colors">
                  admin@adprimis.online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} AdPrimis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;