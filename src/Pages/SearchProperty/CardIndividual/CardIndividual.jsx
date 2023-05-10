import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import cardI1 from "../../../assets/Popular property.jpg";
import "./CardIndividual.css";
import api from "../../../services/api";

const CardIndividual = () => {
  const [singleProperty, setSingleProperty] = useState();

  const { id } = useParams();

  const getSingleProperty = () => {
    api
      .get(`/listing/${id}`)
      .then((response) => {
        console.log(response.data[0])
        setSingleProperty(response.data[0])
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getSingleProperty();
  }, [id]);

  return (singleProperty?
    <>
      <div className="cardI-all">
        <div className="card-left">
          <h1 className="cardI-title">{singleProperty.name}</h1>
          <img className="cardI-image" src={singleProperty.picture_url} alt="CardI" />
        </div>
        <div className="card-right">
          <p className="cardI-price-text">
            From <span className="cardI-price">{singleProperty.price_in_eur}€</span> / Month
          </p>
          <div className="cardI-button">
            <button type="submit">Enquire</button>
          </div>
          <p className="cardI-text">
            Popular!<br></br>24 students saved this property to their wishlist
          </p>
        </div>
      </div>
      <Link className="cardI-back-button" to="/search-property">
        <button type="submit">Go Back</button>
      </Link>
    </>:null
  );
};

export default CardIndividual;
