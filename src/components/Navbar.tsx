
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-custom",
        isScrolled
          ? "frosted-glass shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center relative z-20">
          <span className="text-perself-primary font-outfit text-xl font-bold tracking-tight">
            Perself<span className="text-perself-dark">Mindcare</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
          <NavLink to="/about" currentPath={location.pathname}>About Us</NavLink>
          <NavLink to="/services" currentPath={location.pathname}>Services</NavLink>
          <NavLink to="/contact" currentPath={location.pathname}>Contact</NavLink>
          <Link to="/booking">
            <Button className="magic-button shine-effect">
              Book a Session
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden relative z-20" 
          onClick={toggleMenu} 
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-perself-primary" />
          ) : (
            <Menu className="h-6 w-6 text-perself-primary" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-10 flex items-center justify-center">
            <nav className="flex flex-col items-center space-y-8">
              <NavLink 
                to="/" 
                currentPath={location.pathname} 
                onClick={toggleMenu} 
                mobile
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                currentPath={location.pathname} 
                onClick={toggleMenu} 
                mobile
              >
                About Us
              </NavLink>
              <NavLink 
                to="/services" 
                currentPath={location.pathname}  
                onClick={toggleMenu}
                mobile
              >
                Services
              </NavLink>
              <NavLink 
                to="/contact" 
                currentPath={location.pathname}  
                onClick={toggleMenu}
                mobile
              >
                Contact
              </NavLink>
              <Link to="/booking" onClick={toggleMenu}>
                <Button className="magic-button shine-effect mt-4 w-40">
                  Book a Session
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  currentPath: string;
  children: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, currentPath, children, onClick, mobile }) => {
  const isActive = currentPath === to;
  
  return (
    <Link
      to={to}
      className={cn(
        "relative group",
        mobile ? "font-outfit text-xl" : "font-outfit text-foreground",
        isActive ? "text-perself-primary font-medium" : "hover:text-perself-primary transition-custom"
      )}
      onClick={onClick}
    >
      {children}
      <div
        className={cn(
          "h-0.5 w-full bg-perself-primary absolute bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-300 ease-out",
          isActive ? "scale-x-100" : "group-hover:scale-x-100"
        )}
      ></div>
    </Link>
  );
};

export default Navbar;
