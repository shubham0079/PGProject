import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';

const FindDrivingS = () => {
  return (
    <div id="body">
<header>
        <h1>Parivahan Mitra</h1>

    </header>
    <main>
    <section class="content">
    </section>
    <Link to="/instrctionschool" >
    Registor
    </Link>

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

export default FindDrivingS;
