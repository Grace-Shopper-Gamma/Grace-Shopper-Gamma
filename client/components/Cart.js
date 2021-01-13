import React from 'react'
import {connect} from 'react-redux'
// import DeleteCartItem from './DeleteCartItem'

const Cart = ({cartItems}) => {
  console.log('cart items: ', cartItems)
  return (
    <div id="cart">
      {cartItems.map(cartItem => {
        return (
          <div key={cartItem.id} id="cartItem-div">
            <h4>{cartItem.name}</h4>
            <p>{cartItem.description}</p>
            <p>
              qty: {cartItem.quantity} price: {cartItem.price}
            </p>
            <img id="cartItem-img" src={cartItem.imageUrl} />
            {/* <span>
              <DeleteCartItem cartItem={cartItem} />
            </span> */}
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
