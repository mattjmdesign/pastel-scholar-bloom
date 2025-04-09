
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Publications from '../components/Publications';
import Presentations from '../components/Presentations';
import CV from '../components/CV';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Publications />
        <Presentations />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
