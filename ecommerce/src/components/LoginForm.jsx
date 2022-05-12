import { useState } from 'react';
import loginImg from '../img/avatar.png'
import './style.scss'


const LoginForm = ({ Login, error }) => {

  const [details, setDetails] = useState({
    email: '',
    password: ''
  })

  const onClickHandler =e => {
    e.preventDefault();
    Login(details);
  }
  
  const onChange = e => {
    setDetails(details => ({
    ...details,
    [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="base-container">
      {(error != "") ? ( <div className='error'>{error}</div>) : ""}
      <div className="image">
        <img src={loginImg} alt="" />
      </div>
      <div className="header">Login</div>
      <div className="content">
        <form className="form">
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="email" onChange={onChange} value={details.email}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="password" onChange={onChange} value={details.password}/>
          </div>
        </form>
        <p>Not registerd? <a href="/register" className='link'> Register here!</a></p>
      </div>
      <div className="footer">
        <button onClick={onClickHandler} type="button" className="btn">Login</button>
      </div>
    </div>
  );
}

export default LoginForm