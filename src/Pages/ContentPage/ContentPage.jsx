import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './../HomePage/HomePage';
import PropertyList from './../PropertyList/PropertyList';
import FindLisbon from '../FindLisbon/FindLisbon';
import OffersPromo from '../Offers&Promo/Offers&Promo';
import Login from '../LoginPage/LoginPage';

const ContentPage = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/property-list" element={<PropertyList />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/find-lisbon" element={<FindLisbon />} />
        <Route exact path="/offers-promo" element={<OffersPromo />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default ContentPage