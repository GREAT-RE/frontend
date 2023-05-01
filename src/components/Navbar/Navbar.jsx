import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoBlue.jpg';
import loginLogo from '../../assets/loginIcon.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="top-nav">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <input id="menu-toggle" type="checkbox" checked={menuOpen} onChange={handleMenuClick} />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <Link to="/property-list" className="propertyMenu" onClick={handleMenuItemClick}>
            List Your Property
          </Link>
        </li>
        <li>
          <Link to="/offers-promo" className="promotionsMenu" onClick={handleMenuItemClick}>
            Offers & Promotions
          </Link>
        </li>
        <li>
          <Link className="loginLogo" onClick={handleMenuItemClick}>
            <img src={loginLogo} className="logoPic" alt="" />
            Login
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="loginLogo" onClick={handleMenuItemClick}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
