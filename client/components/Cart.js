import React from 'react'
import {connect} from 'react-redux'
import DeleteCartItem from './DeleteCartItem'

const Cart = ({cartItems}) => {
  return (
    <div id="cart">
      {cartItems.map(cartItem => {
        return (
          <div key={cartItem.id} id="cartItem-div">
            <h4>{cartItem.name}</h4>
            <p>{cartItem.description}</p>
            <img id="cartItem-img" src={cartItem.imageUrl} />
            <p>qty:{cartItem.item && cartItem.item.quantity}</p>
            {/* <select value={this.state.value} onChange={this.handleChange}>
              <option value="all">all</option>
              <option value="cats">cats</option>
              <option value="dogs">dogs</option>
            </select> */}
            <p>price: {cartItem.msrp}</p>
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
