import React from 'react';
import { Link } from "react-router-dom";
import './test.css';

const RoadSafetyvideo = () => {
  return (
    <div id="body">
      <h2>Road Safety - Akshay Kumar</h2>
      <video controls width="640" height="360" autoPlay>
        <source src="/video/Short video on Road Safety - Akshay Kumar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    

    </div>
  );
};

export default RoadSafetyvideo;
