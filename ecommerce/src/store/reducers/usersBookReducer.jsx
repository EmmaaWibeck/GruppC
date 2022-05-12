import actiontypes from '../actiontypes'

const initState = {
  loading: false,
  error: null,
  data: []
}

const usersBookReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().usersBook.getUsersBook:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}

export default usersBookReducer