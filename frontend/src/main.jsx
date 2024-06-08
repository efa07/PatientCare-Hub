import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LoginPage from './test/com/side/login.jsx';
import SignUp from './test/com/side/signup.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './test/com/side/notefound.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  </React.StrictMode>,
)
