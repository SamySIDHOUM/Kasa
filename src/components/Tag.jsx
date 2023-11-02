import React from 'react';

export default function Tags({ tags }) {
  return (
    <ul className="housing-tags">
      {/* Mapping à travers le tableau de tags pour créer des éléments li avec chaque tag */}
      {tags.map((tag, id) => (
        <li key={id} className="housing-tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}
