import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

const TutorialDL = () => {
  return (
    <div id="body">
      <Header></Header>
    <main>
    <section class="content">
    
    
      </section>
      <h2><b>Video Player</b></h2><br />
      <center><video width="840" height="460" autoPlay>
        <source src="/video/Learning License Test Questions _ LL Test Questions _ Driving Licence Test _ RTO Exam Computer Test.mp4" type="video/mp4"  />
        Your browser does not support the video tag.
      </video></center>

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

export default TutorialDL;
