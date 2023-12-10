// CreateAuction.js

import React, { useState } from 'react';
import './CreateAuction.css';

const CreateAuction = () => {
  const [auctionData, setAuctionData] = useState({
    title: '',
    description: '',
    startingBid: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuctionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you might want to dispatch an action to handle form submission
    // For simplicity, let's just log the data to the console here
    console.log('Auction data submitted:', auctionData);

    // Clear the form after submission
    setAuctionData({
      title: '',
      description: '',
      startingBid: '',
      // Reset other fields as needed
    });
  };

  return (
    <div>
      <h1>Create a New Auction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={auctionData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={auctionData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="startingBid">Starting Bid:</label>
          <input
            type="number"
            id="startingBid"
            name="startingBid"
            value={auctionData.startingBid}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more input fields for additional auction information */}
        <button type="submit">Create Auction</button>
      </form>
    </div>
  );
};

export default CreateAuction;
