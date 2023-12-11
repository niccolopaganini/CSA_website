// Navbar - Navigation component

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import your Navbar CSS file

const Navbar = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic and redirect to the home page
    navigate('/');
  };

  return (
    <nav-nvs>
      <ul-nvs>
        <li-nvs>
          <Link to="/">Home</Link>
        </li-nvs>
        <li-nvs>
          <Link to="/auctions">Auctions</Link>
        </li-nvs>
        {isAuthenticated ? (
          <>
            <li-nvs>
              <Link to="/my-biddings">My Biddings</Link>
            </li-nvs>
            <li-nvs>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </li-nvs>
          </>
        ) : (
          <>
            <li-nvs>
              <Link to="/signin">Sign In</Link>
            </li-nvs>
            <li-nvs>
              <Link to="/register">Register</Link>
            </li-nvs>
          </>
        )}
      </ul-nvs>
    </nav-nvs>
  );
};

export default Navbar;
