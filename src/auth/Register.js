// Register.js - account registration or creation
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles.css'; // Make sure to import your CSS file

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();

    // Perform account creation logic here, for example, storing user data in localStorage

    alert('Account created successfully!');
    // Optionally, you can redirect the user to the login page or any other page after account creation
    // window.location.href = '/login';
  };

  return (
    <div id="shcontainer">
      <div onClick={() => (window.location.href = 'index.html')}>
        <h1>Scalable Auction System</h1>
      </div>
      <h2>Hello,</h2>
      <h3>Create an account</h3>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="   Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '12px', fontSize: '18px', boxSizing: 'border-box' }}
        />
        <input
          type="text"
          placeholder="   Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '12px', fontSize: '18px', boxSizing: 'border-box' }}
        />
        <input
          type="password"
          placeholder="   Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '12px', fontSize: '18px', boxSizing: 'border-box' }}
        />
        <button
          onClick={handleRegister}
          style={{
            backgroundColor: '#3665f3',
            color: 'white',
            border: '1px solid #3665f3',
            padding: '12px',
            fontSize: '18px',
            marginTop: '10px',
          }}
        >
          <b>Create Account</b>
        </button>
      </form>
      <hr />
      <p>
        Already have an account? <a href="/SignIn">Sign In</a>
      </p>
      <hr />
      <p>
        Copyright © 2023 Scalable Auction System Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Cookies, Do not
        sell my personal information and AdChoice
      </p>
    </div>
  );
};

export default Register;
