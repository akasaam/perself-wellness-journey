import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MenuOpenContext = React.createContext({ isMenuOpen: false });

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center relative z-20">
          <span className="text-primary font-semibold text-xl tracking-tight">
            Perself<span className="text-foreground">Mindcare</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
          <NavLink to="/about" currentPath={location.pathname}>About Us</NavLink>
          <NavLink to="/services" currentPath={location.pathname}>Services</NavLink>
          <NavLink to="/contact" currentPath={location.pathname}>Contact</NavLink>
          <Link to="/booking">
            <Button>
              Book a Session
            </Button>
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-background z-40 flex items-center justify-center transition-all duration-300",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <MenuOpenContext.Provider value={{ isMenuOpen }}>
          <nav className="flex flex-col items-center space-y-8 w-full px-8">
            <MobileNavLink 
              to="/" 
              currentPath={location.pathname} 
              onClick={toggleMenu} 
              delay="delay-100"
            >
              Home
            </MobileNavLink>
            <MobileNavLink 
              to="/about" 
              currentPath={location.pathname} 
              onClick={toggleMenu} 
              delay="delay-200"
            >
              About Us
            </MobileNavLink>
            <MobileNavLink 
              to="/services" 
              currentPath={location.pathname}  
              onClick={toggleMenu}
              delay="delay-300"
            >
              Services
            </MobileNavLink>
            <MobileNavLink 
              to="/contact" 
              currentPath={location.pathname}  
              onClick={toggleMenu}
              delay="delay-400"
            >
              Contact
            </MobileNavLink>
            <Link 
              to="/booking" 
              onClick={toggleMenu} 
              className={cn(
                "w-full max-w-xs mt-4 animate-fade-in delay-500",
                isMenuOpen ? "opacity-100" : "opacity-0"
              )}
            >
              <Button className="w-full py-4 text-lg font-medium shadow-md hover:shadow-lg">
                Book a Session
              </Button>
            </Link>
          </nav>
        </MenuOpenContext.Provider>
      </div>

      {/* Mobile Navigation Button - always on top */}
      <button 
        className={cn(
          "md:hidden fixed top-4 right-4 z-50 p-2 rounded-full hover:bg-primary/10 active:bg-primary/20 transition-colors",
          isMenuOpen && "text-primary"
        )} 
        onClick={toggleMenu} 
        aria-label="Menu"
      >
        {isMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>
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

const NavLink: React.FC<NavLinkProps> = ({ to, currentPath, children, onClick }) => {
  const isActive = currentPath === to;
  
  return (
    <Link
      to={to}
      className={cn(
        "relative transition-colors duration-200 text-sm font-medium",
        isActive ? "text-primary font-medium" : "text-foreground/80 hover:text-primary"
      )}
      onClick={onClick}
    >
      {children}
      {isActive && (
        <div className="h-0.5 w-full bg-primary absolute -bottom-1 left-0 transition-all duration-200"></div>
      )}
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  delay: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, currentPath, children, onClick, delay }) => {
  const isActive = currentPath === to;
  const { isMenuOpen } = React.useContext(MenuOpenContext); // We'll add this context below

  return (
    <Link
      to={to}
      className={cn(
        "relative transition-colors duration-200 w-full max-w-xs text-center py-4 text-xl font-medium animate-fade-in",
        delay,
        isActive ? "text-primary font-medium" : "text-foreground/80 hover:text-primary",
        isMenuOpen ? "opacity-100" : "opacity-0"
      )}
      onClick={onClick}
    >
      {children}
      {isActive && (
        <div className="h-0.5 bg-primary absolute -bottom-2 left-1/4 w-1/2 transition-all duration-300"></div>
      )}
    </Link>
  );
};

export default Navbar;
