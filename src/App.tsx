import React from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Chakradhar Sangepu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;