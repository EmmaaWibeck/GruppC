import axios from 'axios'
import actiontypes from '../actiontypes'

export const getProductById = (id) => {
  return async dispatch => {
    dispatch(loadProductStart())

    try {
      const res = await axios.get('http://localhost:9999/api/products/' + id)
      dispatch(loadProductSuccess(res.data))
    } 
    catch (err) {
      dispatch(loadProductFailure(err.message))
    }

  }
}

const loadProductStart = () => {
  return {
    type: actiontypes().product.loadProductStart
  }
}

const loadProductSuccess = (product) => {
  return {
    type: actiontypes().product.loadProductSuccess,
    product: product
  }
}

const loadProductFailure = (err) => {
  return {
    type: actiontypes().product.loadProductFailure,
    payload: err
  }
}

export const clearProduct = () => {
  return {
    type: actiontypes().product.clearProduct
  }
}