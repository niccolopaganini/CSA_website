// SignIn Page for users to login to the website
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles.css';

function SignIn() {
  const [email, setEmail] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();

    const loginData = JSON.parse(localStorage.getItem('loginData'));

    if (!loginData) {
      alert('Invalid Email ID');
    } else if (loginData[0].email === email) {
      localStorage.removeItem('flagforindex');
      localStorage.setItem('flagforindex', true);
      alert('Welcome to Scalable-Auction-System');
      window.location.href = 'index.html';
    } else {
      localStorage.removeItem('flagforindex');
      localStorage.setItem('flagforindex', false);
      alert('Incorrect Email ID');
    }
  };

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
              <b>www.Scalable-Auction-System.com</b>
            </a>{' '}
            or other Scalable-Auction-System sites internationally, existing users can login using their credentials or new users can
            register an Scalable-Auction-System account on Scalable-Auction-System.in. Kindly note you can no longer buy or sell on Scalable-Auction-System.in.
          </p>
        </div>
      </div>
      <div id="shc4">
        <h2>Hello</h2>
      </div>
      <div id="shc5">
        <h4>
          Sign in to Scalable-Auction-System or <a href="register.html">create an account</a>
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
          Copyright © 1995-2022 Scalable-Auction-System Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Cookies, Do not
          sell my personal information and AdChoice
        </p>
      </div>
    </div>
  );
}

export default SignIn;
