import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './test.css';

const Category = () => {
    const [selectedState, setSelectedState] = useState('');

    const handleStateChange = (event) => {
      setSelectedState(event.target.value);
    };
  
    const indianStates = [
      'General','Ex-Serviceman'
      
    ];
  return (
    <div id="body">
<header>
        <h1>Parivahan Mitra</h1>

    </header>
    <main>
    <section class="content">
    <label htmlFor="state" className="form-label">Select Category :</label>
      <select id="state" className="form-select" value={selectedState} onChange={handleStateChange}>
        <option value="">Select...</option>
        {indianStates.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>

      <p className="mt-3">Selected Category : {selectedState}</p>
      </section>
      <Link to="/info" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
      Continue
    </Link>
    </main>

    <footer>
        &copy; 2024 Your Web Page
    </footer>
    </div>
  );
};

export default Category;
