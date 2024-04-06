import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

const English = () => {
  return (
    <div id="body">
<Header></Header>
    <main>
    <section class="content">
    <h2> Learner Licence Test Marathi</h2>
    
      </section>
      <iframe src="/pdf/english.pdf" width="100%" height="600px" />

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

export default English;