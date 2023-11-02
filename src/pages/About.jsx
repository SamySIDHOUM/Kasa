import React from 'react';
import aboutBanner from '../assets/about_banner_montagne.png';
import '../styles/_about.scss';
import aboutData from '../data/aboutLogements.json'
import Collapse from '../components/Collapse';


export default function About() {
  return (
    <div>
      <div className="container">
        <img src={aboutBanner} alt="About Banner" className="img-about-banner" />
        {/* Mapping à travers les données de aboutLogements.json pour afficher les informations de Collapse */}
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title} text = {item.text}/>
        ))}
      </div>
    </div>
  );
}

