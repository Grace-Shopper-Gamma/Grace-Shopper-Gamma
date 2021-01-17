import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {auth} from '../store'

const SignUpForm = props => {
  const {requestError} = props
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = () => {
    setError('')
    if (!name || !email || !password || !confirmPassword) {
      setError('Some fields are incomplete')
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters')
    } else if (password !== confirmPassword) {
      setError('Passwords do not match')
    } else {
      props.signUp({name, email, password}, 'signup')
    }
  }

  return (
    <div className="auth-container center">
      <form>
        <h1 className="form-input title">Sign up!</h1>
        <div className="auth-form">
          <label htmlFor="userName">
            <input
              className="form-input input"
              name="userName"
              type="text"
              value={name}
              onChange={({target: {value}}) => setName(value)}
              placeholder="Name"
            />
          </label>

          <label htmlFor="email" />
          <input
            className="form-input input"
            name="email"
            type="email"
            value={email}
            onChange={({target: {value}}) => setEmail(value)}
            placeholder="Email"
          />

          <label htmlFor="password" />
          <input
            className="form-input input"
            name="password"
            type="password"
            value={password}
            onChange={({target: {value}}) => setPassword(value)}
            placeholder="Password"
          />

          <label htmlFor="confirmPassword">
            <input
              className="form-input input"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={({target: {value}}) => setConfirmPassword(value)}
              placeholder="Confirm Password"
            />
          </label>

          <button
            type="button"
            onClick={handleSignUp}
            className="form-btn form-input"
          >
            Sign up
          </button>

          {error.length ? (
            <div className="error-msg">{error}</div>
          ) : requestError ? (
            <div className="error-msg">Email already in use</div>
          ) : (
            <></>
          )}

          <Link to="/login">
            <p className="oauth-signup-msg">Already a user?</p>
          </Link>
        </div>
      </form>
    </div>
  )
}

const mapState = state => ({requestError: state.user.error})

const mapDispatch = dispatch => ({
  signUp: (name, email, password) => dispatch(auth(name, email, password))
})

export default connect(mapState, mapDispatch)(SignUpForm)
