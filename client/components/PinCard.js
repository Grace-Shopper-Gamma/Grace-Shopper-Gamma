import React from 'react'

const PinCard = props => {
  const {name, description, imageURL, price, rating} = props
  return (
    <div>
      {name}
      {description}
      {imageURL}
      {price}
      {rating}
    </div>
  )
}

export default PinCard
