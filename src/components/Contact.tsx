
import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative bg-pastel-pink/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <Mail className="mx-auto mb-4 text-pastel-gold" size={32} />
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-pastel-pink mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Feel free to reach out for research collaborations, speaking engagements, or academic inquiries.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-display font-medium mb-6">Send a Message</h3>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pastel-gold/50"
                placeholder="Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pastel-gold/50"
                placeholder="Email"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pastel-gold/50"
                placeholder="Subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pastel-gold/50"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-pastel-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-pastel-gold/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
