import React, { useState } from 'react';
import Sidebar from './test/com/side/side';
import './App.css'
import MainSection from './test/com/side/main';
import img from "/public/re.png"

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
  {id:1,name:'Bilal',
  lastName:"two",
  img:img,
  age:33,
  addres:"testing",
  phone:1234567890,
  date:currentDate.toDateString(),
},
{id:2,name:'Adeel',
lastName:"three",
img:img,
age:54,
addres:"testing",
phone:54354235,
date:currentDate.toDateString(),
},
{id:3,name:'christian',
lastName:"fore",
img:img,
age:23,
addres:"testing",
phone:45325345,
date:currentDate.toDateString(),
labResult:"lab result"
},
{id:0,name:'choudhary',
lastName:"one",
img:img,
age:23,
addres:"testing",
phone:1234567890,
date:currentDate.toDateString(),
}, 
{id:1,name:'Bilal',
lastName:"two",
img:img,
age:33,
addres:"testing",
phone:1234567890,
date:currentDate.toDateString(),
},
{id:2,name:'Adeel',
lastName:"three",
img:img,
age:54,
addres:"testing",
phone:54354235,
date:currentDate.toDateString(),
},
{id:3,name:'christian',
lastName:"fore",
img:img,
age:23,
addres:"testing",
phone:45325345,
date:currentDate.toDateString(),
labResult:"lab result"
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