import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

const FindDrivingS = () => {
  return (
    <div id="body">
      <Header></Header>
    <main>
    <section class="content">
      <h2>Driving School</h2>
    </section>
    <Link to="/instrctionschool" >
    <button>Registor</button>      </Link>
    
    <Link to="/home"  >
    <button>Home</button> 
    </Link><br /><br />

    <img className='llimg' src="/photo/driving-schoo.avif" alt="Image Description" />
    </main>

    <footer>
       <Footer></Footer>
    </footer>
    </div>
  );
};

export default FindDrivingS;
