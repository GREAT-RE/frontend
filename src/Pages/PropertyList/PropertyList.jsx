import React from 'react'
import "./PropertyList.css"
import bikePhoto from "../../assets/bikePic.jpg"
import { Link } from 'react-router-dom';

const PropertyList = () => {
  return (
    <>
    <div className='photo-container-lisbon'>
      <img className="bike-img" src={bikePhoto} alt="BikeImg" />
        <div className='text-container-lisbon'>
          <h1 className='textL'>Know how easy is to list your property</h1>
        </div>
    </div>
      <div className='propertyButton'>
      <Link to="/list-property"><button type="submit">List for free</button></Link>
      </div>
    </>
  )
}

export default PropertyList