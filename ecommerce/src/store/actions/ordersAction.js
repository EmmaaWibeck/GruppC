import axios from 'axios'
import actiontypes from '../actiontypes'


export const getOrders = () => {
    return async dispatch => {
      dispatch(loading(true))
      try {
        const res = await axios.get('http://localhost:9999/api/orders')
        console.log(res.data)
        dispatch(setOrders(res.data))
      }
      catch(err) {
        dispatch(ordersFailure(err.message))
      }
    }
}
  
  const loading = (payload) => {
    return {
      type: actiontypes().orders.loading,
      payload
    }
  }
  
  const setOrders = (orders) => {
    return {
      type: actiontypes().orders.setOrders,
      payload: orders
    }
  }
  
  const ordersFailure = (payload) => {
    return {
      type: actiontypes().orders.failure,
      payload
    }
  }
  


//   export const addOrder = (order) => {
//     return async dispatch => {
//       dispatch(loading(true))
//       try {
//         const res = await axios.post('http://localhost:9999/api/orders', order)
//         dispatch(addToOrderList(res.data))
//       }
//       catch(err) {
//         dispatch(ordersFailure(err.message))
//       }
//     }
//   }
  
//   const addToOrderList = (order) => {
//     return {
//       type: actiontypes().orders.addNewOrder,
//       payload: order
//     }
//   }