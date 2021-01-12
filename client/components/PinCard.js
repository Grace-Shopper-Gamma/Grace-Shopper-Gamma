import React from 'react'

const PinCard = props => {
  const {name, desc, image, price, quantity} = props
  return (
    <div>
      {name}
      {desc}
      {image}
      {price}
      {quantity}
    </div>
  )
}

export default PinCard
