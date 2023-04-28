import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import './App.css';
import PropertyList from "./Pages/PropertyList/PropertyList.jsx"
import ContentPage from './Pages/ContentPage/ContentPage';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
      <div>
        <Navbar/>
        <ContentPage/>
      </div>
  );
}

export default App;
