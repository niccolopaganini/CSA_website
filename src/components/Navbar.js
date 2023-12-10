// Navbar - Navigation component
import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li style={{ marginRight: '20px'}}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ marginRight: '1230px' }}>
          <Link to="/auctions">Auctions</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/signin">Sign In</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/register">Register</Link>
        </li>
        {/* <li style={{ marginRight: '20px' }}>
          <Link to="/login">Login</Link>
        </li> */}
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
