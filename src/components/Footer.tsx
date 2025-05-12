
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h4 className="text-xl font-semibold mb-6 relative">
              Perself Mindcare
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary"></span>
            </h4>
            <p className="text-muted-foreground mb-6">
              Holistic approaches to mental wellness. Healing begins with acceptance.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/booking">Book a Session</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <FooterLink to="/services">Counselling & Therapy</FooterLink>
              <FooterLink to="/services">Healing Modalities</FooterLink>
              <FooterLink to="/services">Assessments & Tools</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-4 w-4 text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground text-sm">123 Wellness Street, Mindful City, MC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-4 w-4 text-primary" />
                <a href="tel:+11234567890" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-4 w-4 text-primary" />
                <a href="mailto:info@perselfmindcare.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@perselfmindcare.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-xs mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Perself Mindcare. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-muted-foreground text-xs hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-muted-foreground text-xs hover:text-primary transition-colors">
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
      className="text-sm text-muted-foreground hover:text-primary transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
