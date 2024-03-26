import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';


const Rsc = () => {
  return (
    <div id="body">
<header>
        <h1>Parivahan Mitra</h1>

    </header>
    <main>
    <section class="content">
    
      </section>
    <Link to="/rsc1" >
    Training manual for drivers
    </Link><br />

    <Link to="/rsc2" >
    Road Safety Measures
    </Link><br />

    <Link to="/rsc3" >
    Road Safety Books
    </Link><br />

    <Link to="/rsc4"  >
    ADVANCING ROAD SAFETY IN INDIA
    </Link><br />

    <Link to="/rsvideo1"  >
    Road Safety video
    </Link><br />
    
    <Link to="/home"  >
    Home
    </Link>
   
    </main>

    <footer>
       <Footer></Footer>
    </footer>
    </div>
  );
};

export default Rsc;
