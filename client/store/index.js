import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import cartReducer from './cart'
import orderReducer from './checkout'
import stickerReducer from './stickers.js'
import pinsReducer from './pins'
import singleSticker from './singleSticker'
import singlePin from './singlePin'

const reducer = combineReducers({
  user,
  stickers: stickerReducer,
  cartItems: cartReducer,
  pins: pinsReducer,
  sticker: singleSticker,
  pin: singlePin,
  order: orderReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
