import React, { useState } from 'react';
import './signup.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
 

  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className='logo'>TelMed</span>
          <span className='title'>Register</span>

          <form>
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />

            <label htmlFor="file" style={{ cursor: "pointer" }}>
              <img src='./public/icons/img.png' alt="Upload Icon" />
            </label>
            <input type="file" className='file' id='file' />

            <button className='btn btn-primary'>Sign up</button>
            <p>Have an account ? <Link to="/login">Log in</Link>
</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
