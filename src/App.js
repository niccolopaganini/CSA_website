// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Auctions from './components/Auctions';
import SignIn from './auth/SignIn'; 
import MyBiddings from './components/MyBiddings';
import Interested from './components/interested';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/my-biddings" element={<MyBiddings />} /> 
          <Route path="/interested" element={<Interested />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
