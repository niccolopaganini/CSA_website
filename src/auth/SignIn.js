// SignIn.js - Sign in or login for existing users
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles.css'; 

// Define the functional component
function SignIn() {
  // State to store the input value
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSignIn = (event) => {
    event.preventDefault();

    // Retrieve login data from local storage
    const loginData = JSON.parse(localStorage.getItem('loginData'));

    // Check if login data is available
    if (!loginData) {
      alert('Invalid Email ID');
    } else if (loginData[0].email === email) {
      localStorage.removeItem('flagforindex');
      localStorage.setItem('flagforindex', true);
      alert('Welcome to eBay');
      window.location.href = 'index.html';
    } else {
      localStorage.removeItem('flagforindex');
      localStorage.setItem('flagforindex', false);
      alert('Incorrect Email ID');
    }
  };

  // JSX structure
  return (
    <div id="shcontainer">
      <div id="shc1">
        <p>
          <a href="" style={{ textDecoration: 'none', color: '#3665f3' }}>
            Tell us what you think
          </a>
        </p>
      </div>
      <div id="shc2">
        <div onClick={() => (window.location.href = 'index.html')}>
          <h3>Live Auction Website</h3>
        </div>
      </div>
      <div id="shc3">
        <div id="shc31">
          <div>
            <p>i</p>
          </div>
        </div>
        <div id="shc32">
          <p>
            To buy and sell on{' '}
            <a href="index.html">
              <b>www.ebay.com</b>
            </a>{' '}
            or other eBay sites internationally, existing users can login using their credentials or new users can
            register an eBay account on ebay.in. Kindly note you can no longer buy or sell on eBay.in.
          </p>
        </div>
      </div>
      <div id="shc4">
        <h2>Hello</h2>
      </div>
      <div id="shc5">
        <h4>
          Sign in to eBay or <a href="register.html">create an account</a>
        </h4>
      </div>
      <div id="shc6">
        <div id="shc61">
          <input
            type="text"
            placeholder="Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            style={{ backgroundColor: '#3665f3', color: 'white', border: '1px solid #3665f3' }}
            onClick={handleSignIn}
          >
            <h2>
              <b>Continue</b>
            </h2>
          </button>
          <hr />
          <button style={{ backgroundColor: '#4267b2', color: 'white', border: '1px solid #3665f3', display: 'flex' }}>
            <FontAwesomeIcon icon={['fab', 'facebook-square']} style={{ fontSize: '35px', marginLeft: '5px', marginTop: '2px' }} />
            <h2 style={{ marginLeft: '30px', marginTop: '10px' }}>
              <b>Continue with Facebook</b>
            </h2>
          </button>
          {/* Continue with Google button */}
          {/* Continue with Apple button */}
        </div>
      </div>
      <div id="shc7">
        <input type="checkbox" name="" id="" />
        <p>Stay signed in</p>
      </div>
      <div id="shc8">
        <p>
          Using a public or shared device? Uncheck to protect your account.
        </p>
        <br />
      </div>
      <div id="shc9">
        <a href="">Learn more</a>
      </div>
      <hr />
      <div id="shc10">
        <p>
          Copyright © 1995-2022 eBay Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Cookies, Do not
          sell my personal information and AdChoice
        </p>
      </div>
    </div>
  );
}

// Export the component
export default SignIn;
