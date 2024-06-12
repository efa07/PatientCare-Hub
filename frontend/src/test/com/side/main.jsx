import './main.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from './firebase';

const MainSection = ({ selectedPatient }) => {

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
    <div className="main">
      <div id="navbar">
        <div style={{ flex: 3 }}>
          <p>PatientCare Hub</p>
        </div>
        <div className="dropdown">
          <button className="btn btn-success">Settings</button>
          <div className="dropdown-content">
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '4.4rem',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '0'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}>
                <img src="public/re.png" alt="User" />
                <p>User one</p>
              </div>
              <img src="/public/icons/more.png" alt="More" className="more" />
            </div>
            <div>
              <button className="btn btn-danger" onClick={handleLogout}>Sign out</button>
            </div>
          </div>
        </div>
      </div>

      {selectedPatient && (
        <div>
          <div className="fulid bg-success">
            <div className="patientInfo">
              <div className="patientImg">
                <img src={selectedPatient.img} alt="Patient" />
              </div>
              <div className="patientdata">
                <span>ID: {selectedPatient.id}</span>
                <span>Full Name: {selectedPatient.name} {selectedPatient.lastName}</span>
                <span>Age: {selectedPatient.age}</span>
                <span>Address: {selectedPatient.addres}</span>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {!selectedPatient && <p style={{ position: "absolute", top: '50%', left: '50%', fontSize: '2rem' }}>Select a patient to view details</p>}
    </div>
  );
};

export default MainSection;
