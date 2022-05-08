import { useState } from 'react';
import loginImg from '../img/avatar.png'
import './style.scss'


const RegisterForm = () => {

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  })
  
  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="base-container">
      <div className="image">
        <img src={loginImg} alt="" />
      </div>
      <div className="header">Register</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="userName">Full name:</label>
            <input value={formData.userName} onChange={onChange} type="text" id="userName" name="userName" placeholder="full name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input value={formData.email} onChange={onChange} type="email" name="email" placeholder="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input value={formData.password} onChange={onChange} type="password" name="password" placeholder="password"/>
          </div>
        </div>
        <p>Already registerd? <a href="/login"  className='link'> Login here!</a></p>
      </div>
      <div className="footer">
        <button type="button" className="btn">Register</button>
      </div>
    </div>
  );
}

export default RegisterForm