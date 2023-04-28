import React from 'react'
import "./PropertyList.css"
import bikePhoto from "../../assets/bikePic.jpg"

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
        <button type="submit">List for free</button>
      </div>
    </>
  )
}

export default PropertyList