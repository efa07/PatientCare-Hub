import React from 'react';
import SearchSection from './search';
import './side.css'
const Sidebar = ({ patients, onPatientSelect }) => {
  return (
    <div className='sidebar'>
      <SearchSection patients={patients} onPatientSelect={onPatientSelect} />
    </div>
  );
};

export default Sidebar;
