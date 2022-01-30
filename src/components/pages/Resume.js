import React from 'react';
const resumeBtn = require("../../assets/resume/resume_button3.png");

export default function Blog() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <p className="d-flex flex-column justify-content-center align-items-center">
      <a
        href="https://docs.google.com/document/d/1F3Mq59-HYpsf2VeOWNIzXYrO_2805lN-QGfh9nDVr4E"
        target="_blank"
        rel="noreferrer"
      >
        <img className="resumeBtn container d-flex flex-column justify-content-center align-text-center" src={resumeBtn} alt="Download Resume" />
      </a>
      <iframe className="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center" src="https://docs.google.com/document/d/e/2PACX-1vQ4TXKzvU-m31Ej4Ig0kDnCUWatfB0GtZ0oMIVYMcqL1Pjo17Z6J2f0lrF_wbqhT5acw7o5rjaeuD5k/pub?embedded=true"></iframe>
      </p>
    </div>
  );
}
