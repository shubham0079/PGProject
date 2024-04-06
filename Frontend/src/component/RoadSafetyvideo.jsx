import React from 'react';
import { Link } from "react-router-dom";
import './test.css';

const RoadSafetyvideo = () => {
  return (
    <div id="body">
      <h2><b>Road Safety - Akshay Kumar</b></h2><br />
      <video  width="840" height="460" autoPlay>
        <source src="/video/Short video on Road Safety - Akshay Kumar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    

    </div>
  );
};

export default RoadSafetyvideo;
