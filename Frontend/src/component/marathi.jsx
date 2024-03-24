import React from 'react';
import { Link } from "react-router-dom";
import './test.css';

const Marathi = () => {
  return (
    <div id="body">
<header>
        <h1>Parivahan Mitra</h1>

    </header>
    <main>
    <section class="content">
    <h2> Learner Licence Test Marathi</h2>
    
      </section>
      <iframe src="/pdf/marathi.pdf" width="100%" height="600px" />

    <Link to="/home"  >
    Home
    </Link>
    
   
    </main>

    <footer>
        &copy; 2024 Your Web Page
    </footer>
    </div>
  );
};

export default Marathi;