import axios from 'axios'

const SET_CARTITEMS = 'SET_CARTITEMS'
const CREATE_CARTITEM = 'CREATE_CARTITEM'
const DELETE_CARTITEM = 'DELETE_CARTITEM'
const UPDATE_CARTITEM = 'UPDATE_CARTITEM'
const SUBMIT_ORDER = 'SUBMIT_ORDER'

export const _setCartItems = cartItems => ({type: SET_CARTITEMS, cartItems})

export const fetchCartItems = () => {
  return async dispatch => {
    try {
      const cartItems = (await axios.get('/api/cart')).data
      dispatch(_setCartItems(cartItems))
    } catch (error) {
      console.log(error)
    }
  }
}

export const createCartItem = id => {
  return async dispatch => {
    await axios.post(`/api/cart/${id}`)
    dispatch(fetchCartItems())
  }
}

const _deleteCartItem = cartItem => ({type: DELETE_CARTITEM, cartItem})

export const deleteCartItem = cartItem => {
  return async dispatch => {
    await axios.delete(`/api/cart/${cartItem.id}`)
    dispatch(_deleteCartItem(cartItem))
  }
}

const _updateCartItem = cartItem => ({type: UPDATE_CARTITEM, cartItem})

export const updateCartItem = item => {
  return async dispatch => {
    const updated = (await axios.put(`/api/cart/${item.id}`, item)).data
    dispatch(_updateCartItem(updated))
  }
}

const _submitOrder = () => {
  return {
    type: SUBMIT_ORDER
  }
}

export const submitOrder = order => {
  return async dispatch => {
    await axios.put(`api/cart`, order)
    dispatch(_submitOrder())
  }
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case SET_CARTITEMS:
      return action.cartItems
    case UPDATE_CARTITEM:
      return state.map(cartItem => {
        if (cartItem.id === action.cartItem.productId) {
          cartItem.item.quantity = action.cartItem.quantity
          cartItem.item.status = action.cartItem.status
        }
        return cartItem
      })
    case DELETE_CARTITEM:
      return state.filter(cartItem => cartItem.id !== action.cartItem.id)
    case CREATE_CARTITEM:
      return [...state, action.cartItem]
    case SUBMIT_ORDER:
      return []
    default:
      return state
  }
}
