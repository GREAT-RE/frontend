import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoBlue.jpg'
import loginLogo from '../../assets/loginIcon.png'

const Navbar = () => {
  return (
    <div className='top-nav'> 
    {/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}
    <div>
    <img src={logo} alt="Logo" className="logo" />
    </div>
    <input id="menu-toggle" type="checkbox" />  
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
    </label>
    <ul className="menu">
      <div className='menu-items'>
      <Link to="/property-list" className="propertyMenu">LIST YOUR PROPERTY</Link>
      <Link className="promotionsMenu"><li>Offers & Promotions</li></Link>
      <Link className='loginLogo'><img src={loginLogo} alt=""/><li>Login</li></Link>
      <Link className='loginLogo'><li>Contact Us</li></Link>
      </div>
    </ul>
    </div>
  )
}

export default Navbar