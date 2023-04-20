import './App.css';
import PropertyList from "./Pages/PropertyList/PropertyList.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/property-list" element={<PropertyList />} />
      </Routes>
    </Router>
  );
}

export default App;
