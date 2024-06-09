import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LoginPage from './test/com/side/login.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './test/com/side/notefound.jsx';
import {ToastContainer} from 'react-toastify'
import App from './App.jsx'
import SignUp from './test/com/side/signup.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<>
<div className='con2'>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
</div>

</>

  </React.StrictMode>,
)
