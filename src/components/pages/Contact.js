import React, { useState } from 'react';
import '../style/formStyle.css'
// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div class="container d-flex flex-column align-items-center">
      <p>Contact Me!</p>
      <form className="form form-group row d-flex flex-column justify-content-center col-lg-8">
        <div class="col-sm-12">  
            <input
              id="staticEmail"
              className = "form-control-plaintext"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
        </div>
        <div class="col-sm-12"> 
            <input
              id="inputUsername"
              className = "form-control-plaintext"
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
            />
        </div>
        <div class="col-sm-12"> 
            <input
              id="message"
              className = "form-control-plaintext"
              value={message}
              name="Message"
              onChange={handleInputChange}
              placeholder="Message"
            />
        </div>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
