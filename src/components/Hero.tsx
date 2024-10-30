import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Chakradhar Sangepu
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-600 mb-8">
          Data Analyst & Engineer
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Transforming data into actionable insights through visualization and analytics
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://linkedin.com/in/chakradhar-sangepu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Linkedin className="w-6 h-6 text-blue-600" />
          </a>
          <a
            href="mailto:chakradharsangepu123@gmail.com"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Mail className="w-6 h-6 text-blue-600" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Github className="w-6 h-6 text-blue-600" />
          </a>
        </div>

        <a
          href="#about"
          className="inline-block animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;