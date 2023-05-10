import React from "react";
import { Link } from "react-router-dom";
import popularImg1 from "../../assets/Popular property.jpg"
import popularImg2 from "../../assets/Popular property 1.jpg"
import popularImg3 from "../../assets/Popular property 2.jpg"

const Popular = () => {
  return (
    <div>
      <div className="popular-container">
        <h1 className="popular-text">POPULAR PROPERTIES</h1>
      </div>
      <div className="popular-all-cards">
        <Link className="popular-card" to="/card-individual">
          <img className="popular-card-image" src={popularImg1} alt="Pop1" />
          <h2 className="card-title">Nido Living - Campo Pequeno</h2>
          <p className="card-text">
            From <span className="card-price">550€</span> / Month
          </p>
        </Link>

        <div className="popular-card">
          <img className="popular-card-image" src={popularImg2} alt="Pop1" />
          <h2 className="card-title">Livensa Living - Campo Grande</h2>
          <p className="card-text">
            From <span className="card-price">650€</span> / Month
          </p>
        </div>

        <div className="popular-card">
          <img className="popular-card-image" src={popularImg3} alt="Pop1" />
          <h2 className="card-title">Home2Students - Entrecampos</h2>
          <p className="card-text">
            From <span className="card-price">500€</span> / Month
          </p>
        </div>
      </div>
      <div className="popular-button">
      <Link to="/properties/list">
        <button type="submit">View all properties</button>
      </Link>
      </div>
    </div>
  );
};

export default Popular;
