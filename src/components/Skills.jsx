import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React JS",
        "Next JS",
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "Material UI",
        "Redux"
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        "C",
        "C++",
        "Java",
        "SQL"
      ]
    },
    {
      title: "AI & Design",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Data Science",
        "Streamlit",
        "Fast API",
        "NLP",
        "UI/UX with Figma"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            My Skills
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Here are my technical skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))} 
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Creative Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Canva",
              "Video Editing",
              "Cinematography"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-base font-medium hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 