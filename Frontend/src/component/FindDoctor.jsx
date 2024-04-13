import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './test.css';
import Footer from './footer';
import Header from './header';
import { Document, Page } from "react-pdf";

const FindDoctor = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div id="body">
  <Header></Header>
    <main>
    <section class="content">
    <h2><b>Doctor</b></h2>
    </section>
    <div>
      <label htmlFor="">Find your Doctor by RTO wise     .</label>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select RTO</option>
        <option value="MH42 - DY.RTO,BARAMATI.pdf">MH42 - DY.RTO,BARAMATI</option>
        <option value="MH16 - DY.RTO,AHMEDNAGAR.pdf">MH16 - DY.RTO,AHMEDNAGAR</option>
        <option value="MH45 - DY.RTO,AKLUJ.pdf">MH45 - DY.RTO,AKLUJ</option>
        <option value="MH30 - DY.RTO,AKOLA.pdf"> MH30 - DY.RTO,AKOLA</option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
        <option value=".pdf"> </option>
      </select>
      {selectedOption && (
        <iframe
          title="PDF Viewer"
          src={`/pdf/${selectedOption}`}
          width="100%"
          height="600"
        ></iframe>
      )}
    </div><section><br /><br /></section>
    <Link to="/regdoctor" >
   <button>Registor</button>    </Link>

    <Link to="/home"  >
    <button>Home</button> 
    </Link>    
   
    </main>

    <footer>
       <Footer></Footer>
    </footer>
    </div>
  );
};

export default FindDoctor;
