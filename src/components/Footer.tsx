
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-perself-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Perself Mindcare</h4>
            <p className="text-gray-200 mb-4">
              Holistic approaches to mental wellness. Healing begins with acceptance.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-perself-primary transition-custom"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-perself-primary transition-custom"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-perself-primary transition-custom"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-perself-primary transition-custom">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-perself-primary transition-custom">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-perself-primary transition-custom">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-200 hover:text-perself-primary transition-custom">
                  Book a Session
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-perself-primary transition-custom">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-200 hover:text-perself-primary transition-custom">
                  Counselling & Therapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-perself-primary transition-custom">
                  Healing Modalities
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-perself-primary transition-custom">
                  Assessments & Tools
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-perself-primary shrink-0" />
                <span className="text-gray-200">123 Wellness Street, Mindful City, MC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-perself-primary" />
                <a href="tel:+11234567890" className="text-gray-200 hover:text-perself-primary transition-custom">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-perself-primary" />
                <a href="mailto:info@perselfmindcare.com" className="text-gray-200 hover:text-perself-primary transition-custom">
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

export default Footer;
