
import React from 'react';
import { FileText, Download, GraduationCap, Briefcase, Award } from 'lucide-react';

const CV = () => {
  return (
    <section id="cv" className="section-padding relative bg-pastel-lavender/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <FileText className="mx-auto mb-4 text-pastel-gold" size={32} />
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Curriculum Vitae</h2>
          <div className="h-1 w-20 bg-pastel-lavender mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
            A summary of my academic background, research experience, and accomplishments.
          </p>
          <a 
            href="#download-cv" 
            className="inline-flex items-center bg-pastel-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-pastel-gold/90 transition-colors"
          >
            <Download size={18} className="mr-2" />
            Download Full CV
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Education Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="bg-pastel-mint/20 p-3 rounded-full mr-4">
                <GraduationCap className="text-pastel-gold" size={24} />
              </div>
              <h3 className="text-2xl font-display font-medium">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-1">Ph.D. in Theoretical Physics</h4>
                <p className="text-pastel-gold mb-1">University of California, Berkeley</p>
                <p className="text-sm text-muted-foreground mb-2">2021 - Present</p>
                <p className="text-sm">
                  Dissertation: "Quantum Field Theoretical Approaches to Dark Matter and Inflationary Cosmology"
                  <br />
                  Advisor: Prof. Katherine Morrison
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-1">M.Sc. in Physics</h4>
                <p className="text-pastel-gold mb-1">Massachusetts Institute of Technology</p>
                <p className="text-sm text-muted-foreground mb-2">2019 - 2021</p>
                <p className="text-sm">
                  Thesis: "Statistical Methods in Cosmological Data Analysis"
                  <br />
                  GPA: 4.0/4.0
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-1">B.Sc. in Physics and Mathematics</h4>
                <p className="text-pastel-gold mb-1">Stanford University</p>
                <p className="text-sm text-muted-foreground mb-2">2015 - 2019</p>
                <p className="text-sm">
                  Graduated with Highest Honors
                  <br />
                  GPA: 3.95/4.0
                </p>
              </div>
            </div>
          </div>
          
          {/* Experience & Awards Section */}
          <div className="space-y-8">
            {/* Research Experience */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <div className="bg-pastel-peach/20 p-3 rounded-full mr-4">
                  <Briefcase className="text-pastel-gold" size={24} />
                </div>
                <h3 className="text-2xl font-display font-medium">Research Experience</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-1">Graduate Research Assistant</h4>
                  <p className="text-pastel-gold mb-1">UC Berkeley Department of Physics</p>
                  <p className="text-sm text-muted-foreground mb-2">2021 - Present</p>
                  <p className="text-sm">
                    Developing theoretical models for dark matter interactions and primordial black hole formation.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-1">Research Intern</h4>
                  <p className="text-pastel-gold mb-1">CERN, Theoretical Physics Department</p>
                  <p className="text-sm text-muted-foreground mb-2">Summer 2020</p>
                  <p className="text-sm">
                    Worked on quantum field theory calculations related to the Standard Model.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Awards */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <div className="bg-pastel-yellow/20 p-3 rounded-full mr-4">
                  <Award className="text-pastel-gold" size={24} />
                </div>
                <h3 className="text-2xl font-display font-medium">Awards & Honors</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-1">NSF Graduate Research Fellowship</h4>
                  <p className="text-sm text-muted-foreground">2021 - 2024</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-1">MIT Physics Department Excellence Award</h4>
                  <p className="text-sm text-muted-foreground">2021</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-1">Stanford University Undergraduate Research Grant</h4>
                  <p className="text-sm text-muted-foreground">2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
