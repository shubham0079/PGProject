import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';

const Rsc1 = () => {
  return (
    <div id="body">
<header>
        <h1>Parivahan Mitra</h1>

    </header>
    <main>
    <section class="content">
    <h2> Training manual for drivers</h2>
    
      </section>
      <iframe src="/pdf/Training manual for drivers.pdf" width="100%" height="600px" />

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

export default Rsc1;