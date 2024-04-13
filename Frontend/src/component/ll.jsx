import React from 'react';
import Footer from './footer';
import { Link } from "react-router-dom";
import Navbar from './navigationbar';
import Header from './header';
// import './home.css';

const LL = () => {
  return (
    <div>
        <Header></Header>
<Navbar></Navbar>
    <main>
    <Link to="/instruction" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Application For new LL
    </Link>

    <Link to="/quiz" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        LL Test
    </Link>

    <Link to="/tutorialll" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Tutorial for LL Test
    </Link>

    <Link to="/samplequestion" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Sample questin for LL Test
    </Link>

    <Link to="/form3" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Print LL (Form 3)
    </Link><br /><br />
    <img className='llimg' src="/photo/image-296.png" alt="Image Description" />
    </main>

    <footer>
       <Footer></Footer>
    </footer>
    </div>
  );
};

export default LL;
