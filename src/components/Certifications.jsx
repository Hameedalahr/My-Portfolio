import React, { useState, useEffect } from 'react';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    {
      id: 1,
      title: "ASSOCIATE DATA ANALYST",
      issuer: "Data Camp",
      date: "February 2025",
      image: "https://github.com/Hameedalahr/Hameedalahr/blob/main/Data%20Camp%20Certificate.png?raw=true",
      link: "https://www.datacamp.com/certificate/DAA0011177087698"
    },
    {
      id: 2,
      title: "UI/UX Design",
      issuer: "Le Wagon",
      date: "December 2024",
      image: "https://github.com/Hameedalahr/Hameedalahr/blob/main/UI%20UIX.png?raw=true",
      link: "https://app.lewagon.school/certificates/1pgvt8zkmz"
    },
    {
      id: 3,
      title: "Data Visualization",
      issuer: "Tata Forage",
      date: "November 2024",
      image: "https://github.com/Hameedalahr/Hameedalahr/blob/main/Data%20Visualization.png?raw=true",
      link: "https://www.linkedin.com/posts/abdul-hameed-syed_im-happy-to-share-that-ive-obtained-a-new-activity-7266325351155326978-gSee?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8A-vQBRSniL2_DNLvJWSXzd26TZb_CHZw"
    },
  
  ];

  const visibleCertifications = showAll ? certifications : certifications.slice(0, 3);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => 
  //     prevIndex === visibleCertifications.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => 
  //     prevIndex === 0 ? visibleCertifications.length - 1 : prevIndex - 1
  //   );
  // };

  // // Auto-slide every 5 seconds
  // useEffect(() => {
  //   const timer = setInterval(nextSlide, 5000);
  //   return () => clearInterval(timer);
  // }, [currentIndex]);

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Certifications
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Professional certifications and achievements
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg hover:bg-indigo-50 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg hover:bg-indigo-50 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button> */}

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleCertifications.map((cert, index) => (
              <div
                key={cert.id}
                className={"bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg transform transition-all duration-500" }
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-32 h-32 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {cert.date}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                  >
                    View Certificate
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
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
                Show More Certifications
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

export default Certifications; 