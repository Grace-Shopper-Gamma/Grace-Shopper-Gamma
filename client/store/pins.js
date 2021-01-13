import axios from 'axios'

const GET_PINS = 'GET_PINS'

const _getPins = pins => ({type: GET_PINS, pins})

export const getPins = () => {
  return async dispatch => {
    try {
      const {data: pins} = await axios.get('/api/pins')
      dispatch(_getPins(pins))
      console.log(pins)
    } catch (err) {
      console.log(err)
    }
  }
}

export default function pinsReducer(state = [], action) {
  switch (action.type) {
    case GET_PINS:
      return action.pins
    default:
      return state
  }
}
