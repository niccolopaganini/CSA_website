// Auction.js

import React from 'react';
import FormComponent from './FormComponentCurrent'; 
import './Auction.css';

const Auction = () => {
  return (
    <div className="auction-container">
      <div className="form-wrapper">
        <h2>Auction Form</h2>
        <div className="form-container">
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default Auction;
