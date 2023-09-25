import React from 'react';

export default function Tags({ tags }) {
  return (
    <ul className="housing-tags">
      {tags.map((tag, id) => (
        <li key={id} className="housing-tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}
