import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Scalable NoSQL Database Solution',
      client: 'Microsoft',
      description: 'Designed and implemented a scalable NoSQL database solution using Azure Cosmos DB to support high-performance applications.',
      technologies: ['Azure Cosmos DB', 'NoSQL API', 'JSON', 'MySQL'],
      period: '2024 – Present'
    },
    {
      title: 'Mock Phishing Dashboard',
      client: 'ExxonMobil',
      description: 'Migrated and enhanced dashboard from Tableau to Power BI, implementing RLS and advanced DAX functions for phishing attack analysis.',
      technologies: ['Power BI', 'DAX', 'RLS', 'Tableau'],
      period: '2022 – 2024'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Key Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <ExternalLink className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-blue-600 mb-4">{project.client}</p>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm">{project.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;