// Register.js - account registration or creation
import React, { useState } from 'react';
// import './src/Styles.css';
const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic for form submission or API call here
    console.log(formData);
    alert('Registration Successful');
    // Redirect or handle success as needed
  };

  return (
    <div id="shuconatainer">
      <div id="shuc1">
        <div onClick={() => (window.location.href = 'index.html')}>
          <h3>Live Auction Website</h3>
          <h3>
            Already a member? <a href="signin.html">Sign in</a>
          </h3>
        </div>

        <div id="shuc2">
          <div id="shuc21">
            <div>
              <p>i</p>
            </div>
          </div>
          <div id="shuc22">
            <p>
              To buy and sell on{' '}
              <a href="index.html" style={{ textDecoration: 'none' }}>
                <b>www.Scalable-Auction-System.com</b>
              </a>{' '}
              or other Scalable-Auction-System sites internationally, existing users can login
              using their credentials or new users can register an Scalable-Auction-System account
              on Scalable-Auction-System.in. Kindly note you can no longer buy or sell on Scalable-Auction-System.in.
            </p>
          </div>
        </div>

        <div id="shuc3">
          <h1>Create an account</h1>
        </div>
        <div id="shuc4">
          <input type="radio" />
          <span>
            <p>Personal account</p>
          </span>
          <input type="radio" />
          <p>Business account</p>
          <i className="fa-solid fa-circle-info"></i>
        </div>

        <form id="shuc5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <p>
            By clicking Register, you agree that you have read and accepted our{' '}
            <a href="">User Agreement</a>, <a href="">User Privacy Notice</a>,{' '}
            <a href="">Rules and Policies</a>.
          </p>
          <button type="submit">
            <h2>
              <b>Register</b>
            </h2>
          </button>
        </form>
        <hr />
        <div id="shuc6">
          <p>
            Copyright © 1995-2022 Scalable-Auction-System Inc. All Rights Reserved.
            Accessibility, User Agreement, Privacy, Cookies, Do not sell my
            personal information and AdChoice
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
