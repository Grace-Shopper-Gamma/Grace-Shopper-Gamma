import React from 'react'
import {connect} from 'react-redux'
import DeleteCartItem from './DeleteCartItem'

const Cart = ({cartItems}) => {
  console.log('cart items: ', cartItems)
  return (
    <div id="cart">
      {cartItems.map(cartItem => {
        return (
          <div key={cartItem.id} id="cartItem-div">
            <h4>{cartItem.name}</h4>
            <p>{cartItem.description}</p>
            <img id="cartItem-img" src={cartItem.imageUrl} />
            <p>
              qty:
              <select value={cartItem.quantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </p>
            <p>price: {cartItem.price}</p>
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
