import "../styles/_housing.scss";
import Tags from "./Tag";
import Stars from "./Star";

export default function Housing({ title, location, tags, host, rating }) {
    return (
      <div className="housing-info">
        <div className="housing-description">
          <h3>{title}</h3>
          <p>{location}</p>
          <ul className="housing-tags">
            <Tags tags={tags} />
          </ul>
        </div>
        <div className="housing-host">
          <div className="host-info">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
          </div>
          <div className="stars">
            <Stars rating={rating} />
          </div>
        </div>
      </div>
    );
  }
  