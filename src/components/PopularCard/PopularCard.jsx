import React from "react";

const PopularCard = ({ popular }) => {
  return (
    <>
      <img className="popcardimage" src={popular.picture_url} alt="Pop1" />
      <h2 className="popcardtitle">{popular.name}</h2>
      <p className="cardtext">
        From <span className="cardprice">{popular.price_in_eur}€</span> / Month
      </p>
    </>
  );
};

export default PopularCard;
