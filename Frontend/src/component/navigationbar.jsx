import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/home">Home</a></li>
        <li className="nav-item"><a href="/ll">Learner Licence</a></li>
        <li className="nav-item"><a href="/dl">Driving Licence</a></li>
        <li className="nav-item"><a href="/finddrivings">Driving School</a></li>
        <li className="nav-item"><a href="/finddoctor">Find Doctor</a></li>
        <li className="nav-item"><a href="/rsc">Road Safety Content</a></li>
        <li className="nav-item"><a href="/moterva">MOTOR VEHICLES ACT </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
