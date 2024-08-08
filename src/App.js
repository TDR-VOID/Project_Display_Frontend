import React, { useState } from 'react';
import './App.css';

const projects = [
  {
    title: 'Smart Light Bulb',
    description: 'Light bulb that can be switched on and off and change the color using the local area network. User can control all the light bulbs that are in anywhere of their house.',
    image: 'src/Smart_Light_Bulb.jpg', // Place in the public folder
  },
  {
    title: 'Smart Aquarium Care System',
    description: 'This innovative device is designed to autonomously manage aquarium upkeep, eliminating the need for constant human intervention.',
    image: 'src/Smart_Aquarium_Care_System.jpg', // Place in the public folder
  },
  {
    title: 'Project 3',
    description: 'Details about Project 3.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 4',
    description: 'Details about Project 4.',
    image: 'https://via.placeholder.com/150',
  },
];

function App() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>InnoRealm</h1>
        <p>Are you an innovative undergraduate with a project you’re proud of? </p>
        <p> Share your work here!</p>
        <button className="add-project-button" onClick={() => window.open('https://forms.gle/E4uwnX2yiVPdPKM76', '_blank')}>
          Add Project
        </button>
      </header>
      <div className="project-navigation-left" onClick={handlePrevProjects}>
        &lt;
      </div>
      <div className={`projects-container ${isAnimating ? 'animating' : ''}`}>
        <div className="project-box">
          <img
            src={projects[currentProjectIndex].image}
            alt={projects[currentProjectIndex].title}
            className="project-image"
          />
          <div className="project-details">
            <h2>{projects[currentProjectIndex].title}</h2>
            <p>{projects[currentProjectIndex].description}</p>
            <button className="read-more-button">Read More</button>
            <div className="project-icons">
              <span className="heart-icon" role="img" aria-label="like">&#10084;</span>
              <span className="comment-icon" role="img" aria-label="comment">&#128172;</span>
            </div>
          </div>
        </div>
        {projects[currentProjectIndex + 1] && (
          <div className="project-box">
            <img
              src={projects[currentProjectIndex + 1].image}
              alt={projects[currentProjectIndex + 1].title}
              className="project-image"
            />
            <div className="project-details">
              <h2>{projects[currentProjectIndex + 1].title}</h2>
              <p>{projects[currentProjectIndex + 1].description}</p>
              <button className="read-more-button">Read More</button>
              <div className="project-icons">
                <span className="heart-icon" role="img" aria-label="like">&#10084;</span>
                <span className="comment-icon" role="img" aria-label="comment">&#128172;</span>
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
    </div>
  );
}

export default App;
