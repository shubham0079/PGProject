import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';

const MotorVehiclesAct = () => {
  return (
    <div id="body">
<header>
        <h1>Parivahan Mitra</h1>

    </header>
    <main>
    <section class="content">
    
      </section>
    <Link to="/mva1" >
    THE MOTOR VEHICLES ACT, 1988
    </Link><br />

    <Link to="/mva2" >
    THE MOTOR VEHICLES (AMENDMENT)
    </Link><br />

    <Link to="/mva3" >
    ACT, 2019
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

export default MotorVehiclesAct;
