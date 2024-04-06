import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

const SampleQuestion = () => {
  return (
    <div id="body">
      <Header></Header>
    <main>
    <section class="content">
    
      </section>
    <Link to="/marathi" >
    <button>Marathi</button>                  </Link>

    <Link to="/english" >
    <button>English</button>                       </Link>

    <Link to="/home"  >
    <button>Home</button>                      </Link>    
   
    </main>

    <footer>
       <Footer></Footer>
    </footer>
    </div>
  );
};

export default SampleQuestion;
