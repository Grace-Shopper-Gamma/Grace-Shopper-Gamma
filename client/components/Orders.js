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

    return (
      <div id="orders-container">
        <h2 id="orderHistoryTitle"> Order History</h2>
        {productArr.map(x => {
          return (
            <div id="inner-orders-container" key={x.id}>
              <h4 id="confOrder">
                <a>Confirmation #:</a>{' '}
                {x.filter(j => j.confirmation).map(conf => conf.confirmation)}
              </h4>
              <h5 id="confOrder">
                <a>Order Date:</a>{' '}
                {x
                  .filter(j => j.confirmation)
                  .map(date => date.createdAt)
                  .join('')
                  .substr(0, 10)}
              </h5>
              {x.filter(a => a.description).map(y => {
                return (
                  <div key={y.id} className="purchasedItems">
                    <div className="row">
                      <div className="column">
                        <div className="subColumn1">
                          <img src={y.imageUrl ? y.imageUrl : null} />
                        </div>
                        <div className="column">
                          <div className="subColumn2">
                            <h5>
                              <a>Name:</a> {y.name && y.name}
                            </h5>
                          </div>
                        </div>
                        <div className="column">
                          <div className="subColumn3">
                            <h5>Quantity: {y.item.quantity}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
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
