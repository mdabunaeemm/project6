import React from 'react';
import possibilityImage from '../../assets/my-pic.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Let&apos;s Build Something <br /> amazing with MDAN</h1>
      <p> If you think you are going to make bussness in this case you need to create High quality Website to sell your product or services.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
