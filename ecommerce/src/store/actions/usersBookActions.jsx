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

/* the following codes are from early JS2 Assignment
login: async ({commit}, user) => {
  const res = await axios.post('users/login', user)
  if(res.status === 200) {
    localStorage.setItem('item', res.data.token)
    commit('SET_USER', res.data.token)
  }
},
logout: ({commit}) => {
  try {
    localStorage.removeItem('token')
    commit('SET_USER', null)
  } catch {
    console.log('not logged in')
  }
},
checkUser: ({commit}) => {
  let token = localStorage.getItem('token')
  if(token) {
    commit('SET_USER', token)
  }
} */