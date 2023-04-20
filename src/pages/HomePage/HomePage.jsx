import React from 'react';
import './HomePage.css';
import homeBackground from "../../assets/homeBackground.jpg";
import logo from "../../assets/logoHILX.png";

function HomePage() {
  return (
    <div className="page">
      <div className="home-content">
        <div className="image-container" style={{ backgroundImage: `url(${homeBackground})` }}>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </div>
      </div>
      <div className="button-container">
  <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
    List your property
  </a>
  <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
    Find more about Lisbon
  </a>
  <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
    Offers and promotions
  </a>
</div>
    </div>
  );
}

export default HomePage;
