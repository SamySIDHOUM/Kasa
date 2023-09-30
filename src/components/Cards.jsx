import logements from '../data/logements.json'
import { Link } from 'react-router-dom'
import '../styles/_cards.scss'; 

export default function Cards() {
  return (
    <div className="gallery">
      {logements.map(({ id, title, cover }) => (
        <Link key={id} to={`/logements/${id}`}>
          <article>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
          </article>
        </Link>
      ))}
    </div>
  )
}