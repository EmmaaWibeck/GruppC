import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginView from './LoginView'
import RegisterView from './RegisterView'


const Views = () => {
  return (
    <Routes>
      <Route path='/login' element={ <LoginView /> } />
      <Route path='/register' element={ <RegisterView /> } />
    </Routes>
  )
}

export default Views