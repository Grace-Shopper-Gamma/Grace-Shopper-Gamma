import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  Login,
  SignUpForm,
  UserHome,
  Cart,
  Checkout,
  AllProducts,
  SingleProduct
} from './components'
import {me} from './store'
import {fetchCartItems} from './store/cart'
import {getProducts} from './store/products'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.getCartItems()
    this.props.getAllProducts()
  }

  render() {
    const {isLoggedIn, cartItems} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUpForm} />
        <Route exact path="/pins" component={AllProducts} />
        <Route path="/pins/:id" component={SingleProduct} />
        <Route exact path="/stickers" component={AllProducts} />
        <Route path="/stickers/:id" component={SingleProduct} />
        <Route path="/cart" component={Cart} cartItems={cartItems} />
        <Route path="/checkout" component={Checkout} cartItems={cartItems} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    getCartItems: () => dispatch(fetchCartItems()),
    getAllProducts: () => dispatch(getProducts())
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
