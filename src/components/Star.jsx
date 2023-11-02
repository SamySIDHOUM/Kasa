import React from 'react';
import "../styles/_star.scss"

export default function Stars({ rating }) {
  // Tableau représentant toutes les étoiles possibles
  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      {/* Mapping à travers le tableau d'étoiles pour créer chaque étoile */}
      {stars.map((star, id) => (
        <i
          key={id}
          // La classe de l'étoile dépend de la note
          className={
            rating >= star
              ? 'starActive fa-solid fa-star'
              : 'starInactive fa-solid fa-star'
          }
        ></i>
      ))}
    </>
  );
}
