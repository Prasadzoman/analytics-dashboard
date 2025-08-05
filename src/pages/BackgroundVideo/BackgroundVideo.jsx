import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bgvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="dark-overlay" />
      <div className="overlay-content">
        <h1>ADmyBRAND Insights</h1>
        <p>Welcome to the future of analytics</p>
      </div>
    </div>
  );
};

export default BackgroundVideo;
