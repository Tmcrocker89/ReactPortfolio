import React from 'react';
const github = require("../../assets/images/social-icons/github_icon.png");
const githubHover = require("../../assets/images/social-icons/github_hover.png");
const proj1Img = require('../../assets/images/work-thumbs/justFurPets.png')
const proj2Img = require('../../assets/images/work-thumbs/calendar.png')
const proj3Img = require('../../assets/images/work-thumbs/codeQuiz.png')
const proj4Img = require('../../assets/images/work-thumbs/passwordGen.png')
const proj5Img = require('../../assets/images/work-thumbs/workdayScheduler.png')
const styles = {
  width: {
    minWidth: '5rem',
    maxWidth: '30rem'
  },
  background: {
    backgroundColor: 'darkBlue'
  },
}
export default function About() {
  return (
    <div id="projContainer" class="containter d-flex align-items-stretch flex-lg-wrap justify-content-center m-5 p-5">
      <div class="card img-fluid" style={styles.width}>
          <img class="card-img-top" src={proj1Img} alt="Card image" style={styles.width}/>
          <div class="card-img-overlay">
            <h4 class="card-title label" style={styles.background}>
              <a
                  href="https://github.com/Tmcrocker89/justFurPets"
                    target="_blank"
                    rel="noreferrer"
              >
                <img alt="Git Hub Icon" className="git_link default" src={github} />
                <img
                      alt="Git Hub Icon Hover"
                      className="git_link hover"
                      src={githubHover}
                />
              </a>
              <a
                  class='hoverLink'
                  style={{textDecoration: 'none'}}
                  href="https://just-fur-pets.herokuapp.com/api/pet"
                  target="_blank"
                  rel="noreferrer"
                  alt="Progress Edit"
                >
                  <h3>JustFurPets</h3>
              </a>
            </h4>

          </div>
      </div>
      <div class="card img-fluid" style={styles.width}>
          <img class="card-img-top" src={proj2Img} alt="Card image" style={styles.width}/>
          <div class="card-img-overlay">
            <h4 class="card-title label" style={styles.background}>
              <a
                  href="https://github.com/Tmcrocker89/LifePlanner"
                    target="_blank"
                    rel="noreferrer"
              >
                <img alt="Git Hub Icon" className="git_link default" src={github} />
                <img
                      alt="Git Hub Icon Hover"
                      className="git_link hover"
                      src={githubHover}
                />
              </a>
              <a
                  class='hoverLink'
                  style={{textDecoration: 'none'}}
                  href="https://tmcrocker89.github.io/LifePlanner/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Progress Edit"
                >
                  <h3>Life Planner</h3>
              </a>
            </h4>

          </div>
      </div>
      <div class="card img-fluid" style={styles.width}>
          <img class="card-img-top" src={proj3Img} alt="Card image" style={styles.width}/>
          <div class="card-img-overlay">
            <h4 class="card-title label" style={styles.background}>
              <a
                  href="https://tmcrocker89.github.io/WeatherDashboard/"
                    target="_blank"
                    rel="noreferrer"
              >
                <img alt="Git Hub Icon" className="git_link default" src={github} />
                <img
                      alt="Git Hub Icon Hover"
                      className="git_link hover"
                      src={githubHover}
                />
              </a>
              <a
                  class='hoverLink'
                  style={{textDecoration: 'none'}}
                  href="https://github.com/Tmcrocker89/WeatherDashboard"
                  target="_blank"
                  rel="noreferrer"
                  alt="Progress Edit"
                >
                  <h3>Weather Dashboard</h3>
              </a>
            </h4>

          </div>
      </div>
      <div class="card img-fluid" style={styles.width}>
          <img class="card-img-top" src={proj4Img} alt="Card image" style={styles.width}/>
          <div class="card-img-overlay">
            <h4 class="card-title label" style={styles.background}>
              <a
                  href="https://tmcrocker89.github.io/PasswordGenerator/"
                    target="_blank"
                    rel="noreferrer"
              >
                <img alt="Git Hub Icon" className="git_link default" src={github} />
                <img
                      alt="Git Hub Icon Hover"
                      className="git_link hover"
                      src={githubHover}
                />
              </a>
              <a
                  class='hoverLink'
                  style={{textDecoration: 'none'}}
                  href="https://github.com/Tmcrocker89/PasswordGenerator"
                  target="_blank"
                  rel="noreferrer"
                  alt="Progress Edit"
                >
                  <h3>Password Generator</h3>
              </a>
            </h4>

          </div>
      </div>
      <div class="card img-fluid" style={styles.width}>
          <img class="card-img-top" src={proj5Img} alt="Card image" style={styles.width}/>
          <div class="card-img-overlay">
            <h4 class="card-title label" style={styles.background}>
              <a
                  href="https://tmcrocker89.github.io/WorkdayScheduler/"
                    target="_blank"
                    rel="noreferrer"
              >
                <img alt="Git Hub Icon" className="git_link default" src={github} />
                <img
                      alt="Git Hub Icon Hover"
                      className="git_link hover"
                      src={githubHover}
                />
              </a>
              <a
                  class='hoverLink'
                  style={{textDecoration: 'none'}}
                  href="https://github.com/Tmcrocker89/WorkdayScheduler"
                  target="_blank"
                  rel="noreferrer"
                  alt="Progress Edit"
                >
                  <h3>Workday Scheduler</h3>
              </a>
            </h4>

          </div>
      </div>
  
    </div>

    
  );
}
