import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSinglePin} from '../store/singlePin'
import {createCartItem, updateCartItem} from '../store/cart'
import FormButton from './FormButton'
import StarRating from './StarRating'

class AllPins extends Component {
  componentDidMount() {
    this.props.getSinglePin(this.props.match.params.id)
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const {pin, cart, createCartItem, updateCartItem} = this.props
    const idArray = cart.filter(item => item.id)
    if (idArray.includes(pin.id)) {
      updateCartItem(pin)
    }
    createCartItem(pin)
    this.props.history.push('/cart')
  }

  render() {
    const {imageUrl, name, rating, description, price} = this.props.pin
    return (
      <div className="single-item-container">
        <div>
          <img
            src={imageUrl}
            alt={`Photo of ${name} pin`}
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
  pin: state.pin,
  cart: state.cartItems
})

const mapDispatch = dispatch => ({
  getSinglePin: id => dispatch(getSinglePin(id)),
  createCartItem: pin => dispatch(createCartItem(pin)),
  updateCartItem: pin => dispatch(updateCartItem(pin))
})

export default connect(mapState, mapDispatch)(AllPins)
