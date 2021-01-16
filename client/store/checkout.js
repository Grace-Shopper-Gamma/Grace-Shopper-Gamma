import axios from 'axios'

const CREATE_ORDER = 'CREATE_ORDER'

const _createOrder = order => {
  return {
    type: CREATE_ORDER,
    order
  }
}

export const createOrder = order => {
  return async dispatch => {
    const created = (await axios.post('/api/checkout/:id', order)).data
    dispatch(_createOrder(created))
  }
}

export default function orderReducer(state = [], action) {
  if (action.type === CREATE_ORDER) {
    return [...state, action.order]
  }
  return state
}
