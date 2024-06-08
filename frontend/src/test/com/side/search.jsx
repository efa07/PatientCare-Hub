import './search.css'
import React, { useState } from 'react';
import pro from '/public/icons/profile.png';

const SearchSection = ({ patients, onPatientSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  

  const handleSearchChange = (e) => {
    e.preventDefault();

    setSearchQuery(e.target.value);
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='search'>
      <div className="top">
        <div className="logo1">
        <span className="logo"></span>
        </div>
        <div className="logout">
          <button className="btn bg-danger" id='btn'>Log out</button>
        </div>
        
       </div>
      
      <input type="text" placeholder="Search patients..." onChange={handleSearchChange} />
      <ul>
        {filteredPatients.map(patient => (
          <li key={patient.id} onClick={() => onPatientSelect(patient)}>
            <img src={pro} alt="" />
            <p>{patient.name} {patient.lastName}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSection;
