import React from 'react';
import homeBanner from '../assets/home_banner_mer.png';
import Cards from "../components/Cards";
import '../styles/_banner.scss';


export default function Home() {
  return (
    <div>
      <div className="container">
        <img src={homeBanner} alt="Home Banner" className="img-banner"  />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <Cards />
    </div>
  );
}

