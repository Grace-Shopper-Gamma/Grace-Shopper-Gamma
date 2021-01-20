import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../store/admins'
import FormButton from './FormButton'

class UserCard extends Component {
  constructor() {
    super()
    this.state = {
      isAdmin: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({isAdmin: this.props.user.isAdmin})
  }

  handleSubmit() {}

  render() {
    const {user: {name, email}} = this.props

    const {isAdmin} = this.state

    return (
      <div className="user-card">
        <p>
          <strong>Name: </strong> {name}
        </p>
        <p>
          <strong>Email: </strong> {email}
        </p>
        <p>
          <strong>Admin :</strong> {`${isAdmin}`}
        </p>
        <div className="user-radio">
          <strong>Change admin status:</strong>
          <label htmlFor="true">
            <input
              className="user-radio-input"
              type="radio"
              onChange={() => this.setState({isAdmin: true})}
              checked={isAdmin}
            />
            Create admin
          </label>
          <label htmlFor="false">
            <input
              className="user-radio-input"
              type="radio"
              onChange={() => this.setState({isAdmin: false})}
              checked={!isAdmin}
            />
            Revoke admin
          </label>
        </div>
        <FormButton
          displayName="Update"
          handleSubmit={() =>
            this.props.updateUser({...this.state, id: this.props.user.id})
          }
        />
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  updateUser: update => dispatch(updateUser(update))
})

export default connect(null, mapDispatch)(UserCard)
