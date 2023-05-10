import React, {useContext} from 'react'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import ListingContext from '../../context/listingContext'

const Properties = () => {

  const {listings} = useContext(ListingContext)


  return (
    <div>
      {listings ? listings.map(listing =>   <PropertyCard listing={listing} />) 
    
      :null
      }
    </div>
  )
}

export default Properties