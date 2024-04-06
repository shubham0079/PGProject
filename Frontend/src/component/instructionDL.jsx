import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

const InstructionDL = () => {
  return (
    <div id="body">
      <Header></Header>
    <main>
    <section class="content">
    <h2>Instructions for Application Submission</h2>
    <p>Following are the stages of application for applying Driving licence</p>
    <p>1.  FILL APPLICATION DETAILS LL</p>
    <p>2.  UPLOAD DOCUMENTS </p>
    <p>3.  UPLOAD PHOTO AND SIGNATURE IF REQUIRE</p>
    <p>4.  DL TEST SLOT BOOKING</p>
    <p>5.  PAYMENT OF FEE</p>
      </section>
    
    <Link to="/dldetails">
    <button>Continue</button>    </Link>
    
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

export default InstructionDL;
