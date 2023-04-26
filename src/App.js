import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import './App.css';
import PropertyList from "./Pages/PropertyList/PropertyList.jsx"


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/property-list" element={<PropertyList />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
