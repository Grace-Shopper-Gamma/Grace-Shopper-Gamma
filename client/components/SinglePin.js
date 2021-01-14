import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSinglePin} from '../store/singlePin'
import {createCartItem, updateCartItem} from '../store/cart'
import FormButton from './FormButton'

class AllPins extends Component {
  componentDidMount() {
    this.props.getSinglePin(this.props.match.params.id)
  }
  catch(err) {
    console.log(err)
  }

  handleSubmit = evt => {
    evt.preventDefault()
    try {
      const {pin, cart, createCartItem, updateCartItem} = this.props
      const idArray = cart.filter(item => item.id)
      if (idArray.includes(pin.id)) {
        updateCartItem(pin)
      }
      this.props.createCartItem(pin)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const {
      name,
      description,
      imageUrl,
      price,
      quantity,
      rating,
      stock
    } = this.props.pin
    return (
      <div>
        <h1>{name}</h1>
        <img src={imageUrl} alt={`Photo of ${name} pin`} />
        <p>{description}</p>
        <h4>Price: {price}</h4>
        <h4>Qty: {quantity}</h4>
        <h4>Rating: {rating}</h4>
        <h4>Stock: {stock}</h4>
        <FormButton
          displayName="Add To Cart"
          handleSubmit={this.handleSubmit}
        />
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
