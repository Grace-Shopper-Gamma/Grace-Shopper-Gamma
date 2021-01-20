import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/orders'

class Orders extends Component {
  componentDidMount() {
    this.props.getOrders()
  }

  render() {
    const {orders} = this.props
    const orderArr = orders[0] ? orders[0] : []
    const productArr = orders[1] ? orders[1] : []
    for (let i = 0; i < orderArr.length; i++) {
      productArr[i].push(orderArr[i])
    }
    console.log('productArr ', productArr)
    return (
      <div id="orders-container">
        {productArr.map(x => {
          return (
            <div id="inner-orders-container" key={x.id}>
              <h5>
                confirmation #:
                {x.filter(j => j.confirmation).map(conf => conf.confirmation)}
              </h5>
              <h5>
                order date:
                {x
                  .filter(j => j.confirmation)
                  .map(date => date.createdAt)
                  .join('')
                  .substr(0, 10)}
              </h5>
              {x.filter(a => a.description).map(y => {
                return (
                  <div key={y.id}>
                    <h5>{y.name && y.name}</h5>
                    <h5>qty: {y.item && y.item.quantity}</h5>
                    <img src={y.imageUrl ? y.imageUrl : null} />
                  </div>
                )
              })}
            </div>
          )
        })}
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
