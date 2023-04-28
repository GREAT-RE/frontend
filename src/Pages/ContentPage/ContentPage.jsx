import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './../HomePage/HomePage';
import PropertyList from './../PropertyList/PropertyList';

const ContentPage = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/property-list" element={<PropertyList />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default ContentPage