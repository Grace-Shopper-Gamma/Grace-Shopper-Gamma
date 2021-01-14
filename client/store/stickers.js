import axios from 'axios'
import history from '../history'

const GET_STICKER = 'GET_STICKER'
const REMOVE_STICKER = 'REMOVE_STICKER'

const defaultsticker = []

const getSticker = stickers => ({type: GET_STICKER, stickers})
const removesticker = () => ({type: REMOVE_STICKER})

export const getStickers = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    const result = res.data.filter(item => item.category === 'Stickers')
    dispatch(getSticker(result || defaultsticker))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultsticker, action) {
  switch (action.type) {
    case GET_STICKER:
      return action.stickers
    case REMOVE_STICKER:
      return defaultsticker
    default:
      return state
  }
}
