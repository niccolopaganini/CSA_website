// Login.js - Logging in or account login
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Your login logic here
  };

  return (
    <div id="shcontainer">
      {/* Similar structure to SignIn, you can customize as needed */}
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
            Your login message or information here.
          </p>
        </div>
      </div>
      <div id="shc4">
        <h2>Hello</h2>
      </div>
      <div id="nvs5">
        <h4>
          Login to Scalable-Auction-System or <a href="register.html">create an account</a>
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
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            style={{ backgroundColor: '#3665f3', color: 'white', border: '1px solid #3665f3' }}
            onClick={handleLogin}
          >
            <h2>
              <b>Login</b>
            </h2>
          </button>
          <hr />
        </div>
      </div>
      {/* Additional sections similar to SignIn */}
    </div>
  );
}

export default Login;

