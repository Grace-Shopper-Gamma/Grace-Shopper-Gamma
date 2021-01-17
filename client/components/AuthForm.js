import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  let {name, displayName, handleSubmit, error} = props

  return (
    <div className="auth-container center">
      <form onSubmit={handleSubmit} name={name}>
        <h1 className="form-input title">{displayName}</h1>
        <div className="auth-form">
          <label htmlFor="email" />
          <input
            className="form-input input"
            name="email"
            type="text"
            placeholder="Email"
          />
          <label htmlFor="password" />
          <input
            className="form-input input"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit" className="form-btn form-input">
            {displayName}
          </button>

          {error &&
            error.response && (
              <div className="error-msg"> {error.response.data} </div>
            )}
          <div className="oauth-signup-container">
            <p className="oauth-signup-msg">Or login with Google!</p>
            <a href="/auth/google" className="oauth-container">
              <img
                className="oauth-img"
                src="https://p7.hiclipart.com/preview/893/776/984/5bbc0fcb4393a.jpg"
              />
            </a>
            <Link to="/signup" className="signup-container">
              <p>First time here?</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth({email, password}, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
