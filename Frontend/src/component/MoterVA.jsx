import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

const MotorVehiclesAct = () => {
  return (
    <div id="body">
      <Header></Header>
    <main>
    <section class="content">
    <h2>MOTOR VEHICLES ACT</h2>
      </section>
    <Link to="/mva1" >
    THE MOTOR VEHICLES ACT, 1988
    </Link><br />

    <Link to="/mva2" >
    THE MOTOR VEHICLES (AMENDMENT)
    </Link><br />

    <Link to="/mva3" >
    ACT, 2019
    </Link><br /><br />

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

export default MotorVehiclesAct;
