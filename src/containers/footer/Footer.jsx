import React from 'react';
import './footer.css';

const logo = 'MDAN';
const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to make website for your bussness?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p> Let&apos;s Talk </p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <h1>{logo}</h1>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Facebook</p>
        <p>GitHube</p>
        <p>Linkdin</p>
        <p>Twitter</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Muhammad Abu Naeem</p>
        <p>01942475167</p>
        <p>muhammadabunaeem@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 MDAN. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
