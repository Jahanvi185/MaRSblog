import React from 'react';
import AIImage from './AI.jpg';
const FeaturedSection = () => (
  <div className="featured">
    <div className="featured-post">
      <h3>AI in Robotics</h3>
      <p>Simulating real-time tasks for robot automation, decision-making, and precision using machine learning models.</p>
      <button>Read More</button>
    </div>
    <img src={AIImage} alt="AI in Robotics" className="featured-image" />
  </div>
);

export default FeaturedSection;
