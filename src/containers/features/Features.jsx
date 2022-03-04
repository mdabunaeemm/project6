import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'HTML',
    text: 'HTML is the standard markup language for Web pages. With HTML you can create your own Website.',
  },
  {
    title: 'CSS',
    text: 'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
  },
  {
    title: 'JavaSript',
    text: 'JavaScript is the world,s most popular programming language. JavaScript is the programming language of the Web.',
  },
  {
    title: 'React',
    text: 'React is a JavaScript library for building user interfaces.  React is used to build single page applications.',
  },
  {
    title: 'Node',
    text: 'Node.js is an open source server environment. Node.js allows you to run JavaScript on the server.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">We work with MERN. It is most popular for making a new website.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
