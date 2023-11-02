import logements from '../data/logements.json'
import { Link } from 'react-router-dom'
import '../styles/_cards.scss'; 

export default function Cards() {
  return (
    <div className="gallery">
      {/* Mapping à travers les données de logements.json pour afficher chaque carte */}
      {logements.map(({ id, title, cover }) => (
        // Utilisation du composant Link pour créer un lien vers la page du logement
        <Link key={id} to={`/logements/${id}`}>
          <figure>
            <img src={cover} alt={title} />
            <figcaption>
              <h3>{title}</h3>
            </figcaption>
          </figure>
        </Link>
      ))}
    </div>
  )
}
