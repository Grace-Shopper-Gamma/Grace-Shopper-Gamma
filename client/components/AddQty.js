import React, {Component} from 'react'
import {updateCartItem} from '../store/cart'
import {connect} from 'react-redux'

class AddQty extends Component {
  render() {
    const {cartItem} = this.props

    const addQtyToProduct = product => {
      product.item.quantity++
      return product
    }

    return (
      <div>
        <form onSubmit={ev => ev.preventDefault()}>
          <button
            type="submit"
            className="remove"
            onClick={() => this.props.updateCartItem(addQtyToProduct(cartItem))}
          >
            +
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

export default connect(null, mapDispatch)(AddQty)
