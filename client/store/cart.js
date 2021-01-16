import axios from 'axios'

const SET_CARTITEMS = 'SET_CARTITEMS'
const CREATE_CARTITEM = 'CREATE_CARTITEM'
const DELETE_CARTITEM = 'DELETE_CARTITEM'
const UPDATE_CARTITEM = 'UPDATE_CARTITEM'

export const _setCartItems = cartItems => {
  return {
    type: SET_CARTITEMS,
    cartItems
  }
}

export const fetchCartItems = () => {
  return async dispatch => {
    try {
      const cartItems = await (await axios.get('/api/cart')).data
      dispatch(_setCartItems(cartItems))
    } catch (error) {
      console.log(error)
    }
  }
}

const _createCartItem = cartItem => {
  return {
    type: CREATE_CARTITEM,
    cartItem
  }
}

export const createCartItem = id => {
  return async dispatch => {
    const [created] = (await axios.post(`/api/cart/${id}`)).data
    dispatch(_createCartItem(created))
  }
}

const _deleteCartItem = cartItem => {
  return {
    type: DELETE_CARTITEM,
    cartItem
  }
}

export const deleteCartItem = cartItem => {
  return async dispatch => {
    await axios.delete(`/api/cart/${cartItem.id}`)
    dispatch(_deleteCartItem(cartItem))
  }
}

const _updateCartItem = cartItem => {
  return {
    type: UPDATE_CARTITEM,
    cartItem
  }
}

export const updateCartItem = item => {
  return async dispatch => {
    const updated = (await axios.put(`/api/cart/${item.id}`, item)).data
    dispatch(_updateCartItem(updated))
  }
}

export default function cartReducer(state = [], action) {
  if (action.type === SET_CARTITEMS) {
    return action.cartItems
  }
  if (action.type === UPDATE_CARTITEM) {
    return state.map(
      cartItem =>
        cartItem.id === action.cartItem.id ? action.cartItem : cartItem
    )
  }
  if (action.type === DELETE_CARTITEM) {
    return state.filter(cartItem => cartItem.id !== action.cartItem.id)
  }
  if (action.type === CREATE_CARTITEM) {
    return [...state, action.cartItem]
  }
  return state
}
