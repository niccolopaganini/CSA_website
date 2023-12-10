// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Auctions from './components/Auctions';
import SignIn from './auth/SignIn'; 
import Register from './auth/Register'; 
import Login from './auth/Login';
import CreateAuction from './components/CreateAuction';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CreateAuction" element={<CreateAuction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
