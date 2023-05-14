import React from 'react'

const SideCard = ({card}) => {

  console.log(card)
    
  return (
    <div>
        {card && card.name}

    </div>
  )
}

export default SideCard