import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_STICKER = 'GET_STICKER'
const REMOVE_STICKER = 'REMOVE_STICKER'

/**
 * INITIAL STATE
 */
const defaultsticker = []

/**
 * ACTION CREATORS
 */
// try to be consistent with conventions - in other files you use _getSingleSticker
const getSticker = stickers => ({type: GET_STICKER, stickers})
const removesticker = () => ({type: REMOVE_STICKER})

/**
 * THUNK CREATORS
 */
export const getStickers = () => async dispatch => {
  try {
    const res = await axios.get('/api/sticker')
    dispatch(getSticker(res.data || defaultsticker))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
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
