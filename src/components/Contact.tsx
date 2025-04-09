
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

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
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-display font-medium mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
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
                <div className="bg-pastel-peach/20 p-2 rounded-full mr-4 mt-1">
                  <Phone className="text-pastel-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a href="tel:+15105557890" className="text-pastel-gold hover:underline">
                    (510) 555-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pastel-lavender/20 p-2 rounded-full mr-4 mt-1">
                  <MapPin className="text-pastel-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Office</h4>
                  <p className="text-muted-foreground">
                    Physics Department, Room 366<br />
                    University of California, Berkeley<br />
                    Berkeley, CA 94720
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="text-lg font-medium mb-3">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a href="#github" className="bg-pastel-gold/10 p-3 rounded-full hover:bg-pastel-gold/20 transition-colors">
                    <Github className="text-pastel-gold" size={20} />
                  </a>
                  <a href="#linkedin" className="bg-pastel-gold/10 p-3 rounded-full hover:bg-pastel-gold/20 transition-colors">
                    <Linkedin className="text-pastel-gold" size={20} />
                  </a>
                  <a href="#twitter" className="bg-pastel-gold/10 p-3 rounded-full hover:bg-pastel-gold/20 transition-colors">
                    <Twitter className="text-pastel-gold" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
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
      </div>
    </section>
  );
};

export default Contact;
