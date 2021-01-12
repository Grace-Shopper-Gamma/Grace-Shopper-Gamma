import React, {Component} from 'react'
import {deleteCartItem} from '../store/cart'
import {connect} from 'react-redux'

class DeleteCartItem extends Component {
  render() {
    return (
      <div>
        <form onSubmit={ev => ev.preventDefault()}>
          <button
            type="submit"
            className="remove"
            onClick={() => this.props.deleteCartItem(this.props.cartItem)}
          >
            X
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    deleteCartItem: cartItem => dispatch(deleteCartItem(cartItem))
  }
}

export default connect(null, mapDispatch)(DeleteCartItem)
