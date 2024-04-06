import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import VideoPlayer from './videoll';
import Footer from './footer';
import Header from './header';

const TutorialLL = () => {
  return (
    <div id="body">
      <Header></Header>
    <main>
    <section class="content">
    <h2>Tutorial for Learner Licence Test</h2>
    
      </section>
   <VideoPlayer></VideoPlayer>

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

export default TutorialLL;
