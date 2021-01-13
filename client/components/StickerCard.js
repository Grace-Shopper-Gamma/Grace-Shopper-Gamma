import React from 'react'

const StickerCard = props => {
  const {name, description, imageUrl, price, quantity} = props.sticker

  return (
    <div>
      {name}
      {description}
      <img className="allImg" src={imageUrl} />
      {price}
      {quantity}
    </div>
  )
}

export default StickerCard
