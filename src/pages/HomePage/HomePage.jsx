import React from 'react';
import './HomePage.css';
import homeBackground from "../../assets/homeBackgroung.png"

function HomePage() {
  return (
    <div className="page">
      <div className="home-content" style={{ backgroundImage: `url(${homeBackground})`, backgroundSize: "cover" }}></div>
    </div>
  );
}

export default HomePage;
