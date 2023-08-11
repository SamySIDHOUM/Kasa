import React from 'react';
import homeBanner from '../assets/home_banner_mer.png';


export default function Home() {
  return (
    <div>
      <div className="container">
        <img src={homeBanner} alt="Home Banner" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}

