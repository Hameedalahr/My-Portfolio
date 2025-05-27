import React, { useState } from 'react';

const Achievements = () => {
  const [showAll, setShowAll] = useState(false);
  const [viewedAchievements, setViewedAchievements] = useState(new Set());

  const achievements = [
    {
      id: 1,
      title: "Best Certificate",
      description: "Best Paper Certificate in the International Conference on RIDMSEF - 2025, NIT, Rourkela.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      link:"https://www.linkedin.com/posts/abdul-hameed-syed_ridmsef2025-nitrourkela-deeplearning-activity-7327729174301802496-6U2t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8A-vQBRSniL2_DNLvJWSXzd26TZb_CHZw"
    },
    {
      id: 2,
      title: "Secured Place In GDG Solution Challenge Finale",
      description: "Secured 2nd Place in Google Developers Group Solution Challenge Hackathon.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      link:"https://www.linkedin.com/posts/abdul-hameed-syed_gdgsolutionchallenge-hackathon-activity-7279148782728949760-uBbC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8A-vQBRSniL2_DNLvJWSXzd26TZb_CHZw"
    },
    {
      id: 3,
      title: "Finalist in International Hackathon",
      description: "Finalist in IEEE YESIST International Hackathon,2024 held in Tunisia,North Africa.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link:"https://www.linkedin.com/posts/abdul-hameed-syed_innovation-ieeeyesist12-finalist-activity-7267770487080927232-WIOC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8A-vQBRSniL2_DNLvJWSXzd26TZb_CHZw",
    },
    {
      id: 4,
      title: "Secured Place in Web Development Hackathon",
      description: "2nd spot in WebForge, a technical event held during Advitiya 2K25 by the Department of CSE (Data Science)!✌",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      link:"https://www.linkedin.com/posts/abdul-hameed-syed_webdevelopment-hackathon-webforge-activity-7328789104572162048-U-fy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8A-vQBRSniL2_DNLvJWSXzd26TZb_CHZw"
    },
    {
      id: 5,
      title: "Code Chef Global Rank 63",
      description: "Codechef Global Rank 63 Starters 134 Division 4.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      link:"https://www.codechef.com/START134D",
    },
  
  ];

  const visibleAchievements = showAll ? achievements : achievements.slice(0, 3);

  

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Achievements
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Highlights of my professional journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {achievement.description}
              </p>
              {!viewedAchievements.has(achievement.id) && (
                <button
                   onClick={() => window.open(achievement.link, '_blank')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                >
                  View Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              )}
              {viewedAchievements.has(achievement.id) && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Viewed
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {showAll ? (
              <>
                Show Less
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                Show More Achievements
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements; 