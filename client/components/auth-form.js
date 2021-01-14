import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  const title = displayName[0].toUpperCase() + displayName.slice(1)

  return (
    <div className="auth-container center">
      <h1 className="form-input">{title}</h1>
      <form onSubmit={handleSubmit} name={name}>
        <div className="auth-form center">
          <div className="form-input">
            <label htmlFor="email" />
            <input name="email" type="text" placeholder="Email" />
          </div>
          <div className="form-input">
            <label htmlFor="password" />
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div className="form-input">
            <button type="submit" className="form-btn">
              {displayName}
            </button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
          {name === 'login' ? (
            <a href="/auth/google">{displayName} with Google</a>
          ) : (
            <></>
          )}
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

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
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
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
