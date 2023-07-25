import './style.css';
import React, { useState } from 'react';

function CardST(props) {
  const [isHovered, setHovered] = useState(false);

  const hoverTrue = () => {
    setHovered(true);
  };

  const hoverFalse = () => {
    setHovered(false);
  };

  return (
    <li
      className={`card-st ${isHovered ? 'hovered' : ''}`}
      key={props.id}
      onMouseEnter={hoverTrue}
      onMouseLeave={hoverFalse}
    >
      <img
        className="card-st-logo"
        src={props.picture}
        alt={`Logo ${props.name}`}
        width={50}
        height={50}
      />
      <span className="card-st-name">{props.name}</span>
    </li>
  );
}

export default CardST;
