import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

const _getProducts = products => ({type: GET_PRODUCTS, products})
const _getSingleProduct = singleProduct => ({
  type: GET_SINGLE_PRODUCT,
  singleProduct
})

export const getProducts = () => {
  return async dispatch => {
    try {
      const {data: products} = await axios.get('/api/products')
      dispatch(_getProducts(products))
    } catch (err) {
      console.error(err)
    }
  }
}

export const getSingleProduct = id => {
  return async dispatch => {
    try {
      const {data: singleProduct} = await axios.get(`/api/products/${id}`)
      dispatch(_getSingleProduct(singleProduct))
    } catch (err) {
      console.error(err)
    }
  }
}

export const deleteProduct = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/products/${id}`)
      dispatch(getProducts())
    } catch (error) {
      console.error(error)
    }
  }
}

export const updateProduct = (id, update) => {
  return async dispatch => {
    try {
      await axios.put(`/api/products/${id}`, update)
      dispatch(getProducts())
    } catch (error) {
      console.error(error)
    }
  }
}

export default function productsReducer(
  state = {products: [], singleProduct: {}},
  action
) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, products: action.products}
    case GET_SINGLE_PRODUCT:
      return {...state, singleProduct: action.singleProduct}
    default:
      return state
  }
}
