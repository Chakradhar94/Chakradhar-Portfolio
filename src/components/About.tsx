import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Data Analysis"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Data-driven professional with 3+ years of experience in data visualization, analysis, and 
                engineering. Expertise in designing and implementing interactive, responsive dashboards using 
                Power BI and data solutions on platforms like Azure Synapse, Cosmos DB, and MySQL.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Proven track record of delivering insightful, actionable reports to drive strategic decision-making. 
                Skilled in SQL scripting, ETL processes, and data governance.
              </p>
              <a
                href="https://drive.google.com/file/d/1Nepa9Ylt2VQ6jjtSCboH5E9aqXwtzNXd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;