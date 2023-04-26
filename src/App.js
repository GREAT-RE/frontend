import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import './App.css';
import PropertyList from "./Pages/PropertyList/PropertyList.jsx"


function App() {
  return (
      <Routes>
        <Route exact path="/property-list" element={<PropertyList />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
  );
}

export default App;
