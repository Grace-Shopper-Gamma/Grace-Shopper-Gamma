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
              <p>price: ${(cartItem.msrp / 100).toFixed(2)}</p>
              <span>
                <DeleteCartItem cartItem={cartItem} />
              </span>
            </div>
          )
        })}
        {
          <div>
            {cartItems.filter(x => x.item.status === 'PENDING').length > 0 ? (
              <div id="cart-summary">
                <h4>Summary</h4>
                <p>
                  Subtotal $
                  {cartItems
                    .filter(x => x.item.status === 'PENDING')
                    .map(x => x.item.quantity * (x.msrp / 100))
                    .reduce((a, c) => a + c, 0)
                    .toFixed(2)}
                </p>
                <Link className="nav-bar-routes" to="/checkout">
                  <button type="button">Checkout</button>
                </Link>
              </div>
            ) : null}
          </div>
        }
      </div>
    )
  }
}

export default connect(({cartItems}) => {
  return {
    cartItems
  }
})(Cart)
