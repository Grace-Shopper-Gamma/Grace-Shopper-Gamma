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
              <p>qty:{cartItem.item && cartItem.item.quantity}</p>
              {/* <select value={this.state.value} onChange={this.handleChange}>
                <option value="all">all</option>
                <option value="cats">cats</option>
                <option value="dogs">dogs</option>
              </select> */}
              <p>price: ${cartItem.msrp / 100}</p>
              <span>
                <DeleteCartItem cartItem={cartItem} />
              </span>
            </div>
          )
        })}
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
