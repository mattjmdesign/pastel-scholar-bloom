
import React from 'react';
import { Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pastel-lavender/20 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-semibold text-pastel-gold mb-4">Contact Me</h3>
            <div className="flex items-center justify-center md:justify-start mb-3">
              <div className="bg-pastel-mint/30 p-2 rounded-full mr-3">
                <Mail className="text-pastel-gold" size={18} />
              </div>
              <a href="mailto:olivia.parker@berkeley.edu" className="text-pastel-gold hover:underline">
                olivia.parker@berkeley.edu
              </a>
            </div>
          </div>
          
          {/* Middle - Name and Info */}
          <div className="text-center">
            <h3 className="font-display text-2xl font-semibold text-pastel-gold mb-4">Olivia Parker</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Doctoral Candidate in Theoretical Physics<br />
              University of California, Berkeley
            </p>
            <div className="h-px bg-pastel-gold/20 w-20 mx-auto my-4"></div>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Olivia Parker. All rights reserved.
            </p>
          </div>
          
          {/* Connect */}
          <div className="text-center md:text-right">
            <h3 className="font-display text-2xl font-semibold text-pastel-gold mb-4">Connect With Me</h3>
            <div className="flex items-center justify-center md:justify-end mb-3">
              <div className="bg-pastel-blue/30 p-2 rounded-full mr-3">
                <Twitter className="text-pastel-gold" size={18} />
              </div>
              <a href="#twitter" className="text-pastel-gold hover:underline">
                @olivia_physics
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-pastel-gold/10">
          <div className="flex justify-center space-x-8">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
