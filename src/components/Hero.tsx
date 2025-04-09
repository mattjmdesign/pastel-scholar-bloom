
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToPublications = () => {
    const element = document.getElementById('publications');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Decorative Waves */}
      <div className="absolute top-0 left-0 w-full h-24 bg-pastel-peach opacity-20 -skew-y-3 transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-full h-24 bg-pastel-mint opacity-20 -skew-y-3 transform-gpu"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-4 leading-tight">
              <span className="block">Hello, I'm</span>
              <span className="text-pastel-gold">Olivia Parker</span>
            </h1>
            <div className="h-1 w-20 bg-pastel-peach mb-6"></div>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Doctoral Candidate in Theoretical Physics
              <br />University of California, Berkeley
            </p>
            <p className="mb-8 max-w-lg">
              I research quantum field theories and their applications to cosmology. 
              My work explores the intersection of particle physics and the early universe.
            </p>
            <button 
              onClick={scrollToPublications}
              className="bg-pastel-peach hover:bg-pastel-gold transition-colors text-primary-foreground px-6 py-3 rounded-lg font-medium inline-flex items-center"
            >
              View My Work
              <ChevronDown className="ml-2" size={18} />
            </button>
          </div>
          
          <div className="relative">
            <div className="blob-shape bg-pastel-mint p-2 md:p-4 relative animate-float shadow-lg mx-auto max-w-sm">
              <div className="blob-shape overflow-hidden bg-white">
                <img 
                  src="/public/lovable-uploads/d61f959e-f48a-49e0-aab6-79b020e4353f.png" 
                  alt="Grad Student Portrait" 
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/3 -left-8 w-16 h-16 bg-pastel-pink rounded-full opacity-60 animate-float"></div>
            <div className="absolute bottom-10 -right-8 w-20 h-20 bg-pastel-lavender rounded-full opacity-60 animate-float"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};

export default Hero;
