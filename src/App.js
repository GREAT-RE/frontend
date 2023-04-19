import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
