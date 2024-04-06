import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

const DashBoard = () => {
  return (
    <div id="body">
<Header></Header>
    <main>
    <section class="content">
    <h2>Dashboard</h2>
    <p>The Ministry of Road Transport & Highways has been facilitating computerization of more than 1000 Road Transport Offices (RTOs) across the country. RTOs issue Registration Certificate (RC) & Driving License (DL) that are valid across the country. It was necessary to define same standards for these documents on a pan-India level to ensure interoperability and correctness and timely availability of information. SCOSTA committee setup for this purpose had recommended a uniform standardized software across the country. Ministry entrusted National Informatics Centre the task to standardize & deploy the software VAHAN for Vehicle Registration and SARATHI for Driving Licenses and compilation of data with respect to Vehicle Registration and Driving Licenses of all the states in State Register and National Register.</p>

    <p>The VAHAN & SARATHI are conceptualized to capture the functionalities as mandated by Central Motor Vehicle Act, 1988 as well as State motor vehicle Rules with customization in the core product to suit the requirements of 36 States.</p>
    
      </section>

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

export default DashBoard;
