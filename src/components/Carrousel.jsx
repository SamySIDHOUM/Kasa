import React, { useState } from 'react';
import '../styles/_carrousel.scss';

export default function Carrousel({ pictures }) {
  //Suivre l'indice de l'image actuelle 
  const [currentSlide, setCurrentSlide] = useState(0);
  const picturesLength = pictures.length;

  // Fonction pour passer à la prochaine image 
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === picturesLength - 1 ? 0 : prevSlide + 1));
  };
  // Fonction pour revenir à l'image précédente
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
    {/* Condition pour afficher les détails du carrousel s'il y a plus d'une image */}
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
