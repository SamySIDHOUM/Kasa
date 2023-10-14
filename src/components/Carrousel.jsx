import React, { useState } from 'react';
import '../styles/_carrousel.scss';

export default function Carrousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const picturesLength = pictures.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === picturesLength - 1 ? 0 : prevSlide + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? picturesLength - 1 : prevSlide - 1));
  };

  return (
    <div className="carrousel">
      <img
        className="carrousel-slide"
        src={pictures[currentSlide]}
        alt="Photographie du logement"
      />
    
      {picturesLength > 1 && (
        <div className="carrousel-details">
          <div className="carrousel-navigation">
            <i
              onClick={previousSlide}
              className="carrousel-navigation-left fa-solid fa-chevron-left"
            ></i>
            <i
              onClick={nextSlide}
              className="carrousel-navigation-right fa-solid fa-chevron-right"
            ></i>
          </div>
          <span className="total">
            {currentSlide + 1} / {picturesLength}
          </span>
        </div>
      )}
    </div>
  );
}
