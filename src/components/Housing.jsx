import "../styles/_housing.scss";

export default function Housing({ title, location, tags, host, rating }) {
    return (
      <div className="housing-info">
        <div className="housing-description">
          <h3>{title}</h3>
          <p>{location}</p>
          <ul className="housing-tags">
            {tags.map((tag, id) => (
              <li key={id}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="housing-host">
          <div className="host-info">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
          </div>
          <div className="stars">
            {rating} étoiles
          </div>
        </div>
      </div>
    );
  }
  