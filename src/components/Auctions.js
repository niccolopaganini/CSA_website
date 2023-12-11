// Auctions.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    // Sample auction data
    const sampleAuctions = [
      {
        id: 1,
        title: '2020 BMW M5',
        description: 'Powerful and stylish sedan.',
        currentBid: 50000,
      },
      {
        id: 2,
        title: '2019 Tesla Model S',
        description: 'Electric luxury car with autopilot.',
        currentBid: 60000,
      },
      {
        id: 3,
        title: '2021 Porsche 911 Turbo',
        description: 'Iconic sports car with cutting-edge technology.',
        currentBid: 75000,
      },
    ];

    // Simulating API call by setting state after a short delay
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAuctions(sampleAuctions);
    };

    fetchData();
  }, []);

  const [userBid, setUserBid] = useState(0);

  const handleBid = (auctionId) => {
    // Placeholder logic for placing a bid
    console.log(`Placed bid ${userBid} on auction ${auctionId}`);
  };

  return (
    <div>
      <h1>Auctions</h1>
      <ul>
        {auctions.map(auction => (
          <li key={auction.id}>
            <h2>{auction.title}</h2>
            <p>{auction.description}</p>
            <p>Current Bid: ${auction.currentBid}</p>
            <div>
              <label htmlFor={`bidInput${auction.id}`}>Your Bid:</label>
              <input
                type="number"
                id={`bidInput${auction.id}`}
                value={userBid}
                onChange={(e) => setUserBid(e.target.value)}
              />
              <button onClick={() => handleBid(auction.id)}>Place Bid</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Display the CreateAuction component when on the /create-auction route */}
      <p>
        <Link to="/CreateAuction">Want to create a New Auction?</Link>
      </p>
    </div>
  );
};

export default Auctions;
