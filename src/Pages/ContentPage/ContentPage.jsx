import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './../HomePage/HomePage';
import PropertyList from './../PropertyList/PropertyList';
import FindLisbon from '../FindLisbon/FindLisbon';
import OffersPromo from '../Offers&Promo/Offers&Promo';
import ContactUs from '../ContacUs/ContactUs';
import ListProperty from '../ListProperty/ListProperty';

const ContentPage = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/property-list" element={<PropertyList />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/find-lisbon" element={<FindLisbon />} />
        <Route exact path="/offers-promo" element={<OffersPromo />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/list-property" element={<ListProperty />} />
      </Routes>
    </div>
  )
}

export default ContentPage