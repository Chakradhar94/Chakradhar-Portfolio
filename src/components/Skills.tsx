import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Visualization',
      skills: ['Power BI', 'DAX', 'Custom Measures', 'RLS', 'Tableau']
    },
    {
      title: 'Data Engineering & ETL',
      skills: ['Azure Synapse Analytics', 'Azure Cosmos DB', 'MySQL', 'Azure Data Factory']
    },
    {
      title: 'Programming & Analytics',
      skills: ['Python', 'Pandas', 'NumPy', 'PySpark', 'T-SQL', 'MySQL']
    },
    {
      title: 'Cloud Platforms',
      skills: ['Azure Data Lake', 'Azure Data Factory', 'Azure Synapse', 'Azure Cosmos DB']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;