import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

const FAQ1 = () => {
  return (
    <div id="body">
    <Header></Header>
    <main>
    <section class="content">
    <h2> FAQS-LEARNER LICENCE</h2>
    
      </section>
      <iframe src="/pdf/LEARNER LICENCE.pdf" width="100%" height="600px" />

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

export default FAQ1;