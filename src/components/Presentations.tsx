
import React from 'react';
import { PresentationIcon, Calendar, MapPin } from 'lucide-react';

const Presentations = () => {
  const presentations = [
    {
      title: "Dark Matter Interactions: New Theoretical Approaches",
      event: "International Conference on Particle Physics",
      date: "June 15, 2024",
      location: "Geneva, Switzerland",
      description: "Presented recent findings on quantum field theoretical approaches to dark matter interactions and their implications for detection experiments."
    },
    {
      title: "Primordial Black Holes as Dark Matter Candidates",
      event: "American Physical Society Annual Meeting",
      date: "March 8, 2024",
      location: "Chicago, Illinois",
      description: "Discussed the formation mechanisms of primordial black holes during cosmic inflation and their potential role as dark matter candidates."
    },
    {
      title: "Neutrino Physics and Cosmological Constraints",
      event: "Berkeley Theoretical Physics Seminar",
      date: "November 22, 2023",
      location: "Berkeley, California",
      description: "Presented new constraints on neutrino masses derived from cosmological observations and their implications for particle physics models."
    },
  ];

  return (
    <section id="presentations" className="section-padding relative bg-pastel-blue/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <PresentationIcon className="mx-auto mb-4 text-pastel-gold" size={32} />
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Presentations</h2>
          <div className="h-1 w-20 bg-pastel-blue mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I regularly present my research at international conferences and academic seminars.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {presentations.map((presentation, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <h3 className="text-xl font-display font-medium mb-3">{presentation.title}</h3>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar size={14} className="mr-2" />
                {presentation.date}
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <MapPin size={14} className="mr-2" />
                {presentation.location}
              </div>
              <p className="text-sm font-medium mb-2">{presentation.event}</p>
              <p className="text-muted-foreground text-sm mt-auto">{presentation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentations;
