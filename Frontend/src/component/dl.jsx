import React from 'react';

import { Link } from "react-router-dom";
import Navbar from './navigationbar';
// import './home.css';

const DL = () => {
  return (
    <div>
<header>
        <h1>Parivahan Mitra</h1>

    </header>
<Navbar></Navbar>
    <main>
    <Link to="/instruction" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Application For new LL
    </Link>

    <Link to="/Login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Application Print
    </Link>

    <Link to="/tutorialll" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Tutorial for LL Test
    </Link>

    <Link to="/samplequestion" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Sample questin for LL Test
    </Link>

    <Link to="/Login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Print LL (Form 3)
    </Link>
    </main>

    <footer>
        &copy; 2024 Your Web Page
    </footer>
    </div>
  );
};

export default DL;
