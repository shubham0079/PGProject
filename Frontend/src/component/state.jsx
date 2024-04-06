import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Header from './header';
import Footer from './footer';


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
        <main className='state'>
        <img className='i1' src="/photo/bannerpic.jpg" alt="Image Description" /><br /><br /><br />
        <p>Online services in this portal are available only for the States listed below</p>
          <p>Please select the State from where the service is to be taken</p>

      <label htmlFor="state" className="form-label"><b>Select a State:</b></label>
      <select id="state" className="form-select" value={selectedState} onChange={handleStateChange}>
        <option value="">Select...</option>
        {indianStates.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
          
      <p className="mt-3">Selected State: {selectedState}</p>
      <Link to="/home">
      <button>Continue</button>
    </Link>
    </main>

    <footer>
        <Footer></Footer>  
    </footer>
    </div>
  );
};

export default State;
