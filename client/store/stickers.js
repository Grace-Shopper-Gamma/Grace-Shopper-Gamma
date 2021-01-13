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
const defaultsticker = {}

/**
 * ACTION CREATORS
 */
const getsticker = sticker => ({type: GET_STICKER, sticker})
const removesticker = () => ({type: REMOVE_STICKER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getsticker(res.data || defaultsticker))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (
  name,
  description,
  image,
  price,
  quantity
) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {
      name,
      description,
      image,
      price,
      quantity
    })
  } catch (authError) {
    return dispatch(getsticker({error: authError}))
  }

  try {
    dispatch(getsticker(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removesticker())
    history.push('/login')
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
      return action.sticker
    case REMOVE_STICKER:
      return defaultsticker
    default:
      return state
  }
}
