import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loginUser } from '../store/actions/authActions'

import './style.css'
import loginImg from '../img/avatar.png'


const LoginForm = ({setLogin}) => {
  
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSub = e => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }

  return (
    <div className="base-container">
      <div className="image">
        <img src={loginImg} alt="" />
      </div>
      <h2 className="header">Login</h2>
      <form onSubmit={handleSub} className="form content">
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input value={formData.email} onChange={onChange} type="email" id='email' name='email' placeholder="enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input value={formData.password} onChange={onChange} type="password" id='password' name='password' placeholder="enter password"/>
        </div>
        <p className='p-forms'>Not Registered? <span onClick={() => setLogin(false)} className='link'>Register here!</span></p>
        <button className='btn-forms'>{loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default LoginForm