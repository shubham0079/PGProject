import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

const RoadSafetyvideo1 = () => {
  return (
    <div id="body">
    <Header></Header>
    <main>
    <section class="content">    
      </section>
      <h2>Road Safety</h2>
      <video controls width="640" height="360" autoPlay>
        <source src="/video/Road Safety.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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

export default RoadSafetyvideo1;
