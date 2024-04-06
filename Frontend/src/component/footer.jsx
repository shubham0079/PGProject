import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <div>
      <ul className="nav-list">
        <li><span><img src="/photo/g20-logo.png" alt="Image Description" /></span></li>
        <span>          </span>
        <li ><img src="/photo/digital_logo_main.png" alt="Image Description" /></li>
      </ul>

      <Link to="/FAQ"  >
        <b>FAQ</b>      </Link>

      <Link to="/contactus"  >
        <b>Contact us</b>   </Link>

      <Link to="/feedback"  >
        <b>Feedback</b>     </Link>
    </div>
  );
};

export default Footer;
