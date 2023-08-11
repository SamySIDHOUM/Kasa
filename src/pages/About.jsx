import React from 'react';
import aboutBanner from '../assets/about_banner_montagne.png';

const aboutData = [
  {
    "title": "Fiabilité",
    "text": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  },
  {
    "title": "Respect",
    "text": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    "title": "Service",
    "text": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  },
  {
    "title": "Sécurité",
    "text": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
];

export default function About() {
  return (
    <div>
      <div className="container">
        <img src={aboutBanner} alt="About Banner" />
        {/* Ajout de la section "À propos" en utilisant les données aboutData */}
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

