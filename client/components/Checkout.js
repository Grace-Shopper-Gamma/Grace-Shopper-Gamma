import React from 'react'
import {createOrder} from '../store/checkout'
import {connect} from 'react-redux'
import {submitOrder} from '../store/cart'
import FormButton from './FormButton'
import MailingForm from './MailingForm'
import PaymentForm from './PaymentForm'

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      showMailing: true,
      showPayment: false
    }
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
    const {showMailing, showPayment} = this.state
    const subtotal = cartItems.reduce(
      (result, next) => result + next.item.quantity * next.msrp,
      0
    )
    const tax = Math.round(subtotal * 0.07) / 100

    return (
      <div className="checkout-container">
        <div className="order-form">
          <div
            className="open-checkout-forms"
            onClick={() => this.setState({showMailing: !showMailing})}
          >
            <p>Mailing Information</p>
            <ArrowDropDownIcon />
          </div>
          {showMailing && <MailingForm />}
          <div
            className="open-checkout-forms"
            onClick={() => this.setState({showPayment: !showPayment})}
          >
            <p>Payment Information</p>
            <ArrowDropDownIcon />
          </div>
          {showPayment && <PaymentForm />}
        </div>
        <div className="order-summary">
          <p>Order Summary</p>
          <hr />
          <p>Subtotal: ${subtotal / 100}</p>
          <p>
            Tax {'(7%)'}: ${tax}
          </p>
          <p>Total: ${(subtotal / 100 + tax).toFixed(2)}</p>
          <p>{/* Submit Order; change all items to 'ORDERED' */}</p>
          <FormButton displayName="Submit" handleSubmit={handleSubmit} />
        </div>
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
