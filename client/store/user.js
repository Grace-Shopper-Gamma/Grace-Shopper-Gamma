import axios from 'axios'
import history from '../history'

const GET_USER = 'GET_USER'
const UPDATE_USER = 'UPDATE_USER'
const REMOVE_USER = 'REMOVE_USER'

const defaultUser = {}

const getUser = user => ({type: GET_USER, user})
const update = () => ({type: UPDATE_USER})
const removeUser = () => ({type: REMOVE_USER})

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (info, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, info)
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const updateUser = user => async dispatch => {
  try {
    await axios.put('/auth/update', {user})
    dispatch(update())
    // history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
