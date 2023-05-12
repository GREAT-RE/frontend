import React, { useContext, useState, useEffect } from "react";
import feelAtHome from "../../assets/Feel at Home.jpg";
import "./SearchProperty.css";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

import api from "../../services/api";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { useLocation, Link, Outlet, useNavigate } from "react-router-dom";
import ListingContext from "../../context/listingContext";

const SearchProperty = () => {
  // const [listings, setListings] = useState()

  const { universities } = useContext(ListingContext);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectRoomType, setSelectRoomType] = useState("");

  const [selectPrice, setSelectPrice] = useState("");
  const [selectExtras, setSelectExtras] = useState("");

  // const [value, setValue] = React.useState([20, 37]);

  const [firstValue, setFirstValue] = useState(20);
  const [secondValue, setSecondValue] = useState(1000);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setFirstValue(newValue[0]);
    setSecondValue(newValue[1]);
  };

  // const handleChangeFirst = (event) => {
  //   if (event.target.value > 20) {
  //     if(firstValue < secondValue) {
  //       setFirstValue(event.target.value);
  //     }
  //   }
  // };

  // const handleChangeSecond = (event) => {
  //   if (1000 > event.target.value) {
  //     if(firstValue < secondValue) {
  //     setSecondValue(event.target.value);
  //     }
  //   }
  // };

  console.log(firstValue, secondValue);

  const handleUniversityChange = (event) => {
    setSelectedUniversity(event.target.value);
    api
      .get(`/listing/universities/${event.target.value}`)
      .then((response) => {
        navigate("/properties/list");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRoomChange = (event) => {
    setSelectRoomType(event.target.value);
    api
      .get(`/listing?room_type=${event.target.value}`)
      .then((response) => {
        navigate("/properties/list");
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePriceChange = (event) => {
    setSelectPrice(event.target.value);
  };
  const handleExtrasChange = (event) => {
    setSelectExtras(event.target.value);
  };

  return (
    <>
      <div className="searchPage">
        <img className="feelHome" src={feelAtHome} alt="feel" />
        <div className="optionsMenu">
          <h1 className="menuHeader">Feel at home</h1>
          <div className="customSelect">
            <select
              value={selectedUniversity}
              onChange={handleUniversityChange}
            >
              <option disabled hidden value="">
                Select a University
              </option>
              {universities.map((university) => (
                <option key={university.id} value={university.id}>
                  {university.name}
                </option>
              ))}
            </select>
          </div>
          <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => "Price range"}
                value={[firstValue, secondValue]}
                step={1}
                min={20}
                max={1000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
              />
              <div className="price-range-container">
                <p>{firstValue}€</p>
                <p>{secondValue}€</p>
              </div>
            </Box>
          {/* <input
            id="moveInOut"
            placeholder="Move-in/Move-out date"
            value={selectDate}
            onChange={handleDateChange}
          /> */}
          <div className="menuRow">
            <select
              id="roomType"
              value={selectRoomType}
              onChange={handleRoomChange}
            >
              <option disabled hidden value="">
                Select room type
              </option>
              <option value="Entire home/apt">Entire Home</option>
              <option value="Private room">Private Room</option>
            </select>
            {/* <input
              id="propertyType"
              placeholder="Property type"
              value={selectPropertyType}
              onChange={handlePropertyChange}
            /> */}
            {/* <input
              id="priceChange"
              placeholder="Price range"
              value={selectPrice}
              onChange={handlePriceChange}
            /> */}
          
            <input
              id="extrasChange"
              placeholder="Extras"
              value={selectExtras}
              onChange={handleExtrasChange}
            />
            
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SearchProperty;
