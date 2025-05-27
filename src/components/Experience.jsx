import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Video Editing Freelancer",
      company: "Genie Finance & Co",
      period: "June 2024 - Present",
      description: [
        "Video Editor specializing in both long-form and short-form content.",
        "Grew from 0 to 300K followers with engaging, high-quality edits.",
        "Gained trust through my work, leading to new ventures like Genie Taks and Genieeous."
        
      ]
    },
    {
      title: "Graphic Designer",
      company: "Village Vihari Youtube",
      period: "Feb 2021 - Nov 2021",
      description: [
        "Designed eye-catching and audience-targeted thumbnails that improved video click-through rates",
        "Maintained visual consistency across videos to enhance the channel’s brand identity.",
        "Collaborated closely with content creators to align thumbnail visuals with video topics and trends."
      ]
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Work Experience
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            My professional journey and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200 dark:bg-indigo-800"></div>

          {/* Experience items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>

                {/* Content */}
                <div className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="w-full md:w-1/2 px-4 md:px-8">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {experience.title}
                        </h3>
                        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                          {experience.period}
                        </span>
                      </div>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                        {experience.company}
                      </p>
                      <ul className="space-y-3">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start group">
                            <span className="text-indigo-600 dark:text-indigo-400 mr-2 group-hover:text-indigo-500 transition-colors duration-300">•</span>
                            <span className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warm Message Section */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl" role="img" aria-label="hug">🤗</span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey through non-technical roles has given me invaluable insights into how industries truly operate. 
              These experiences have shaped my understanding of business processes and customer needs. 
              Now, I'm excited to bring this perspective to technical roles, combining my industry knowledge with my passion for technology.
            </p>
            <p className="mt-4 text-indigo-600 dark:text-indigo-400 font-medium">
              Ready to make an impact in the tech world! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 