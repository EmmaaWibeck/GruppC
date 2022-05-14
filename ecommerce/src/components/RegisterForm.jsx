import { useState } from 'react';
import loginImg from '../img/avatar.png'
import './style.scss'


const RegisterForm = () => {

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  };
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });


  return (
    <div className="base-container">
      <div className="image">
        <img src={loginImg} alt="" />
      </div>
      <div className="header">Register</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="firstName">First name:</label>
            <input value={formData.firstName} onChange={onChange} type="text" id="firstName" name="firstName" placeholder="Enter first name"/>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name:</label>
            <input value={formData.lastName} onChange={onChange} type="text" id="lastName" name="lastName" placeholder="Enter last name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input value={formData.email} onChange={onChange} type="email" name="email" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input value={formData.password} onChange={onChange} type="password" name="password" placeholder="Enter password"/>
          </div>
        </div>
        <p>Already registerd? <a href="/login"  className='link'> Login here!</a></p>
      </div>
      <div className="footer">
        <button type="button" className="btn"
          onClick={() => {
            console.log(formData)
          }}
        >Register</button>
      </div>
    </div>
  );
}

export default RegisterForm