import React from 'react';
import './style/style.css';
const styles = {
  active: {
    backgroundColor: 'lightslategray'
  }
}
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs d-flex justify-content-end align-items-end">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('AboutMe')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className= {currentPage === 'AboutMe' ? 'nav-link active active1 noTextDec' : 'nav-link noTextDec'}
          id="noTextDec"
          style ={styles.active}
        >
          AboutMe
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active noTextDec' : 'nav-link noTextDec'}
          id="noTextDec"
          style ={styles.active}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Blog' ? 'nav-link active noTextDec' : 'nav-link noTextDec'}
          id="noTextDec"
          style ={styles.active}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active noTextDec' : 'nav-link noTextDec'}
          id="noTextDec"
          style ={styles.active}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
