import React, { useState } from 'react';
import feelAtHome from '../../assets/Feel at Home.jpg';
import './SearchProperty.css';

const SearchProperty = () => {
  const [selectedUniversity, setSelectedUniversity] = useState('a');
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
    <div className='searchPage'>
      <img className='feelHome' src={feelAtHome} alt='feel' />
      <div className='optionsMenu'>
        <h1 className='menuHeader'>Feel at home</h1>
        <select id='dropdownMenu' value={selectedUniversity} onChange={handleUniversityChange}>
          <option value='1'>University 1</option>
          <option value='2'>University 2</option>
          <option value='3'>University 3</option>
        </select>
        <input id='moveInOut' placeholder='Move-in/Move-out date' value={selectDate} onChange={handleDateChange} />
        <div className='menuRow'>
          <input id='roomType' placeholder='Room type' value={selectRoomType} onChange={handleRoomChange} />
          <input id='propertyType' placeholder='Property type' value={selectPropertyType} onChange={handlePropertyChange} />
          <input id='priceChange' placeholder='Price range' value={selectPrice} onChange={handlePriceChange} />
          <input id='extrasChange' placeholder='Extras' value={selectExtras} onChange={handleExtrasChange} />
        </div>
      </div>
    </div>
  );
};

export default SearchProperty;

