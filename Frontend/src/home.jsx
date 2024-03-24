import React from 'react';
import Navbar from './component/navigationbar';
import './home.css';
import Footer from './component/footer';

const Home = () => {
  return (
    <div>
<header>
        <h1>Parivahan Mitra</h1>

    </header>
    <h2>MOTOR VEHICLES DEPARTMENT, GOVERNMENT OF MAHARASHTRA</h2>
<Navbar></Navbar>
    <main>
        <p>This is a simple web page.</p>
        
       
    </main>

    <footer>
        <Footer></Footer>
    </footer>
    </div>
  );
};

export default Home;
