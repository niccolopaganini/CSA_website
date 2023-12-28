// interested form
import React, { useState } from 'react';
import './interested.css';

const Interested = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    console.log({
      name,
      dob,
      email,
      phone,
    });
    // You can add logic here to handle form submission, e.g., send data to a server
  };

  return (
    <form onSubmit={submitForm} className="interested-form-container">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          maxLength="10"
        />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Interested;
