import axios from 'axios'

const SET_ORDERS = 'SET_ORDERS'

export const _setOrders = orders => ({type: SET_ORDERS, orders})

export const fetchOrders = () => {
  return async dispatch => {
    try {
      const orders = (await axios.get('/api/orders')).data
      dispatch(_setOrders(orders))
    } catch (error) {
      console.error(error)
    }
  }
}

export default function orderReducer(state = [], action) {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders
    default:
      return state
  }
}
