import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';

const Mva3 = () => {
  return (
    <div id="body">
<header>
        <h1>Parivahan Mitra</h1>

    </header>
    <main>
    <section class="content">
    <h2> THE MOTOR VEHICLES ACT, 1988</h2>
    
      </section>
      <iframe src="/pdf/ACT, 2019.pdf" width="100%" height="600px" />

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

export default Mva3;