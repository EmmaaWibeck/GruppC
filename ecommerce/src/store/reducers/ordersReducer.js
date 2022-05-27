import actiontypes from "../actiontypes";

const initState = {
  data: [],
  loading: false,
  error: null
}

const ordersReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().orders.loading:
      return {
        ...state,
        loading: action.payload
      }

    case actiontypes().orders.setOrders:
      return {
        data: action.payload,
        loading: false,
        error: null
      }

    case actiontypes().orders.failure:
      return {
        data: [],
        loading: false,
        error: action.payload
      }

    // case actiontypes().orders.addNewOrder:
    //   return {
    //     ...state,
    //     data: [...state.data, action.payload],
    //     loading: false,
    //     error: null
    //   }

    default:
      return state
  }
}


export default ordersReducer