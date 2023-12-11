// MyBiddings.js
import React, { useState, useEffect } from 'react';

const MyBiddings = () => {
  const [biddings, setBiddings] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to fetch user biddings
    const apiUrl = 'YOUR_API_ENDPOINT';

    const fetchBiddings = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Include any authentication headers (e.g., token) here
          },
          // Add additional options like credentials if needed
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBiddings(data);
      } catch (error) {
        console.error('Error fetching biddings:', error.message);
      }
    };

    fetchBiddings();
  }, []);

  return (
    <div>
      <h1>My Biddings</h1>
      <ul>
        {biddings.map((bid) => (
          <li key={bid.id}>
            <h2>{bid.itemName}</h2>
            <p>Current Bid: ${bid.currentBid}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBiddings;
