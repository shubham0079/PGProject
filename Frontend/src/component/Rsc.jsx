import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';


const Rsc = () => {
  return (
    <div id="body">
      <Header></Header>
    <main>
    <section class="content">
    <h2>Road Safety Content</h2>
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
    </Link><br /><br /><br />
    
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

export default Rsc;
