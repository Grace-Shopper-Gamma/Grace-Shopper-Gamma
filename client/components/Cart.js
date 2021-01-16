import React from 'react'
import {connect} from 'react-redux'
import DeleteCartItem from './DeleteCartItem'
import AddQty from './AddQty'
import SubtractQty from './SubtractQty'
import {Link} from 'react-router-dom'

const Cart = ({cartItems}) => {
  console.log(cartItems)
  return (
    <div id="cart">
      {cartItems.filter(x => x.item.status === 'PENDING').map(cartItem => {
        return (
          <div key={cartItem.id} id="cartItem-div">
            <h4>{cartItem.name}</h4>
            <p>{cartItem.description}</p>
            <img id="cartItem-img" src={cartItem.imageUrl} />
            <div>
              qty: {cartItem.item.quantity}
              <AddQty cartItem={cartItem} />
              <SubtractQty cartItem={cartItem} />
            </div>
            <p>price: {cartItem.msrp}</p>
            <span>
              <DeleteCartItem cartItem={cartItem} />
            </span>
          </div>
        )
      })}
      <div id="checkout">
        <h4>Summary</h4>
        <p>
          Subtotal $
          {cartItems &&
            cartItems
              .map(x => x.msrp * x.item.quantity)
              .reduce((a, c) => a + c, 0)}
        </p>
        <Link className="nav-bar-routes" to="/checkout">
          <button type="submit">Checkout</button>
        </Link>
      </div>
    </div>
  )
}

export default connect(({cartItems}) => {
  return {
    cartItems
  }
})(Cart)
