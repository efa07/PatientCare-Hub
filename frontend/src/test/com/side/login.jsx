import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login success!");
      window.location.href = '/';
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="con2">
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">PatientHub</span>
          <span className="title">Log in</span>
          <form onSubmit={handleLogin}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary">Log in</button>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </form>
        </div>
      </div>
      <div className="illustration">
        <img src="public/Login-amico.png" alt="Login illustration" />
      </div>
    </div>
  );
}

export default LoginPage;
