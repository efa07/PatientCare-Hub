import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'
const LoginPage = () => {
  

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className='logo'>TelMed</span>
        <span className='title'>Log in</span>
        <form >
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button className='btn btn-primary'>Log in</button>
          <p>Don't hava account ? <Link to='/signup'>Sign up</Link></p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
