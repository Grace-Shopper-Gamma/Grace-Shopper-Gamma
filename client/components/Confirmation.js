import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getConfirmation} from '../store/checkout'

class Confirmation extends Component {
  componentDidMount() {
    this.props.loadConfirmation(this.props.orderId)
  }

  render() {
    const {confirmation} = this.props
    return <div>This is your confirmation number: {confirmation}</div>
  }
}

const mapState = state => ({confirmation: state.confirmation})
const mapDispatch = dispatch => ({
  loadConfirmation: orderId => dispatch(getConfirmation(orderId))
})

export default connect(mapState, mapDispatch)(Confirmation)
