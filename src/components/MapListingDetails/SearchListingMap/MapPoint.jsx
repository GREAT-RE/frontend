import { useEffect, useRef, useState } from "react";
import ApartmentCard from "./ApartmentCard";
import ApartmentPoint from "./ApartmentPoint";
import axios from "axios"
import api from "../../../services/api";

import UniversityCard from "./UniversityCard";
import UniversityPoint from "./UniversityPoint";

const MapPoint = (props) => {
  // console.log(props);
  const [opened, setIsOpened] = useState(false);

//   const getAddresses = (cards) => {
    
//  };

  const handleOnOpen = (id) => {
    props.setCardSelected(id);
    [props.apartment]
    .filter((apartment) => apartment.id === id)
    .map(apartment => (
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${apartment.lat},${apartment.lng}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      )
      .then((response) => 

        api.put(`/listing/${id}`, {formatted_address:response.data.results[0].formatted_address}).then(
            response => console.log(response)
        )
      
      
    //   (response.data.results[0].formatted_address)
      
      )
  ));
    setIsOpened(true);
  };

  const handleOnClose = () => setIsOpened(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpened(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div ref={containerRef}>
      {
        //   props.university ? (
        //     opened ? (
        //       <UniversityCard data={props.data} handleClose={handleOnClose} />
        //     ) : (
        //       <UniversityPoint data={props.data} onClick={handleOnOpen} />
        //     )
        //   ) :
        opened ? (
          <ApartmentCard
          data={props.apartment}
            // image={props.apartment.picture_url}
            // name={props.apartment.name}
            // description={props.apartment.description}
            // rent={props.apartment.price_in_eur}
            handleClose={handleOnClose}
          />
        ) : (
          <ApartmentPoint
            id={props.apartment.id}
            price={props.apartment.price_in_eur}
            onClick={handleOnOpen}
          />
        )
      }
    </div>
  );
};

export default MapPoint;
