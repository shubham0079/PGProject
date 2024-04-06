import React from 'react';
import Footer from './footer';
import { Link } from "react-router-dom";
import Navbar from './navigationbar';
import Header from './header';
// import './home.css';

const DL = () => {
  return (
    <div>
<Header></Header>
<Navbar></Navbar>
    <main>
    <Link to="/instructiondl" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Application For new DL
    </Link>

    {/* <Link to="/Login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"> */}
        {/* Application Print */}
    {/* </Link> */}

    <Link to="/tutorialdl" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Tutorial for DL Test
    </Link>

    <Link to="/Login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Print DL (Form 3)
    </Link><br /><br />

    <img className='llimg' src="/photo/image-296.png" alt="Image Description" />
    </main>

    <footer>
       <Footer></Footer>
    </footer>
    </div>
  );
};

export default DL;
