import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';

const Acknowledgement = () => {
  return (
    <div id="body">
<header>
        <h1>Parivahan Mitra</h1>

    </header>
    <main>
    <section class="content">
    <h2>Acknowledgement</h2>
    <p>Application No:</p>
    <p>Application Date:</p>
    <p>Name:</p>
    <p>D.O.B:</p>
    <p>Blood Group:</p>
    <p>Father Name:</p>
    <p>Applicant Gender</p>
    
      </section>

      <Link to="/photosign"  >
    Next
    </Link>
    
   
    </main>

    <footer>
        <Footer></Footer>
    </footer>
    </div>
  );
};

export default Acknowledgement;
