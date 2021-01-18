import React, {Component} from 'react'
import {updateCartItem} from '../store/cart'
import {connect} from 'react-redux'

class SubtractQty extends Component {
  render() {
    const {cartItem} = this.props
    const sub = {
      id: cartItem.item.id,
      quantity: cartItem.item.quantity - 1,
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

const mapState = state => ({
  cartItems: state.cartItems
})

const mapDispatch = dispatch => {
  return {
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem))
  }
}

export default connect(mapState, mapDispatch)(SubtractQty)
