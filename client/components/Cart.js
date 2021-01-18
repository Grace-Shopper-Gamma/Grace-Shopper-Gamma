import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartCard from './CartCard'
import {Link} from 'react-router-dom'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

class Cart extends Component {
  render() {
    const {cartItems} = this.props

    return cartItems.length ? (
      <div id="cart-container">
        <div id="inner-cart-container">
          {cartItems.map(cartItem => {
            return (
              <div key={cartItem.id} id="cartItem-div">
                <CartCard cartItem={cartItem} />
              </div>
            )
          })}
        </div>
        {
          <div id="cart-summary">
            {cartItems.length > 0 ? (
              <div>
                <h4>Summary</h4>
                <p>
                  Subtotal $
                  {cartItems.reduce((a, c) => a + c.item.quantity * c.msrp, 0) /
                    100}
                </p>
                <Link className="nav-bar-routes" to="/checkout">
                  <button type="button">Checkout</button>
                </Link>
              </div>
            ) : null}
          </div>
        }
      </div>
    ) : (
      <div id="empty-cart">
        <h1>Your Cart Is Empty</h1>
        <ShoppingCartOutlinedIcon id="big-cart-icon" />
      </div>
    )
  }
}

const mapState = ({cartItems}) => ({cartItems})

export default connect(mapState)(Cart)
