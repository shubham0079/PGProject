import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

const State = () => {
  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
    'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
    'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
  ];

  return (
    <div id="body">
   <Header></Header>
        <main>
        <img className='i1' src="/bannerpic.jpg" alt="Image Description" />
        <p>Online services in this portal are available only for the States listed below</p>
          <p>Please select the State from where the service is to be taken</p>

      <label htmlFor="state" className="form-label">Select a State:</label>
      <select id="state" className="form-select" value={selectedState} onChange={handleStateChange}>
        <option value="">Select...</option>
        {indianStates.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
          
      <p className="mt-3">Selected State: {selectedState}</p>
      <Link to="/home" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
      Continue
    </Link>
    </main>

    <footer>
        <Footer></Footer>
        


        
    </footer>
    </div>
  );
};

export default State;