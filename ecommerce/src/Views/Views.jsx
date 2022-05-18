import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginView from './LoginView'


const Views = () => {
  return (
    <Routes>
      <Route path='/' element={ <LoginView /> } />
    </Routes>
  )
}

export default Views