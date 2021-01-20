import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import cartReducer from './cart'
import productsReducer from './products'
import confirmationReducer from './checkout'
import usersReducer from './admins'

const reducer = combineReducers({
  user,
  inventory: productsReducer,
  cartItems: cartReducer,
  confirmation: confirmationReducer,
  users: usersReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
