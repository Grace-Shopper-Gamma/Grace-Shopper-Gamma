import axios from 'axios'

const GET_SINGLE_STICKER = 'GET_SINGLE_STICKER'

const _getSingleSticker = sticker => ({type: GET_SINGLE_STICKER, sticker})

export const getSingleSticker = id => {
  return async dispatch => {
    try {
      const {data: sticker} = await axios.get(`/api/products/${id}`)
      dispatch(_getSingleSticker(sticker))
    } catch (error) {
      console.error(error)
    }
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_STICKER:
      return action.sticker
    default:
      return state
  }
}
