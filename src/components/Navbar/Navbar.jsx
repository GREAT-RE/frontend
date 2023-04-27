import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoBlue.jpg'
const Navbar = () => {
  return (
    <div className='top-nav'> 
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <div>
    <img src={logo} alt="Logo" className="logo" />
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
    </label>
    <ul className="menu">
    <Link to="/property-list" className="propertyMenu">LIST YOUR PROPERTY</Link>
      <Link className="promotionsMenu"><li>Offers & promotions</li></Link>

      <Link><li>Login</li></Link>
      <Link><li>Four</li></Link>
      <Link><li>Five</li></Link>
    </ul>
    </div>
  )
}

export default Navbar