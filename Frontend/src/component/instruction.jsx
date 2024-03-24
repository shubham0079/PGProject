import React from 'react';
import { Link } from "react-router-dom";
import './test.css';

const Instruction = () => {
  return (
    <div id="body">
<header>
        <h1>Parivahan Mitra</h1>

    </header>
    <main>
    <section class="content">
    <h2>Instructions for Application Submission</h2>
    <p>Following are the stages of application for applying learners licence</p>
    <p>1.  FILL APPLICATION DETAILS LL</p>
    <p>2.  UPLOAD PHOTO AND SIGNATURE (In case of eKYC through Aadhaar, only Signature need to be uploaded)</p>
    <p>3.  UPLOAD DOCUMENTS</p>
    <p>4.  FEE PAYMENT</p>
    <p>5.  VERIFY THE PAYMENT STATUS</p>
    <p>6.  PRINT THE RECEIPT</p>
    <p>7.  LL SLOT BOOK</p>
    <h2>NOTE : Please go through the Road Safety tutorial before proceeding for online Learners Licence test.</h2>
      </section>
    <Link to="/Category" >
    Continue
    </Link>

    <Link to="/home"  >
    Home
    </Link>
    
   
    </main>

    <footer>
        &copy; 2024 Your Web Page
    </footer>
    </div>
  );
};

export default Instruction;
