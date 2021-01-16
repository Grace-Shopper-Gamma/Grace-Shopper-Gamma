import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleProduct} from '../store/products'
import {createCartItem, updateCartItem} from '../store/cart'

import FormButton from './FormButton'
import StarRating from './StarRating'

class SingleProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id)
  }

  componentDidUpdate() {
    // if loaded is false and image is available, then set loaded to true
    // this adds 'loaded' class to single-product container to fade in
    !this.state.loaded &&
      this.props.singleProduct.imageUrl &&
      this.setState({loaded: true})
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const {singleProduct, cart, createCartItem, updateCartItem} = this.props
    const idArray = cart.filter(item => item.id)
    if (idArray.includes(singleProduct.id)) {
      updateCartItem(singleProduct)
    }
    createCartItem(singleProduct)
    this.props.history.push('/cart')
  }

  render() {
    const {
      imageUrl,
      name,
      rating,
      description,
      msrp,
      stock
    } = this.props.singleProduct
    return (
      <div
        className={`single-product-container ${
          this.state.loaded ? 'loaded' : ''
        }`}
      >
        <div className="single-product-img">
          <img
            src={imageUrl}
            alt={`Photo of ${name}`}
            className="single-product-img img-el"
          />
        </div>
        <div className="single-product-info-container">
          <div className="single-product-name">
            <h1>{name}</h1>
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
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  singleProduct: state.inventory.singleProduct,
  cart: state.cartItems
})

const mapDispatch = dispatch => ({
  getSingleProduct: id => dispatch(getSingleProduct(id)),
  createCartItem: pin => dispatch(createCartItem(pin)),
  updateCartItem: pin => dispatch(updateCartItem(pin))
})

export default connect(mapState, mapDispatch)(SingleProduct)
