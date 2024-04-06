import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';


const FAQ = () => {
  return (
    <div id="body">
<Header></Header>
    <main>
    <section class="content">
    
      </section>
    <Link to="/FAQ1" >
    FAQS-LEARNER LICENCE
    </Link><br />

    <Link to="/FAQ2" >
    FAQS-DRIVING LICENCE
    </Link><br />

    <Link to="/FAQ3" >
    FAQS-DL SERVICES
    </Link><br />

    <Link to="/FAQ4" >
    FAQS-FEE PAYMENT
    </Link><br />
    
    
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

export default FAQ;
