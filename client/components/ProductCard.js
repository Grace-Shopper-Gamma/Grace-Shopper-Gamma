import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = props => {
  const {name, imageUrl, price, id} = props.item

  return (
    <div>
      <Link to={`/pins/${id}`} className="indSticker">
        <img src={imageUrl} alt={`Picture of ${name}`} className="allImg" />
        <h3 id="name">{name}</h3>
        <p id="price">Price: {price}</p>
      </Link>
    </div>
  )
}

export default ProductCard
