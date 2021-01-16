import React, {Component} from 'react'
import {updateCartItem} from '../store/cart'
import {connect} from 'react-redux'

class SubtractQty extends Component {
  render() {
    const {cartItem} = this.props
    const sub = {
      sellPrice: cartItem.item.sellPrice,
      status: cartItem.item.status,
      quantity: cartItem.item.quantity - 1,
      userId: 1,
      orderId: cartItem.item.orderId,
      productId: cartItem.item.productId
    }
    return (
      <div>
        <form onSubmit={ev => ev.preventDefault()}>
          <button
            type="submit"
            className="remove"
            onClick={() => this.props.updateCartItem(sub)}
          >
            -
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem))
  }
}

export default connect(null, mapDispatch)(SubtractQty)
