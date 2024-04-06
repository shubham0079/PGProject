import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './test.css';
import Footer from './footer';
import Header from './header';

function FindDoctor  () {
  const [records, setRecords] = useState([])
  useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {setRecords(res.data)})
      .catch(err => console.log(err))
        
  }, [])

  return (
    <div id="body">
  <Header></Header>
    <main>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {records.map((r, i)=> {
            <tr key={i}>
              <td>{r.id}</td>
              <td>{r.name}</td>

            </tr>
          })}
        </tbody>
      </table>
    </div>
    <section class="content">
    <h2>Doctor</h2>
    </section>
    <Link to="/regdoctor" >
   <button>Registor</button>    </Link>

    <Link to="/home"  >
    <button>Home</button> 
    </Link>    
   
    </main>

    <footer>
       <Footer></Footer>
    </footer>
    </div>
  )
}

export default FindDoctor;
