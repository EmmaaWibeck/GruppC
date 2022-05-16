import actiontypes from "../actiontypes";

const initState = {
  data: null,
  loading: false,
  error: null
}

const productDetailReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().product.loadProductStart:
      return {
        ...state,
        loading: true
      }

    case actiontypes().product.loadProductSuccess:
      return {
        ...state,
        data: action.product,
        loading: false,
        error: null
      }

    case actiontypes().product.loadProductFailure:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload
      }

    case actiontypes().product.clearProduct:
      return {
        ...state,
        data: null
      }

    default:
      return state
  }
}

export default productDetailReducer;