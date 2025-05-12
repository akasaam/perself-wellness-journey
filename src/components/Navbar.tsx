
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-custom",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-perself-primary font-poppins text-xl font-bold">
            Perself<span className="text-perself-dark">Mindcare</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="font-poppins text-foreground hover:text-perself-primary transition-custom"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-poppins text-foreground hover:text-perself-primary transition-custom"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="font-poppins text-foreground hover:text-perself-primary transition-custom"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="font-poppins text-foreground hover:text-perself-primary transition-custom"
          >
            Contact
          </Link>
          <Link to="/booking">
            <Button className="bg-perself-primary hover:bg-perself-dark">
              Book a Session
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? (
            <X className="h-6 w-6 text-perself-primary" />
          ) : (
            <Menu className="h-6 w-6 text-perself-primary" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-5 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-poppins text-foreground hover:text-perself-primary transition-custom"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-poppins text-foreground hover:text-perself-primary transition-custom"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="font-poppins text-foreground hover:text-perself-primary transition-custom"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="font-poppins text-foreground hover:text-perself-primary transition-custom"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link to="/booking" onClick={toggleMenu}>
                <Button className="w-full bg-perself-primary hover:bg-perself-dark">
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

export default Navbar;
