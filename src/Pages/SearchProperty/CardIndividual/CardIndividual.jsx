import React from 'react'
import { Link } from 'react-router-dom';
import cardI1 from "../../../assets/Popular property.jpg"
import "./CardIndividual.css"

const CardIndividual = () => {
  return (
<>
<div className='cardI-all'>
    <div className='card-left'>
        <h1 className='cardI-title'>Nido Living - Campo Pequeno</h1>
        <img className='cardI-image' src={cardI1} alt='CardI' />
    </div>
    <div className='card-right'>
        <p className='cardI-price-text'>From <span className='cardI-price'>550€</span> / Month</p>
        <div className='cardI-button'>
            <button type="submit">Enquire</button>
        </div>
        <p className='cardI-text'>Popular!<br></br>24 students saved this property to their wishlist</p>
    </div>
</div>
    <Link className='cardI-back-button' to="/search-property">
      <button type="submit">Go Back</button>
    </Link>
</>
  )
}

export default CardIndividual