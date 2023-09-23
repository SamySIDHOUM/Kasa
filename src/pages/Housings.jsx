import React from 'react';
import { useParams } from 'react-router-dom';
import housingData from '../data/logements.json';
import Carrousel from '../components/Carrousel';
import Housing from '../components/Housing';
import Collapse from '../components/Collapse';

export default function Housings() {
  const params = useParams();

  const housing = housingData.find((housing) => housing.id === params.id);

  if (housing === undefined) {
    return ;
  }

  const housingDetails = {
    id: housing.id,
    pictures: housing.pictures,
    title: housing.title,
    location: housing.location,
    tags: housing.tags,
    host: housing.host,
    rating: housing.rating,
    description: housing.description,
    equipments: housing.equipments,
  };

  return (
    <div>
      <div className="container">
        <main>
          <Carrousel pictures={housingDetails.pictures} />
          <Housing
            id={housingDetails.id}
            title={housingDetails.title}
            location={housingDetails.location}
            tags={housingDetails.tags}
            host={housingDetails.host}
            rating={housingDetails.rating}
          />
          <div className="housing__collapse">
            <Collapse title="Description" text={housingDetails.description} />
            <Collapse
              title="Équipements"
              text={housingDetails.equipments.map((equipment, id) => (
                <li key={id}>{equipment}</li>
              ))}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
