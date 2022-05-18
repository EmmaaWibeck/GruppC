const actiontypes = () => {
  return {
    auth: {
      loading: 'AUTH_LOADING',
      authFailure: 'AUTH_FAILURE',
      authSuccess: 'AUTH_SUCCESS',
      logout: 'LOGOUT'
    }
  }
}

export default actiontypes;