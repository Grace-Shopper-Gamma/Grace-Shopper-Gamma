import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleProduct} from '../store/products'
import {createCartItem, updateCartItem} from '../store/cart'
import SingleProductCard from './SingleProductCard'

class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id)
  }

  componentDidUpdate() {
    !this.state.loaded &&
      this.props.singleProduct.imageUrl &&
      this.setState({loaded: true})
  }

  handleSubmit = () => {
    const {singleProduct, cart} = this.props
    const [productInCart] = cart.filter(item => item.id === singleProduct.id)
    if (productInCart) {
      const add = {
        id: productInCart.item.id,
        quantity: productInCart.item.quantity + 1,
        productId: productInCart.item.productId
      }
      this.props.updateCartItem(add)
    } else {
      this.props.createCartItem(singleProduct.id)
    }
    this.props.history.push('/cart')
  }

  render() {
    return (
      <SingleProductCard
        loaded={this.state.loaded}
        singleProduct={this.props.singleProduct}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapState = state => ({
  singleProduct: state.inventory.singleProduct,
  cart: state.cartItems
})

const mapDispatch = dispatch => ({
  getSingleProduct: id => dispatch(getSingleProduct(id)),
  createCartItem: id => dispatch(createCartItem(id)),
  updateCartItem: pin => dispatch(updateCartItem(pin))
})

export default connect(mapState, mapDispatch)(SingleProduct)
