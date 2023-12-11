import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  const imageArr = [
    'https://ir.ebaystatic.com/cr/v/c1/NAO-45026-19392.jpeg',
    'https://ir.ebaystatic.com/cr/v/c1/NAO-45026-19393-v2.jpeg',
  ];

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setSlideshowIndex((prevIndex) => (prevIndex + 1) % imageArr.length);
    }, 3000);

    return () => clearInterval(slideshowInterval);
  }, []);

  const handleSearch = () => {
    localStorage.setItem('search_term', searchTerm);
  };

  const handleCategoryClick = (category) => {
    localStorage.setItem('search_term', category);
  };

  return (
    <div className="home-container">
      {/* Header */}
      <div id="sc2">
      <h1>Welcome to Scalable Auction System</h1>
        <div id="sc23">
          <i className="fa-solid fa-magnifying-glass" style={{ marginLeft: '5px' }}></i>
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* Slideshow */}
      <div id="sc6">
        <img src={imageArr[slideshowIndex]} alt="Slideshow" />
      </div>

    </div>
  );
};

export default Home;
