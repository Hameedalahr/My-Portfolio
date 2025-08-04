import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('web');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'web', name: 'Web Development' },
    { id: 'ml', name: 'Machine Learning & NLP' },
    { id: 'ui', name: 'UI/UX Design' }
  ];

  const allProjects = {
    web: [
      {
        title: "MYFLIX-GPT",
        description: "Movies-GPT is a powerful, Netflix-inspired web application that lets users discover, watch, and get AI-powered recommendations for movies. Built using TMDB API, Firebase, and Gemini AI, it delivers an immersive streaming experience enhanced by intelligent suggestions and user authentication.",
        image: "https://github.com/Hameedalahr/Movies-GPT/blob/main/MYFLIX-GPT%20SEARCH.png?raw=true",
        technologies: ["React", "Firebase", "Gemini AI Integration","TMDB API","Tailwind CSS","Redux Store"],
        liveLink: "https://myflixx-moviesgpt.netlify.app/",
        githubLink: "https://github.com/Hameedalahr/Movies-GPT.git"
      },
      {
        title: "MY YOUTUBE",
        description: "Not your regular YouTube CSS clone! A fully functional YouTube clone built with React JS & Tailwind — features real-time search with debouncing, live chat using API polling, and nested comments. Powered by the YouTube Data API.",
        image: "https://github.com/Hameedalahr/My-Youtube/blob/main/Home.png?raw=true",
        technologies: ["React JS", "Tailwind CSS", "Youtube Data API","Live Chat"],
        liveLink: "https://my-youtube-eta-eight.vercel.app/",
        githubLink: "https://github.com/Hameedalahr/My-Youtube.git"
      },
      {
        title: "Food Delivery App",
        description: "A dynamic Food Delivery App built with React and Parcel, featuring real-time restaurant and menu data from Swiggy APIs. It offers a seamless user experience with live data, efficient routing, shopping cart functionality, and is fully tested using Jest and React Testing Library — all without relying on hardcoded or static content",
        image: "https://github.com/Hameedalahr/Food_ordering_app/blob/main/Restaurant%20Menu.png?raw=true",
        technologies: ["React", "Redux", "Swiggy API","JEST","React Testing Library"],
        liveLink: "https://foooddeliveryy.netlify.app/",
        githubLink: "https://github.com/Hameedalahr/Food_ordering_app.git"
      },
      {
        title: "Hospital Appointment Booking",
        description: "The Virtual Appointment Booking System for Santhiram Hospitals as part of Google dev hackathon allows patients to easily book appointments with doctors, view schedules, and receive confirmations. This system is designed to provide a seamless user experience, offering a simple and intuitive interface for patients to manage their appointments online.",
        image: "https://github.com/Hameedalahr/Hospital-Appointment-Booking/blob/main/chatbotpage.png?raw=true",
        technologies: ["HTML", " CSS", "JavaScript","Chatbase.io"],
        liveLink: "https://gdgsolutionchallenge.netlify.app/htmlfiles/home",
        githubLink: "https://github.com/Hameedalahr/Hospital-Appointment-Booking.git"
      },
      {
        title: "Dip & Sip Stall Menu",
        description: "To simplify and digitize the process of selling coupons during our college expo, I developed Dip & Sip, a user-friendly website where users could easily buy coupons online. I integrated Google Forms into the site to handle coupon bookings and order submissions efficiently. The goal was to reduce manual effort, avoid crowding, and streamline the purchase process",
        image: "https://github.com/Hameedalahr/DIP-SIP/blob/main/dip%20&%20Sip%20home%20page.png?raw=true",
        technologies: ["HTML", " CSS", "JavaScript","Google Forms"],
        liveLink: "https://dipandsip-rgmexpo.netlify.app/",
        githubLink: "https://github.com/Hameedalahr/DIP-SIP.git"
      }
    ],
    ml: [
      {
        title: "Diabetes Prediction",
        description: "This project is a part of my machine learning learning phase where I built a predictive model to classify whether a person is likely to have diabetes based on medical diagnostic data. The model is trained on the Pima Indians Diabetes Dataset using the Support Vector Machine (SVM) classifier.",
        image: "https://github.com/Hameedalahr/Diabetes-Prediction/blob/main/Screenshot%202025-08-04%20212412.png?raw=true",
        technologies: ["Streamlit", "Python", "Machine Learning", "SVM"],
        liveLink: "https://hameedalahr-loan-approval-predictio-loanpredictionwebapp-z1ypwl.streamlit.app/",
        githubLink: "https://github.com/Hameedalahr/Diabetes-Prediction"
      },
      {
        title: "California House Price Prediction",
        description: "This project predicts the median house prices in California using machine learning. It uses features like median income, house age, average rooms, and geographical data to estimate the house value. The model is trained using the California housing dataset and deployed as an interactive web app using Streamlit.",
        image: "https://github.com/Hameedalahr/California-House-Price-Prediction/blob/main/Screenshot%202025-08-04%20212330.png?raw=true",
        technologies: ["Streamlit", "Python", "Machine Learning", "XGBoost Regressor"],
        liveLink: "https://hameedalahr-loan-approval-predictio-loanpredictionwebapp-z1ypwl.streamlit.app/",
        githubLink: "https://github.com/Hameedalahr/California-House-Price-Prediction"
      },
      {
        title: "Loan Approval Prediction",
        description: "This project is a machine learning-based solution that predicts whether a loan application should be approved or not, based on applicant data. Built using Support Vector Machine (SVM) classification",
        image: "https://github.com/Hameedalahr/Loan-Approval-Prediction/blob/main/Screenshot%202025-08-04%20211712.png?raw=true",
        technologies: ["Streamlit", "Python", "Machine Learning", "SVM"],
        liveLink: "https://hameedalahr-loan-approval-predictio-loanpredictionwebapp-z1ypwl.streamlit.app/",
        githubLink: "https://github.com/Hameedalahr/Loan-Approval-Prediction"
      },
      {
        title: "Text AutoCorrect & AutoComplete",
        description: "This project is a text auto-correct and auto-complete system that uses GPT-2 and T5 Transformer to predict the correct spelling of a word. The project is built using Python and Flask.",
        image: "https://github.com/Hameedalahr/Text_AutoCorrect-Complete/blob/main/Text%20predictor.jpeg?raw=true",
        technologies: ["GPT-2", "T5 Transformer","Flask","Python"],
        liveLink: "#",
        githubLink: "https://github.com/Hameedalahr/Text_AutoCorrect-Complete.git"
      },
      {
        title: "Symptom Checker",
        description: "This project is a symptom checker that uses a machine learning model to diagnose a disease based on the symptoms provided by the user. The project is built using Python and Flask.",
        image: "https://github.com/Hameedalahr/Symptom-Checker/blob/main/Screenshot%202024-11-14%20122442.png?raw=true",
        technologies: ["Python", "Scikit Learn", "Pandas"],
        liveLink: "#",
        githubLink: "https://github.com/Hameedalahr/Symptom-Checker.git"
      },
      {
        title: "NLP Web APP",
        description: "This project is a web application that uses natural language processing to analyze & Process the text data. The project is built using Python and Flask.",
        image: "https://github.com/Hameedalahr/NLP-web-app/blob/main/nlp%20web%20app.png?raw=true",
        technologies: ["Python", "NLTK", "Flask","NLP"],
        liveLink: "#",
        githubLink: "#"
      },
      {
        title: "Restaurant Sentiment Analysis",
        description: "This project is a sentiment analysis of a restaurant. The project is built using Python and Flask.",
        image: "https://github.com/Hameedalahr/Restaurant-Sentiment-Analysis/blob/main/Screenshot%202025-01-29%20213259.png?raw=true",
        technologies: ["Python", "NLTK", "TextBlob"],
        liveLink: "#",
        githubLink: "https://github.com/Hameedalahr/Restaurant-Sentiment-Analysis.git"
      }
    ],
    ui: [
      {
        title: "HR Analytics Dashboard",
        description: "About The HR Analytics Dashboard is an interactive Power BI report that provides insights into employee attrition",
        image: "https://github.com/Hameedalahr/HR-Analytics-Dashboard/blob/main/Human%20Resources.png?raw=true",
        technologies: ["Power BI", "Data Visualization"],
        liveLink: "#",
        githubLink: "https://github.com/Hameedalahr/HR-Analytics-Dashboard.git"
      },
      {
        title: "RewarDo Mobile Application",
        description: "RewarDO is a productivity app designed to help users focus on one task at a time, leveraging AI for task prioritization",
        image: "https://github.com/Hameedalahr/rewarDO-Mobile-Application/blob/main/Rewardo%20UI.png?raw=true",
        technologies: ["Figma", "UI Design", "Mobile Prototype"],
        liveLink: "https://www.figma.com/design/qqq4W70hFvp2zYhMNDHWN3/LOGIN?node-id=0-1&p=f",
        githubLink: "https://github.com/Hameedalahr/rewarDO-Mobile-Application.git"
      },
    ]
  };

  const displayedProjects = showAll 
    ? allProjects[activeCategory]
    : allProjects[activeCategory].slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            My Projects
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Here are some of my recent works
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAll(false);
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {allProjects[activeCategory].length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors duration-300"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 