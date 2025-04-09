
import React from 'react';
import { Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pastel-peach/20 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-semibold text-pastel-gold mb-4">Olivia Parker</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Doctoral Candidate in Theoretical Physics<br />
              University of California, Berkeley
            </p>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-medium mb-4">Connect With Me</h3>
            <div className="flex items-start mb-4">
              <div className="bg-pastel-mint/20 p-2 rounded-full mr-4 mt-1">
                <Mail className="text-pastel-gold" size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Email</h4>
                <a href="mailto:olivia.parker@berkeley.edu" className="text-pastel-gold hover:underline">
                  olivia.parker@berkeley.edu
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-pastel-mint/20 p-2 rounded-full mr-4 mt-1">
                <Twitter className="text-pastel-gold" size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Twitter</h4>
                <a href="https://twitter.com/oliviaparker" className="text-pastel-gold hover:underline">
                  @oliviaparker
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-medium mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
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
        
        <div className="h-px bg-pastel-gold/20 w-full mx-auto mb-6"></div>
        
        <p className="text-sm text-muted-foreground text-center">
          &copy; {currentYear} Olivia Parker. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
