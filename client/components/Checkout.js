import React from 'react'
import {createOrder} from '../store/checkout'
import {connect} from 'react-redux'
import {submitOrder} from '../store/cart'
import FormButton from './FormButton'
import MailingForm from './MailingForm'
import PaymentForm from './PaymentForm'
import Confirmation from './Confirmation'

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      showMailing: true,
      showPayment: false,
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (!this.props.cartItems.length) this.props.history.push('/')
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.submitOrder(this.props.cartItems)
    this.setState({submitted: true})
  }

  render() {
    const {handleSubmit} = this
    const {cartItems} = this.props
    const {showMailing, showPayment, submitted} = this.state
    const subtotal = cartItems.reduce(
      (result, next) => result + next.item.quantity * next.msrp,
      0
    )
    const tax = Math.round(subtotal * 0.07) / 100
    const orderId = cartItems[0] ? cartItems[0].item.orderId : ''

    return submitted ? (
      <Confirmation orderId={orderId} />
    ) : (
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
