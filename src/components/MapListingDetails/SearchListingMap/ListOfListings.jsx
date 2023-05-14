import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const ListOfListings = ({ cards }) => {
  // console.log(cards)

  return (
    <>
      {cards
        ? cards.map((card) => (
            <div className="card-side-bar-map" key={card.id}>
              <div className="card-image-container-side-bar-map">
                <img src={card.picture_url} alt={card.name} />
              </div>
              <div className="card-text-container-side-bar-map">
                <h4 className="card-title-side-bar-map">{card.name}</h4>
                <p>
                  <span className="card-price-side-bar-map">
                    € {card.price_in_eur}
                  </span>{" "}
                  /daily
                </p>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default ListOfListings;
