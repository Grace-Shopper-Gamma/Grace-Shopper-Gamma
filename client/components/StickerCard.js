import React from 'react'

const StickerCard = props => {
  const {name, description, imageUrl, price, quantity} = props.sticker

  return (
    <div className="indSticker">
      <div id="name">{name}</div>
      {description}
      <img className="allImg" src={imageUrl} />
      <div id="price">Price: ${price}</div>
      Qty: {quantity}
    </div>
  )
}

export default StickerCard
