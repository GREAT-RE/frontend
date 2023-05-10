import React, { useContext, useState, useEffect } from "react";
import feelAtHome from "../../assets/Feel at Home.jpg";
import "./SearchProperty.css";

import api from "../../services/api";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { useLocation, Link, Outlet, useNavigate } from "react-router-dom";
import ListingContext from "../../context/listingContext";

const SearchProperty = () => {
  // const [listings, setListings] = useState()

  const { universities } = useContext(ListingContext);

  const navigate = useNavigate()

  // const getProperties= () => {
  //   api
  //   .get("/listing")
  //   .then((response) => {
  //     setListings(response.data)
  //     // const totalData = response.data.data;
  //   })
  // }

  useEffect(() => {
    window.scrollTo(0, 0);
    // getProperties()
  }, []);

  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectRoomType, setSelectRoomType] = useState("");
  const [selectPropertyType, setSelectPropertyType] = useState("");
  const [selectPrice, setSelectPrice] = useState("");
  const [selectExtras, setSelectExtras] = useState("");

  const handleUniversityChange = (event) => {
    console.log(event.target.value);
    setSelectedUniversity(event.target.value);
    api
      .get(`/listing/universities/${event.target.value}`)
      .then((response) => {
        navigate("/properties/list")
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleDateChange = (event) => {
    setSelectDate(event.target.value);
  };
  const handleRoomChange = (event) => {
    setSelectRoomType(event.target.value);
  };
  const handlePropertyChange = (event) => {
    setSelectPropertyType(event.target.value);
  };
  const handlePriceChange = (event) => {
    setSelectPrice(event.target.value);
  };
  const handleExtrasChange = (event) => {
    setSelectExtras(event.target.value);
  };

  console.log(universities);

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
              {/* <option value='1'>University 1</option>
            <option value='2'>University 2</option>
            <option value='3'>University 3</option> */}
              <option disabled hidden selected value="">
                Select a University
              </option>
              {universities.map((university) => (
                <option value={university.id}>{university.name}</option>
              ))}
            </select>
          </div>
          <input
            id="moveInOut"
            placeholder="Move-in/Move-out date"
            value={selectDate}
            onChange={handleDateChange}
          />
          <div className="menuRow">
            <input
              id="roomType"
              placeholder="Room type"
              value={selectRoomType}
              onChange={handleRoomChange}
            />
            <input
              id="propertyType"
              placeholder="Property type"
              value={selectPropertyType}
              onChange={handlePropertyChange}
            />
            <input
              id="priceChange"
              placeholder="Price range"
              value={selectPrice}
              onChange={handlePriceChange}
            />
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
