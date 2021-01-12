import axios from 'axios'

const GET_SINGLE_PIN = 'GET_SINGLE_PIN'

const _getSinglePin = pin => ({type: GET_SINGLE_PIN, pin})

export const getSinglePin = id => {
  return async dispatch => {
    try {
      const {data: pin} = await axios.get(`/api/pins/${id}`)
      dispatch(_getSinglePin(pin))
    } catch (err) {
      console.log(err)
    }
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_PIN:
      return action.pin
    default:
      return state
  }
}
