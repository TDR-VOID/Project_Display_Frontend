import React, { useState } from 'react';
import './App.css';

const projects = [
  {
    title: 'Smart Light Bulb',
    description: 'A light bulb that can be switched on and off and change the color using the local area network. Users can control all the light bulbs in their house.',
    projectType: 'Individual',
    motivation: 'Light bulb that can be switch on and off and change the color of it using local area network .',
    owner: {
      name: 'S.T.H.Liyanage',
      degree: 'BSc (Hons) in Electronic and IT',
      year: 'Third Year',
      linkedin: 'https://www.linkedin.com/in/sanuda_tharin',
    },
    image: 'src/Smart_Light_Bulb.jpg',
  },
  {
    title: 'Smart Aquarium Care System',
    description: 'This innovative device is designed to autonomously manage aquarium upkeep, eliminating the need for constant human intervention.',
    projectType: 'Individual',
    motivation: 'It was hard to maintain even small aquariums for a few days without human involvement. This system will help the owner maintain the aquarium without any problems, without even having to go to the aquarium.',
    owner: {
      name: 'Tharaka Rupasinghe',
      degree: 'BSc (Hons) in Electronic and IT',
      year: 'Third Year',
      linkedin: 'https://www.linkedin.com/in/tharaka-rupasinghe',
    },
    image: 'src/Smart_Aquarium_Care_System.jpg',
  },

  {
    title: 'Medicine Dispenser',
    description: 'Interfacing with Atmega32 microcontroller. Automated medicine dispensing using a stepper motor. Alarm system for medication reminders.',
    projectType: 'Individual',
    motivation: 'This project is driven by the increasing challenges faced by older individuals in managing their medications effectively, particularly when faced with the complexities of multiple prescriptions and strict schedules.',
    owner: {
      name: 'P. V. Nipun Lakshitha',
      degree: 'BSc (Hons) in Electronic and IT',
      year: 'Third Year',
      linkedin: 'https://www.linkedin.com/in/nipun-lakshitha',
    },
    image: 'src/Medicine_Dispenser.jpg',
  },
  {
    title: 'Restaurant Price Prediction',
    description: 'Using a dataset in Kaggle, we used ML techniques to predict restaurant prices in Bangalore',
    projectType: 'Group',
    motivation: 'What is the price range suitable for new restaurant owners. moderate prices would elevate sales',
    owner: {
      name: 'S.R.Sooriarachchi',
      degree: 'Statistics special',
      year: 'Third Year',
      linkedin: 'https://www.linkedin.com/in/sehara-sooriarachchi',
    },
    image: 'src/Restaurant_Price_Prediction.jpg',
  },

  {
    title: 'Electronic Gaming Device',
    description: 'A gaming device consist of 8*16 led matrix display and push buttons as the inputs and outputs. The pong game can be played with two modes (single player and multiplayer) can be improved for other mini games like Tetris and snake. ',
    projectType: 'Individual',
    motivation: 'Nowadays all people are using smart devices and addicted. spent time with old classic mini games on a classic mini game device will not only evoke nostalgia but also provide a healthy break from modern digital addiction, potentially benefiting cognitive functions and mental well-being.',
    owner: {
      name: 'L.D.Madhusankha',
      degree: 'BSc (Hons) in Electronic and IT',
      year: 'Third Year',
      linkedin: 'https://www.linkedin.com/in/dilan-madhushanka',
    },
    image: 'src/Electronic_Gaming_Device.jpg',
  },
  {
    title: 'Power Consumption Measuring Device ',
    description: 'Measure the real time power by taking the measurements of corresponding voltage and current using voltage and current sensors.',
    projectType: 'Group',
    motivation: 'It is very important if we can measure the power consumption of a life when we are using an electrical device in day to day life. It help to find from where the most power consuming devices in our home or working place. So if we have a simple low cost device for that, it would be a great help',
    owner: {
      name: 'R.P. Upuli Indula ',
      degree: 'Engineering Physics ',
      year: 'Third Year',
      linkedin: 'https://www.linkedin.com/in/upuli-indunil',
    },
    image: 'src/Power_Consumption_Measuring_Device.jpg',
  },
  // Other projects...
];

function App() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleNextProjects = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 2) % projects.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevProjects = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 2 : prevIndex - 2
      );
      setIsAnimating(false);
    }, 300);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const currentProject = projects[currentProjectIndex];
  const nextProject = projects[currentProjectIndex + 1];

  return (
    <div className="App">
      <header className="App-header">
        <h1>InnoRealm</h1>
        <p>Are you an innovative undergraduate with a project you’re proud of? Share your work here!</p>
        <button
          className="add-project-button"
          onClick={() => window.open('https://forms.gle/E4uwnX2yiVPdPKM76', '_blank')}
        >
          Add Project
        </button>
      </header>
      <div className="project-navigation-left" onClick={handlePrevProjects}>
        &lt;
      </div>
      <div className={`projects-container ${isAnimating ? 'animating' : ''}`}>
        <div className="project-box">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="project-image"
          />
          <div className="project-details">
            <h2>{currentProject.title}</h2>
            <p>{currentProject.description}</p>
            <button className="read-more-button" onClick={togglePopup}>
              Read More
            </button>
            <div className="project-icons">
              <span className="heart-icon" role="img" aria-label="like">
                &#10084;
              </span>
              <span className="comment-icon" role="img" aria-label="comment">
                &#128172;
              </span>
            </div>
          </div>
        </div>
        {nextProject && (
          <div className="project-box">
            <img
              src={nextProject.image}
              alt={nextProject.title}
              className="project-image"
            />
            <div className="project-details">
              <h2>{nextProject.title}</h2>
              <p>{nextProject.description}</p>
              <button className="read-more-button" onClick={togglePopup}>
                Read More
              </button>
              <div className="project-icons">
                <span className="heart-icon" role="img" aria-label="like">
                  &#10084;
                </span>
                <span className="comment-icon" role="img" aria-label="comment">
                  &#128172;
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="project-navigation-right" onClick={handleNextProjects}>
        &gt;
      </div>
      <footer className="App-footer">
        <h3>Entrepreneurship and Innovation Club UOC</h3>
      </footer>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Project Details</h2>
            <p><strong>Project Title:</strong> {currentProject.title}</p>
            <p><strong>Project Description:</strong> {currentProject.description}</p>
            <p><strong>Project Type:</strong> {currentProject.projectType}</p>
            <p><strong>Motivation:</strong> {currentProject.motivation}</p>
            <hr className="horizontal-line" />
            <h2>Owner Details</h2>
            <p><strong>Project Owner:</strong> {currentProject.owner.name}</p>
            <p><strong>Degree Program:</strong> {currentProject.owner.degree}</p>
            <p><strong>Academic Year:</strong> {currentProject.owner.year}</p>
            <p><strong>LinkedIn:</strong> <a href={currentProject.owner.linkedin} target="_blank" rel="noopener noreferrer">{currentProject.owner.linkedin}</a></p>
            <button className="close-popup-button" onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
