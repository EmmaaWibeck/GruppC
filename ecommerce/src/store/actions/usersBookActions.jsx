import actiontypes from '../actiontypes'

import axios from 'axios'

export const getUsersBook = () => {
  return async dispatch => {
    dispatch({
      type: actiontypes().usersBook.getUsersBook
    })

    try {
      const res = await axios.get('http://localhost:9999/api/users')
    } catch (err) {

    }
  }
}
