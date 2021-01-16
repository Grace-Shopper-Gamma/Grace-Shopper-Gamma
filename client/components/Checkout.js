import React from 'react'
import {createOrder} from '../store/checkout'
import {connect} from 'react-redux'

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      order: {
        amount: '',
        orderDate: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.setState({
      amount: 5,
      orderDate: Date.UTC()
    })
    this.props.createOrder({...this.state})
  }

  render() {
    const {handleSubmit} = this

    return (
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    createOrder: order => dispatch(createOrder(order))
  }
}

export default connect(null, mapDispatch)(Checkout)
