import React, { useState } from 'react';
import "../styles/_collapse.scss"

export default function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={"collapse " + (isCollapsed ? 'collapsed' : 'expanded')}>
      <div className="custom" onClick={toggleCollapse}>
        <h3>{props.title}</h3>
        <div className="arrow">
          <i className={"fa-solid " + (isCollapsed ? 'fa-chevron-up' : 'fa-chevron-down')}></i>
        </div>
      </div>
      {!isCollapsed && <div className="content">{props.children}</div>}
    </div>
  );
}

