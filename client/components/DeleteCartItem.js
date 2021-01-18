import React, {Component} from 'react'
import {deleteCartItem} from '../store/cart'
import {connect} from 'react-redux'

class DeleteCartItem extends Component {
  render() {
    return (
      <form onSubmit={ev => ev.preventDefault()} id="remove">
        <button
          type="submit"
          onClick={() => this.props.deleteCartItem(this.props.cartItem)}
        >
          Remove Item
        </button>
      </form>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    deleteCartItem: (cartItem, user) => dispatch(deleteCartItem(cartItem, user))
  }
}

export default connect(null, mapDispatch)(DeleteCartItem)
