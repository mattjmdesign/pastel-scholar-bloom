
import React from 'react';
import { BookOpen, FileText, Download } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Quantum Field Theoretical Analysis of Dark Matter Interactions",
      journal: "Physical Review Letters",
      year: 2024,
      authors: "Parker, O., Zhang, L., & Morrison, K.",
      link: "#",
      abstract: "This paper explores novel interactions between dark matter particles and the Standard Model through effective field theory frameworks."
    },
    {
      title: "Inflationary Cosmology and Primordial Black Holes: A Statistical Approach",
      journal: "Journal of Cosmology and Astroparticle Physics",
      year: 2023,
      authors: "Parker, O., & Chen, W.",
      link: "#",
      abstract: "We investigate the formation mechanisms of primordial black holes during the inflationary era and their statistical distribution."
    },
    {
      title: "New Constraints on Neutrino Mass from Cosmological Observations",
      journal: "The Astrophysical Journal",
      year: 2023,
      authors: "Hernandez, J., Parker, O., & Thompson, S.",
      link: "#",
      abstract: "Using recent CMB and large-scale structure data, we place new bounds on the sum of neutrino masses."
    },
  ];

  return (
    <section id="publications" className="section-padding relative bg-pastel-peach/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <BookOpen className="mx-auto mb-4 text-pastel-gold" size={32} />
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Publications</h2>
          <div className="h-1 w-20 bg-pastel-peach mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My published research focuses on theoretical physics with applications to cosmology and particle physics.
          </p>
        </div>
        
        <div className="grid gap-8">
          {publications.map((pub, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-grow">
                  <h3 className="text-xl font-display font-medium mb-2">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {pub.journal} • {pub.year}
                  </p>
                  <p className="text-sm font-medium mb-4">{pub.authors}</p>
                  <p className="mb-4 text-muted-foreground">{pub.abstract}</p>
                  <div className="flex gap-3">
                    <a 
                      href={pub.link} 
                      className="inline-flex items-center text-sm text-pastel-gold hover:underline"
                    >
                      <FileText size={16} className="mr-1" />
                      View Paper
                    </a>
                    <a 
                      href={pub.link} 
                      className="inline-flex items-center text-sm text-pastel-gold hover:underline"
                    >
                      <Download size={16} className="mr-1" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
