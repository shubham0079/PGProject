import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';

const SampleQuestion = () => {
  return (
    <div id="body">
<header>
        <h1>Parivahan Mitra</h1>

    </header>
    <main>
    <section class="content">
    
      </section>
    <Link to="/marathi" >
    Marathi
    </Link>

    <Link to="/english" >
    English
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

export default SampleQuestion;
