import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Let's Connect</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-600 mb-8">
            I'm always open to discussing new opportunities and collaborations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:chakradharsangepu123@gmail.com"
              className="flex items-center justify-center space-x-3 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">Email Me</span>
            </a>
            
            <a
              href="https://linkedin.com/in/chakradhar-sangepu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">Connect on LinkedIn</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking to hire?</h3>
            <p className="text-gray-600 mb-6">
              I'm currently open to new opportunities in data analysis and engineering roles.
            </p>
            <a
              href="mailto:chakradharsangepu123@gmail.com?subject=Job Opportunity"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;