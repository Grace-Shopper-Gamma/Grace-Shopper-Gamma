import React from 'react'

const StickerCard = props => {
  const {name, description, imageURL, price, quantity} = props

  return (
    <div>
      {name}
      {description}
      {imageURL}
      {price}
      {quantity}
    </div>
  )
}

export default StickerCard
