import React from 'react';
import "../styles/_star.scss"

export default function Stars({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      {stars.map((star, id) => (
        <i
          key={id}
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
