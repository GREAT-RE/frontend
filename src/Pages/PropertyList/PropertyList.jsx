import React from 'react'
import "./PropertyList.css"
import bikePhoto from "../../assets/bikePic.jpg"
import Navbar from '../../components/Navbar/Navbar'

const PropertyList = () => {
  return (
    <>
    <Navbar/>
    <div className='photo-container'>
      <img className="bike-img" src={bikePhoto} alt="BikeImg" />
        <div className='text-container'>
          <h1 className='text'>Know how easy is to list your property</h1>
        </div>
    </div>
      <div className='propertyButton'>
        <button type="submit">List for free</button>
      </div>
    </>
  )
}

export default PropertyList