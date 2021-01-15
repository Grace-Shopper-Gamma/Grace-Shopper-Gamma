import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleProduct} from '../store/products'
import {createCartItem, updateCartItem} from '../store/cart'
import FormButton from './FormButton'
import StarRating from './StarRating'

class SingleProduct extends Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id)
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
      price
    } = this.props.singleProduct
    return (
      <div className="single-item-container">
        <div>
          <img
            src={imageUrl}
            alt={`Photo of ${name}`}
            className="single-item-picture"
          />
        </div>
        <div className="single-item-info-container">
          <div className="single-item-name">
            <h1>{name}</h1>
          </div>
          <StarRating rating={rating} />
          <br />
          <p className="single-item-description">{description}</p>
          <h4>${price}</h4>
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
