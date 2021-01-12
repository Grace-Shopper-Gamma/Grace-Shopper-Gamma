import React from 'react'
import {connect} from 'react-redux'
import DeleteCartItem from './DeleteCartItem'

const Cart = ({cartItems}) => {
  return (
    <div id="cart">
      <h1>Hello from the cart</h1>
      {cartItems.map(cartItem => {
        return (
          <div key={cartItem.id}>
            <h3>{cartItem.name}</h3>
            <img id="cartItem-img" src={cartItem.imageUrl} />
            <span>
              <DeleteCartItem cartItem={cartItem} />
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default connect(({cartItems}) => {
  return {
    cartItems
  }
})(Cart)
