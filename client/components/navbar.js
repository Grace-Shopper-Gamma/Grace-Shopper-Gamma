import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'

const NavBar = ({handleClick, isLoggedIn}) => {
  return (
    <div className="main-container">
      <div className="nav-bar-container">
        <Link to="/">
          <h1>Stick & Pin</h1>
        </Link>
        <nav className="nav-bar-routes-container center">
          <Link className="nav-bar-routes" to="/pins" id="navPins">
            Pins
          </Link>
          <Link className="nav-bar-routes" to="/stickers" id="navStickers">
            Stickers
          </Link>
          <Link className="nav-bar-routes" to="/cart">
            <ShoppingCartOutlinedIcon />
          </Link>
          <div className="nav-bar-routes-container center">
            {isLoggedIn ? (
              <div className="nav-bar-routes-container center">
                <Link className="nav-bar-routes" to="/home">
                  <PersonOutlineOutlinedIcon />
                </Link>
                <a className="nav-bar-routes" href="#" onClick={handleClick}>
                  <ExitToAppOutlinedIcon />
                </a>
              </div>
            ) : (
              <Link className="nav-bar-routes" to="/login">
                <PersonOutlineOutlinedIcon />
              </Link>
            )}
          </div>
        </nav>
      </div>
      <hr />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => ({
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  handleClick: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(NavBar)

/**
 * PROP TYPES
 */
NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
