import actiontypes from '../actiontypes'

const initState = {
  loading: false,
  error: null,
  data: []
}

const usersBookReducer = (state = initState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default usersBookReducer