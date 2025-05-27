import React, { useState } from 'react';

const About = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'programming', name: 'Programming' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'creative', name: 'Creative' }
  ];

  const skills = [
    {
      id: 1,
      title: 'React.js',
      category: 'frontend',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 18.3c-3.5 0-6.3-2.8-6.3-6.3s2.8-6.3 6.3-6.3 6.3 2.8 6.3 6.3-2.8 6.3-6.3 6.3zm0-10.6c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Next.js',
      category: 'frontend',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'HTML',
      category: 'frontend',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 15h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'CSS',
      category: 'frontend',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 15h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: 'JavaScript',
      category: 'frontend',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 15h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
        </svg>
      )
    },
    {
      id: 6,
      title: 'Tailwind CSS',
      category: 'frontend',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 7,
      title: 'Material UI',
      category: 'frontend',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 15h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
        </svg>
      )
    },
    {
      id: 8,
      title: 'Redux',
      category: 'frontend',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 9,
      title: 'Figma',
      category: 'frontend',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 8.1,
      title: 'Firebase',
      category: 'frontend',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 9.1,
      title: 'REST API',
      category: 'frontend',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 10,
      title: 'C',
      category: 'programming',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 11,
      title: 'C++',
      category: 'programming',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 12,
      title: 'Java',
      category: 'programming',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 13,
      title: 'SQL',
      category: 'programming',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 14,
      title: 'Machine Learning',
      category: 'ai',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 15,
      title: 'NLP',
      category: 'ai',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 16,
      title: 'Canva',
      category: 'creative',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 17,
      title: 'Video Editing',
      category: 'creative',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    },
    {
      id: 18,
      title: 'Cinematography',
      category: 'creative',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 19h20L12 2zm0 4.5L18.5 17H5.5L12 6.5z"/>
        </svg>
      )
    }
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Personal Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="font-medium w-24">Name:</span>
                  Syed Abdul Hameed
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="font-medium w-24">Email:</span>
                  syemeed@gmail.com
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="font-medium w-24">Location:</span>
                  Nandyala, Andhra Pradesh, India
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="font-medium w-24">Education:</span>
                  Bachelor's in Computer Science & Engineering (Data Science) 
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      Available for Full-time Opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Rajeev Gandhi Memorial College of Engineering and Technology
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400">Bachelor's Degree in Computer Science & Engineering (Data Science)</p>
                  <p className="text-gray-600 dark:text-gray-400">2022 - 2026</p>
                </div>
                <div className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    International Institute of Information and Technology (IIIT) - RK Valley
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400">Pre University Course</p>
                  <p className="text-gray-600 dark:text-gray-400">2020 - 2022</p>
                </div>
                <div className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Sri Chaitanya English Medium High School
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400">Secondary School Certificate</p>
                  <p className="text-gray-600 dark:text-gray-400">2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary and Skills */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
              Aspiring Software Engineer with hands-on experience in full-stack development, specializing in connecting backend APIs to intuitive frontends. Proven track record in hackathons, securing finalist positions and wins for innovative, real-world solutions. Strong problem-solving skills, a passion for learning new technologies, and a drive to build impactful applications.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Skills & Expertise
              </h3>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      activeCategory === category.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center text-center"
                  >
                    <div className="text-indigo-600 dark:text-indigo-400 mb-2">
                      {skill.icon}
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      {skill.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 