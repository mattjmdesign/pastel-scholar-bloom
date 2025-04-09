
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pastel-peach/20 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center">
          <h3 className="font-display text-2xl font-semibold text-pastel-gold mb-4">Olivia Parker</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Doctoral Candidate in Theoretical Physics<br />
            University of California, Berkeley
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-pastel-gold hover:text-pastel-gold/80 transition-colors">
              Home
            </a>
            <a href="#publications" className="text-pastel-gold hover:text-pastel-gold/80 transition-colors">
              Publications
            </a>
            <a href="#presentations" className="text-pastel-gold hover:text-pastel-gold/80 transition-colors">
              Presentations
            </a>
            <a href="#cv" className="text-pastel-gold hover:text-pastel-gold/80 transition-colors">
              CV
            </a>
            <a href="#contact" className="text-pastel-gold hover:text-pastel-gold/80 transition-colors">
              Contact
            </a>
          </div>
          
          <div className="h-px bg-pastel-gold/20 w-32 mx-auto mb-6"></div>
          
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Olivia Parker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
