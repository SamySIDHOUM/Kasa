import React, { useState } from 'react';
import "../styles/_collapse.scss"

export default function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  let content = "";
  if (Array.isArray(props.text)){
    content =  <ul>
    {props.text.map((equipment, id) => (
      <li key={id}>{equipment}</li>
    ))}
  </ul>
  } else {
    content = props.text;
  }

  return (
    <div className={"collapse " + (isCollapsed ? 'collapsed' : 'expanded')}>
      <div className="custom" onClick={toggleCollapse}>
        <h3>{props.title}</h3>
        <div className="arrow">
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      </div>
      {!isCollapsed && <div className="content">
        <div className="content-text">{content}</div>
      </div>} 
    </div>
  );
}

