import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import homeBackground from "../../Assets/homeBackground.png"
import logo from "../../Assets/logoHILX.png";

function HomePage() {
  return (
    <div className="page">
      <div className="home-content">
        <div className="image-container" style={{ backgroundImage: `url(${homeBackground})` }}>
          <div className="text">
            FIND YOUR HOME TO LIVE
          </div>
          <div className="text2">
            STUDENT
          </div>
          <div className="text3">
            NOMAD
          </div>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </div>
      </div>
      <div className="button-container">
        <div className="list-property-button">
        <Link to="/property-list">
            LIST YOUR PROPERTY
        </Link>
        </div>
        <div className="more-about-lisbon-button">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            FIND MORE ABOUT LISBON
          </a>
        </div>
        <div className="offers-promotions-button">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            Offers and promotions
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
