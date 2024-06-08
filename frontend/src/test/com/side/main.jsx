import './main.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainSection = ({ selectedPatient }) => {
 

  return (
    <div className='main'>

      <div id="navbar">
        <div style={{flex:3}}><p>PatientCare Hub</p></div>


  <div class="dropdown">
        <button class="btn btn-success">Settings</button>
        <div class="dropdown-content">
        <div style={{display:'flex',
        flexDirection:'row'
        ,gap:'2rem',
         alignItems:'center',
         margin:'0'
         }}>
          <img src='public/re.png' />
          <p>User one</p>
        </div>
        <div>
            <button className='btn btn-danger'>Sign out</button>
          </div>
        
  </div>
</div>
      </div>

      {selectedPatient && (
        <div>
          <div className="container bg-success">
            <div className="patientInfo">

              <div className="patientImg">
                  <img src={selectedPatient.img} alt="" />
                </div>
                  <div className="patientdata">
                    <span>ID: {selectedPatient.id}</span>
                    <span>Full Name: {selectedPatient.name } {selectedPatient.lastName}</span>
                    <span>Age: {selectedPatient.age}</span>
                    <span>Addres: {selectedPatient.addres}</span>
                    <span>Phone: {selectedPatient.phone}</span>
                    <span>Date: {selectedPatient.date}</span>
                  </div>  

              <div className="history">
                <h2>History</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae neque veniam velit quas nemo eius numquam ipsum doloribus, nihil consectetur, deleniti cupiditate delectus sunt nulla fugiat corrupti sit assumenda explicabo.</p>
                </div>    
          </div>
            </div>

<div className="ptable">
  <table className="table">
  <thead className="thead-dark bg-dark">
    <tr>
      <th scope="col">DATE</th>
      <th scope="col">Lab result</th>
      <th scope="col">Diagnosis</th>
      <th scope="col">Status</th>
      <th scope="col">Hisrory</th>
      <th scope="col">Prescription</th>
      <th scope="col">Action</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{selectedPatient.date}</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>testing</td>
      <td>testing</td>
      <td>testing</td>
      <td>testing</td>
      
    </tr>
    
  </tbody>
</table>



          </div>
        </div>
      )}

      {!selectedPatient && <p style={{position:"absolute",top:'50%',left:'50%',fontSize:'2rem'}}>Select a patient to view details</p>}
    </div>
  );
};

export default MainSection;
