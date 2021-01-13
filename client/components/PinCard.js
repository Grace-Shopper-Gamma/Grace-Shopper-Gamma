import React from 'react'

const PinCard = props => {
  const {name, imageUrl, price} = props.pin

  return (
    <div>
      <img src={imageUrl} alt={`Picture of ${name}`} className="allImg" />
      <h3>{name}</h3>
      <p>Price: {price}</p>
    </div>
  )
}

export default PinCard
