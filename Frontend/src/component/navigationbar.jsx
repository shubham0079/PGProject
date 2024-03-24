import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/home">Home</a></li>
        <li className="nav-item"><a href="/ll">LL</a></li>
        <li className="nav-item"><a href="/dl">DL</a></li>
        <li className="nav-item"><a href="/finddrivings">DS</a></li>
        <li className="nav-item"><a href="/finddoctor">FD</a></li>
        <li className="nav-item"><a href="#conta">RSC</a></li>
        <li className="nav-item"><a href="/moterva">MVA</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
