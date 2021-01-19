import axios from 'axios'

const GET_CONFIRMATION = 'GET_CONFIRMATION'

const _getConfirmation = confirmation => {
  return {
    type: GET_CONFIRMATION,
    confirmation
  }
}

export const getConfirmation = orderId => {
  return async dispatch => {
    const confirmation = (await axios.get(`/api/checkout/${orderId}`)).data
    dispatch(_getConfirmation(confirmation))
  }
}

export default function confirmationReducer(state = '', action) {
  switch (action.type) {
    case GET_CONFIRMATION:
      return action.confirmation
    default:
      return state
  }
}
