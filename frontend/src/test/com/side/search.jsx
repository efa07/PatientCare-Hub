import './search.css';
import React, { useState } from 'react';
import pro from '/public/icons/profile.png';
import { auth } from './firebase';

const SearchSection = ({ patients, onPatientSelect }) => {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Update search query state when input value changes
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  // Filter patients based on the search query
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  async function handleLogout() {
    try {
      await auth.signOut(); 
      window.location.href = '/login';
      localStorage.removeItem('user'); 
      console.log('logout success');
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="search">
      <div className="top">
        <div className="logo1">
          <img src="/public/icon.png" alt="Logo" /> 
        </div>
        <div className="logout">
          <button className="btn bg-danger" id="btn" onClick={handleLogout}>Log out</button>
        </div>
      </div>
      <input type="text" placeholder="Search patients..." onChange={handleSearchChange} /> 
      <ul>
        {filteredPatients.map(patient => (
          <li key={patient.id} onClick={() => onPatientSelect(patient)}> 
            <img src={pro} alt="Profile" /> 
            <p>{patient.name} {patient.lastName}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSection;
