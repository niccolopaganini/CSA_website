// Main homepage
import React, { useState, useEffect } from 'react';
import './Home.css';
import './main.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [slideshowIndex1, setSlideshowIndex1] = useState(0);
  const [slideshowIndex2, setSlideshowIndex2] = useState(0);

  const imageArr1 = [
    'image1.jpeg',
    'imag2.jpeg',
  ];

  const imageArr2 = [
    'image1.jpg',
    'img2.jpg',
  ];

  useEffect(() => {
    const slideshowInterval1 = setInterval(() => {
      setSlideshowIndex1((prevIndex) => (prevIndex + 1) % imageArr1.length);
    }, 3000);

    const slideshowInterval2 = setInterval(() => {
      setSlideshowIndex2((prevIndex) => (prevIndex + 1) % imageArr2.length);
    }, 3000);

    return () => {
      clearInterval(slideshowInterval1);
      clearInterval(slideshowInterval2);
    };
  }, []);

  const handleSearch = () => {
    localStorage.setItem('search_term', searchTerm);
  };

  const handleCategoryClick = (category) => {
    localStorage.setItem('search_term', category);
  };

  return (
    <div className="home-container">
      {/* Left Column */}
      <div className="left-column">
        {/* About Section */}
        <div className="about-section">
          <h2>About Us</h2>
          <p>
            Cheron Sports is a team of dedicated and professional coaches with expertise in below-mentioned sports. We are a team of 10 coaches with 20+ years of experience in coaching and training students for various state and national level competitions. 
            Our team of professional coaches are dedicated to providing the best training to students and help them achieve their goals. Our team of coaches are trained to handle students of all age groups and genders. We offer interested children a curriculum-based training program with the help of modern training methods. 
            Our team is equipped to handle the following sports:
          </p>
          <ul>
            <li>Archery</li>
            <li>Gun Shooting</li>
            <li>Martial Arts</li>
          </ul>
        </div>

        {/* Head Coach - Katchiyyappan Section */}
        <div className="Experience-section">
          <h2>Head Coach - Katchiyyappan</h2>
          <h3>Experience</h3>
          <p>
            Working as Rifle Shooting Coach in Y.M.C.A College of Physical Education, Nandanam, Chennai, Tamil Nadu.
            Travelled with Shooters for state and national championship as Team Coach, Manager, and Official for Tamil Nadu Shooting Association, KV, CBSE, and SGFI.

            Sports Partner with Decathlon Sports India Pvt Ltd, Padur branch.
            Worked with Tamil Nadu Wushu Association as Team Coach, Manager, and Official Executive Member, Tamil Nadu Wushu Association from 2000 Secretary, Kanchipuram District Wushu Association 2006 – 2015 Join Secretary, Tamil Nadu Wushu Association 2013 – 2016
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        {/* Slideshow 1 */}
        <div className="slideshow-section">
          <img src={imageArr1[slideshowIndex1]} alt="Slideshow 1" />
        </div>

        {/* Slideshow 2 */}
        <div className="slideshow-section">
          <img src={imageArr2[slideshowIndex2]} alt="Slideshow 2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
