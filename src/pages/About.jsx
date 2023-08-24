import React from 'react';
import aboutBanner from '../assets/about_banner_montagne.png';
import '../styles/_about.scss';
import aboutData from '../data/aboutLogements.json'


export default function About() {
  return (
    <div>
      <div className="container">
        <img src={aboutBanner} alt="About Banner" className="img-about-banner" />
        {aboutData.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

