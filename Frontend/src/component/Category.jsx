import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

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
<Header></Header>
    <main>
    <section class="content">
    <label htmlFor="state" className="form-label">Select Category :</label>
      <select id="state" className="form-select" value={selectedState} onChange={handleStateChange} >
        <option value="">Select...</option>
        {indianStates.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>

      <p className="mt-3">Selected Category : {selectedState}</p>
      </section>
      <Link to="/info" >
      <button>Continue</button>
    </Link>
    </main>

    <footer>
        <Footer></Footer>
    </footer>
    </div>
  );
};

export default Category;
