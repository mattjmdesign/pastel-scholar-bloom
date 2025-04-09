
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-pastel-base/80 py-4 px-6 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-display text-2xl font-semibold text-pastel-gold">
          <span className="text-pastel-gold">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="font-medium hover:text-pastel-gold transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('publications')}
            className="font-medium hover:text-pastel-gold transition-colors"
          >
            Publications
          </button>
          <button 
            onClick={() => scrollToSection('presentations')}
            className="font-medium hover:text-pastel-gold transition-colors"
          >
            Presentations
          </button>
          <button 
            onClick={() => scrollToSection('cv')}
            className="font-medium hover:text-pastel-gold transition-colors"
          >
            CV
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="font-medium hover:text-pastel-gold transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-pastel-gold"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-pastel-base/95 backdrop-blur-md absolute top-full left-0 right-0 p-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="py-2 px-4 text-left hover:bg-pastel-mint/20 rounded transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('publications')}
              className="py-2 px-4 text-left hover:bg-pastel-mint/20 rounded transition-colors"
            >
              Publications
            </button>
            <button 
              onClick={() => scrollToSection('presentations')}
              className="py-2 px-4 text-left hover:bg-pastel-mint/20 rounded transition-colors"
            >
              Presentations
            </button>
            <button 
              onClick={() => scrollToSection('cv')}
              className="py-2 px-4 text-left hover:bg-pastel-mint/20 rounded transition-colors"
            >
              CV
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="py-2 px-4 text-left hover:bg-pastel-mint/20 rounded transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
