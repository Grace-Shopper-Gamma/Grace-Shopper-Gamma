import React from 'react'
import {createOrder} from '../store/checkout'
import {connect} from 'react-redux'
import {submitOrder} from '../store/cart'

class Checkout extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.submitOrder(this.props.cartItems)
  }

  generateOrderConfirmation() {}

  render() {
    const {handleSubmit} = this
    const {cartItems} = this.props
    const subtotal = cartItems.reduce(
      (result, next) => result + next.item.quantity * next.msrp,
      0
    )
    const tax = Math.round(subtotal * 0.07) / 100

    return (
      <div className="checkout-container">
        <div className="order-form">
          <p>This is where user inputs mailing address</p>
          <p>and payment information</p>
        </div>
        <div>
          <h1>Order Summary</h1>
          <hr />
          <p>Subtotal: ${subtotal / 100}</p>
          <p>
            Tax {'(7%)'}: ${tax}
          </p>
          <p>Total: ${(subtotal / 100 + tax).toFixed(2)}</p>
          <p>{/* Submit Order; change all items to 'ORDERED' */}</p>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    )
  }
}

const mapState = state => ({
  cartItems: state.cartItems
})

const mapDispatch = dispatch => {
  return {
    submitOrder: order => dispatch(submitOrder(order))
  }
}

export default connect(mapState, mapDispatch)(Checkout)
