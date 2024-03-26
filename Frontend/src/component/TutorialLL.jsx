import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import VideoPlayer from './videoll';
import Footer from './footer';

const TutorialLL = () => {
  return (
    <div id="body">
<header>
        <h1>Parivahan Mitra</h1>

    </header>
    <main>
    <section class="content">
    <h2>Tutorial for Learner Licence Test</h2>
    
      </section>
   <VideoPlayer></VideoPlayer>

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

export default TutorialLL;
