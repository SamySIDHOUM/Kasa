import logements from '../data/logements.json'
import { Link } from 'react-router-dom'
import '../styles/_cards.scss'; 

export default function Cards() {
  return (
    <div className="gallery">
      {logements.map(({ id, title, cover }) => (
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
