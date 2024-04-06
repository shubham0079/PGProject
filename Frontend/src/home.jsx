import React from 'react';
import Navbar from './component/navigationbar';
import Footer from './component/footer';
import RoadSafetyvideo from './component/RoadSafetyvideo';
import Header from './component/header';
import './home.css';

const Home = () => {
  return (
    <div>
<header>
        <Header></Header>

    </header>
    <h2 className='title'>MOTOR VEHICLES DEPARTMENT, GOVERNMENT OF MAHARASHTRA</h2>
<Navbar></Navbar>
    <main>
      <p><h1>Why is a Driving License important?</h1>
A driver’s license is a document that permits one to drive on the road, the ownership of this document certifies that an individual is aware of the road laws, signs and is capable of driving a vehicle. Under the Motor Vehicle Act, 1988 having a valid driving license is mandatory by law. Not having a driver’s license whilst driving will inflict a heavy penalty and in some cases a prison sentence as well. One more advantage of the driving license is that it doubles up as an identity proof, so, in case you lose it, chances are that it might come back to you. However, we strongly recommend that you immediately file an FIR if you lose it as there is a possibility of misuse as well</p>
        <p><center><RoadSafetyvideo></RoadSafetyvideo></center></p>
        
       
    </main>

    <footer>
        <Footer></Footer>
    </footer>
    </div>
  );
};

export default Home;
