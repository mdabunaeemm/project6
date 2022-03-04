import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="MDAN" text="Hi there, we are providing you high quality website and we give you urgent services." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Let&apos;s build something amazing with MDAN</h1>
      <p>Explore the our Works</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Contacts" text="nnayimx@gmail.com Or muhammadabunaeem@gmail.com" />
      <Feature title="Knowledgebase" text="HTML, CSS, JavaScript, React, Node " />
      <Feature title="Education" text="SSC from Bhashanchar SM High School" />
    </div>
  </div>
);

export default WhatGPT3;
