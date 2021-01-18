import React, {Component} from 'react'
import {connect} from 'react-redux'
import DeleteCartItem from './DeleteCartItem'
import AddQty from './AddQty'
import SubtractQty from './SubtractQty'
import {Link} from 'react-router-dom'

class Cart extends Component {
  render() {
    const {cartItems} = this.props
    return cartItems.length ? (
      <div id="cart-container">
        {cartItems.map(cartItem => {
          return (
            <div key={cartItem.id} id="cartItem-div">
              <img id="cartItem-img" src={cartItem.imageUrl} />
              <div className="cart-info-container">
                <h3 id="cartItem-name">{cartItem.name}</h3>
                <h4 className="cartItem-price">
                  ${(cartItem.msrp / 100).toFixed(2)}
                </h4>
                <h4 className="cart-times">x</h4>
                <SubtractQty cartItem={cartItem} />
                <h4 className="cart-qty-num">{cartItem.item.quantity}</h4>
                <AddQty cartItem={cartItem} />
                <DeleteCartItem cartItem={cartItem} />
              </div>
            </div>
          )
        })}
        {
          <div>
            {cartItems.length > 0 ? (
              <div id="cart-summary">
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
      <div>Get to shopping!</div>
    )
  }
}

const mapState = ({cartItems}) => ({cartItems})

export default connect(mapState)(Cart)
