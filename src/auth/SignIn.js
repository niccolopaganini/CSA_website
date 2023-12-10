import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles.css'; // Make sure to import your CSS file

const SignIn = () => {
  const [email, setEmail] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();

    const loginData = JSON.parse(localStorage.getItem('loginData'));
    let flag = false;

    if (!loginData) {
      alert('Invalid Email ID');
    } else if (loginData[0].email === email) {
      flag = true;
      localStorage.removeItem('flagforindex');
      localStorage.setItem('flagforindex', flag);
      alert('Welcome to Scalable Auction System');
      window.location.href = 'index.html';
    } else {
      localStorage.removeItem('flagforindex');
      localStorage.setItem('flagforindex', flag);
      alert('Incorrect Email ID');
    }
  };

  return (
    <div id="shcontainer">
      <div onClick={() => (window.location.href = 'index.html')}>
        <h1>Scalable Auction System</h1>
      </div>
      <h2>Hello,</h2>
      <h3>
        Sign in to Scalable Auction System or <a href="./Register">create an account</a>
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="   Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '12px', fontSize: '18px', boxSizing: 'border-box' }}
          />
          <button onClick={handleSignIn}
>
            <b>Continue</b>
          </button>
        </div>
        <hr />
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <input type="checkbox" name="" id="" />
          <p style={{ marginLeft: '8px' }}>Stay signed in</p>
        </div>
      </div>
      <br />
      <hr />
      <p>
        Copyright © 2023 Scalable Auction System Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Cookies, Do not
        sell my personal information and AdChoice
      </p>
    </div>
  );
};

export default SignIn;
