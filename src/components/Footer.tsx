
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-perself-dark text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="text-2xl font-bold mb-6 text-white font-outfit relative inline-block">
              Perself Mindcare
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-perself-primary"></span>
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Holistic approaches to mental wellness. Healing begins with acceptance.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-perself-primary hover:scale-110 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-perself-primary hover:scale-110 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-perself-primary hover:scale-110 transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white font-outfit relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-perself-primary"></span>
            </h4>
            <ul className="space-y-4">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/booking">Book a Session</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white font-outfit relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-perself-primary"></span>
            </h4>
            <ul className="space-y-4">
              <FooterLink to="/services">Counselling & Therapy</FooterLink>
              <FooterLink to="/services">Healing Modalities</FooterLink>
              <FooterLink to="/services">Assessments & Tools</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white font-outfit relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-perself-primary"></span>
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-perself-primary shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Wellness Street, Mindful City, MC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-perself-primary" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-perself-primary transition-custom">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-perself-primary" />
                <a href="mailto:info@perselfmindcare.com" className="text-gray-300 hover:text-perself-primary transition-custom">
                  info@perselfmindcare.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Perself Mindcare. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-perself-primary transition-custom">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 text-sm hover:text-perself-primary transition-custom">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-300 hover:text-perself-primary transition-custom relative group inline-block"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-px bg-perself-primary group-hover:w-full transition-all duration-300 ease-out"></span>
    </Link>
  </li>
);

export default Footer;
