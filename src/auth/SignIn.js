// Coach Login
import React, { useState } from 'react';
import '../components/FormComponent.css'; 

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();

    const predeterminedUsername = 'coach';
    const predeterminedPassword = 'password';

    if (username === predeterminedUsername && password === predeterminedPassword) {
      alert('Coach Login Successful');
    } else {
      alert('Incorrect Username or Password');
    }
  };

  return (
    <div className="form-container">
      <div onClick={() => (window.location.href = 'index.html')}>
        <h1>Coach Login</h1>
      </div>
      <form onSubmit={handleSignIn}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <br />
      <hr />
    </div>
  );
};

export default SignIn;
