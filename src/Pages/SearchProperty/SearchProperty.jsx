import React, { useState, useEffect } from 'react';
import feelAtHome from '../../assets/Feel at Home.jpg';
import './SearchProperty.css';
import popularImg1 from "../../assets/Popular property.jpg"
import popularImg2 from "../../assets/Popular property 1.jpg"
import popularImg3 from "../../assets/Popular property 2.jpg"
import { Link } from 'react-router-dom';

const SearchProperty = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedUniversity, setSelectedUniversity] = useState('1');
  const [selectDate, setSelectDate] = useState('');
  const [selectRoomType, setSelectRoomType] = useState('');
  const [selectPropertyType, setSelectPropertyType] = useState('');
  const [selectPrice, setSelectPrice] = useState('');
  const [selectExtras, setSelectExtras] = useState('');

  const handleUniversityChange = (event) => {
    setSelectedUniversity(event.target.value);
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

  return (
  <>
    <div className='searchPage'>
      <img className='feelHome' src={feelAtHome} alt='feel' />
      <div className='optionsMenu'>
        <h1 className='menuHeader'>Feel at home</h1>
        <div className='customSelect'>
          <select value={selectedUniversity} onChange={handleUniversityChange}>
            <option value='1'>University 1</option>
            <option value='2'>University 2</option>
            <option value='3'>University 3</option>
          </select>
        </div>
        <input id='moveInOut' placeholder='Move-in/Move-out date' value={selectDate} onChange={handleDateChange} />
        <div className='menuRow'>
          <input id='roomType' placeholder='Room type' value={selectRoomType} onChange={handleRoomChange} />
          <input id='propertyType' placeholder='Property type' value={selectPropertyType} onChange={handlePropertyChange} />
          <input id='priceChange' placeholder='Price range' value={selectPrice} onChange={handlePriceChange} />
          <input id='extrasChange' placeholder='Extras' value={selectExtras} onChange={handleExtrasChange} />
        </div>
      </div>
    </div>
      <div className='popular-container'>
        <h1 className='popular-text'>
          POPULAR PROPERTIES
        </h1>
      </div>
    <div className='popular-all-cards'>

    <Link className='popular-card' to="/card-individual">
        <img className='popular-card-image' src={popularImg1} alt='Pop1' />
        <h2 className='card-title'>Nido Living - Campo Pequeno</h2>
        <p className='card-text'>From <span className='card-price'>550€</span> / Month</p>  
    </Link>

      <div className='popular-card'>
        <img className='popular-card-image' src={popularImg2} alt='Pop1' />
        <h2 className='card-title'>Livensa Living - Campo Grande</h2>
        <p className='card-text'>From <span className='card-price'>650€</span> / Month</p>
      </div>

      <div className='popular-card'>
        <img className='popular-card-image' src={popularImg3} alt='Pop1' />
        <h2 className='card-title'>Home2Students - Entrecampos</h2>
        <p className='card-text'>From <span className='card-price'>500€</span> / Month</p>
      </div>
    </div>
    <div className='popular-button'>
      <button type="submit">View all properties</button>
    </div>
  </>
  );
};

export default SearchProperty;

