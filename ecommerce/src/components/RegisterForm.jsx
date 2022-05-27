import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../store/actions/authActions'

import './style.css'
import loginImg from '../img/avatar.png'

const RegisterForm = ({setLogin}) => {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    dispatch(registerUser(formData))
  }

  return (
    <div className="base-container">
      <div className="image">
        <img src={loginImg} alt="" />
      </div>
      <h2 className="header">Registeration</h2>
      <form onSubmit={handleSub} className="form content">
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input value={formData.firstName} onChange={onChange} type="text" id='firstName' name='firstName' placeholder="enter first name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input value={formData.lastName} onChange={onChange} type="text" id='lastName' name='lastName' placeholder="enter last name"  />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input value={formData.email} onChange={onChange} type="email" id='email' name='email' placeholder="enter email"  />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input value={formData.password} onChange={onChange} type="password" id='password' name='password' placeholder="enter password"  />
        </div>
        <p className='p-forms'>Already a member? <span onClick={() => setLogin(true)} className='link'>Login here!</span></p>
        <div>
          <button className='btn-forms'>{loading ? 'Loading...' : 'Sign up'}</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm