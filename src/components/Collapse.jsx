import React, { useState } from 'react';

export default function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapse ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      <div className="header" onClick={toggleCollapse}>
        <h3>{props.title}</h3>
        <div className="arrow">
          <i className={`fa-solid ${isCollapsed ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
        </div>
      </div>
      {!isCollapsed && <div className="content">{props.children}</div>}
    </div>
  );
}

