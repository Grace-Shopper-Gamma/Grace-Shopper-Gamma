import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getConfirmation} from '../store/checkout'

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import {green} from '@material-ui/core/colors'

class Confirmation extends Component {
  componentDidMount() {
    this.props.loadConfirmation(this.props.orderId)
  }

  render() {
    const {confirmation, user: {email}} = this.props
    return (
      <div className="confirmation-container">
        <div className="confirmation-header">
          <CheckCircleOutlineIcon style={{color: green[500]}} />
          <p> Thank you for your purchase!</p>
        </div>
        <hr />
        <p>Your confirmation number is: {confirmation}</p>
        <p>A receipt will be sent to: {email}.</p>
      </div>
    )
  }
}

const mapState = state => ({
  confirmation: state.confirmation,
  user: state.user
})
const mapDispatch = dispatch => ({
  loadConfirmation: orderId => dispatch(getConfirmation(orderId))
})

export default connect(mapState, mapDispatch)(Confirmation)
