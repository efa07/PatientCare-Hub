import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth ,db} from './firebase';
import {setDoc, doc} from 'firebase/firestore';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [file, setFile] = useState(null);

  const handleRegister = async (e) => { 
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if(user){
        await setDoc(doc(db, "users", user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          photoURL: file
        });
      }
      console.log("signup success !");
      toast.success("Signup success !", {autoClose: 2000,position:'top-center'});
    
    } catch(error) {
      console.log(error.message);
      toast.error(error.message, {autoClose: 2000
      });
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className='logo'>TelMed</span>
          <span className='title'>Register</span>

          <form onSubmit={handleRegister}>
            <input
              type="text" 
              placeholder='First name'  
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}/>

            <input 
              type="text" 
              placeholder='Last name' 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}/>
            
            <input 
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

            <input 
              type="password" 
              placeholder='Password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="file" style={{ cursor: "pointer" }}>
              <img src='./public/icons/img.png' alt="Upload Icon" />
            </label>
            <input
              type="file"
              className='file'
              id='file'
              onChange={handleFileChange}
            />

            <button className='btn btn-primary'>Sign up</button>
            <p>Have an account? <Link to="/login">Log in</Link></p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
