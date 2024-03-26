import React from 'react';
import { Link } from "react-router-dom";
import './test.css';


const VideoPlayer = () => {
  return (
    <div id="body">
      <h2>Video Player</h2>
      <video controls width="640" height="360">
        <source src="/video/Road_Safety.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    

    </div>
  );
};

export default VideoPlayer;
