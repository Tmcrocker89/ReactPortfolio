import React from "react";

export default function Footer() {
  const email = require("../../src/assets/images/social-icons/email_icon.png");
  const linkedIn = require("../../src/assets/images/social-icons/linkedin_icon.png");
  const instagram = require("../../src/assets/images/social-icons/instagram_icon.png");
  const github = require("../../src/assets/images/social-icons/github_icon.png");
  const behance = require("../../src/assets/images/social-icons/behance_icon.png");
  const prestige = require("../../src/assets/images/social-icons/prestige_icon.png");

  return (
    <div>
      <footer className="d-flex justify-content-center">
        {/* <!-- Social Icons --> */}
        <div id="socials">
          <a href="mailto:travis.crocker.dev@gmail.com">
            <img
              className="icon"
              src={email}
              target="_blank"
              alt="Send Email"
            />
          </a>
          <a href="https://www.linkedin.com/in/travis-crocker-6759a120b/">
            <img
              className="icon"
              src={linkedIn}
              target="_blank"
              alt="Connect on LinkedIn"
            />
          </a>

          <a href="https://github.com/Tmcrocker89">
            <img
              className="icon"
              src={github}
              target="_blank"
              alt="Collaborate on GitHub"
            />
          </a>

        </div>

      </footer>
    </div>
  );
}