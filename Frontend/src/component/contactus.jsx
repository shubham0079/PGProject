import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

const Contactus = () => {
  return (
    <div id="body">
<Header></Header>
    <main>
    <section class="content">
    <h2>Contact Us</h2>
    <p>For any technical problems you may contact
Sarathi, National Transport Project.
Phone no: 0120-4925505 from 6 am to 10 pm all days, 
 </p>

    <p>E-mail id:helpdesk-sarathi[at]gov[dot]in</p>
    
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

export default Contactus;
