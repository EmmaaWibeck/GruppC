import { useState } from 'react';
import loginImg from '../img/avatar.png'
import './style.scss'


const LoginForm = () => {

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

  return (
    <div className="base-container">
      <div className="image">
        <img src={loginImg} alt="" />
      </div>
      <div className="header">Login</div>
      <div className="content">
        <div className="form">
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input value={formData.email} onChange={onChange} type="email" name="email" placeholder="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input value={formData.password} onChange={onChange} type="password" name="password" placeholder="password"/>
          </div>
        </div>
        <p>Not registerd? <a href="/register" className='link'> Register here!</a></p>
      </div>
      <div className="footer">
        <button type="button" className="btn">Login</button>
      </div>
    </div>
  );
}

export default LoginForm