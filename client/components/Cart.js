import React, {Component} from 'react'
import {connect} from 'react-redux'
import DeleteCartItem from './DeleteCartItem'
import AddQty from './AddQty'
import SubtractQty from './SubtractQty'
import {Link} from 'react-router-dom'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {cartItems} = this.props

    return cartItems.length ? (
      <div id="cart">
        {cartItems.map(cartItem => {
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
              <p>price: ${(cartItem.msrp / 100).toFixed(2)}</p>
              <span>
                <DeleteCartItem cartItem={cartItem} />
              </span>
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

const mapState = ({cartItems}) => ({
  cartItems
})

export default connect(mapState)(Cart)
