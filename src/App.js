import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <HomePage />} />
    </Router>
  );
}

export default App;
