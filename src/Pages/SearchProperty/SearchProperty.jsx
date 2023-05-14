import React, { useContext, useState, useEffect } from "react";
import feelAtHome from "../../assets/Feel at Home.jpg";
import "./SearchProperty.css";
import { Box, FormGroup, FormControlLabel, Checkbox, Button, Slider } from "@mui/material";
import api from "../../services/api";
import { useLocation, Link, Outlet, useNavigate } from "react-router-dom";
import ListingContext from "../../context/listingContext";

const SearchProperty = () => {

  // const [open, setOpen] = useState(false);
  // const toggleCheckboxList = () => {
  //   setOpen(!open);
  // };
  let checkedResults = [];
  const handleCheckboxChange = (event) => {
    if(event.target.checked){
      checkedResults.push(event.target.name);
    } else {
      const index = checkedResults.indexOf(event.target.name);
      if (index > -1) { 
        checkedResults.splice(index, 1); 
      }
    }
  };
 


  const { universities } = useContext(ListingContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectRoomType, setSelectRoomType] = useState("");
  const [firstValue, setFirstValue] = useState(20);
  const [secondValue, setSecondValue] = useState(1000);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setFirstValue(newValue[0]);
    setSecondValue(newValue[1]);
    console.log(newValue)
  };

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
      console.log(event.target.value)
  };
  // if(selectedUniversity !=="")
  // api
  // .get(`/listing/universities/${selectedUniversity}`)
  // .then((response) => if {(checkedResults.length > 0 && handleRoomChange !="") api.get(`/listing?room_type=${handleRoomChange.event.target.value}&&min_price=${newValue[0]}&&max_price=${newValue[1]}`&&amenities=[...checkedValues])
  // else if (checkedResults.length === 0 && handleRoomChange !=""){api.get(`/listing?room_type=${handleRoomChange.event.target.value}&&min_price=${newValue[0]}&&max_price=${newValue[1]}
  // else if (checkedResults.length > 0 && handleRoomChange =""){api.get(`/listing?min_price=${newValue[0]}&&max_price=${newValue[1]&&amenities=[...checkedValues]}


  // const search = () => {
  //   let query = "";
  //   query += `min_price=${firstValue}&max_price=${secondValue}&`;
  //   if (selectRoomType !== "") {
  //     query += `room_type=${selectRoomType}&`;
  //   }
  //   if (checkedResults.length > 0) {
  //     query += `amenities=${checkedResults.join()}&`;
  //   }
  //   if (selectedUniversity !== "") {
  //     api.get(`/listing/universities/${selectedUniversity}?${query}`)
  //       .then((response) => {
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   } else {
  //     api.get(`/listing?${query}`)
  //       .then((response) => {
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // };

  return (
    <>
      <div className="searchPage">
        <img className="feelHome" src={feelAtHome} alt="feel" />
        <div className="optionsMenu">
          <h1 className="menuHeader">Feel at home</h1>
          <div className="searchOrientation">
          <div className="leftColumn">
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
            <input type="date" className="moveInMoveOut" min="2018-01-01" max="2024-12-31" />
          </div>

            {/* <Button className="extrasCheckboxButton" onClick={toggleCheckboxList}>Select Extras</Button> */}
          {/* {open && ( */}
            <FormGroup className="extrasCheckbox">
              <FormControlLabel control={<Checkbox />} label="Wifi" name="Wifi" value="Wifi" onChange={handleCheckboxChange}/>
              <FormControlLabel control={<Checkbox />} label="Kitchen" name="Kitchen" value="Kitchen" onChange={handleCheckboxChange}/>
              <FormControlLabel control={<Checkbox />} label="Washer" name="Washer"  value="Washer" onChange={handleCheckboxChange}/>
              <FormControlLabel control={<Checkbox />} label="Microwave" name="Microwave" value="Microwave" onChange={handleCheckboxChange}/>
              <FormControlLabel control={<Checkbox />} label="Refrigerator" name="Refrigerator" value="Refrigerator" onChange={handleCheckboxChange}/>
              <FormControlLabel control={<Checkbox />} label="Oven"  name="Oven" value="Oven" onChange={handleCheckboxChange}/>
              <FormControlLabel control={<Checkbox />} label="Stove"  name="Stove" value="Stove"onChange={handleCheckboxChange}/>
              <FormControlLabel control={<Checkbox />} label="Cable TV"name="Cable TV" value="Cable TV" onChange={handleCheckboxChange}/>
              <FormControlLabel control={<Checkbox />} label="Heating"name="Heating"  value="Heating" onChange={handleCheckboxChange}/>
              <FormControlLabel control={<Checkbox />} label="Air conditioning" name="Air conditioning" value="Air conditioning" onChange={handleCheckboxChange}/>
            </FormGroup>
              {/* )} */}
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
              />
              <div className="price-range-container">
                <p>{firstValue}€</p>
                <p>{secondValue}€</p>
              </div>
            </Box>
          
          </div>
        </div>
      <Outlet />
    </>
  ); 
};

export default SearchProperty;
