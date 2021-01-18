import React from 'react'
import DeleteCartItem from './DeleteCartItem'
import AddQty from './AddQty'
import SubtractQty from './SubtractQty'

const CartCard = props => {
  const {cartItem} = props

  return (
    <div className="cart-info-container">
      <img id="cartItem-img" src={cartItem.imageUrl} />
      <h3 id="cartItem-name">{cartItem.name}</h3>
      <h4 className="cartItem-price">${(cartItem.msrp / 100).toFixed(2)}</h4>
      <h4 className="cart-times">x</h4>
      <SubtractQty cartItem={cartItem} />
      <h4 className="cart-qty-num">{cartItem.item.quantity}</h4>
      <AddQty cartItem={cartItem} />
      <DeleteCartItem cartItem={cartItem} />
    </div>
  )
}

export default CartCard
