import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

const InstructionSchool = () => {
  return (
    <div id="body">
      <Header></Header>
    <main>
    <section class="content">
    <h2>Instructions for Application Submission</h2>
    <p>Following are the stages in Application Submission in Issuing Motor Driving School Licence in the following order</p>
    <p>1. FILL APPLICATION DETAILS LL</p>
    <p>2. Upload Documents (if required)</p>
    <p>3. Upload Photo and Signature if required (applicable only in certain states)</p>
    </section>
    <Link to="/regschool" >
    <button>Continue</button>
    </Link>

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

export default InstructionSchool;
