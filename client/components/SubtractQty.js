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
      <form
        onSubmit={ev => ev.preventDefault()}
        className="remove-add-button-container"
      >
        <button
          type="submit"
          className="remove-add-button"
          onClick={() => this.props.updateCartItem(sub)}
          disabled={cartItem.item.quantity === 0}
        >
          -
        </button>
      </form>
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
