// Navbar - Navigation component

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout logic comes here
    navigate('/');
  };

  return (
    <div className='navbar-container'>
    <div className='navbar'>
       <div className="navbar-title">
        <h1>Cheron Sports Academy</h1>
      </div>
      <ul className='nav-list'>
        <li-nvs>
          <Link to="/">Home</Link>
        </li-nvs>
        <li-nvs>
          <Link to="/auctions">Current Students Form</Link>
        </li-nvs>
        <li-nvs>
          <Link to="/interested">Interested?</Link>
        </li-nvs>
        {isAuthenticated ? (
          <>
            {/* <li-nvs>
              <Link to="/my-biddings">My Biddings</Link>
            </li-nvs> */}
            <li-nvs>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </li-nvs>
          </>
        ) : (
          <>
            <li-nvs>
              <Link to="/signin">Coach Login</Link>
            </li-nvs>
          </>
        )}
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
