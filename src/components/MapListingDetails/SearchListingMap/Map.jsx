/* global google */
import React from "react";
import { useEffect, useRef, useState, useContext } from "react";
import { createUseStyles } from "react-jss";
import MapPoint from "./MapPoint";
import OverlayContainer from "./OverlayContainer";
import SideCard from "./SideCard";
import ListingContext from "../../../context/listingContext";
import SideCardsList from "./SideCardsList";

// const markers = [
//   {
//     name: "Instituto Superior Técnico",
//     lat: 38.735,
//     lng: -9.137,
//   },
//   {
//     name: "Universidade de Lisboa",
//     lat: 38.752,
//     lng: -9.156,
//   },
//   {
//     name: "Universidade Lusófona",
//     lat: 38.758,
//     lng: -9.153,
//   },
//   {
//     name: "Universidade Católica",
//     lat: 38.754,
//     lng: -9.166,
//   },
//   {
//     name: "ISCTE - Instituto Universitário de Lisboa",
//     lat: 38.748,
//     lng: -9.153,
//   },
// ];

// const homes = [
//   {
//     id: 17492310,
//     picture_url:
//       "https://a0.muscache.com/pictures/c4a67499-55d3-45e0-846c-d59bf46fbfcd.jpg",
//     name: "Historic Design Apartment Castelo S. Jorge",
//     description:
//       "In order to address coronavirus concerns, this property receives a deep cleaning and disinfection after each stay<br /><br />O nosso Apartamento \u00e9 perto de Pante\u00e3o Nacional, Castelo de S. Jorge, Largo das Porta do Sol. Voc\u00ea vai amar o nosso charmoso refugio porque \u00e9 um s\u00edtio m\u00e1gico no meio do centro hist\u00f3rico. <br />A cama confort\u00e1vel, a cozinha, as vistas, o bairro t\u00edpico e a simpatia das pessoas. O apartamento \u00e9 limp\u00edssimo e renovado.  Ideal para um casal com um beb\u00e9 ou uma crian\u00e7a,<br />Portugu\u00eas<br />English<br />Deutsch<br /><br /><b>Other things to note</b><br />Minimum Stay 2 nights<br /><br /><b>License number</b><br />32901/AL",
//     lat: 38.71438,
//     lng: -9.12944,
//     price_in_eur: 42,
//     amenities:
//       '["Dishwasher", "Cooking basics", "Smoke alarm", "Refrigerator", "Air conditioning", "Iron", "First aid kit", "Kitchen", "Bed linens", "Hair dryer", "Lockbox", "Heating", "Dedicated workspace", "TV", "Coffee maker", "Carbon monoxide alarm", "Extra pillows and blankets", "Stove", "Wifi", "Essentials", "Shampoo", "Long term stays allowed", "Paid parking on premises", "Free street parking", "Dishes and silverware", "Fire extinguisher", "Microwave", "Hot water", "Hangers", "Oven"]',
//     room_type: "Entire home/apt",
//     host_id: 84627990,
//     bathrooms_text: "1",
//     cancellation_policy: "moderate",
//     review_scores_rating: 4.73,
//     for_students: true,
//     host_identity_verified: "t",
//     priority: false,
//     number_of_reviews: 255,
//     review_scores_value: 4.76,
//     distance_1: 2.4929363925,
//     distance_2: 4.8759284815,
//     distance_3: 5.2822675043,
//     distance_4: 5.5133990928,
//     distance_5: 4.2753670725,
//   },
//   {
//     id: 17524723,
//     picture_url:
//       "https://a0.muscache.com/pictures/miso/Hosting-17524723/original/bbe22007-3f37-4cd0-84e9-0652925572c3.jpeg",
//     name: "Bedroom with living room and private bathroom",
//     description:
//       "Dear guests, I have the pleaser to receive you at my home with one guest room (2 people) with a living home space with TV (Netflix and Mbo) W.C. private ,kitchen (shared). I\u2019m situated 10 minutes from metro Anjos, 10 min from Gra\u00e7a and 15 min walking to city centre. <br />My space is good for couples, solo adventures, and business travelers.<br /><br /><b>The space</b><br />It is a 1902 apartment with the typical characteristics of the houses of the time, wooden floors and shutters on the windows.<br /><br /><b>Guest access</b><br />The neighborhood is very quiet, you can walk without problem. It has bus and tram 28 to 2 minutes walk. Next to the apartment there is a garage where you can park for around 9 euros a day.<br /><br /><b>Other things to note</b><br />The apartment is situated in a quiet street in Lisbon but very close to the center (15 minutes walking) of Grace. Alfama, Castelo. It has the metro dos Anjos 10 minutes walking and electric 28-2 minutes. The street has a cafe wh",
//     lat: 38.72519,
//     lng: -9.13016,
//     price_in_eur: 27,
//     amenities:
//       '["Cooking basics", "Refrigerator", "Paid parking off premises", "Patio or balcony", "Iron", "Backyard", "First aid kit", "Kitchen", "Bed linens", "Hair dryer", "Lock on bedroom door", "Heating", "Dedicated workspace", "Washer", "Coffee maker", "Carbon monoxide alarm", "Stove", "Wifi", "Room-darkening shades", "Essentials", "Shampoo", "Long term stays allowed", "Paid parking on premises", "Luggage dropoff allowed", "Dishes and silverware", "Fire extinguisher", "Microwave", "Hot water", "Hangers", "Oven"]',
//     room_type: "Private room",
//     host_id: 33928344,
//     bathrooms_text: "1 private",
//     cancellation_policy: "flexible",
//     review_scores_rating: 4.88,
//     for_students: true,
//     host_identity_verified: "t",
//     priority: true,
//     number_of_reviews: 110,
//     review_scores_value: 4.86,
//     distance_1: 1.3573332831,
//     distance_2: 3.8259895695,
//     distance_3: 4.1727358493,
//     distance_4: 4.5476893558,
//     distance_5: 3.2405723858,
//   },
// ];

const useStyles = createUseStyles({
  root: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: "center",
  },
  map: {
    display: "flex",
    // justifyContent: "flex-start",
    height: "750px",
    width: "50%",
    paddingLeft: "20px"
  },
  sideBar:{
    display: "flex",
    width: "50%",
    justifyContent:"center",
    marginRight:"20px",
    overflow: "auto",
    height:"80vh"

  }
});

function Map({ center, zoom }) {
  const { listings } = useContext(ListingContext);

  const ref = useRef(null);
  const [map, setMap] = useState(null);
  const classes = useStyles();
  const [card, setCard] = useState();
  const [cardSelected, setCardSelected] = useState();
  const [cards, setCards] = useState();

  const getListingsCloser = () => {
    let results = [];
    // console.log(listings)
    if (card && listings && listings.length > 0) {
      console.log(card);
      // listings.
    } else {
      listings &&
        listings.length > 0 &&
        listings
          .filter((listing, index) => index < 100)
          .map((listing) => results.push(listing));
      setCards(results);
    }
  };

  useEffect(() => {
    getListingsCloser();
  }, [listings]);

  useEffect(() => {
    if (cards && cards.length > 0) {
      cards
        .filter((apartment) => apartment.id === cardSelected)
        .map((apartment) => setCard(apartment));
    }
  }, [cardSelected, cards]);

  useEffect(() => {
    if (ref.current) {
      let createdMap = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        disableDefaultUI: true,
        clickableIcons: false,
      });
      setMap(createdMap);
    }
  }, [center, zoom]);

  return (
    <div className={classes.root}>
      {/* <SideCard card={card} /> */}
      <div className={classes.sideBar}>
      <SideCardsList listings={listings} cards={cards} card={card} />
      </div>
      <div ref={ref} id="map" className={classes.map}>
        {/* {markers.map((marker, index) => (
        //   console.log(marker) &&
          <OverlayContainer
            map={map}
            position={{
              lat: marker.lat,
              lng: marker.lng,
            }}
            key={index}
          >
            <MapPoint university={true} data={marker} />
          </OverlayContainer>
        ))} */}
        {cards
          ? cards.map((apartment, index) => (
              <OverlayContainer
                map={map}
                position={{
                  lat: apartment.lat,
                  lng: apartment.lng,
                }}
                key={index}
              >
                <MapPoint
                  apartment={apartment}
                  setCardSelected={setCardSelected}
                  //   image={apartment.picture_url}
                  //   name={apartment.name}
                  //   description={apartment.description}
                  //   price_in_eur={apartment.price_in_eur}
                />
              </OverlayContainer>
            ))
          : null}
      </div>
    </div>
  );
}

export default Map;
