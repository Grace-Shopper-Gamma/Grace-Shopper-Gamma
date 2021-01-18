import React from 'react'
import {deleteCartItem} from '../store/cart'
import {connect} from 'react-redux'

const DeleteCartItem = props => {
  return (
    <form onSubmit={ev => ev.preventDefault()} id="remove">
      <button
        type="submit"
        onClick={() => props.deleteCartItem(props.cartItem)}
      >
        Remove Item
      </button>
    </form>
  )
}

const mapDispatch = dispatch => ({
  deleteCartItem: (cartItem, user) => dispatch(deleteCartItem(cartItem, user))
})

export default connect(null, mapDispatch)(DeleteCartItem)
