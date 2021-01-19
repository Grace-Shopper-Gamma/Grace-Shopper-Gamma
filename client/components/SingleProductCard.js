import React from 'react'
import FormButton from './FormButton'
import StarRating from './StarRating'

const SingleProductCard = props => {
  const {imageUrl, name, rating, description, msrp, stock} = props.singleProduct

  return (
    <div className={`single-product-container ${props.loaded ? 'loaded' : ''}`}>
      <div className="single-product-img">
        <img
          src={imageUrl}
          alt={`Photo of ${name}`}
          className="single-product-img img-el"
        />
      </div>
      <div className="single-product-info-container">
        <div>
          <h1 className="single-product-name">{name}</h1>
        </div>
        <StarRating rating={rating} />
        <br />
        <p className="single-product-description">{description}</p>
        <ul>
          <li>%100 Organic</li>
          <li>Made with love</li>
        </ul>
        <div className="single-product-stock">
          {stock > 0
            ? 'In Stock and Ready to Ship!'
            : stock === 0 ? 'Out of Stock :(' : 'Loading...'}
        </div>

        <h3 className="single-product-price">${parseFloat(msrp / 100)}</h3>
        <FormButton
          displayName="Add To Cart"
          handleSubmit={props.handleSubmit}
        />
      </div>
    </div>
  )
}

export default SingleProductCard
