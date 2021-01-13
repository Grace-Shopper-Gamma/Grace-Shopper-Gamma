import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import cartReducer from './cart'
import stickerReducer from './stickers.js'
import pinsReducer from './pins'
import singleSticker from './singleSticker'

const reducer = combineReducers({
  user,
  cart: cartReducer,
  stickers: stickerReducer,
  pins: pinsReducer,
  sticker: singleSticker
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
