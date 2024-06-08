import React, { useState } from 'react';
import Sidebar from './test/com/side/side';
import './App.css'
import MainSection from './test/com/side/main';
import img from "/public/re.png"
import LoginPage from './test/com/side/login.jsx';
import SignUp from './test/com/side/signup.jsx';

const App = () => {
  let currentDate = new Date();

  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  // Sample patient data
  const patients = [
    {id:0,name:'choudhary',
    lastName:"one",
    img:img,
    age:23,
    addres:"testing",
    phone:1234567890,
    date:currentDate.toDateString(),
  }, 
  {id:0,name:'Bilal',
  lastName:"two",
  img:img,
  age:23,
  addres:"testing",
  phone:1234567890,
  date:currentDate.toDateString(),
},
{id:0,name:'Adeel',
lastName:"three",
img:img,
age:23,
addres:"testing",
phone:1234567890,
date:currentDate.toDateString(),
},
{id:0,name:'christian',
lastName:"fore",
img:img,
age:23,
addres:"testing",
phone:1234567890,
date:currentDate.toDateString(),
},
    
  ];

  return (
    <div className='test'>
   
      <Sidebar patients={patients} onPatientSelect={handlePatientSelect} />
      <MainSection selectedPatient={selectedPatient} />
       

    </div>
  );
};

export default App;
