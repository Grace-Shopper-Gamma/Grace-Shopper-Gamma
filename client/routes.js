import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  Login,
  Signup,
  UserHome,
  Cart,
  AllPins,
  SingleSticker,
  SinglePin,
  AllStickers,
  Checkout
} from './components'
import {me} from './store'
import {fetchCartItems} from './store/cart'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.getCartItems()
  }

  render() {
    const {isLoggedIn, cartItems} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/pins" component={AllPins} />
        <Route path="/pins/:id" component={SinglePin} />
        <Route exact path="/stickers" component={AllStickers} />
        <Route path="/cart" component={Cart} cartItems={cartItems} />
        <Route path="/stickers/:id" component={SingleSticker} />
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
    getCartItems: () => dispatch(fetchCartItems())
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
