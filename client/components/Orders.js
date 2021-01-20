import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/orders'

class Orders extends Component {
  componentDidMount() {
    this.props.getOrders()
  }

  render() {
    const {orders} = this.props
    console.log('orders ', orders)
    return (
      <div id="orders-container">
        <div id="inner-orders-container">
          {orders.map(x => {
            return (
              <div key={x.id} id="order-div">
                <h5>confirmation #: {x.confirmation}</h5>
                <h5>order date: {x.createdAt.substr(0, 10)}</h5>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = ({orders}) => {
  return {
    orders
  }
}

const mapDispatch = dispatch => {
  return {
    getOrders: () => dispatch(fetchOrders())
  }
}

export default connect(mapState, mapDispatch)(Orders)
