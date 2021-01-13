import React from 'react'
import {Link} from 'react-router-dom'

const PinCard = props => {
  const {name, imageUrl, price, id} = props.pin

  return (
    <div>
      <Link to={`/pins/${id}`} className="gen-link">
        <img src={imageUrl} alt={`Picture of ${name}`} className="allImg" />
        <h3>{name}</h3>
        <p>Price: {price}</p>
      </Link>
    </div>
  )
}

export default PinCard
