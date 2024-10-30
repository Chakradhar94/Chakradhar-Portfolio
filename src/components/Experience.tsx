import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior System Engineer',
      company: 'Infosys',
      location: 'Hyderabad, India',
      period: '2021 – Present',
      achievements: [
        'Developed interactive, responsive dashboards and reports using Power BI and MySQL',
        'Led migration from Tableau to Power BI, optimizing data flow and implementing RLS',
        'Built automated ETL pipelines using Azure Synapse Analytics and Cosmos DB',
        'Implemented data governance and validation processes'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-lg text-blue-600">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">{exp.location}</p>
                  <p className="text-gray-500">{exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;